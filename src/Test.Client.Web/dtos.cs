/* Options:
Date: 2021-06-25 14:53:45
Version: 5.111
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

GlobalNamespace: Test.Client.Web
//MakePartial: True
//MakeVirtual: True
//MakeInternal: False
//MakeDataContractsExtensible: False
//AddReturnMarker: True
//AddDescriptionAsComments: True
//AddDataContractAttributes: False
//AddIndexesToDataMembers: False
//AddGeneratedCodeAttributes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//InitializeCollections: True
//ExportValueTypes: False
//IncludeTypes: 
//ExcludeTypes: 
//AddNamespaces: 
//AddDefaultXmlNamespace: http://schemas.servicestack.net/types
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;
using System.IO;
using Test.Client.Web;


namespace Test.Client.Web
{

    public partial class Account
    {
        public virtual string? Name { get; set; }
    }

    public partial class ChatMessage
    {
        public virtual long Id { get; set; }
        public virtual string? Channel { get; set; }
        public virtual string? FromUserId { get; set; }
        public virtual string? FromName { get; set; }
        public virtual string? DisplayName { get; set; }
        public virtual string? Message { get; set; }
        public virtual string? UserAuthId { get; set; }
        public virtual bool Private { get; set; }
    }

    [Route("/reset")]
    public partial class ClearChatHistory
        : IReturnVoid
    {
    }

    [Route("/jwt")]
    public partial class CreateJwt
        : AuthUserSession, IReturn<CreateJwtResponse>
    {
        public virtual DateTime? JwtExpiry { get; set; }
    }

    public partial class CreateJwtResponse
    {
        public virtual string? Token { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [Route("/jwt-refresh")]
    public partial class CreateRefreshJwt
        : IReturn<CreateRefreshJwtResponse>
    {
        public virtual string? UserAuthId { get; set; }
        public virtual DateTime? JwtExpiry { get; set; }
    }

    public partial class CreateRefreshJwtResponse
    {
        public virtual string? Token { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [Route("/custom")]
    [Route("/custom/{Data}")]
    public partial class CustomRoute
        : IReturn<CustomRoute>
    {
        public virtual string? Data { get; set; }
    }

    public partial class CustomType
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    public partial class CustomUserSession
        : AuthUserSession
    {
        [DataMember]
        public virtual string? CustomName { get; set; }

        [DataMember]
        public virtual string? CustomInfo { get; set; }
    }

    public partial class DummyTypes
    {
        public DummyTypes()
        {
            HelloResponses = new List<HelloResponse>{};
            ListResult = new List<ListResult>{};
            ArrayResult = new ArrayResult[]{};
        }

        public virtual List<HelloResponse>? HelloResponses { get; set; }
        public virtual List<ListResult>? ListResult { get; set; }
        public virtual ArrayResult[]? ArrayResult { get; set; }
    }

    [Route("/echo/collections")]
    public partial class EchoCollections
        : IReturn<EchoCollections>
    {
        public EchoCollections()
        {
            StringList = new List<string>{};
            StringArray = new string[]{};
            StringMap = new Dictionary<string, string>{};
            IntStringMap = new Dictionary<int, string>{};
        }

        public virtual List<string>? StringList { get; set; }
        public virtual string[]? StringArray { get; set; }
        public virtual Dictionary<string, string>? StringMap { get; set; }
        public virtual Dictionary<int, string>? IntStringMap { get; set; }
    }

    [Route("/echo/complex")]
    public partial class EchoComplexTypes
        : IReturn<EchoComplexTypes>
    {
        public EchoComplexTypes()
        {
            SubTypes = new List<SubType>{};
            SubTypeMap = new Dictionary<string, SubType>{};
            StringMap = new Dictionary<string, string>{};
            IntStringMap = new Dictionary<int, string>{};
        }

        public virtual SubType? SubType { get; set; }
        public virtual List<SubType>? SubTypes { get; set; }
        public virtual Dictionary<string, SubType>? SubTypeMap { get; set; }
        public virtual Dictionary<string, string>? StringMap { get; set; }
        public virtual Dictionary<int, string>? IntStringMap { get; set; }
    }

    [Route("/echo/types")]
    public partial class EchoTypes
        : IReturn<EchoTypes>
    {
        public virtual byte Byte { get; set; }
        public virtual short Short { get; set; }
        public virtual int Int { get; set; }
        public virtual long Long { get; set; }
        public virtual ushort UShort { get; set; }
        public virtual uint UInt { get; set; }
        public virtual ulong ULong { get; set; }
        public virtual float Float { get; set; }
        public virtual double Double { get; set; }
        public virtual decimal Decimal { get; set; }
        public virtual string? String { get; set; }
        public virtual DateTime DateTime { get; set; }
        public virtual TimeSpan TimeSpan { get; set; }
        public virtual DateTimeOffset DateTimeOffset { get; set; }
        public virtual Guid Guid { get; set; }
        public virtual Char Char { get; set; }
    }

    public partial class GetAccount
        : IReturn<Account>
    {
        public virtual string? Account { get; set; }
    }

    [Route("/chathistory")]
    public partial class GetChatHistory
        : IReturn<GetChatHistoryResponse>
    {
        public GetChatHistory()
        {
            Channels = new string[]{};
        }

        public virtual string[]? Channels { get; set; }
        public virtual long? AfterId { get; set; }
        public virtual int? Take { get; set; }
    }

    public partial class GetChatHistoryResponse
    {
        public GetChatHistoryResponse()
        {
            Results = new List<ChatMessage>{};
        }

        public virtual List<ChatMessage>? Results { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class GetProject
        : IReturn<Project>
    {
        public virtual string? Account { get; set; }
        public virtual string? Project { get; set; }
    }

    [Route("/Request1", "GET")]
    public partial class GetRequest1
        : IReturn<List<ReturnedDto>>, IGet
    {
    }

    [Route("/Request2", "GET")]
    public partial class GetRequest2
        : IReturn<List<ReturnedDto>>, IGet
    {
    }

    [Route("/session")]
    public partial class GetSession
        : IReturn<GetSessionResponse>
    {
    }

    public partial class GetSessionResponse
    {
        public virtual CustomUserSession? Result { get; set; }
        public virtual UnAuthInfo? UnAuthInfo { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [Route("/Stuff")]
    [DataContract(Namespace="http://schemas.servicestack.net/types")]
    public partial class GetStuff
        : IReturn<GetStuffResponse>
    {
        [DataMember]
        [ApiMember(DataType="DateTime", Name="Summary Date")]
        public virtual DateTime? SummaryDate { get; set; }

        [DataMember]
        [ApiMember(DataType="DateTime", Name="Summary End Date")]
        public virtual DateTime? SummaryEndDate { get; set; }

        [DataMember]
        [ApiMember(DataType="string", Name="Symbol")]
        public virtual string? Symbol { get; set; }

        [DataMember]
        [ApiMember(DataType="string", Name="Email")]
        public virtual string? Email { get; set; }

        [DataMember]
        [ApiMember(DataType="bool", Name="Is Enabled")]
        public virtual bool? IsEnabled { get; set; }
    }

    [DataContract(Namespace="http://schemas.servicestack.net/types")]
    public partial class GetStuffResponse
    {
        [DataMember]
        public virtual DateTime? SummaryDate { get; set; }

        [DataMember]
        public virtual DateTime? SummaryEndDate { get; set; }

        [DataMember]
        public virtual string? Symbol { get; set; }

        [DataMember]
        public virtual string? Email { get; set; }

        [DataMember]
        public virtual bool? IsEnabled { get; set; }
    }

    [Route("/account")]
    public partial class GetUserDetails
        : IReturn<GetUserDetailsResponse>
    {
    }

    public partial class GetUserDetailsResponse
    {
        public virtual string? Provider { get; set; }
        public virtual string? UserId { get; set; }
        public virtual string? UserName { get; set; }
        public virtual string? FullName { get; set; }
        public virtual string? DisplayName { get; set; }
        public virtual string? FirstName { get; set; }
        public virtual string? LastName { get; set; }
        public virtual string? Company { get; set; }
        public virtual string? Email { get; set; }
        public virtual string? PhoneNumber { get; set; }
        public virtual DateTime? BirthDate { get; set; }
        public virtual string? BirthDateRaw { get; set; }
        public virtual string? Address { get; set; }
        public virtual string? Address2 { get; set; }
        public virtual string? City { get; set; }
        public virtual string? State { get; set; }
        public virtual string? Country { get; set; }
        public virtual string? Culture { get; set; }
        public virtual string? Gender { get; set; }
        public virtual string? Language { get; set; }
        public virtual string? MailAddress { get; set; }
        public virtual string? Nickname { get; set; }
        public virtual string? PostalCode { get; set; }
        public virtual string? TimeZone { get; set; }
    }

    public partial class HelloAuth
        : IReturn<HelloResponse>
    {
        public virtual string? Name { get; set; }
    }

    [Route("/hello-image/{Name}")]
    public partial class HelloImage
        : IReturn<byte[]>
    {
        public virtual string? Name { get; set; }
        public virtual string? Format { get; set; }
        public virtual int? Width { get; set; }
        public virtual int? Height { get; set; }
        public virtual int? FontSize { get; set; }
        public virtual string? FontFamily { get; set; }
        public virtual string? Foreground { get; set; }
        public virtual string? Background { get; set; }
    }

    [Route("/image-bytes")]
    public partial class ImageAsBytes
        : IReturn<byte[]>
    {
        public virtual string? Format { get; set; }
    }

    [Route("/image-custom")]
    public partial class ImageAsCustomResult
        : IReturn<byte[]>
    {
        public virtual string? Format { get; set; }
    }

    [Route("/image-file")]
    public partial class ImageAsFile
        : IReturn<byte[]>
    {
        public virtual string? Format { get; set; }
    }

    [Route("/image-redirect")]
    public partial class ImageAsRedirect
    {
        public virtual string? Format { get; set; }
    }

    [Route("/image-stream")]
    public partial class ImageAsStream
        : IReturn<Stream>
    {
        public virtual string? Format { get; set; }
    }

    [Route("/image-response")]
    public partial class ImageWriteToResponse
        : IReturn<byte[]>
    {
        public virtual string? Format { get; set; }
    }

    [Route("/jwt-invalidate")]
    public partial class InvalidateLastAccessToken
        : IReturn<EmptyResponse>
    {
    }

    [Route("/ping")]
    public partial class Ping
        : IReturn<PingResponse>
    {
    }

    public partial class PingResponse
    {
        public PingResponse()
        {
            Responses = new Dictionary<string, ResponseStatus>{};
        }

        public virtual Dictionary<string, ResponseStatus>? Responses { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class PingService
    {

        public partial class ResetConnections
        {
        }
    }

    [Route("/channels/{Channel}/chat")]
    public partial class PostChatToChannel
        : IReturn<ChatMessage>
    {
        public virtual string? From { get; set; }
        public virtual string? ToUserId { get; set; }
        public virtual string? Channel { get; set; }
        public virtual string? Message { get; set; }
        public virtual string? Selector { get; set; }
    }

    [Route("/channels/{Channel}/object")]
    public partial class PostObjectToChannel
        : IReturnVoid
    {
        public virtual string? ToUserId { get; set; }
        public virtual string? Channel { get; set; }
        public virtual string? Selector { get; set; }
        public virtual CustomType? CustomType { get; set; }
        public virtual SetterType? SetterType { get; set; }
    }

    [Route("/channels/{Channel}/raw")]
    public partial class PostRawToChannel
        : IReturnVoid
    {
        public virtual string? From { get; set; }
        public virtual string? ToUserId { get; set; }
        public virtual string? Channel { get; set; }
        public virtual string? Message { get; set; }
        public virtual string? Selector { get; set; }
    }

    public partial class Project
    {
        public virtual string? Account { get; set; }
        public virtual string? Name { get; set; }
    }

    public partial class QueryItems
        : QueryDb<Item, Poco>, IReturn<QueryResponse<Poco>>
    {
    }

    public partial class RequiresAdmin
        : IReturn<RequiresAdmin>
    {
        public virtual int Id { get; set; }
    }

    [Route("/reset-serverevents")]
    public partial class ResetServerEvents
        : IReturnVoid
    {
    }

    public partial class ReturnedDto
    {
        public virtual int Id { get; set; }
    }

    [Route("/return/html")]
    public partial class ReturnHtml
    {
        public virtual string? Text { get; set; }
    }

    [Route("/return/text")]
    public partial class ReturnText
    {
        public virtual string? Text { get; set; }
    }

    public partial class RootPathRoutes
    {
        public virtual string? Path { get; set; }
    }

    [Route("/secured")]
    [ValidateRequest("IsAuthenticated")]
    public partial class Secured
        : IReturn<SecuredResponse>
    {
        public virtual string? Name { get; set; }
    }

    public partial class SecuredResponse
    {
        public virtual string? Result { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class SendDefault
        : IReturn<SendVerbResponse>
    {
        public virtual int Id { get; set; }
    }

    public partial class SendGet
        : IReturn<SendVerbResponse>, IGet
    {
        public virtual int Id { get; set; }
    }

    public partial class SendPost
        : IReturn<SendVerbResponse>, IPost
    {
        public virtual int Id { get; set; }
    }

    public partial class SendPut
        : IReturn<SendVerbResponse>, IPut
    {
        public virtual int Id { get; set; }
    }

    [Route("/sendrestget/{Id}", "GET")]
    public partial class SendRestGet
        : IReturn<SendVerbResponse>, IGet
    {
        public virtual int Id { get; set; }
    }

    public partial class SendReturnVoid
        : IReturnVoid
    {
        public virtual int Id { get; set; }
    }

    public partial class SendVerbResponse
    {
        public virtual int Id { get; set; }
        public virtual string? PathInfo { get; set; }
        public virtual string? RequestMethod { get; set; }
    }

    public partial class SetterType
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    [Route("/testauth")]
    public partial class TestAuth
        : IReturn<TestAuthResponse>
    {
    }

    public partial class TestAuthResponse
    {
        public virtual string? UserId { get; set; }
        public virtual string? SessionId { get; set; }
        public virtual string? UserName { get; set; }
        public virtual string? DisplayName { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [Route("/testdata/AllCollectionTypes")]
    public partial class TestDataAllCollectionTypes
        : IReturn<AllCollectionTypes>
    {
    }

    [Route("/testdata/AllTypes")]
    public partial class TestDataAllTypes
        : IReturn<AllTypes>
    {
    }

    [Route("/null-response")]
    public partial class TestNullResponse
    {
    }

    [Route("/void-response")]
    public partial class TestVoidResponse
    {
    }

    [Route("/textfile-test")]
    public partial class TextFileTest
    {
        public virtual bool AsAttachment { get; set; }
    }

    public partial class UnAuthInfo
    {
        public virtual string? CustomInfo { get; set; }
    }

    [Route("/session/edit/{CustomName}")]
    public partial class UpdateSession
        : IReturn<GetSessionResponse>
    {
        public virtual string? CustomName { get; set; }
    }

    [Route("/logs")]
    public partial class ViewLogs
        : IReturn<string>
    {
        public virtual bool Clear { get; set; }
    }

    [Route("/wait/{ForMs}")]
    public partial class Wait
        : IReturn<Wait>
    {
        public virtual int ForMs { get; set; }
    }

    ///<summary>
    ///AllowedAttributes Description
    ///</summary>
    [Route("/allowed-attributes", "GET")]
    [Api(Description="AllowedAttributes Description")]
    [ApiResponse(Description="Your request was not understood", StatusCode=400)]
    [DataContract]
    public partial class AllowedAttributes
    {
        ///<summary>
        ///Range Description
        ///</summary>
        [DataMember(Name="Aliased")]
        [ApiMember(DataType="double", Description="Range Description", IsRequired=true, ParameterType="path")]
        public virtual double Range { get; set; }
    }

    public partial class AltQueryItems
        : IReturn<QueryResponseAlt<Item>>
    {
        public virtual string? Name { get; set; }
    }

    public partial class ArrayResult
    {
        public virtual string? Result { get; set; }
    }

    public partial class Channel
    {
        public virtual string? Name { get; set; }
        public virtual string? Value { get; set; }
    }

    public partial class CreateAuditBase<Table, TResponse>
        : ICreateDb<Table>
    {
    }

    public partial class CreateAuditTenantBase<Table, TResponse>
        : CreateAuditBase<Table, TResponse>
    {
    }

    public partial class CreateRockstarAudit
        : RockstarBase, IReturn<RockstarWithIdResponse>, ICreateDb<RockstarAudit>
    {
    }

    public partial class CreateRockstarAuditMqToken
        : RockstarBase, IReturn<RockstarWithIdResponse>, ICreateDb<RockstarAudit>, IHasBearerToken
    {
        public virtual string? BearerToken { get; set; }
    }

    public partial class CreateRockstarAuditTenant
        : CreateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>, IReturn<RockstarWithIdAndResultResponse>, IHasSessionId
    {
        public virtual string? SessionId { get; set; }
        public virtual string? FirstName { get; set; }
        public virtual string? LastName { get; set; }
        public virtual int? Age { get; set; }
        public virtual DateTime DateOfBirth { get; set; }
        public virtual DateTime? DateDied { get; set; }
        public virtual LivingStatus LivingStatus { get; set; }
    }

    public partial class CreateRockstarVersion
        : RockstarBase, IReturn<RockstarWithIdAndRowVersionResponse>, ICreateDb<RockstarVersion>
    {
    }

    public partial class CustomHttpError
        : IReturn<CustomHttpErrorResponse>
    {
        public virtual int StatusCode { get; set; }
        public virtual string? StatusDescription { get; set; }
    }

    public partial class CustomHttpErrorResponse
    {
        public virtual string? Custom { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class DeclarativeChildValidation
    {
        public virtual string? Name { get; set; }
        [Validate("MaximumLength(20)")]
        public virtual string? Value { get; set; }
    }

    public partial class DeclarativeCollectiveValidationTest
        : IReturn<EmptyResponse>
    {
        public DeclarativeCollectiveValidationTest()
        {
            DeclarativeValidations = new List<DeclarativeChildValidation>{};
            FluentValidations = new List<FluentChildValidation>{};
        }

        [Validate("NotEmpty")]
        [Validate("MaximumLength(20)")]
        public virtual string Site { get; set; }

        public virtual List<DeclarativeChildValidation>? DeclarativeValidations { get; set; }
        public virtual List<FluentChildValidation>? FluentValidations { get; set; }
    }

    public partial class DeclarativeSingleValidation
    {
        public virtual string? Name { get; set; }
        [Validate("MaximumLength(20)")]
        public virtual string? Value { get; set; }
    }

    public partial class DeclarativeSingleValidationTest
        : IReturn<EmptyResponse>
    {
        [Validate("NotEmpty")]
        [Validate("MaximumLength(20)")]
        public virtual string Site { get; set; }

        public virtual DeclarativeSingleValidation? DeclarativeSingleValidation { get; set; }
        public virtual FluentSingleValidation? FluentSingleValidation { get; set; }
    }

    public partial class Device
    {
        public Device()
        {
            Channels = new List<Channel>{};
        }

        public virtual long Id { get; set; }
        public virtual string? Type { get; set; }
        public virtual long TimeStamp { get; set; }
        public virtual List<Channel>? Channels { get; set; }
    }

    public partial class EmptyClass
    {
    }

    public enum EnumAsInt
    {
        Value1 = 1000,
        Value2 = 2000,
        Value3 = 3000,
    }

    [Flags]
    public enum EnumFlags
    {
        [EnumMember(Value="Value0")]
        Value0 = 0,
        [EnumMember(Value="Value 1")]
        Value1 = 1,
        [EnumMember(Value="Value2")]
        Value2 = 2,
        [EnumMember(Value="Value3")]
        Value3 = 4,
        [EnumMember(Value="Value123")]
        Value123 = 7,
    }

    public partial class EnumRequest
        : IReturn<EnumResponse>, IPut
    {
        public virtual ScopeType Operator { get; set; }
    }

    public partial class EnumResponse
    {
        public virtual ScopeType Operator { get; set; }
    }

    public enum EnumStyle
    {
        lower,
        UPPER,
        PascalCase,
        camelCase,
        camelUPPER,
        PascalUPPER,
    }

    public enum EnumStyleMembers
    {
        [EnumMember(Value="lower")]
        Lower,
        [EnumMember(Value="UPPER")]
        Upper,
        [EnumMember(Value="PascalCase")]
        PascalCase,
        [EnumMember(Value="camelCase")]
        CamelCase,
        [EnumMember(Value="camelUPPER")]
        CamelUpper,
        [EnumMember(Value="PascalUPPER")]
        PascalUpper,
    }

    public enum EnumType
    {
        Value1,
        Value2,
        Value3,
    }

    [Flags]
    public enum EnumTypeFlags
    {
        Value1 = 0,
        Value2 = 1,
        Value3 = 2,
    }

    public enum EnumWithValues
    {
        [EnumMember(Value="None")]
        None,
        [EnumMember(Value="Member 1")]
        Value1,
        [EnumMember(Value="Value2")]
        Value2,
    }

    public partial class FluentChildValidation
    {
        public virtual string? Name { get; set; }
        public virtual string? Value { get; set; }
    }

    public partial class FluentSingleValidation
    {
        public virtual string? Name { get; set; }
        public virtual string? Value { get; set; }
    }

    [Route("/example", "GET")]
    [DataContract]
    public partial class GetExample
        : IReturn<GetExampleResponse>
    {
    }

    [DataContract]
    public partial class GetExampleResponse
    {
        [DataMember(Order=1)]
        public virtual ResponseStatus? ResponseStatus { get; set; }

        [DataMember(Order=2)]
        [ApiMember]
        public virtual MenuExample? MenuExample1 { get; set; }
    }

    public partial class GetItems
        : IReturn<Items>
    {
    }

    public partial class GetNakedItems
        : IReturn<List<Item>>
    {
    }

    [Route("/randomids")]
    public partial class GetRandomIds
        : IReturn<GetRandomIdsResponse>
    {
        public virtual int? Take { get; set; }
    }

    public partial class GetRandomIdsResponse
    {
        public GetRandomIdsResponse()
        {
            Results = new List<string>{};
        }

        public virtual List<string>? Results { get; set; }
    }

    [Route("/hello")]
    [Route("/hello/{Name}")]
    public partial class Hello
        : IReturn<HelloResponse>
    {
        [Required]
        public virtual string Name { get; set; }

        public virtual string? Title { get; set; }
    }

    [Route("/all-types")]
    public partial class HelloAllTypes
        : IReturn<HelloAllTypesResponse>
    {
        public virtual string? Name { get; set; }
        public virtual AllTypes? AllTypes { get; set; }
        public virtual AllCollectionTypes? AllCollectionTypes { get; set; }
    }

    public partial class HelloAllTypesResponse
    {
        public virtual string? Result { get; set; }
        public virtual AllTypes? AllTypes { get; set; }
        public virtual AllCollectionTypes? AllCollectionTypes { get; set; }
    }

    ///<summary>
    ///Description on HelloAll type
    ///</summary>
    [DataContract]
    public partial class HelloAnnotated
        : IReturn<HelloAnnotatedResponse>
    {
        [DataMember]
        public virtual string? Name { get; set; }
    }

    ///<summary>
    ///Description on HelloAllResponse type
    ///</summary>
    [DataContract]
    public partial class HelloAnnotatedResponse
    {
        [DataMember]
        public virtual string? Result { get; set; }
    }

    public partial class HelloArray
        : IReturn<ArrayResult[]>
    {
        public HelloArray()
        {
            Names = new List<string>{};
        }

        public virtual List<string>? Names { get; set; }
    }

    public partial class HelloBase<T>
    {
        public HelloBase()
        {
            Items = new List<T>{};
            Counts = new List<int>{};
        }

        public virtual List<T>? Items { get; set; }
        public virtual List<int>? Counts { get; set; }
    }

    public partial class HelloBuiltin
    {
        public virtual DayOfWeek DayOfWeek { get; set; }
    }

    public partial class HelloDateTime
        : IReturn<HelloDateTime>
    {
        public virtual DateTime DateTime { get; set; }
    }

    public partial class HelloDelete
        : IReturn<HelloVerbResponse>, IDelete
    {
        public virtual int Id { get; set; }
    }

    public partial class HelloGet
        : IReturn<HelloVerbResponse>, IGet
    {
        public virtual int Id { get; set; }
    }

    public partial class HelloInnerTypes
        : IReturn<HelloInnerTypesResponse>
    {
    }

    public partial class HelloInnerTypesResponse
    {
        public virtual TypesGroup.InnerType? InnerType { get; set; }
        public virtual TypesGroup.InnerEnum InnerEnum { get; set; }
    }

    public partial class HelloInterface
    {
        public virtual IPoco? Poco { get; set; }
        public virtual IEmptyInterface? EmptyInterface { get; set; }
        public virtual EmptyClass? EmptyClass { get; set; }
    }

    public partial class HelloList
        : IReturn<List<ListResult>>
    {
        public HelloList()
        {
            Names = new List<string>{};
        }

        public virtual List<string>? Names { get; set; }
    }

    public partial class HelloPatch
        : IReturn<HelloVerbResponse>, IPatch
    {
        public virtual int Id { get; set; }
    }

    public partial class HelloPost
        : HelloBase, IReturn<HelloVerbResponse>, IPost
    {
    }

    public partial class HelloPut
        : IReturn<HelloVerbResponse>, IPut
    {
        public virtual int Id { get; set; }
    }

    public partial class HelloResponse
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloReturnVoid
        : IReturnVoid
    {
        public virtual int Id { get; set; }
    }

    public partial class HelloString
        : IReturn<string>
    {
        public virtual string? Name { get; set; }
    }

    [Route("/hellotypes/{Name}")]
    public partial class HelloTypes
        : IReturn<HelloTypes>
    {
        public virtual string? String { get; set; }
        public virtual bool Bool { get; set; }
        public virtual int Int { get; set; }
    }

    public partial class HelloVerbResponse
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloVoid
    {
        public virtual string? Name { get; set; }
    }

    public partial class HelloWithAlternateReturnResponse
        : HelloWithReturnResponse
    {
        public virtual string? AltResult { get; set; }
    }

    [DataContract]
    public partial class HelloWithDataContract
        : IReturn<HelloWithDataContractResponse>
    {
        [DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)]
        public virtual string? Name { get; set; }

        [DataMember(Name="id", Order=2, EmitDefaultValue=false)]
        public virtual int Id { get; set; }
    }

    [DataContract]
    public partial class HelloWithDataContractResponse
    {
        [DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)]
        public virtual string? Result { get; set; }
    }

    ///<summary>
    ///Description on HelloWithDescription type
    ///</summary>
    public partial class HelloWithDescription
        : IReturn<HelloWithDescriptionResponse>
    {
        public virtual string? Name { get; set; }
    }

    ///<summary>
    ///Description on HelloWithDescriptionResponse type
    ///</summary>
    public partial class HelloWithDescriptionResponse
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloWithEnum
    {
        public virtual EnumType EnumProp { get; set; }
        public virtual EnumTypeFlags EnumTypeFlags { get; set; }
        public virtual EnumWithValues EnumWithValues { get; set; }
        public virtual EnumType? NullableEnumProp { get; set; }
        public virtual EnumFlags EnumFlags { get; set; }
        public virtual EnumAsInt EnumAsInt { get; set; }
        public virtual EnumStyle EnumStyle { get; set; }
        public virtual EnumStyleMembers EnumStyleMembers { get; set; }
    }

    public partial class HelloWithEnumList
    {
        public HelloWithEnumList()
        {
            EnumProp = new List<EnumType>{};
            EnumWithValues = new List<EnumWithValues>{};
            NullableEnumProp = new List<Nullable<EnumType>>{};
            EnumFlags = new List<EnumFlags>{};
            EnumStyle = new List<EnumStyle>{};
        }

        public virtual List<EnumType>? EnumProp { get; set; }
        public virtual List<EnumWithValues>? EnumWithValues { get; set; }
        public virtual List<Nullable<EnumType>>? NullableEnumProp { get; set; }
        public virtual List<EnumFlags>? EnumFlags { get; set; }
        public virtual List<EnumStyle>? EnumStyle { get; set; }
    }

    public partial class HelloWithEnumMap
    {
        public HelloWithEnumMap()
        {
            EnumProp = new Dictionary<EnumType, EnumType>{};
            EnumWithValues = new Dictionary<EnumWithValues, EnumWithValues>{};
            NullableEnumProp = new Dictionary<Nullable<EnumType>, Nullable<EnumType>>{};
            EnumFlags = new Dictionary<EnumFlags, EnumFlags>{};
            EnumStyle = new Dictionary<EnumStyle, EnumStyle>{};
        }

        public virtual Dictionary<EnumType, EnumType>? EnumProp { get; set; }
        public virtual Dictionary<EnumWithValues, EnumWithValues>? EnumWithValues { get; set; }
        public virtual Dictionary<Nullable<EnumType>, Nullable<EnumType>>? NullableEnumProp { get; set; }
        public virtual Dictionary<EnumFlags, EnumFlags>? EnumFlags { get; set; }
        public virtual Dictionary<EnumStyle, EnumStyle>? EnumStyle { get; set; }
    }

    public partial class HelloWithGenericInheritance
        : HelloBase<Poco>
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloWithGenericInheritance2
        : HelloBase<Hello>
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloWithInheritance
        : HelloBase, IReturn<HelloWithInheritanceResponse>
    {
        public virtual string? Name { get; set; }
    }

    public partial class HelloWithInheritanceResponse
        : HelloResponseBase
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloWithNestedClass
        : IReturn<HelloResponse>
    {
        public virtual string? Name { get; set; }
        public virtual HelloWithNestedClass.NestedClass? NestedClassProp { get; set; }

        public partial class NestedClass
        {
            public virtual string? Value { get; set; }
        }
    }

    public partial class HelloWithReturn
        : IReturn<HelloWithAlternateReturnResponse>
    {
        public virtual string? Name { get; set; }
    }

    [Route("/helloroute")]
    public partial class HelloWithRoute
        : IReturn<HelloWithRouteResponse>
    {
        public virtual string? Name { get; set; }
    }

    public partial class HelloWithRouteResponse
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloWithType
        : IReturn<HelloWithTypeResponse>
    {
        public virtual string? Name { get; set; }
    }

    public partial class HelloWithTypeResponse
    {
        public virtual HelloType? Result { get; set; }
    }

    [Route("/hellozip")]
    [DataContract]
    public partial class HelloZip
        : IReturn<HelloZipResponse>
    {
        public HelloZip()
        {
            Test = new List<string>{};
        }

        [DataMember]
        public virtual string? Name { get; set; }

        [DataMember]
        public virtual List<string>? Test { get; set; }
    }

    [DataContract]
    public partial class HelloZipResponse
    {
        [DataMember]
        public virtual string? Result { get; set; }
    }

    public partial interface IEmptyInterface
    {
    }

    public partial interface IPoco
    {
        string? Name { get; set; }
    }

    public partial class Item
    {
        public virtual string? Name { get; set; }
        public virtual string? Description { get; set; }
    }

    public partial class Items
    {
        public Items()
        {
            Results = new List<Item>{};
        }

        public virtual List<Item>? Results { get; set; }
    }

    public partial class ListResult
    {
        public virtual string? Result { get; set; }
    }

    public enum LivingStatus
    {
        Alive,
        Dead,
    }

    public partial class Logger
    {
        public Logger()
        {
            Devices = new List<Device>{};
        }

        public virtual long Id { get; set; }
        public virtual List<Device>? Devices { get; set; }
    }

    [DataContract]
    public partial class MenuExample
    {
        [DataMember(Order=1)]
        [ApiMember]
        public virtual MenuItemExample? MenuItemExample1 { get; set; }
    }

    public partial class MenuItemExample
    {
        [DataMember(Order=1)]
        [ApiMember]
        public virtual string? Name1 { get; set; }

        public virtual MenuItemExampleItem? MenuItemExampleItem { get; set; }
    }

    public partial class MenuItemExampleItem
    {
        [DataMember(Order=1)]
        [ApiMember]
        public virtual string? Name1 { get; set; }
    }

    [Route("/messages/{Id}", "PUT")]
    public partial class Message
        : IReturn<Message>
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    [Route("/messages/crud/{Id}", "PUT")]
    public partial class MessageCrud
        : IReturnVoid, ISaveDb<MessageCrud>
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    [Route("/message/query/{Id}", "GET")]
    public partial class MessageQuery
        : QueryDb<MessageQuery>, IReturn<QueryResponse<MessageQuery>>
    {
        public virtual int Id { get; set; }
    }

    [Route("/metadatatest")]
    public partial class MetadataTest
        : IReturn<MetadataTestResponse>
    {
        public virtual int Id { get; set; }
    }

    [Route("/metadatatest-array")]
    public partial class MetadataTestArray
        : IReturn<MetadataTestChild[]>
    {
        public virtual int Id { get; set; }
    }

    public partial class MetadataTestChild
    {
        public MetadataTestChild()
        {
            Results = new List<MetadataTestNestedChild>{};
        }

        public virtual string? Name { get; set; }
        public virtual List<MetadataTestNestedChild>? Results { get; set; }
    }

    public partial class MetadataTestNestedChild
    {
        public virtual string? Name { get; set; }
    }

    public partial class MetadataTestResponse
    {
        public MetadataTestResponse()
        {
            Results = new List<MetadataTestChild>{};
        }

        public virtual int Id { get; set; }
        public virtual List<MetadataTestChild>? Results { get; set; }
    }

    public partial class OnlyDefinedInGenericType
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    public partial class OnlyDefinedInGenericTypeFrom
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    public partial class OnlyDefinedInGenericTypeInto
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    public partial class PatchAuditBase<Table, TResponse>
        : IPatchDb<Table>
    {
    }

    public partial class PatchAuditTenantBase<Table, TResponse>
        : PatchAuditBase<Table, TResponse>
    {
    }

    public partial class PatchRockstarAuditTenant
        : PatchAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>, IReturn<RockstarWithIdAndResultResponse>, IHasSessionId
    {
        public virtual string? SessionId { get; set; }
        public virtual int Id { get; set; }
        public virtual string? FirstName { get; set; }
        public virtual LivingStatus? LivingStatus { get; set; }
    }

    public partial class QueryDbTenant<From, Into>
        : QueryDb<From, Into>
    {
    }

    public partial class QueryPocoBase
        : QueryDb<OnlyDefinedInGenericType>, IReturn<QueryResponse<OnlyDefinedInGenericType>>
    {
        public virtual int Id { get; set; }
    }

    public partial class QueryPocoIntoBase
        : QueryDb<OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto>, IReturn<QueryResponse<OnlyDefinedInGenericTypeInto>>
    {
        public virtual int Id { get; set; }
    }

    public partial class QueryResponseAlt<T>
        : IMeta
    {
        public QueryResponseAlt()
        {
            Results = new List<T>{};
            Meta = new Dictionary<string, string>{};
        }

        public virtual int Offset { get; set; }
        public virtual int Total { get; set; }
        public virtual List<T>? Results { get; set; }
        public virtual Dictionary<string, string>? Meta { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class QueryRockstarAudit
        : QueryDbTenant<RockstarAuditTenant, RockstarAuto>, IReturn<QueryResponse<RockstarAuto>>
    {
        public virtual int? Id { get; set; }
    }

    public partial class QueryRockstarAuditSubOr
        : QueryDb<RockstarAuditTenant, RockstarAuto>, IReturn<QueryResponse<RockstarAuto>>
    {
        public virtual string? FirstNameStartsWith { get; set; }
        public virtual int? AgeOlderThan { get; set; }
    }

    [Route("/rockstars", "GET")]
    public partial class QueryRockstars
        : QueryDb<Rockstar>, IReturn<QueryResponse<Rockstar>>
    {
    }

    public partial class RealDeleteAuditTenant
        : IReturn<RockstarWithIdAndCountResponse>, IDeleteDb<RockstarAuditTenant>, IHasSessionId
    {
        public virtual string? SessionId { get; set; }
        public virtual int Id { get; set; }
        public virtual int? Age { get; set; }
    }

    [Route("/messages/{Id}", "GET")]
    public partial class RequestMessage
        : IReturn<Message>
    {
        public virtual int Id { get; set; }
    }

    [Route("/requires-role")]
    public partial class RequiresRole
        : IReturn<RequiresRoleResponse>
    {
    }

    public partial class RequiresRoleResponse
    {
        public virtual string? Result { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class RestrictedAttributes
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
        public virtual Hello? Hello { get; set; }
    }

    [Route("/return/bytes")]
    public partial class ReturnBytes
        : IReturn<byte[]>
    {
        public ReturnBytes()
        {
            Data = new byte[]{};
        }

        public virtual byte[]? Data { get; set; }
    }

    [Route("/return/stream")]
    public partial class ReturnStream
        : IReturn<Stream>
    {
        public ReturnStream()
        {
            Data = new byte[]{};
        }

        public virtual byte[]? Data { get; set; }
    }

    [Route("/return/string")]
    public partial class ReturnString
        : IReturn<string>
    {
        public virtual string? Data { get; set; }
    }

    public partial class Rockstar
    {
        public virtual int Id { get; set; }
        public virtual string? FirstName { get; set; }
        public virtual string? LastName { get; set; }
        public virtual int? Age { get; set; }
    }

    public partial class RockstarAudit
        : RockstarBase
    {
        public virtual int Id { get; set; }
        public virtual DateTime CreatedDate { get; set; }
        public virtual string? CreatedBy { get; set; }
        public virtual string? CreatedInfo { get; set; }
        public virtual DateTime ModifiedDate { get; set; }
        public virtual string? ModifiedBy { get; set; }
        public virtual string? ModifiedInfo { get; set; }
    }

    public partial class RockstarAuditTenant
        : AuditBase
    {
        public virtual int TenantId { get; set; }
        public virtual int Id { get; set; }
        public virtual string? FirstName { get; set; }
        public virtual string? LastName { get; set; }
        public virtual int? Age { get; set; }
        public virtual DateTime DateOfBirth { get; set; }
        public virtual DateTime? DateDied { get; set; }
        public virtual LivingStatus LivingStatus { get; set; }
    }

    public partial class RockstarAuto
        : RockstarBase
    {
        public virtual int Id { get; set; }
    }

    public partial class RockstarBase
    {
        public virtual string? FirstName { get; set; }
        public virtual string? LastName { get; set; }
        public virtual int? Age { get; set; }
        public virtual DateTime DateOfBirth { get; set; }
        public virtual DateTime? DateDied { get; set; }
        public virtual LivingStatus LivingStatus { get; set; }
    }

    public partial class RockstarVersion
        : RockstarBase
    {
        public virtual int Id { get; set; }
        public virtual ulong RowVersion { get; set; }
    }

    public partial class RockstarWithIdAndCountResponse
    {
        public virtual int Id { get; set; }
        public virtual int Count { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class RockstarWithIdAndResultResponse
    {
        public virtual int Id { get; set; }
        public virtual RockstarAuto? Result { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class RockstarWithIdAndRowVersionResponse
    {
        public virtual int Id { get; set; }
        public virtual uint RowVersion { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class RockstarWithIdResponse
    {
        public virtual int Id { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [DataContract]
    public enum ScopeType
    {
        Global = 1,
        Sale = 2,
    }

    [Route("/sendjson")]
    public partial class SendJson
        : IReturn<string>
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }

    [Route("/sendraw")]
    public partial class SendRaw
        : IReturn<byte[]>
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
        public virtual string? ContentType { get; set; }
    }

    [Route("/sendtext")]
    public partial class SendText
        : IReturn<string>
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
        public virtual string? ContentType { get; set; }
    }

    public partial class SoftDeleteAuditBase<Table, TResponse>
        : IUpdateDb<Table>
    {
    }

    public partial class SoftDeleteAuditTenant
        : SoftDeleteAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>, IReturn<RockstarWithIdAndResultResponse>
    {
        public virtual int Id { get; set; }
    }

    public partial class SoftDeleteAuditTenantBase<Table, TResponse>
        : SoftDeleteAuditBase<Table, TResponse>
    {
    }

    public partial class StoreLogs
        : IReturn<StoreLogsResponse>
    {
        public StoreLogs()
        {
            Loggers = new List<Logger>{};
        }

        public virtual List<Logger>? Loggers { get; set; }
    }

    public partial class StoreLogsResponse
    {
        public StoreLogsResponse()
        {
            ExistingLogs = new List<Logger>{};
        }

        public virtual List<Logger>? ExistingLogs { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [Route("/rockstars", "POST")]
    public partial class StoreRockstars
        : List<Rockstar>, IReturn<StoreRockstars>
    {
    }

    [Route("/throw404")]
    [Route("/throw404/{Message}")]
    public partial class Throw404
    {
        public virtual string? Message { get; set; }
    }

    [Route("/throwbusinesserror")]
    public partial class ThrowBusinessError
        : IReturn<ThrowBusinessErrorResponse>
    {
    }

    public partial class ThrowBusinessErrorResponse
    {
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [Route("/throwcustom400")]
    [Route("/throwcustom400/{Message}")]
    public partial class ThrowCustom400
    {
        public virtual string? Message { get; set; }
    }

    [Route("/throwhttperror/{Status}")]
    public partial class ThrowHttpError
    {
        public virtual int? Status { get; set; }
        public virtual string? Message { get; set; }
    }

    [Route("/throw/{Type}")]
    public partial class ThrowType
        : IReturn<ThrowTypeResponse>
    {
        public virtual string? Type { get; set; }
        public virtual string? Message { get; set; }
    }

    public partial class ThrowTypeResponse
    {
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    [Route("/throwvalidation")]
    public partial class ThrowValidation
        : IReturn<ThrowValidationResponse>
    {
        public virtual int Age { get; set; }
        public virtual string? Required { get; set; }
        public virtual string? Email { get; set; }
    }

    public partial class ThrowValidationResponse
    {
        public virtual int Age { get; set; }
        public virtual string? Required { get; set; }
        public virtual string? Email { get; set; }
        public virtual ResponseStatus? ResponseStatus { get; set; }
    }

    public partial class TypesGroup
    {

        public partial class InnerType
        {
            public virtual long Id { get; set; }
            public virtual string? Name { get; set; }
        }

        public enum InnerEnum
        {
            Foo,
            Bar,
            Baz,
        }
    }

    public partial class UpdateAuditBase<Table, TResponse>
        : IUpdateDb<Table>
    {
    }

    public partial class UpdateAuditTenantBase<Table, TResponse>
        : UpdateAuditBase<Table, TResponse>
    {
    }

    public partial class UpdateRockstarAuditTenant
        : UpdateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>, IReturn<RockstarWithIdAndResultResponse>, IHasSessionId
    {
        public virtual string? SessionId { get; set; }
        public virtual int Id { get; set; }
        public virtual string? FirstName { get; set; }
        public virtual LivingStatus? LivingStatus { get; set; }
    }

    public partial class AllCollectionTypes
        : IReturn<AllCollectionTypes>
    {
        public AllCollectionTypes()
        {
            IntArray = new int[]{};
            IntList = new List<int>{};
            StringArray = new string[]{};
            StringList = new List<string>{};
            FloatArray = new float[]{};
            DoubleList = new List<double>{};
            ByteArray = new byte[]{};
            CharArray = new Char[]{};
            DecimalList = new List<decimal>{};
            PocoArray = new Poco[]{};
            PocoList = new List<Poco>{};
            PocoLookup = new Dictionary<string, List<Poco>>{};
            PocoLookupMap = new Dictionary<string, List<Dictionary<String,Poco>>>{};
        }

        public virtual int[]? IntArray { get; set; }
        public virtual List<int>? IntList { get; set; }
        public virtual string[]? StringArray { get; set; }
        public virtual List<string>? StringList { get; set; }
        public virtual float[]? FloatArray { get; set; }
        public virtual List<double>? DoubleList { get; set; }
        public virtual byte[]? ByteArray { get; set; }
        public virtual Char[]? CharArray { get; set; }
        public virtual List<decimal>? DecimalList { get; set; }
        public virtual Poco[]? PocoArray { get; set; }
        public virtual List<Poco>? PocoList { get; set; }
        public virtual Dictionary<string, List<Poco>>? PocoLookup { get; set; }
        public virtual Dictionary<string, List<Dictionary<String,Poco>>>? PocoLookupMap { get; set; }
    }

    public partial class AllTypes
        : IReturn<AllTypes>
    {
        public AllTypes()
        {
            StringList = new List<string>{};
            StringArray = new string[]{};
            StringMap = new Dictionary<string, string>{};
            IntStringMap = new Dictionary<int, string>{};
        }

        public virtual int Id { get; set; }
        public virtual int? NullableId { get; set; }
        public virtual byte Byte { get; set; }
        public virtual short Short { get; set; }
        public virtual int Int { get; set; }
        public virtual long Long { get; set; }
        public virtual ushort UShort { get; set; }
        public virtual uint UInt { get; set; }
        public virtual ulong ULong { get; set; }
        public virtual float Float { get; set; }
        public virtual double Double { get; set; }
        public virtual decimal Decimal { get; set; }
        public virtual string? String { get; set; }
        public virtual DateTime DateTime { get; set; }
        public virtual TimeSpan TimeSpan { get; set; }
        public virtual DateTimeOffset DateTimeOffset { get; set; }
        public virtual Guid Guid { get; set; }
        public virtual Char Char { get; set; }
        public virtual KeyValuePair<string, string> KeyValuePair { get; set; }
        public virtual DateTime? NullableDateTime { get; set; }
        public virtual TimeSpan? NullableTimeSpan { get; set; }
        public virtual List<string>? StringList { get; set; }
        public virtual string[]? StringArray { get; set; }
        public virtual Dictionary<string, string>? StringMap { get; set; }
        public virtual Dictionary<int, string>? IntStringMap { get; set; }
        public virtual SubType? SubType { get; set; }
    }

    public partial class AllTypesBase
    {
        public AllTypesBase()
        {
            StringList = new List<string>{};
            StringArray = new string[]{};
            StringMap = new Dictionary<string, string>{};
            IntStringMap = new Dictionary<int, string>{};
        }

        public virtual int Id { get; set; }
        public virtual int? NullableId { get; set; }
        public virtual byte Byte { get; set; }
        public virtual short Short { get; set; }
        public virtual int Int { get; set; }
        public virtual long Long { get; set; }
        public virtual ushort UShort { get; set; }
        public virtual uint UInt { get; set; }
        public virtual ulong ULong { get; set; }
        public virtual float Float { get; set; }
        public virtual double Double { get; set; }
        public virtual decimal Decimal { get; set; }
        public virtual string? String { get; set; }
        public virtual DateTime DateTime { get; set; }
        public virtual TimeSpan TimeSpan { get; set; }
        public virtual DateTimeOffset DateTimeOffset { get; set; }
        public virtual Guid Guid { get; set; }
        public virtual Char Char { get; set; }
        public virtual KeyValuePair<string, string> KeyValuePair { get; set; }
        public virtual DateTime? NullableDateTime { get; set; }
        public virtual TimeSpan? NullableTimeSpan { get; set; }
        public virtual List<string>? StringList { get; set; }
        public virtual string[]? StringArray { get; set; }
        public virtual Dictionary<string, string>? StringMap { get; set; }
        public virtual Dictionary<int, string>? IntStringMap { get; set; }
        public virtual SubType? SubType { get; set; }
    }

    public partial class HelloBase
    {
        public virtual int Id { get; set; }
    }

    public partial class HelloResponseBase
    {
        public virtual int RefId { get; set; }
    }

    public partial class HelloSubAllTypes
        : AllTypesBase, IReturn<SubAllTypes>
    {
        public virtual int Hierarchy { get; set; }
    }

    public partial class HelloType
    {
        public virtual string? Result { get; set; }
    }

    public partial class HelloWithReturnResponse
    {
        public virtual string? Result { get; set; }
    }

    public partial class Poco
    {
        public virtual string? Name { get; set; }
    }

    public partial class SubAllTypes
        : AllTypesBase
    {
        public virtual int Hierarchy { get; set; }
    }

    public partial class SubType
    {
        public virtual int Id { get; set; }
        public virtual string? Name { get; set; }
    }
}

