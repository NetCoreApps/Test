/* Options:
Date: 2018-05-19 15:52:52
Version: 5.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:56500

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse() : T;
}

export interface IReturnVoid
{
    createResponse() : void;
}

export interface IHasSessionId
{
    sessionId?: string;
}

export interface IGet
{
}

export interface IPost
{
}

export interface IPut
{
}

export interface IDelete
{
}

export interface IPatch
{
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    errorCode: string;

    // @DataMember(Order=2)
    message: string;

    // @DataMember(Order=3)
    stackTrace: string;

    // @DataMember(Order=4)
    errors: ResponseError[];

    // @DataMember(Order=5)
    meta: { [index:string]: string; };
}

export type ExternalEnum = "Foo" | "Bar" | "Baz";

export type ExternalEnum2 = "Uno" | "Due" | "Tre";

export class ExternalType
{
    externalEnum2: ExternalEnum2;
}

export type ExternalEnum3 = "Un" | "Deux" | "Trois";

export interface IAuthTokens
{
    provider?: string;
    userId?: string;
    accessToken?: string;
    accessTokenSecret?: string;
    refreshToken?: string;
    refreshTokenExpiry?: string;
    requestToken?: string;
    requestTokenSecret?: string;
    items?: { [index:string]: string; };
}

// @DataContract
export class AuthUserSession
{
    // @DataMember(Order=1)
    referrerUrl: string;

    // @DataMember(Order=2)
    id: string;

    // @DataMember(Order=3)
    userAuthId: string;

    // @DataMember(Order=4)
    userAuthName: string;

    // @DataMember(Order=5)
    userName: string;

    // @DataMember(Order=6)
    twitterUserId: string;

    // @DataMember(Order=7)
    twitterScreenName: string;

    // @DataMember(Order=8)
    facebookUserId: string;

    // @DataMember(Order=9)
    facebookUserName: string;

    // @DataMember(Order=10)
    firstName: string;

    // @DataMember(Order=11)
    lastName: string;

    // @DataMember(Order=12)
    displayName: string;

    // @DataMember(Order=13)
    company: string;

    // @DataMember(Order=14)
    email: string;

    // @DataMember(Order=15)
    primaryEmail: string;

    // @DataMember(Order=16)
    phoneNumber: string;

    // @DataMember(Order=17)
    birthDate: string;

    // @DataMember(Order=18)
    birthDateRaw: string;

    // @DataMember(Order=19)
    address: string;

    // @DataMember(Order=20)
    address2: string;

    // @DataMember(Order=21)
    city: string;

    // @DataMember(Order=22)
    state: string;

    // @DataMember(Order=23)
    country: string;

    // @DataMember(Order=24)
    culture: string;

    // @DataMember(Order=25)
    fullName: string;

    // @DataMember(Order=26)
    gender: string;

    // @DataMember(Order=27)
    language: string;

    // @DataMember(Order=28)
    mailAddress: string;

    // @DataMember(Order=29)
    nickname: string;

    // @DataMember(Order=30)
    postalCode: string;

    // @DataMember(Order=31)
    timeZone: string;

    // @DataMember(Order=32)
    requestTokenSecret: string;

    // @DataMember(Order=33)
    createdAt: string;

    // @DataMember(Order=34)
    lastModified: string;

    // @DataMember(Order=35)
    roles: string[];

    // @DataMember(Order=36)
    permissions: string[];

    // @DataMember(Order=37)
    isAuthenticated: boolean;

    // @DataMember(Order=38)
    fromToken: boolean;

    // @DataMember(Order=39)
    profileUrl: string;

    // @DataMember(Order=40)
    sequence: string;

    // @DataMember(Order=41)
    tag: number;

    // @DataMember(Order=42)
    authProvider: string;

    // @DataMember(Order=43)
    providerOAuthAccess: IAuthTokens[];

    // @DataMember(Order=44)
    meta: { [index:string]: string; };
}

export class MetadataTestNestedChild
{
    name: string;
}

export class MetadataTestChild
{
    name: string;
    results: MetadataTestNestedChild[];
}

export class MenuItemExampleItem
{
    // @DataMember(Order=1)
    // @ApiMember()
    name1: string;
}

export class MenuItemExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    name1: string;

    menuItemExampleItem: MenuItemExampleItem;
}

// @DataContract
export class MenuExample
{
    // @DataMember(Order=1)
    // @ApiMember()
    menuItemExample1: MenuItemExample;
}

export class NestedClass
{
    value: string;
}

export class ListResult
{
    result: string;
}

export class ArrayResult
{
    result: string;
}

export type EnumType = "Value1" | "Value2";

// @Flags()
export enum EnumFlags
{
    Value1 = 1,
    Value2 = 2,
    Value3 = 4,
}

export class KeyValuePair<TKey, TValue>
{
    key: TKey;
    value: TValue;
}

export class SubType
{
    id: number;
    name: string;
}

export class HelloBase
{
    id: number;
}

export class HelloResponseBase
{
    refId: number;
}

export class Poco
{
    name: string;
}

export class HelloBase_1<T>
{
    items: T[];
    counts: number[];
}

export class Item
{
    value: string;
}

export class HelloWithReturnResponse
{
    result: string;
}

export class HelloType
{
    result: string;
}

export interface IPoco
{
    name?: string;
}

export interface IEmptyInterface
{
}

export class EmptyClass
{
}

export class InnerType
{
    id: number;
    name: string;
}

export type InnerEnum = "Foo" | "Bar" | "Baz";

export type DayOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

// @DataContract
export type ScopeType = "Global" | "Sale";

export class PingService
{
}

export class ReturnedDto
{
    id: number;
}

export class CustomUserSession extends AuthUserSession
{
    // @DataMember
    customName: string;

    // @DataMember
    customInfo: string;
}

export class UnAuthInfo
{
    customInfo: string;
}

export class Channel
{
    name: string;
    value: string;
}

export class Device
{
    id: number;
    type: string;
    timeStamp: number;
    channels: Channel[];
}

export class Logger
{
    id: number;
    devices: Device[];
}

export class Rockstar
{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export class QueryBase
{
    // @DataMember(Order=1)
    skip: number;

    // @DataMember(Order=2)
    take: number;

    // @DataMember(Order=3)
    orderBy: string;

    // @DataMember(Order=4)
    orderByDesc: string;

    // @DataMember(Order=5)
    include: string;

    // @DataMember(Order=6)
    fields: string;

    // @DataMember(Order=7)
    meta: { [index:string]: string; };
}

export class QueryDb_1<T> extends QueryBase
{
}

export class OnlyDefinedInGenericType
{
    id: number;
    name: string;
}

export class QueryDb_2<From, Into> extends QueryBase
{
}

export class OnlyDefinedInGenericTypeFrom
{
    id: number;
    name: string;
}

export class OnlyDefinedInGenericTypeInto
{
    id: number;
    name: string;
}

export class TypesGroup
{
}

export class CustomHttpErrorResponse
{
    custom: string;
    responseStatus: ResponseStatus;
}

export class ThrowTypeResponse
{
    responseStatus: ResponseStatus;
}

export class ThrowValidationResponse
{
    age: number;
    required: string;
    email: string;
    responseStatus: ResponseStatus;
}

export class ThrowBusinessErrorResponse
{
    responseStatus: ResponseStatus;
}

export class ExternalOperationResponse
{
    result: string;
}

export class ExternalOperation2Response
{
    externalType: ExternalType;
}

export class ExternalReturnTypeResponse
{
    externalEnum3: ExternalEnum3;
}

export class Account
{
    name: string;
}

export class Project
{
    account: string;
    name: string;
}

export class CreateJwtResponse
{
    token: string;
    responseStatus: ResponseStatus;
}

export class CreateRefreshJwtResponse
{
    token: string;
    responseStatus: ResponseStatus;
}

export class MetadataTestResponse
{
    id: number;
    results: MetadataTestChild[];
}

// @DataContract
export class GetExampleResponse
{
    // @DataMember(Order=1)
    responseStatus: ResponseStatus;

    // @DataMember(Order=2)
    // @ApiMember()
    menuExample1: MenuExample;
}

export class GetRandomIdsResponse
{
    results: string[];
}

export class HelloResponse
{
    result: string;
}

/**
* Description on HelloAllResponse type
*/
// @DataContract
export class HelloAnnotatedResponse
{
    // @DataMember
    result: string;
}

