using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;

namespace Test.ServiceModel;

[Route("/metadatatest")]
public class MetadataTest : IReturn<MetadataTestResponse>
{
    public int Id { get; set; }
}

public class MetadataTestResponse
{
    public int Id { get; set; }
    public List<MetadataTestChild> Results { get; set; }
}

public class MetadataTestChild
{
    public string Name { get; set; }

    public List<MetadataTestNestedChild> Results { get; set; }
}

public class MetadataTestNestedChild
{
    public string Name { get; set; }
}

[Route("/metadatatest-array")]
public class MetadataTestArray : IReturn<MetadataTestChild[]>
{
    public int Id { get; set; }
}


[Route("/example", "GET", Summary = @"")]
[DataContract]
public class GetExample : IReturn<GetExampleResponse>
{
}

[DataContract]
public class GetExampleResponse : IHasResponseStatus
{
    [DataMember(Order = 1, IsRequired = false)]
    public ResponseStatus ResponseStatus { get; set; }

    [ApiMember]
    [DataMember(Order = 2, IsRequired = false)]
    public MenuExample MenuExample1 { get; set; }
}

[DataContract]
public class MenuExample
{
    [ApiMember]
    [DataMember(Order = 1, IsRequired = false)]
    public MenuItemExample MenuItemExample1 { get; set; }
}

//[DataContract]
public class MenuItemExample
{
    [ApiMember]
    [DataMember(Order = 1, IsRequired = false)]
    public string Name1 { get; set; }

    public MenuItemExampleItem MenuItemExampleItem { get; set; }
}

public class MenuItemExampleItem
{
    [ApiMember]
    [DataMember(Order = 1, IsRequired = false)]
    public string Name1 { get; set; }
}

[Route("/messages/{Id}", "GET")]
public class RequestMessage : IReturn<Message>
{
    public int Id { get; set; }
}

[Route("/messages/{Id}", "PUT")]
public class Message : IReturn<Message>
{
    public int Id { get; set; }
    public string Name { get; set; }
}

[Route("/messages/crud/{Id}", "PUT")]
public class MessageCrud : ISaveDb<MessageCrud>, IReturnVoid
{
    public int Id { get; set; }
    public string Name { get; set; }
}
    
[Route("/message/query/{Id}", verbs: "GET")]
public class MessageQuery : QueryDb<MessageQuery>
{
    public int Id { get; set; }
}