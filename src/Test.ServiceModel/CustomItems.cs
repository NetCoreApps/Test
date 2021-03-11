using System.Collections.Generic;
using ServiceStack;

namespace Test.ServiceModel
{
    public class Items
    {
        public List<Item> Results { get; set; }
    }
    public class Item
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class GetItems : IReturn<Items> { }
    public class GetNakedItems : IReturn<List<Item>> { }

    public class AltQueryItems : IReturn<QueryResponseAlt<Item>>
    {
        public string Name { get; set; }
    }
    
    public class QueryResponseAlt<T> : IHasResponseStatus, IMeta
    {
        public virtual int Offset { get; set; }
        public virtual int Total { get; set; }
        public virtual List<T> Results { get; set; }
        public virtual Dictionary<string, string> Meta { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }
    
}