export class AllTypes
{
    id: number;
    nullableId: number;
    byte: number;
    short: number;
    int: number;
    long: number;
    uShort: number;
    uInt: number;
    uLong: number;
    float: number;
    double: number;
    decimal: number;
    string: string;
    dateTime: string;
    timeSpan: string;
    dateTimeOffset: string;
    guid: string;
    char: string;
    keyValuePair: KeyValuePair<string, string>;
    nullableDateTime: string;
    nullableTimeSpan: string;
    stringList: string[];
    stringArray: string[];
    stringMap: { [index:string]: string; };
    intStringMap: { [index:number]: string; };
    subType: SubType;
}

export class AllCollectionTypes
{
    intArray: number[];
    intList: number[];
    stringArray: string[];
    stringList: string[];
    pocoArray: Poco[];
    pocoList: Poco[];
    pocoLookup: { [index:string]: Poco[]; };
    pocoLookupMap: { [index:string]: { [index:string]: Poco; }[]; };
}

export class HelloAllTypesResponse
{
    result: string;
    allTypes: AllTypes;
    allCollectionTypes: AllCollectionTypes;
}

export class HelloDateTime implements IReturn<HelloDateTime>
{
    dateTime: string;
    createResponse() { return new HelloDateTime(); }
    getTypeName() { return "HelloDateTime"; }
}

