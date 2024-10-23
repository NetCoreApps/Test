using System.Collections.Generic;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface;

/// <summary>
/// Dart 1.x (i.e. non-strong mode) needs an explicit concrete List TypeInfo defined
/// </summary>
public class DummyTypes
{
    public List<HelloResponse> HelloResponses { get; set; }
    public List<ListResult> ListResult { get; set; }
    public ArrayResult[] ArrayResult { get; set; }
    public CancelRequest CancelRequest { get; set; }
    public CancelRequestResponse CancelRequestResponse { get; set; }
    public UpdateEventSubscriber UpdateEventSubscriber { get; set; }
    public UpdateEventSubscriberResponse UpdateEventSubscriberResponse { get; set; }
    public GetApiKeys GetApiKeys { get; set; }
    public GetApiKeysResponse GetApiKeysResponse { get; set; }
    public RegenerateApiKeys RegenerateApiKeys { get; set; }
    public RegenerateApiKeysResponse RegenerateApiKeysResponse { get; set; }
    public UserApiKey UserApiKey { get; set; }
    public ConvertSessionToToken ConvertSessionToToken { get; set; }
    public ConvertSessionToTokenResponse ConvertSessionToTokenResponse { get; set; }
    public GetAccessToken GetAccessToken { get; set; }
    public GetAccessTokenResponse GetAccessTokenResponse { get; set; }
    public NavItem NavItem { get; set; }
    public GetNavItems GetNavItems { get; set; }
    public GetNavItemsResponse GetNavItemsResponse { get; set; }
    public EmptyResponse EmptyResponse { get; set; }
    public IdResponse IdResponse { get; set; }
    public StringResponse StringResponse { get; set; }
    public StringsResponse StringsResponse { get; set; }
    public AuditBase AuditBase { get; set; }
}

public class DummyTypesService : Service
{
    public object Any(DummyTypes request) => request;
}