// @DataContract
export class HelloWithDataContractResponse
{
    // @DataMember(Name="result", Order=1, IsRequired=true, EmitDefaultValue=false)
    result: string;
}

/**
* Description on HelloWithDescriptionResponse type
*/
export class HelloWithDescriptionResponse
{
    result: string;
}

export class HelloWithInheritanceResponse extends HelloResponseBase
{
    result: string;
}

export class HelloWithAlternateReturnResponse extends HelloWithReturnResponse
{
    altResult: string;
}

export class HelloWithRouteResponse
{
    result: string;
}

export class HelloWithTypeResponse
{
    result: HelloType;
}

export class HelloInnerTypesResponse
{
    innerType: InnerType;
    innerEnum: InnerEnum;
}

export class HelloVerbResponse
{
    result: string;
}

export class EnumResponse
{
    operator: ScopeType;
}

// @Route("/hellotypes/{Name}")
export class HelloTypes implements IReturn<HelloTypes>
{
    string: string;
    bool: boolean;
    int: number;
    createResponse() { return new HelloTypes(); }
    getTypeName() { return "HelloTypes"; }
}

// @DataContract
export class HelloZipResponse
{
    // @DataMember
    result: string;
}

export class PingResponse
{
    responses: { [index:string]: ResponseStatus; };
    responseStatus: ResponseStatus;
}

export class RequiresRoleResponse
{
    result: string;
    responseStatus: ResponseStatus;
}

export class SendVerbResponse
{
    id: number;
    pathInfo: string;
    requestMethod: string;
}

export class GetSessionResponse
{
    result: CustomUserSession;
    unAuthInfo: UnAuthInfo;
    responseStatus: ResponseStatus;
}

export class StoreLogsResponse
{
    existingLogs: Logger[];
    responseStatus: ResponseStatus;
}

export class TestAuthResponse
{
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    responseStatus: ResponseStatus;
}

export class RequiresAdmin implements IReturn<RequiresAdmin>
{
    id: number;
    createResponse() { return new RequiresAdmin(); }
    getTypeName() { return "RequiresAdmin"; }
}

// @Route("/custom")
// @Route("/custom/{Data}")
export class CustomRoute implements IReturn<CustomRoute>
{
    data: string;
    createResponse() { return new CustomRoute(); }
    getTypeName() { return "CustomRoute"; }
}

// @Route("/wait/{ForMs}")
export class Wait implements IReturn<Wait>
{
    forMs: number;
    createResponse() { return new Wait(); }
    getTypeName() { return "Wait"; }
}

// @Route("/echo/types")
export class EchoTypes implements IReturn<EchoTypes>
{
    byte: number;
    short: number;
    int: number;
    long: number;
    uShort: number;
    uInt: number;
    uLong: number;
    float: number;
    double: number;
    decimal: number;
    string: string;
    dateTime: string;
    timeSpan: string;
    dateTimeOffset: string;
    guid: string;
    char: string;
    createResponse() { return new EchoTypes(); }
    getTypeName() { return "EchoTypes"; }
}

// @Route("/echo/collections")
export class EchoCollections implements IReturn<EchoCollections>
{
    stringList: string[];
    stringArray: string[];
    stringMap: { [index:string]: string; };
    intStringMap: { [index:number]: string; };
    createResponse() { return new EchoCollections(); }
    getTypeName() { return "EchoCollections"; }
}

// @Route("/echo/complex")
export class EchoComplexTypes implements IReturn<EchoComplexTypes>
{
    subType: SubType;
    subTypes: SubType[];
    subTypeMap: { [index:string]: SubType; };
    stringMap: { [index:string]: string; };
    intStringMap: { [index:number]: string; };
    createResponse() { return new EchoComplexTypes(); }
    getTypeName() { return "EchoComplexTypes"; }
}

// @Route("/rockstars", "POST")
export class StoreRockstars extends Array<Rockstar> implements IReturn<StoreRockstars>
{
    createResponse() { return new StoreRockstars(); }
    getTypeName() { return "StoreRockstars"; }
}

// @DataContract(Namespace="http://schemas.servicestack.net/types")
export class GetStuffResponse
{
    // @DataMember
    summaryDate: string;

    // @DataMember
    summaryEndDate: string;

    // @DataMember
    symbol: string;

    // @DataMember
    email: string;

    // @DataMember
    isEnabled: boolean;
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId
{
    // @DataMember(Order=1)
    userId: string;

    // @DataMember(Order=2)
    sessionId: string;

    // @DataMember(Order=3)
    userName: string;

    // @DataMember(Order=4)
    displayName: string;

    // @DataMember(Order=5)
    referrerUrl: string;

    // @DataMember(Order=6)
    bearerToken: string;

    // @DataMember(Order=7)
    refreshToken: string;

    // @DataMember(Order=8)
    responseStatus: ResponseStatus;

    // @DataMember(Order=9)
    meta: { [index:string]: string; };
}

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles: string[];

    // @DataMember(Order=2)
    allPermissions: string[];

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1)
    allRoles: string[];

    // @DataMember(Order=2)
    allPermissions: string[];

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @DataContract
export class ConvertSessionToTokenResponse
{
    // @DataMember(Order=1)
    meta: { [index:string]: string; };

    // @DataMember(Order=2)
    accessToken: string;

    // @DataMember(Order=3)
    responseStatus: ResponseStatus;
}

// @DataContract
export class GetAccessTokenResponse
{
    // @DataMember(Order=1)
    accessToken: string;

    // @DataMember(Order=2)
    responseStatus: ResponseStatus;
}

// @DataContract
export class QueryResponse<T>
{
    // @DataMember(Order=1)
    offset: number;

    // @DataMember(Order=2)
    total: number;

    // @DataMember(Order=3)
    results: T[];

    // @DataMember(Order=4)
    meta: { [index:string]: string; };

    // @DataMember(Order=5)
    responseStatus: ResponseStatus;
}

export class DummyTypes
{
    helloResponses: HelloResponse[];
}

export class CustomHttpError implements IReturn<CustomHttpErrorResponse>
{
    statusCode: number;
    statusDescription: string;
    createResponse() { return new CustomHttpErrorResponse(); }
    getTypeName() { return "CustomHttpError"; }
}

// @Route("/throwhttperror/{Status}")
export class ThrowHttpError
{
    status: number;
    message: string;
}

// @Route("/throw404")
// @Route("/throw404/{Message}")
export class Throw404
{
    message: string;
}

// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
export class ThrowCustom400
{
    message: string;
}

// @Route("/throw/{Type}")
export class ThrowType implements IReturn<ThrowTypeResponse>
{
    type: string;
    message: string;
    createResponse() { return new ThrowTypeResponse(); }
    getTypeName() { return "ThrowType"; }
}

// @Route("/throwvalidation")
export class ThrowValidation implements IReturn<ThrowValidationResponse>
{
    age: number;
    required: string;
    email: string;
    createResponse() { return new ThrowValidationResponse(); }
    getTypeName() { return "ThrowValidation"; }
}

// @Route("/throwbusinesserror")
export class ThrowBusinessError implements IReturn<ThrowBusinessErrorResponse>
{
    createResponse() { return new ThrowBusinessErrorResponse(); }
    getTypeName() { return "ThrowBusinessError"; }
}

export class ExternalOperation implements IReturn<ExternalOperationResponse>
{
    id: number;
    name: string;
    externalEnum: ExternalEnum;
    createResponse() { return new ExternalOperationResponse(); }
    getTypeName() { return "ExternalOperation"; }
}

export class ExternalOperation2 implements IReturn<ExternalOperation2Response>
{
    id: number;
    createResponse() { return new ExternalOperation2Response(); }
    getTypeName() { return "ExternalOperation2"; }
}

export class ExternalOperation3 implements IReturn<ExternalReturnTypeResponse>
{
    id: number;
    createResponse() { return new ExternalReturnTypeResponse(); }
    getTypeName() { return "ExternalOperation3"; }
}

export class ExternalOperation4
{
    id: number;
}

export class RootPathRoutes
{
    path: string;
}

export class GetAccount implements IReturn<Account>
{
    account: string;
    createResponse() { return new Account(); }
    getTypeName() { return "GetAccount"; }
}

export class GetProject implements IReturn<Project>
{
    account: string;
    project: string;
    createResponse() { return new Project(); }
    getTypeName() { return "GetProject"; }
}

// @Route("/image-stream")
export class ImageAsStream implements IReturn<Blob>
{
    format: string;
    createResponse() { return new Blob(); }
    getTypeName() { return "ImageAsStream"; }
}

// @Route("/image-bytes")
export class ImageAsBytes implements IReturn<Uint8Array>
{
    format: string;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "ImageAsBytes"; }
}

// @Route("/image-custom")
export class ImageAsCustomResult implements IReturn<Uint8Array>
{
    format: string;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "ImageAsCustomResult"; }
}

// @Route("/image-response")
export class ImageWriteToResponse implements IReturn<Uint8Array>
{
    format: string;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "ImageWriteToResponse"; }
}

// @Route("/image-file")
export class ImageAsFile implements IReturn<Uint8Array>
{
    format: string;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "ImageAsFile"; }
}

// @Route("/image-redirect")
export class ImageAsRedirect
{
    format: string;
}

// @Route("/hello-image/{Name}")
export class HelloImage implements IReturn<Uint8Array>
{
    name: string;
    format: string;
    width: number;
    height: number;
    fontSize: number;
    fontFamily: string;
    foreground: string;
    background: string;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "HelloImage"; }
}

// @Route("/jwt")
export class CreateJwt extends AuthUserSession implements IReturn<CreateJwtResponse>
{
    jwtExpiry: string;
    createResponse() { return new CreateJwtResponse(); }
    getTypeName() { return "CreateJwt"; }
}

// @Route("/jwt-refresh")
export class CreateRefreshJwt implements IReturn<CreateRefreshJwtResponse>
{
    userAuthId: string;
    jwtExpiry: string;
    createResponse() { return new CreateRefreshJwtResponse(); }
    getTypeName() { return "CreateRefreshJwt"; }
}

// @Route("/logs")
export class ViewLogs implements IReturn<string>
{
    clear: boolean;
    createResponse() { return ""; }
    getTypeName() { return "ViewLogs"; }
}

// @Route("/metadatatest")
export class MetadataTest implements IReturn<MetadataTestResponse>
{
    id: number;
    createResponse() { return new MetadataTestResponse(); }
    getTypeName() { return "MetadataTest"; }
}

// @Route("/metadatatest-array")
export class MetadataTestArray implements IReturn<Array<MetadataTestChild>>
{
    id: number;
    createResponse() { return new Array<MetadataTestChild>(); }
    getTypeName() { return "MetadataTestArray"; }
}

// @Route("/example", "GET")
// @DataContract
export class GetExample implements IReturn<GetExampleResponse>
{
    createResponse() { return new GetExampleResponse(); }
    getTypeName() { return "GetExample"; }
}

// @Route("/randomids")
export class GetRandomIds implements IReturn<GetRandomIdsResponse>
{
    take: number;
    createResponse() { return new GetRandomIdsResponse(); }
    getTypeName() { return "GetRandomIds"; }
}

// @Route("/textfile-test")
export class TextFileTest
{
    asAttachment: boolean;
}

// @Route("/return/text")
export class ReturnText
{
    text: string;
}

// @Route("/return/html")
export class ReturnHtml
{
    text: string;
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    // @Required()
    name: string;

    title: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "Hello"; }
}

/**
* Description on HelloAll type
*/
// @DataContract
export class HelloAnnotated implements IReturn<HelloAnnotatedResponse>
{
    // @DataMember
    name: string;
    createResponse() { return new HelloAnnotatedResponse(); }
    getTypeName() { return "HelloAnnotated"; }
}

export class HelloWithNestedClass implements IReturn<HelloResponse>
{
    name: string;
    nestedClassProp: NestedClass;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "HelloWithNestedClass"; }
}

export class HelloList implements IReturn<Array<ListResult>>
{
    names: string[];
    createResponse() { return new Array<ListResult>(); }
    getTypeName() { return "HelloList"; }
}

export class HelloArray implements IReturn<Array<ArrayResult>>
{
    names: string[];
    createResponse() { return new Array<ArrayResult>(); }
    getTypeName() { return "HelloArray"; }
}

export class HelloWithEnum
{
    enumProp: EnumType;
    nullableEnumProp: EnumType;
    enumFlags: EnumFlags;
}

export class RestrictedAttributes
{
    id: number;
    name: string;
    hello: Hello;
}

/**
* AllowedAttributes Description
*/
// @Route("/allowed-attributes", "GET")
// @Api(Description="AllowedAttributes Description")
// @ApiResponse(Description="Your request was not understood", StatusCode=400)
// @DataContract
export class AllowedAttributes
{
    /**
    * Range Description
    */
    // @DataMember(Name="Aliased")
    // @ApiMember(DataType="double", Description="Range Description", IsRequired=true, ParameterType="path")
    range: number;
}

// @Route("/all-types")
export class HelloAllTypes implements IReturn<HelloAllTypesResponse>
{
    name: string;
    allTypes: AllTypes;
    allCollectionTypes: AllCollectionTypes;
    createResponse() { return new HelloAllTypesResponse(); }
    getTypeName() { return "HelloAllTypes"; }
}

export class HelloString implements IReturn<string>
{
    name: string;
    createResponse() { return ""; }
    getTypeName() { return "HelloString"; }
}

export class HelloVoid
{
    name: string;
}

// @DataContract
export class HelloWithDataContract implements IReturn<HelloWithDataContractResponse>
{
    // @DataMember(Name="name", Order=1, IsRequired=true, EmitDefaultValue=false)
    name: string;

    // @DataMember(Name="id", Order=2, EmitDefaultValue=false)
    id: number;
    createResponse() { return new HelloWithDataContractResponse(); }
    getTypeName() { return "HelloWithDataContract"; }
}

/**
* Description on HelloWithDescription type
*/
export class HelloWithDescription implements IReturn<HelloWithDescriptionResponse>
{
    name: string;
    createResponse() { return new HelloWithDescriptionResponse(); }
    getTypeName() { return "HelloWithDescription"; }
}

export class HelloWithInheritance extends HelloBase implements IReturn<HelloWithInheritanceResponse>
{
    name: string;
    createResponse() { return new HelloWithInheritanceResponse(); }
    getTypeName() { return "HelloWithInheritance"; }
}

export class HelloWithGenericInheritance extends HelloBase_1<Poco>
{
    result: string;
}

export class HelloWithGenericInheritance2 extends HelloBase_1<Hello>
{
    result: string;
}

export class HelloWithNestedInheritance extends HelloBase_1<Item>
{
}

export class HelloWithReturn implements IReturn<HelloWithAlternateReturnResponse>
{
    name: string;
    createResponse() { return new HelloWithAlternateReturnResponse(); }
    getTypeName() { return "HelloWithReturn"; }
}

// @Route("/helloroute")
export class HelloWithRoute implements IReturn<HelloWithRouteResponse>
{
    name: string;
    createResponse() { return new HelloWithRouteResponse(); }
    getTypeName() { return "HelloWithRoute"; }
}

export class HelloWithType implements IReturn<HelloWithTypeResponse>
{
    name: string;
    createResponse() { return new HelloWithTypeResponse(); }
    getTypeName() { return "HelloWithType"; }
}

export class HelloInterface
{
    poco: IPoco;
    emptyInterface: IEmptyInterface;
    emptyClass: EmptyClass;
}

export class HelloInnerTypes implements IReturn<HelloInnerTypesResponse>
{
    createResponse() { return new HelloInnerTypesResponse(); }
    getTypeName() { return "HelloInnerTypes"; }
}

export class HelloBuiltin
{
    dayOfWeek: DayOfWeek;
}

export class HelloGet implements IReturn<HelloVerbResponse>, IGet
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloGet"; }
}

export class HelloPost extends HelloBase implements IReturn<HelloVerbResponse>, IPost
{
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPost"; }
}

export class HelloPut implements IReturn<HelloVerbResponse>, IPut
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPut"; }
}

export class HelloDelete implements IReturn<HelloVerbResponse>, IDelete
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloDelete"; }
}

export class HelloPatch implements IReturn<HelloVerbResponse>, IPatch
{
    id: number;
    createResponse() { return new HelloVerbResponse(); }
    getTypeName() { return "HelloPatch"; }
}

export class HelloReturnVoid implements IReturnVoid
{
    id: number;
    createResponse() {}
    getTypeName() { return "HelloReturnVoid"; }
}

export class EnumRequest implements IReturn<EnumResponse>, IPut
{
    operator: ScopeType;
    createResponse() { return new EnumResponse(); }
    getTypeName() { return "EnumRequest"; }
}

// @Route("/hellozip")
// @DataContract
export class HelloZip implements IReturn<HelloZipResponse>
{
    // @DataMember
    name: string;

    // @DataMember
    test: string[];
    createResponse() { return new HelloZipResponse(); }
    getTypeName() { return "HelloZip"; }
}

// @Route("/ping")
export class Ping implements IReturn<PingResponse>
{
    createResponse() { return new PingResponse(); }
    getTypeName() { return "Ping"; }
}

// @Route("/reset-connections")
export class ResetConnections
{
}

// @Route("/requires-role")
export class RequiresRole implements IReturn<RequiresRoleResponse>
{
    createResponse() { return new RequiresRoleResponse(); }
    getTypeName() { return "RequiresRole"; }
}

// @Route("/return/string")
export class ReturnString implements IReturn<string>
{
    data: string;
    createResponse() { return ""; }
    getTypeName() { return "ReturnString"; }
}

// @Route("/return/bytes")
export class ReturnBytes implements IReturn<Uint8Array>
{
    data: Uint8Array;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "ReturnBytes"; }
}

// @Route("/return/stream")
export class ReturnStream implements IReturn<Blob>
{
    data: Uint8Array;
    createResponse() { return new Blob(); }
    getTypeName() { return "ReturnStream"; }
}

// @Route("/Request1", "GET")
export class GetRequest1 implements IReturn<Array<ReturnedDto>>, IGet
{
    createResponse() { return new Array<ReturnedDto>(); }
    getTypeName() { return "GetRequest1"; }
}

// @Route("/Request2", "GET")
export class GetRequest2 implements IReturn<Array<ReturnedDto>>, IGet
{
    createResponse() { return new Array<ReturnedDto>(); }
    getTypeName() { return "GetRequest2"; }
}

// @Route("/sendjson")
export class SendJson implements IReturn<string>
{
    id: number;
    name: string;
    createResponse() { return ""; }
    getTypeName() { return "SendJson"; }
}

// @Route("/sendtext")
export class SendText implements IReturn<string>
{
    id: number;
    name: string;
    contentType: string;
    createResponse() { return ""; }
    getTypeName() { return "SendText"; }
}

// @Route("/sendraw")
export class SendRaw implements IReturn<Uint8Array>
{
    id: number;
    name: string;
    contentType: string;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "SendRaw"; }
}

export class SendDefault implements IReturn<SendVerbResponse>
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendDefault"; }
}

// @Route("/sendrestget/{Id}", "GET")
export class SendRestGet implements IReturn<SendVerbResponse>, IGet
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendRestGet"; }
}

export class SendGet implements IReturn<SendVerbResponse>, IGet
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendGet"; }
}

export class SendPost implements IReturn<SendVerbResponse>, IPost
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendPost"; }
}

export class SendPut implements IReturn<SendVerbResponse>, IPut
{
    id: number;
    createResponse() { return new SendVerbResponse(); }
    getTypeName() { return "SendPut"; }
}

export class SendReturnVoid implements IReturnVoid
{
    id: number;
    createResponse() {}
    getTypeName() { return "SendReturnVoid"; }
}

// @Route("/session")
export class GetSession implements IReturn<GetSessionResponse>
{
    createResponse() { return new GetSessionResponse(); }
    getTypeName() { return "GetSession"; }
}

// @Route("/session/edit/{CustomName}")
export class UpdateSession implements IReturn<GetSessionResponse>
{
    customName: string;
    createResponse() { return new GetSessionResponse(); }
    getTypeName() { return "UpdateSession"; }
}

export class StoreLogs implements IReturn<StoreLogsResponse>
{
    loggers: Logger[];
    createResponse() { return new StoreLogsResponse(); }
    getTypeName() { return "StoreLogs"; }
}

export class HelloAuth implements IReturn<HelloResponse>
{
    name: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "HelloAuth"; }
}

// @Route("/testauth")
export class TestAuth implements IReturn<TestAuthResponse>
{
    createResponse() { return new TestAuthResponse(); }
    getTypeName() { return "TestAuth"; }
}

// @Route("/testdata/AllTypes")
export class TestDataAllTypes implements IReturn<AllTypes>
{
    createResponse() { return new AllTypes(); }
    getTypeName() { return "TestDataAllTypes"; }
}

// @Route("/testdata/AllCollectionTypes")
export class TestDataAllCollectionTypes implements IReturn<AllCollectionTypes>
{
    createResponse() { return new AllCollectionTypes(); }
    getTypeName() { return "TestDataAllCollectionTypes"; }
}

// @Route("/void-response")
export class TestVoidResponse
{
}

// @Route("/null-response")
export class TestNullResponse
{
}

// @Route("/Stuff")
// @DataContract(Namespace="http://schemas.servicestack.net/types")
export class GetStuff implements IReturn<GetStuffResponse>
{
    // @DataMember
    // @ApiMember(DataType="DateTime", Name="Summary Date")
    summaryDate: string;

    // @DataMember
    // @ApiMember(DataType="DateTime", Name="Summary End Date")
    summaryEndDate: string;

    // @DataMember
    // @ApiMember(DataType="string", Name="Symbol")
    symbol: string;

    // @DataMember
    // @ApiMember(DataType="string", Name="Email")
    email: string;

    // @DataMember
    // @ApiMember(DataType="bool", Name="Is Enabled")
    isEnabled: boolean;
    createResponse() { return new GetStuffResponse(); }
    getTypeName() { return "GetStuff"; }
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost
{
    // @DataMember(Order=1)
    provider: string;

    // @DataMember(Order=2)
    state: string;

    // @DataMember(Order=3)
    oauth_token: string;

    // @DataMember(Order=4)
    oauth_verifier: string;

    // @DataMember(Order=5)
    userName: string;

    // @DataMember(Order=6)
    password: string;

    // @DataMember(Order=7)
    rememberMe: boolean;

    // @DataMember(Order=8)
    continue: string;

    // @DataMember(Order=9)
    nonce: string;

    // @DataMember(Order=10)
    uri: string;

    // @DataMember(Order=11)
    response: string;

    // @DataMember(Order=12)
    qop: string;

    // @DataMember(Order=13)
    nc: string;

    // @DataMember(Order=14)
    cnonce: string;

    // @DataMember(Order=15)
    useTokenCookie: boolean;

    // @DataMember(Order=16)
    accessToken: string;

    // @DataMember(Order=17)
    accessTokenSecret: string;

    // @DataMember(Order=18)
    meta: { [index:string]: string; };
    createResponse() { return new AuthenticateResponse(); }
    getTypeName() { return "Authenticate"; }
}

// @Route("/assignroles")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    userName: string;

    // @DataMember(Order=2)
    permissions: string[];

    // @DataMember(Order=3)
    roles: string[];
    createResponse() { return new AssignRolesResponse(); }
    getTypeName() { return "AssignRoles"; }
}

// @Route("/unassignroles")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    userName: string;

    // @DataMember(Order=2)
    permissions: string[];

    // @DataMember(Order=3)
    roles: string[];
    createResponse() { return new UnAssignRolesResponse(); }
    getTypeName() { return "UnAssignRoles"; }
}

// @Route("/session-to-token")
// @DataContract
export class ConvertSessionToToken implements IReturn<ConvertSessionToTokenResponse>, IPost
{
    // @DataMember(Order=1)
    preserveSession: boolean;
    createResponse() { return new ConvertSessionToTokenResponse(); }
    getTypeName() { return "ConvertSessionToToken"; }
}

// @Route("/access-token")
// @DataContract
export class GetAccessToken implements IReturn<GetAccessTokenResponse>, IPost
{
    // @DataMember(Order=1)
    refreshToken: string;
    createResponse() { return new GetAccessTokenResponse(); }
    getTypeName() { return "GetAccessToken"; }
}

export class QueryPocoBase extends QueryDb_1<OnlyDefinedInGenericType> implements IReturn<QueryResponse<OnlyDefinedInGenericType>>
{
    id: number;
    createResponse() { return new QueryResponse<OnlyDefinedInGenericType>(); }
    getTypeName() { return "QueryPocoBase"; }
}

export class QueryPocoIntoBase extends QueryDb_2<OnlyDefinedInGenericTypeFrom, OnlyDefinedInGenericTypeInto> implements IReturn<QueryResponse<OnlyDefinedInGenericTypeInto>>
{
    id: number;
    createResponse() { return new QueryResponse<OnlyDefinedInGenericTypeInto>(); }
    getTypeName() { return "QueryPocoIntoBase"; }
}

// @Route("/rockstars", "GET")
export class QueryRockstars extends QueryDb_1<Rockstar> implements IReturn<QueryResponse<Rockstar>>
{
    createResponse() { return new QueryResponse<Rockstar>(); }
    getTypeName() { return "QueryRockstars"; }
}
