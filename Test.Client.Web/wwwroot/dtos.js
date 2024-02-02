"use strict";
/* Options:
Date: 2021-06-24 19:21:31
Version: 5.111
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace:
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CreateRockstarVersion = exports.RealDeleteAuditTenant = exports.CreateRockstarAuditMqToken = exports.SoftDeleteAuditTenant = exports.PatchRockstarAuditTenant = exports.UpdateRockstarAuditTenant = exports.CreateRockstarAuditTenant = exports.CreateRockstarAudit = exports.QueryRockstars = exports.MessageQuery = exports.QueryPocoIntoBase = exports.QueryPocoBase = exports.QueryRockstarAuditSubOr = exports.QueryRockstarAudit = exports.GetAccessToken = exports.ConvertSessionToToken = exports.UnAssignRoles = exports.AssignRoles = exports.Authenticate = exports.TestNullResponse = exports.TestVoidResponse = exports.TestDataAllCollectionTypes = exports.TestDataAllTypes = exports.TestAuth = exports.HelloAuth = exports.StoreLogs = exports.GetStuff = exports.UpdateSession = exports.GetSession = exports.SendReturnVoid = exports.SendPut = exports.SendPost = exports.SendGet = exports.SendRestGet = exports.SendDefault = exports.SendRaw = exports.SendText = exports.SendJson = exports.GetRequest2 = exports.GetRequest1 = exports.ReturnStream = exports.ReturnBytes = exports.ReturnString = exports.RequiresRole = exports.ResetConnections = exports.Ping = exports.HelloZip = exports.EnumRequest = exports.HelloReturnVoid = exports.HelloPatch = exports.HelloDelete = exports.HelloPut = exports.HelloPost = exports.HelloGet = exports.HelloBuiltin = exports.HelloInnerTypes = exports.HelloInterface = exports.HelloWithType = exports.HelloWithRoute = exports.HelloWithReturn = exports.HelloWithNestedInheritance = exports.HelloWithGenericInheritance2 = exports.HelloWithGenericInheritance = exports.HelloWithInheritance = exports.HelloWithDescription = exports.HelloWithDataContract = exports.HelloVoid = exports.HelloString = exports.HelloSubAllTypes = exports.HelloAllTypes = exports.AllowedAttributes = exports.RestrictedAttributes = exports.HelloWithEnumMap = exports.HelloWithEnumList = exports.HelloWithEnum = exports.HelloArray = exports.HelloList = exports.HelloWithNestedClass = exports.HelloAnnotated = exports.Hello = exports.ReturnHtml = exports.ReturnText = exports.TextFileTest = exports.GetRandomIds = exports.RequestMessage = exports.GetExample = exports.MetadataTestArray = exports.MetadataTest = exports.ViewLogs = exports.InvalidateLastAccessToken = exports.CreateRefreshJwt = exports.CreateJwt = exports.Secured = exports.HelloImage = exports.ImageAsRedirect = exports.ImageAsFile = exports.ImageWriteToResponse = exports.ImageAsCustomResult = exports.ImageAsBytes = exports.ImageAsStream = exports.GetProject = exports.GetAccount = exports.RootPathRoutes = exports.ThrowBusinessError = exports.ThrowValidation = exports.ThrowType = exports.ThrowCustom400 = exports.Throw404 = exports.ThrowHttpError = exports.DummyTypes = exports.DeclarativeSingleValidationTest = exports.DeclarativeCollectiveValidationTest = exports.GetNakedItems = exports.GetItems = exports.AltQueryItems = exports.CustomHttpError = exports.GetUserDetails = exports.PostObjectToChannel = exports.ResetServerEvents = exports.ClearChatHistory = exports.GetChatHistory = exports.PostChatToChannel = exports.PostRawToChannel = exports.QueryItems = exports.RockstarWithIdAndRowVersionResponse = exports.RockstarWithIdAndCountResponse = exports.RockstarWithIdAndResultResponse = exports.RockstarWithIdResponse = exports.GetAccessTokenResponse = exports.ConvertSessionToTokenResponse = exports.UnAssignRolesResponse = exports.AssignRolesResponse = exports.AuthenticateResponse = exports.StoreRockstars = exports.EchoComplexTypes = exports.EchoCollections = exports.EchoTypes = exports.Wait = exports.CustomRoute = exports.RequiresAdmin = exports.TestAuthResponse = exports.StoreLogsResponse = exports.GetStuffResponse = exports.GetSessionResponse = exports.SendVerbResponse = exports.RequiresRoleResponse = exports.PingResponse = exports.HelloZipResponse = exports.HelloTypes = exports.EnumResponse = exports.HelloVerbResponse = exports.HelloInnerTypesResponse = exports.HelloWithTypeResponse = exports.HelloWithRouteResponse = exports.HelloWithAlternateReturnResponse = exports.HelloWithInheritanceResponse = exports.HelloWithDescriptionResponse = exports.HelloWithDataContractResponse = exports.HelloDateTime = exports.SubAllTypes = exports.HelloAllTypesResponse = exports.AllCollectionTypes = exports.AllTypes = exports.HelloAnnotatedResponse = exports.HelloResponse = exports.GetRandomIdsResponse = exports.Message = exports.GetExampleResponse = exports.MetadataTestResponse = exports.CreateRefreshJwtResponse = exports.CreateJwtResponse = exports.SecuredResponse = exports.Project = exports.Account = exports.ThrowBusinessErrorResponse = exports.ThrowValidationResponse = exports.ThrowTypeResponse = exports.EmptyResponse = exports.Items = exports.QueryResponseAlt = exports.CustomHttpErrorResponse = exports.GetUserDetailsResponse = exports.GetChatHistoryResponse = exports.ChatMessage = exports.QueryResponse = exports.TypesGroup = exports.UnAuthInfo = exports.CustomUserSession = exports.ReturnedDto = exports.InnerEnum = exports.InnerType = exports.HelloType = exports.HelloWithReturnResponse = exports.HelloResponseBase = exports.ArrayResult = exports.ListResult = exports.MenuExample = exports.MenuItemExample = exports.MenuItemExampleItem = exports.MetadataTestChild = exports.MetadataTestNestedChild = exports.ResponseStatus = exports.ResponseError = exports.MessageCrud = exports.RockstarVersion = exports.SoftDeleteAuditTenantBase = exports.SoftDeleteAuditBase = exports.PatchAuditTenantBase = exports.PatchAuditBase = exports.UpdateAuditTenantBase = exports.UpdateAuditBase = exports.CreateAuditTenantBase = exports.CreateAuditBase = exports.RockstarAudit = exports.OnlyDefinedInGenericTypeInto = exports.OnlyDefinedInGenericTypeFrom = exports.OnlyDefinedInGenericType = exports.QueryDb_1 = exports.RockstarAuto = exports.RockstarBase = exports.RockstarAuditTenant = exports.LivingStatus = exports.AuditBase = exports.QueryDbTenant_2 = exports.Rockstar = exports.Logger = exports.Device = exports.Channel = exports.PingService = exports.ScopeType = exports.DayOfWeek = exports.EmptyClass = exports.HelloBase_1 = exports.HelloBase = exports.AllTypesBase = exports.SubType = exports.KeyValuePair = exports.EnumStyleMembers = exports.EnumStyle = exports.EnumAsInt = exports.EnumFlags = exports.EnumWithValues = exports.EnumTypeFlags = exports.EnumType = exports.NestedClass = exports.AuthUserSession = exports.FluentSingleValidation = exports.DeclarativeSingleValidation = exports.FluentChildValidation = exports.DeclarativeChildValidation = exports.SetterType = exports.CustomType = exports.Poco = exports.Item = exports.QueryDb_2 = exports.QueryBase = void 0;
// @DataContract
var QueryBase = /** @class */ (function () {
    function QueryBase(init) {
        Object.assign(this, init);
    }
    return QueryBase;
}());
exports.QueryBase = QueryBase;
var QueryDb_2 = /** @class */ (function (_super) {
    __extends(QueryDb_2, _super);
    function QueryDb_2(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return QueryDb_2;
}(QueryBase));
exports.QueryDb_2 = QueryDb_2;
var Item = /** @class */ (function () {
    function Item(init) {
        Object.assign(this, init);
    }
    return Item;
}());
exports.Item = Item;
var Poco = /** @class */ (function () {
    function Poco(init) {
        Object.assign(this, init);
    }
    return Poco;
}());
exports.Poco = Poco;
var CustomType = /** @class */ (function () {
    function CustomType(init) {
        Object.assign(this, init);
    }
    return CustomType;
}());
exports.CustomType = CustomType;
var SetterType = /** @class */ (function () {
    function SetterType(init) {
        Object.assign(this, init);
    }
    return SetterType;
}());
exports.SetterType = SetterType;
var DeclarativeChildValidation = /** @class */ (function () {
    function DeclarativeChildValidation(init) {
        Object.assign(this, init);
    }
    return DeclarativeChildValidation;
}());
exports.DeclarativeChildValidation = DeclarativeChildValidation;
var FluentChildValidation = /** @class */ (function () {
    function FluentChildValidation(init) {
        Object.assign(this, init);
    }
    return FluentChildValidation;
}());
exports.FluentChildValidation = FluentChildValidation;
var DeclarativeSingleValidation = /** @class */ (function () {
    function DeclarativeSingleValidation(init) {
        Object.assign(this, init);
    }
    return DeclarativeSingleValidation;
}());
exports.DeclarativeSingleValidation = DeclarativeSingleValidation;
var FluentSingleValidation = /** @class */ (function () {
    function FluentSingleValidation(init) {
        Object.assign(this, init);
    }
    return FluentSingleValidation;
}());
exports.FluentSingleValidation = FluentSingleValidation;
// @DataContract
var AuthUserSession = /** @class */ (function () {
    function AuthUserSession(init) {
        Object.assign(this, init);
    }
    return AuthUserSession;
}());
exports.AuthUserSession = AuthUserSession;
var NestedClass = /** @class */ (function () {
    function NestedClass(init) {
        Object.assign(this, init);
    }
    return NestedClass;
}());
exports.NestedClass = NestedClass;
var EnumType;
(function (EnumType) {
    EnumType["Value1"] = "Value1";
    EnumType["Value2"] = "Value2";
    EnumType["Value3"] = "Value3";
})(EnumType = exports.EnumType || (exports.EnumType = {}));
// @Flags()
var EnumTypeFlags;
(function (EnumTypeFlags) {
    EnumTypeFlags[EnumTypeFlags["Value1"] = 0] = "Value1";
    EnumTypeFlags[EnumTypeFlags["Value2"] = 1] = "Value2";
    EnumTypeFlags[EnumTypeFlags["Value3"] = 2] = "Value3";
})(EnumTypeFlags = exports.EnumTypeFlags || (exports.EnumTypeFlags = {}));
var EnumWithValues;
(function (EnumWithValues) {
    EnumWithValues["None"] = "None";
    EnumWithValues["Value1"] = "Member 1";
    EnumWithValues["Value2"] = "Value2";
})(EnumWithValues = exports.EnumWithValues || (exports.EnumWithValues = {}));
// @Flags()
var EnumFlags;
(function (EnumFlags) {
    EnumFlags["Value0"] = "Value0";
    EnumFlags["Value1"] = "Value 1";
    EnumFlags["Value2"] = "Value2";
    EnumFlags["Value3"] = "Value3";
    EnumFlags["Value123"] = "Value123";
})(EnumFlags = exports.EnumFlags || (exports.EnumFlags = {}));
var EnumAsInt;
(function (EnumAsInt) {
    EnumAsInt[EnumAsInt["Value1"] = 1000] = "Value1";
    EnumAsInt[EnumAsInt["Value2"] = 2000] = "Value2";
    EnumAsInt[EnumAsInt["Value3"] = 3000] = "Value3";
})(EnumAsInt = exports.EnumAsInt || (exports.EnumAsInt = {}));
var EnumStyle;
(function (EnumStyle) {
    EnumStyle["lower"] = "lower";
    EnumStyle["UPPER"] = "UPPER";
    EnumStyle["PascalCase"] = "PascalCase";
    EnumStyle["camelCase"] = "camelCase";
    EnumStyle["camelUPPER"] = "camelUPPER";
    EnumStyle["PascalUPPER"] = "PascalUPPER";
})(EnumStyle = exports.EnumStyle || (exports.EnumStyle = {}));
var EnumStyleMembers;
(function (EnumStyleMembers) {
    EnumStyleMembers["Lower"] = "lower";
    EnumStyleMembers["Upper"] = "UPPER";
    EnumStyleMembers["PascalCase"] = "PascalCase";
    EnumStyleMembers["CamelCase"] = "camelCase";
    EnumStyleMembers["CamelUpper"] = "camelUPPER";
    EnumStyleMembers["PascalUpper"] = "PascalUPPER";
})(EnumStyleMembers = exports.EnumStyleMembers || (exports.EnumStyleMembers = {}));
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(init) {
        Object.assign(this, init);
    }
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
var SubType = /** @class */ (function () {
    function SubType(init) {
        Object.assign(this, init);
    }
    return SubType;
}());
exports.SubType = SubType;
var AllTypesBase = /** @class */ (function () {
    function AllTypesBase(init) {
        Object.assign(this, init);
    }
    return AllTypesBase;
}());
exports.AllTypesBase = AllTypesBase;
var HelloBase = /** @class */ (function () {
    function HelloBase(init) {
        Object.assign(this, init);
    }
    return HelloBase;
}());
exports.HelloBase = HelloBase;
var HelloBase_1 = /** @class */ (function () {
    function HelloBase_1(init) {
        Object.assign(this, init);
    }
    return HelloBase_1;
}());
exports.HelloBase_1 = HelloBase_1;
var EmptyClass = /** @class */ (function () {
    function EmptyClass(init) {
        Object.assign(this, init);
    }
    return EmptyClass;
}());
exports.EmptyClass = EmptyClass;
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Sunday"] = "Sunday";
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
// @DataContract
var ScopeType;
(function (ScopeType) {
    ScopeType[ScopeType["Global"] = 1] = "Global";
    ScopeType[ScopeType["Sale"] = 2] = "Sale";
})(ScopeType = exports.ScopeType || (exports.ScopeType = {}));
var PingService = /** @class */ (function () {
    function PingService(init) {
        Object.assign(this, init);
    }
    return PingService;
}());
exports.PingService = PingService;
var Channel = /** @class */ (function () {
    function Channel(init) {
        Object.assign(this, init);
    }
    return Channel;
}());
exports.Channel = Channel;
var Device = /** @class */ (function () {
    function Device(init) {
        Object.assign(this, init);
    }
    return Device;
}());
exports.Device = Device;
var Logger = /** @class */ (function () {
    function Logger(init) {
        Object.assign(this, init);
    }
    return Logger;
}());
exports.Logger = Logger;
var Rockstar = /** @class */ (function () {
    function Rockstar(init) {
        Object.assign(this, init);
    }
    return Rockstar;
}());
exports.Rockstar = Rockstar;
var QueryDbTenant_2 = /** @class */ (function (_super) {
    __extends(QueryDbTenant_2, _super);
    function QueryDbTenant_2(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return QueryDbTenant_2;
}(QueryDb_2));
exports.QueryDbTenant_2 = QueryDbTenant_2;
// @DataContract
var AuditBase = /** @class */ (function () {
    function AuditBase(init) {
        Object.assign(this, init);
    }
    return AuditBase;
}());
exports.AuditBase = AuditBase;
var LivingStatus;
(function (LivingStatus) {
    LivingStatus["Alive"] = "Alive";
    LivingStatus["Dead"] = "Dead";
})(LivingStatus = exports.LivingStatus || (exports.LivingStatus = {}));
var RockstarAuditTenant = /** @class */ (function (_super) {
    __extends(RockstarAuditTenant, _super);
    function RockstarAuditTenant(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return RockstarAuditTenant;
}(AuditBase));
exports.RockstarAuditTenant = RockstarAuditTenant;
var RockstarBase = /** @class */ (function () {
    function RockstarBase(init) {
        Object.assign(this, init);
    }
    return RockstarBase;
}());
exports.RockstarBase = RockstarBase;
var RockstarAuto = /** @class */ (function (_super) {
    __extends(RockstarAuto, _super);
    function RockstarAuto(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return RockstarAuto;
}(RockstarBase));
exports.RockstarAuto = RockstarAuto;
var QueryDb_1 = /** @class */ (function (_super) {
    __extends(QueryDb_1, _super);
    function QueryDb_1(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return QueryDb_1;
}(QueryBase));
exports.QueryDb_1 = QueryDb_1;
var OnlyDefinedInGenericType = /** @class */ (function () {
    function OnlyDefinedInGenericType(init) {
        Object.assign(this, init);
    }
    return OnlyDefinedInGenericType;
}());
exports.OnlyDefinedInGenericType = OnlyDefinedInGenericType;
var OnlyDefinedInGenericTypeFrom = /** @class */ (function () {
    function OnlyDefinedInGenericTypeFrom(init) {
        Object.assign(this, init);
    }
    return OnlyDefinedInGenericTypeFrom;
}());
exports.OnlyDefinedInGenericTypeFrom = OnlyDefinedInGenericTypeFrom;
var OnlyDefinedInGenericTypeInto = /** @class */ (function () {
    function OnlyDefinedInGenericTypeInto(init) {
        Object.assign(this, init);
    }
    return OnlyDefinedInGenericTypeInto;
}());
exports.OnlyDefinedInGenericTypeInto = OnlyDefinedInGenericTypeInto;
var RockstarAudit = /** @class */ (function (_super) {
    __extends(RockstarAudit, _super);
    function RockstarAudit(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return RockstarAudit;
}(RockstarBase));
exports.RockstarAudit = RockstarAudit;
var CreateAuditBase = /** @class */ (function () {
    function CreateAuditBase(init) {
        Object.assign(this, init);
    }
    return CreateAuditBase;
}());
exports.CreateAuditBase = CreateAuditBase;
var CreateAuditTenantBase = /** @class */ (function (_super) {
    __extends(CreateAuditTenantBase, _super);
    function CreateAuditTenantBase(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return CreateAuditTenantBase;
}(CreateAuditBase));
exports.CreateAuditTenantBase = CreateAuditTenantBase;
var UpdateAuditBase = /** @class */ (function () {
    function UpdateAuditBase(init) {
        Object.assign(this, init);
    }
    return UpdateAuditBase;
}());
exports.UpdateAuditBase = UpdateAuditBase;
var UpdateAuditTenantBase = /** @class */ (function (_super) {
    __extends(UpdateAuditTenantBase, _super);
    function UpdateAuditTenantBase(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return UpdateAuditTenantBase;
}(UpdateAuditBase));
exports.UpdateAuditTenantBase = UpdateAuditTenantBase;
var PatchAuditBase = /** @class */ (function () {
    function PatchAuditBase(init) {
        Object.assign(this, init);
    }
    return PatchAuditBase;
}());
exports.PatchAuditBase = PatchAuditBase;
var PatchAuditTenantBase = /** @class */ (function (_super) {
    __extends(PatchAuditTenantBase, _super);
    function PatchAuditTenantBase(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return PatchAuditTenantBase;
}(PatchAuditBase));
exports.PatchAuditTenantBase = PatchAuditTenantBase;
var SoftDeleteAuditBase = /** @class */ (function () {
    function SoftDeleteAuditBase(init) {
        Object.assign(this, init);
    }
    return SoftDeleteAuditBase;
}());
exports.SoftDeleteAuditBase = SoftDeleteAuditBase;
var SoftDeleteAuditTenantBase = /** @class */ (function (_super) {
    __extends(SoftDeleteAuditTenantBase, _super);
    function SoftDeleteAuditTenantBase(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return SoftDeleteAuditTenantBase;
}(SoftDeleteAuditBase));
exports.SoftDeleteAuditTenantBase = SoftDeleteAuditTenantBase;
var RockstarVersion = /** @class */ (function (_super) {
    __extends(RockstarVersion, _super);
    function RockstarVersion(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return RockstarVersion;
}(RockstarBase));
exports.RockstarVersion = RockstarVersion;
// @Route("/messages/crud/{Id}", "PUT")
var MessageCrud = /** @class */ (function () {
    function MessageCrud(init) {
        Object.assign(this, init);
    }
    MessageCrud.prototype.createResponse = function () { };
    MessageCrud.prototype.getTypeName = function () { return 'MessageCrud'; };
    return MessageCrud;
}());
exports.MessageCrud = MessageCrud;
// @DataContract
var ResponseError = /** @class */ (function () {
    function ResponseError(init) {
        Object.assign(this, init);
    }
    return ResponseError;
}());
exports.ResponseError = ResponseError;
// @DataContract
var ResponseStatus = /** @class */ (function () {
    function ResponseStatus(init) {
        Object.assign(this, init);
    }
    return ResponseStatus;
}());
exports.ResponseStatus = ResponseStatus;
var MetadataTestNestedChild = /** @class */ (function () {
    function MetadataTestNestedChild(init) {
        Object.assign(this, init);
    }
    return MetadataTestNestedChild;
}());
exports.MetadataTestNestedChild = MetadataTestNestedChild;
var MetadataTestChild = /** @class */ (function () {
    function MetadataTestChild(init) {
        Object.assign(this, init);
    }
    return MetadataTestChild;
}());
exports.MetadataTestChild = MetadataTestChild;
var MenuItemExampleItem = /** @class */ (function () {
    function MenuItemExampleItem(init) {
        Object.assign(this, init);
    }
    return MenuItemExampleItem;
}());
exports.MenuItemExampleItem = MenuItemExampleItem;
var MenuItemExample = /** @class */ (function () {
    function MenuItemExample(init) {
        Object.assign(this, init);
    }
    return MenuItemExample;
}());
exports.MenuItemExample = MenuItemExample;
// @DataContract
var MenuExample = /** @class */ (function () {
    function MenuExample(init) {
        Object.assign(this, init);
    }
    return MenuExample;
}());
exports.MenuExample = MenuExample;
var ListResult = /** @class */ (function () {
    function ListResult(init) {
        Object.assign(this, init);
    }
    return ListResult;
}());
exports.ListResult = ListResult;
var ArrayResult = /** @class */ (function () {
    function ArrayResult(init) {
        Object.assign(this, init);
    }
    return ArrayResult;
}());
exports.ArrayResult = ArrayResult;
var HelloResponseBase = /** @class */ (function () {
    function HelloResponseBase(init) {
        Object.assign(this, init);
    }
    return HelloResponseBase;
}());
exports.HelloResponseBase = HelloResponseBase;
var HelloWithReturnResponse = /** @class */ (function () {
    function HelloWithReturnResponse(init) {
        Object.assign(this, init);
    }
    return HelloWithReturnResponse;
}());
exports.HelloWithReturnResponse = HelloWithReturnResponse;
var HelloType = /** @class */ (function () {
    function HelloType(init) {
        Object.assign(this, init);
    }
    return HelloType;
}());
exports.HelloType = HelloType;
var InnerType = /** @class */ (function () {
    function InnerType(init) {
        Object.assign(this, init);
    }
    return InnerType;
}());
exports.InnerType = InnerType;
var InnerEnum;
(function (InnerEnum) {
    InnerEnum["Foo"] = "Foo";
    InnerEnum["Bar"] = "Bar";
    InnerEnum["Baz"] = "Baz";
})(InnerEnum = exports.InnerEnum || (exports.InnerEnum = {}));
var ReturnedDto = /** @class */ (function () {
    function ReturnedDto(init) {
        Object.assign(this, init);
    }
    return ReturnedDto;
}());
exports.ReturnedDto = ReturnedDto;
var CustomUserSession = /** @class */ (function (_super) {
    __extends(CustomUserSession, _super);
    function CustomUserSession(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return CustomUserSession;
}(AuthUserSession));
exports.CustomUserSession = CustomUserSession;
var UnAuthInfo = /** @class */ (function () {
    function UnAuthInfo(init) {
        Object.assign(this, init);
    }
    return UnAuthInfo;
}());
exports.UnAuthInfo = UnAuthInfo;
var TypesGroup = /** @class */ (function () {
    function TypesGroup(init) {
        Object.assign(this, init);
    }
    return TypesGroup;
}());
exports.TypesGroup = TypesGroup;
// @DataContract
var QueryResponse = /** @class */ (function () {
    function QueryResponse(init) {
        Object.assign(this, init);
    }
    return QueryResponse;
}());
exports.QueryResponse = QueryResponse;
var ChatMessage = /** @class */ (function () {
    function ChatMessage(init) {
        Object.assign(this, init);
    }
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
var GetChatHistoryResponse = /** @class */ (function () {
    function GetChatHistoryResponse(init) {
        Object.assign(this, init);
    }
    return GetChatHistoryResponse;
}());
exports.GetChatHistoryResponse = GetChatHistoryResponse;
var GetUserDetailsResponse = /** @class */ (function () {
    function GetUserDetailsResponse(init) {
        Object.assign(this, init);
    }
    return GetUserDetailsResponse;
}());
exports.GetUserDetailsResponse = GetUserDetailsResponse;
var CustomHttpErrorResponse = /** @class */ (function () {
    function CustomHttpErrorResponse(init) {
        Object.assign(this, init);
    }
    return CustomHttpErrorResponse;
}());
exports.CustomHttpErrorResponse = CustomHttpErrorResponse;
var QueryResponseAlt = /** @class */ (function () {
    function QueryResponseAlt(init) {
        Object.assign(this, init);
    }
    return QueryResponseAlt;
}());
exports.QueryResponseAlt = QueryResponseAlt;
var Items = /** @class */ (function () {
    function Items(init) {
        Object.assign(this, init);
    }
    return Items;
}());
exports.Items = Items;
// @DataContract
var EmptyResponse = /** @class */ (function () {
    function EmptyResponse(init) {
        Object.assign(this, init);
    }
    return EmptyResponse;
}());
exports.EmptyResponse = EmptyResponse;
var ThrowTypeResponse = /** @class */ (function () {
    function ThrowTypeResponse(init) {
        Object.assign(this, init);
    }
    return ThrowTypeResponse;
}());
exports.ThrowTypeResponse = ThrowTypeResponse;
var ThrowValidationResponse = /** @class */ (function () {
    function ThrowValidationResponse(init) {
        Object.assign(this, init);
    }
    return ThrowValidationResponse;
}());
exports.ThrowValidationResponse = ThrowValidationResponse;
var ThrowBusinessErrorResponse = /** @class */ (function () {
    function ThrowBusinessErrorResponse(init) {
        Object.assign(this, init);
    }
    return ThrowBusinessErrorResponse;
}());
exports.ThrowBusinessErrorResponse = ThrowBusinessErrorResponse;
var Account = /** @class */ (function () {
    function Account(init) {
        Object.assign(this, init);
    }
    return Account;
}());
exports.Account = Account;
var Project = /** @class */ (function () {
    function Project(init) {
        Object.assign(this, init);
    }
    return Project;
}());
exports.Project = Project;
var SecuredResponse = /** @class */ (function () {
    function SecuredResponse(init) {
        Object.assign(this, init);
    }
    return SecuredResponse;
}());
exports.SecuredResponse = SecuredResponse;
var CreateJwtResponse = /** @class */ (function () {
    function CreateJwtResponse(init) {
        Object.assign(this, init);
    }
    return CreateJwtResponse;
}());
exports.CreateJwtResponse = CreateJwtResponse;
var CreateRefreshJwtResponse = /** @class */ (function () {
    function CreateRefreshJwtResponse(init) {
        Object.assign(this, init);
    }
    return CreateRefreshJwtResponse;
}());
exports.CreateRefreshJwtResponse = CreateRefreshJwtResponse;
var MetadataTestResponse = /** @class */ (function () {
    function MetadataTestResponse(init) {
        Object.assign(this, init);
    }
    return MetadataTestResponse;
}());
exports.MetadataTestResponse = MetadataTestResponse;
// @DataContract
var GetExampleResponse = /** @class */ (function () {
    function GetExampleResponse(init) {
        Object.assign(this, init);
    }
    return GetExampleResponse;
}());
exports.GetExampleResponse = GetExampleResponse;
// @Route("/messages/{Id}", "PUT")
var Message = /** @class */ (function () {
    function Message(init) {
        Object.assign(this, init);
    }
    Message.prototype.createResponse = function () { return new Message(); };
    Message.prototype.getTypeName = function () { return 'Message'; };
    return Message;
}());
exports.Message = Message;
var GetRandomIdsResponse = /** @class */ (function () {
    function GetRandomIdsResponse(init) {
        Object.assign(this, init);
    }
    return GetRandomIdsResponse;
}());
exports.GetRandomIdsResponse = GetRandomIdsResponse;
var HelloResponse = /** @class */ (function () {
    function HelloResponse(init) {
        Object.assign(this, init);
    }
    return HelloResponse;
}());
exports.HelloResponse = HelloResponse;
/**
* Description on HelloAllResponse type
*/
// @DataContract
var HelloAnnotatedResponse = /** @class */ (function () {
    function HelloAnnotatedResponse(init) {
        Object.assign(this, init);
    }
    return HelloAnnotatedResponse;
}());
exports.HelloAnnotatedResponse = HelloAnnotatedResponse;
var AllTypes = /** @class */ (function () {
    function AllTypes(init) {
        Object.assign(this, init);
    }
    AllTypes.prototype.createResponse = function () { return new AllTypes(); };
    AllTypes.prototype.getTypeName = function () { return 'AllTypes'; };
    return AllTypes;
}());
exports.AllTypes = AllTypes;
var AllCollectionTypes = /** @class */ (function () {
    function AllCollectionTypes(init) {
        Object.assign(this, init);
    }
    AllCollectionTypes.prototype.createResponse = function () { return new AllCollectionTypes(); };
    AllCollectionTypes.prototype.getTypeName = function () { return 'AllCollectionTypes'; };
    return AllCollectionTypes;
}());
exports.AllCollectionTypes = AllCollectionTypes;
var HelloAllTypesResponse = /** @class */ (function () {
    function HelloAllTypesResponse(init) {
        Object.assign(this, init);
    }
    return HelloAllTypesResponse;
}());
exports.HelloAllTypesResponse = HelloAllTypesResponse;
var SubAllTypes = /** @class */ (function (_super) {
    __extends(SubAllTypes, _super);
    function SubAllTypes(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return SubAllTypes;
}(AllTypesBase));
exports.SubAllTypes = SubAllTypes;
var HelloDateTime = /** @class */ (function () {
    function HelloDateTime(init) {
        Object.assign(this, init);
    }
    HelloDateTime.prototype.createResponse = function () { return new HelloDateTime(); };
    HelloDateTime.prototype.getTypeName = function () { return 'HelloDateTime'; };
    return HelloDateTime;
}());
exports.HelloDateTime = HelloDateTime;
// @DataContract
var HelloWithDataContractResponse = /** @class */ (function () {
    function HelloWithDataContractResponse(init) {
        Object.assign(this, init);
    }
    return HelloWithDataContractResponse;
}());
exports.HelloWithDataContractResponse = HelloWithDataContractResponse;
/**
* Description on HelloWithDescriptionResponse type
*/
var HelloWithDescriptionResponse = /** @class */ (function () {
    function HelloWithDescriptionResponse(init) {
        Object.assign(this, init);
    }
    return HelloWithDescriptionResponse;
}());
exports.HelloWithDescriptionResponse = HelloWithDescriptionResponse;
var HelloWithInheritanceResponse = /** @class */ (function (_super) {
    __extends(HelloWithInheritanceResponse, _super);
    function HelloWithInheritanceResponse(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return HelloWithInheritanceResponse;
}(HelloResponseBase));
exports.HelloWithInheritanceResponse = HelloWithInheritanceResponse;
var HelloWithAlternateReturnResponse = /** @class */ (function (_super) {
    __extends(HelloWithAlternateReturnResponse, _super);
    function HelloWithAlternateReturnResponse(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return HelloWithAlternateReturnResponse;
}(HelloWithReturnResponse));
exports.HelloWithAlternateReturnResponse = HelloWithAlternateReturnResponse;
var HelloWithRouteResponse = /** @class */ (function () {
    function HelloWithRouteResponse(init) {
        Object.assign(this, init);
    }
    return HelloWithRouteResponse;
}());
exports.HelloWithRouteResponse = HelloWithRouteResponse;
var HelloWithTypeResponse = /** @class */ (function () {
    function HelloWithTypeResponse(init) {
        Object.assign(this, init);
    }
    return HelloWithTypeResponse;
}());
exports.HelloWithTypeResponse = HelloWithTypeResponse;
var HelloInnerTypesResponse = /** @class */ (function () {
    function HelloInnerTypesResponse(init) {
        Object.assign(this, init);
    }
    return HelloInnerTypesResponse;
}());
exports.HelloInnerTypesResponse = HelloInnerTypesResponse;
var HelloVerbResponse = /** @class */ (function () {
    function HelloVerbResponse(init) {
        Object.assign(this, init);
    }
    return HelloVerbResponse;
}());
exports.HelloVerbResponse = HelloVerbResponse;
var EnumResponse = /** @class */ (function () {
    function EnumResponse(init) {
        Object.assign(this, init);
    }
    return EnumResponse;
}());
exports.EnumResponse = EnumResponse;
// @Route("/hellotypes/{Name}")
var HelloTypes = /** @class */ (function () {
    function HelloTypes(init) {
        Object.assign(this, init);
    }
    HelloTypes.prototype.createResponse = function () { return new HelloTypes(); };
    HelloTypes.prototype.getTypeName = function () { return 'HelloTypes'; };
    return HelloTypes;
}());
exports.HelloTypes = HelloTypes;
// @DataContract
var HelloZipResponse = /** @class */ (function () {
    function HelloZipResponse(init) {
        Object.assign(this, init);
    }
    return HelloZipResponse;
}());
exports.HelloZipResponse = HelloZipResponse;
var PingResponse = /** @class */ (function () {
    function PingResponse(init) {
        Object.assign(this, init);
    }
    return PingResponse;
}());
exports.PingResponse = PingResponse;
var RequiresRoleResponse = /** @class */ (function () {
    function RequiresRoleResponse(init) {
        Object.assign(this, init);
    }
    return RequiresRoleResponse;
}());
exports.RequiresRoleResponse = RequiresRoleResponse;
var SendVerbResponse = /** @class */ (function () {
    function SendVerbResponse(init) {
        Object.assign(this, init);
    }
    return SendVerbResponse;
}());
exports.SendVerbResponse = SendVerbResponse;
var GetSessionResponse = /** @class */ (function () {
    function GetSessionResponse(init) {
        Object.assign(this, init);
    }
    return GetSessionResponse;
}());
exports.GetSessionResponse = GetSessionResponse;
// @DataContract(Namespace="http://schemas.servicestack.net/types")
var GetStuffResponse = /** @class */ (function () {
    function GetStuffResponse(init) {
        Object.assign(this, init);
    }
    return GetStuffResponse;
}());
exports.GetStuffResponse = GetStuffResponse;
var StoreLogsResponse = /** @class */ (function () {
    function StoreLogsResponse(init) {
        Object.assign(this, init);
    }
    return StoreLogsResponse;
}());
exports.StoreLogsResponse = StoreLogsResponse;
var TestAuthResponse = /** @class */ (function () {
    function TestAuthResponse(init) {
        Object.assign(this, init);
    }
    return TestAuthResponse;
}());
exports.TestAuthResponse = TestAuthResponse;
var RequiresAdmin = /** @class */ (function () {
    function RequiresAdmin(init) {
        Object.assign(this, init);
    }
    RequiresAdmin.prototype.createResponse = function () { return new RequiresAdmin(); };
    RequiresAdmin.prototype.getTypeName = function () { return 'RequiresAdmin'; };
    return RequiresAdmin;
}());
exports.RequiresAdmin = RequiresAdmin;
// @Route("/custom")
// @Route("/custom/{Data}")
var CustomRoute = /** @class */ (function () {
    function CustomRoute(init) {
        Object.assign(this, init);
    }
    CustomRoute.prototype.createResponse = function () { return new CustomRoute(); };
    CustomRoute.prototype.getTypeName = function () { return 'CustomRoute'; };
    return CustomRoute;
}());
exports.CustomRoute = CustomRoute;
// @Route("/wait/{ForMs}")
var Wait = /** @class */ (function () {
    function Wait(init) {
        Object.assign(this, init);
    }
    Wait.prototype.createResponse = function () { return new Wait(); };
    Wait.prototype.getTypeName = function () { return 'Wait'; };
    return Wait;
}());
exports.Wait = Wait;
// @Route("/echo/types")
var EchoTypes = /** @class */ (function () {
    function EchoTypes(init) {
        Object.assign(this, init);
    }
    EchoTypes.prototype.createResponse = function () { return new EchoTypes(); };
    EchoTypes.prototype.getTypeName = function () { return 'EchoTypes'; };
    return EchoTypes;
}());
exports.EchoTypes = EchoTypes;
// @Route("/echo/collections")
var EchoCollections = /** @class */ (function () {
    function EchoCollections(init) {
        Object.assign(this, init);
    }
    EchoCollections.prototype.createResponse = function () { return new EchoCollections(); };
    EchoCollections.prototype.getTypeName = function () { return 'EchoCollections'; };
    return EchoCollections;
}());
exports.EchoCollections = EchoCollections;
// @Route("/echo/complex")
var EchoComplexTypes = /** @class */ (function () {
    function EchoComplexTypes(init) {
        Object.assign(this, init);
    }
    EchoComplexTypes.prototype.createResponse = function () { return new EchoComplexTypes(); };
    EchoComplexTypes.prototype.getTypeName = function () { return 'EchoComplexTypes'; };
    return EchoComplexTypes;
}());
exports.EchoComplexTypes = EchoComplexTypes;
// @Route("/rockstars", "POST")
var StoreRockstars = /** @class */ (function (_super) {
    __extends(StoreRockstars, _super);
    function StoreRockstars(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    StoreRockstars.prototype.createResponse = function () { return new StoreRockstars(); };
    StoreRockstars.prototype.getTypeName = function () { return 'StoreRockstars'; };
    return StoreRockstars;
}(Array));
exports.StoreRockstars = StoreRockstars;
// @DataContract
var AuthenticateResponse = /** @class */ (function () {
    function AuthenticateResponse(init) {
        Object.assign(this, init);
    }
    return AuthenticateResponse;
}());
exports.AuthenticateResponse = AuthenticateResponse;
// @DataContract
var AssignRolesResponse = /** @class */ (function () {
    function AssignRolesResponse(init) {
        Object.assign(this, init);
    }
    return AssignRolesResponse;
}());
exports.AssignRolesResponse = AssignRolesResponse;
// @DataContract
var UnAssignRolesResponse = /** @class */ (function () {
    function UnAssignRolesResponse(init) {
        Object.assign(this, init);
    }
    return UnAssignRolesResponse;
}());
exports.UnAssignRolesResponse = UnAssignRolesResponse;
// @DataContract
var ConvertSessionToTokenResponse = /** @class */ (function () {
    function ConvertSessionToTokenResponse(init) {
        Object.assign(this, init);
    }
    return ConvertSessionToTokenResponse;
}());
exports.ConvertSessionToTokenResponse = ConvertSessionToTokenResponse;
// @DataContract
var GetAccessTokenResponse = /** @class */ (function () {
    function GetAccessTokenResponse(init) {
        Object.assign(this, init);
    }
    return GetAccessTokenResponse;
}());
exports.GetAccessTokenResponse = GetAccessTokenResponse;
var RockstarWithIdResponse = /** @class */ (function () {
    function RockstarWithIdResponse(init) {
        Object.assign(this, init);
    }
    return RockstarWithIdResponse;
}());
exports.RockstarWithIdResponse = RockstarWithIdResponse;
var RockstarWithIdAndResultResponse = /** @class */ (function () {
    function RockstarWithIdAndResultResponse(init) {
        Object.assign(this, init);
    }
    return RockstarWithIdAndResultResponse;
}());
exports.RockstarWithIdAndResultResponse = RockstarWithIdAndResultResponse;
var RockstarWithIdAndCountResponse = /** @class */ (function () {
    function RockstarWithIdAndCountResponse(init) {
        Object.assign(this, init);
    }
    return RockstarWithIdAndCountResponse;
}());
exports.RockstarWithIdAndCountResponse = RockstarWithIdAndCountResponse;
var RockstarWithIdAndRowVersionResponse = /** @class */ (function () {
    function RockstarWithIdAndRowVersionResponse(init) {
        Object.assign(this, init);
    }
    return RockstarWithIdAndRowVersionResponse;
}());
exports.RockstarWithIdAndRowVersionResponse = RockstarWithIdAndRowVersionResponse;
var QueryItems = /** @class */ (function (_super) {
    __extends(QueryItems, _super);
    function QueryItems(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    QueryItems.prototype.createResponse = function () { return new QueryResponse(); };
    QueryItems.prototype.getTypeName = function () { return 'QueryItems'; };
    return QueryItems;
}(QueryDb_2));
exports.QueryItems = QueryItems;
// @Route("/channels/{Channel}/raw")
var PostRawToChannel = /** @class */ (function () {
    function PostRawToChannel(init) {
        Object.assign(this, init);
    }
    PostRawToChannel.prototype.createResponse = function () { };
    PostRawToChannel.prototype.getTypeName = function () { return 'PostRawToChannel'; };
    return PostRawToChannel;
}());
exports.PostRawToChannel = PostRawToChannel;
// @Route("/channels/{Channel}/chat")
var PostChatToChannel = /** @class */ (function () {
    function PostChatToChannel(init) {
        Object.assign(this, init);
    }
    PostChatToChannel.prototype.createResponse = function () { return new ChatMessage(); };
    PostChatToChannel.prototype.getTypeName = function () { return 'PostChatToChannel'; };
    return PostChatToChannel;
}());
exports.PostChatToChannel = PostChatToChannel;
// @Route("/chathistory")
var GetChatHistory = /** @class */ (function () {
    function GetChatHistory(init) {
        Object.assign(this, init);
    }
    GetChatHistory.prototype.createResponse = function () { return new GetChatHistoryResponse(); };
    GetChatHistory.prototype.getTypeName = function () { return 'GetChatHistory'; };
    return GetChatHistory;
}());
exports.GetChatHistory = GetChatHistory;
// @Route("/reset")
var ClearChatHistory = /** @class */ (function () {
    function ClearChatHistory(init) {
        Object.assign(this, init);
    }
    ClearChatHistory.prototype.createResponse = function () { };
    ClearChatHistory.prototype.getTypeName = function () { return 'ClearChatHistory'; };
    return ClearChatHistory;
}());
exports.ClearChatHistory = ClearChatHistory;
// @Route("/reset-serverevents")
var ResetServerEvents = /** @class */ (function () {
    function ResetServerEvents(init) {
        Object.assign(this, init);
    }
    ResetServerEvents.prototype.createResponse = function () { };
    ResetServerEvents.prototype.getTypeName = function () { return 'ResetServerEvents'; };
    return ResetServerEvents;
}());
exports.ResetServerEvents = ResetServerEvents;
// @Route("/channels/{Channel}/object")
var PostObjectToChannel = /** @class */ (function () {
    function PostObjectToChannel(init) {
        Object.assign(this, init);
    }
    PostObjectToChannel.prototype.createResponse = function () { };
    PostObjectToChannel.prototype.getTypeName = function () { return 'PostObjectToChannel'; };
    return PostObjectToChannel;
}());
exports.PostObjectToChannel = PostObjectToChannel;
// @Route("/account")
var GetUserDetails = /** @class */ (function () {
    function GetUserDetails(init) {
        Object.assign(this, init);
    }
    GetUserDetails.prototype.createResponse = function () { return new GetUserDetailsResponse(); };
    GetUserDetails.prototype.getTypeName = function () { return 'GetUserDetails'; };
    return GetUserDetails;
}());
exports.GetUserDetails = GetUserDetails;
var CustomHttpError = /** @class */ (function () {
    function CustomHttpError(init) {
        Object.assign(this, init);
    }
    CustomHttpError.prototype.createResponse = function () { return new CustomHttpErrorResponse(); };
    CustomHttpError.prototype.getTypeName = function () { return 'CustomHttpError'; };
    return CustomHttpError;
}());
exports.CustomHttpError = CustomHttpError;
var AltQueryItems = /** @class */ (function () {
    function AltQueryItems(init) {
        Object.assign(this, init);
    }
    AltQueryItems.prototype.createResponse = function () { return new QueryResponseAlt(); };
    AltQueryItems.prototype.getTypeName = function () { return 'AltQueryItems'; };
    return AltQueryItems;
}());
exports.AltQueryItems = AltQueryItems;
var GetItems = /** @class */ (function () {
    function GetItems(init) {
        Object.assign(this, init);
    }
    GetItems.prototype.createResponse = function () { return new Items(); };
    GetItems.prototype.getTypeName = function () { return 'GetItems'; };
    return GetItems;
}());
exports.GetItems = GetItems;
var GetNakedItems = /** @class */ (function () {
    function GetNakedItems(init) {
        Object.assign(this, init);
    }
    GetNakedItems.prototype.createResponse = function () { return new Array(); };
    GetNakedItems.prototype.getTypeName = function () { return 'GetNakedItems'; };
    return GetNakedItems;
}());
exports.GetNakedItems = GetNakedItems;
var DeclarativeCollectiveValidationTest = /** @class */ (function () {
    function DeclarativeCollectiveValidationTest(init) {
        Object.assign(this, init);
    }
    DeclarativeCollectiveValidationTest.prototype.createResponse = function () { return new EmptyResponse(); };
    DeclarativeCollectiveValidationTest.prototype.getTypeName = function () { return 'DeclarativeCollectiveValidationTest'; };
    return DeclarativeCollectiveValidationTest;
}());
exports.DeclarativeCollectiveValidationTest = DeclarativeCollectiveValidationTest;
var DeclarativeSingleValidationTest = /** @class */ (function () {
    function DeclarativeSingleValidationTest(init) {
        Object.assign(this, init);
    }
    DeclarativeSingleValidationTest.prototype.createResponse = function () { return new EmptyResponse(); };
    DeclarativeSingleValidationTest.prototype.getTypeName = function () { return 'DeclarativeSingleValidationTest'; };
    return DeclarativeSingleValidationTest;
}());
exports.DeclarativeSingleValidationTest = DeclarativeSingleValidationTest;
var DummyTypes = /** @class */ (function () {
    function DummyTypes(init) {
        Object.assign(this, init);
    }
    return DummyTypes;
}());
exports.DummyTypes = DummyTypes;
// @Route("/throwhttperror/{Status}")
var ThrowHttpError = /** @class */ (function () {
    function ThrowHttpError(init) {
        Object.assign(this, init);
    }
    return ThrowHttpError;
}());
exports.ThrowHttpError = ThrowHttpError;
// @Route("/throw404")
// @Route("/throw404/{Message}")
var Throw404 = /** @class */ (function () {
    function Throw404(init) {
        Object.assign(this, init);
    }
    return Throw404;
}());
exports.Throw404 = Throw404;
// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
var ThrowCustom400 = /** @class */ (function () {
    function ThrowCustom400(init) {
        Object.assign(this, init);
    }
    return ThrowCustom400;
}());
exports.ThrowCustom400 = ThrowCustom400;
// @Route("/throw/{Type}")
var ThrowType = /** @class */ (function () {
    function ThrowType(init) {
        Object.assign(this, init);
    }
    ThrowType.prototype.createResponse = function () { return new ThrowTypeResponse(); };
    ThrowType.prototype.getTypeName = function () { return 'ThrowType'; };
    return ThrowType;
}());
exports.ThrowType = ThrowType;
// @Route("/throwvalidation")
var ThrowValidation = /** @class */ (function () {
    function ThrowValidation(init) {
        Object.assign(this, init);
    }
    ThrowValidation.prototype.createResponse = function () { return new ThrowValidationResponse(); };
    ThrowValidation.prototype.getTypeName = function () { return 'ThrowValidation'; };
    return ThrowValidation;
}());
exports.ThrowValidation = ThrowValidation;
// @Route("/throwbusinesserror")
var ThrowBusinessError = /** @class */ (function () {
    function ThrowBusinessError(init) {
        Object.assign(this, init);
    }
    ThrowBusinessError.prototype.createResponse = function () { return new ThrowBusinessErrorResponse(); };
    ThrowBusinessError.prototype.getTypeName = function () { return 'ThrowBusinessError'; };
    return ThrowBusinessError;
}());
exports.ThrowBusinessError = ThrowBusinessError;
var RootPathRoutes = /** @class */ (function () {
    function RootPathRoutes(init) {
        Object.assign(this, init);
    }
    return RootPathRoutes;
}());
exports.RootPathRoutes = RootPathRoutes;
var GetAccount = /** @class */ (function () {
    function GetAccount(init) {
        Object.assign(this, init);
    }
    GetAccount.prototype.createResponse = function () { return new Account(); };
    GetAccount.prototype.getTypeName = function () { return 'GetAccount'; };
    return GetAccount;
}());
exports.GetAccount = GetAccount;
var GetProject = /** @class */ (function () {
    function GetProject(init) {
        Object.assign(this, init);
    }
    GetProject.prototype.createResponse = function () { return new Project(); };
    GetProject.prototype.getTypeName = function () { return 'GetProject'; };
    return GetProject;
}());
exports.GetProject = GetProject;
// @Route("/image-stream")
var ImageAsStream = /** @class */ (function () {
    function ImageAsStream(init) {
        Object.assign(this, init);
    }
    ImageAsStream.prototype.createResponse = function () { return new Blob(); };
    ImageAsStream.prototype.getTypeName = function () { return 'ImageAsStream'; };
    return ImageAsStream;
}());
exports.ImageAsStream = ImageAsStream;
// @Route("/image-bytes")
var ImageAsBytes = /** @class */ (function () {
    function ImageAsBytes(init) {
        Object.assign(this, init);
    }
    ImageAsBytes.prototype.createResponse = function () { return new Blob(); };
    ImageAsBytes.prototype.getTypeName = function () { return 'ImageAsBytes'; };
    return ImageAsBytes;
}());
exports.ImageAsBytes = ImageAsBytes;
// @Route("/image-custom")
var ImageAsCustomResult = /** @class */ (function () {
    function ImageAsCustomResult(init) {
        Object.assign(this, init);
    }
    ImageAsCustomResult.prototype.createResponse = function () { return new Blob(); };
    ImageAsCustomResult.prototype.getTypeName = function () { return 'ImageAsCustomResult'; };
    return ImageAsCustomResult;
}());
exports.ImageAsCustomResult = ImageAsCustomResult;
// @Route("/image-response")
var ImageWriteToResponse = /** @class */ (function () {
    function ImageWriteToResponse(init) {
        Object.assign(this, init);
    }
    ImageWriteToResponse.prototype.createResponse = function () { return new Blob(); };
    ImageWriteToResponse.prototype.getTypeName = function () { return 'ImageWriteToResponse'; };
    return ImageWriteToResponse;
}());
exports.ImageWriteToResponse = ImageWriteToResponse;
// @Route("/image-file")
var ImageAsFile = /** @class */ (function () {
    function ImageAsFile(init) {
        Object.assign(this, init);
    }
    ImageAsFile.prototype.createResponse = function () { return new Blob(); };
    ImageAsFile.prototype.getTypeName = function () { return 'ImageAsFile'; };
    return ImageAsFile;
}());
exports.ImageAsFile = ImageAsFile;
// @Route("/image-redirect")
var ImageAsRedirect = /** @class */ (function () {
    function ImageAsRedirect(init) {
        Object.assign(this, init);
    }
    return ImageAsRedirect;
}());
exports.ImageAsRedirect = ImageAsRedirect;
// @Route("/hello-image/{Name}")
var HelloImage = /** @class */ (function () {
    function HelloImage(init) {
        Object.assign(this, init);
    }
    HelloImage.prototype.createResponse = function () { return new Blob(); };
    HelloImage.prototype.getTypeName = function () { return 'HelloImage'; };
    return HelloImage;
}());
exports.HelloImage = HelloImage;
// @Route("/secured")
// @ValidateRequest(Validator="IsAuthenticated")
var Secured = /** @class */ (function () {
    function Secured(init) {
        Object.assign(this, init);
    }
    Secured.prototype.createResponse = function () { return new SecuredResponse(); };
    Secured.prototype.getTypeName = function () { return 'Secured'; };
    return Secured;
}());
exports.Secured = Secured;
// @Route("/jwt")
var CreateJwt = /** @class */ (function (_super) {
    __extends(CreateJwt, _super);
    function CreateJwt(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    CreateJwt.prototype.createResponse = function () { return new CreateJwtResponse(); };
    CreateJwt.prototype.getTypeName = function () { return 'CreateJwt'; };
    return CreateJwt;
}(AuthUserSession));
exports.CreateJwt = CreateJwt;
// @Route("/jwt-refresh")
var CreateRefreshJwt = /** @class */ (function () {
    function CreateRefreshJwt(init) {
        Object.assign(this, init);
    }
    CreateRefreshJwt.prototype.createResponse = function () { return new CreateRefreshJwtResponse(); };
    CreateRefreshJwt.prototype.getTypeName = function () { return 'CreateRefreshJwt'; };
    return CreateRefreshJwt;
}());
exports.CreateRefreshJwt = CreateRefreshJwt;
// @Route("/jwt-invalidate")
var InvalidateLastAccessToken = /** @class */ (function () {
    function InvalidateLastAccessToken(init) {
        Object.assign(this, init);
    }
    InvalidateLastAccessToken.prototype.createResponse = function () { return new EmptyResponse(); };
    InvalidateLastAccessToken.prototype.getTypeName = function () { return 'InvalidateLastAccessToken'; };
    return InvalidateLastAccessToken;
}());
exports.InvalidateLastAccessToken = InvalidateLastAccessToken;
// @Route("/logs")
var ViewLogs = /** @class */ (function () {
    function ViewLogs(init) {
        Object.assign(this, init);
    }
    ViewLogs.prototype.createResponse = function () { return ''; };
    ViewLogs.prototype.getTypeName = function () { return 'ViewLogs'; };
    return ViewLogs;
}());
exports.ViewLogs = ViewLogs;
// @Route("/metadatatest")
var MetadataTest = /** @class */ (function () {
    function MetadataTest(init) {
        Object.assign(this, init);
    }
    MetadataTest.prototype.createResponse = function () { return new MetadataTestResponse(); };
    MetadataTest.prototype.getTypeName = function () { return 'MetadataTest'; };
    return MetadataTest;
}());
exports.MetadataTest = MetadataTest;
// @Route("/metadatatest-array")
var MetadataTestArray = /** @class */ (function () {
    function MetadataTestArray(init) {
        Object.assign(this, init);
    }
    MetadataTestArray.prototype.createResponse = function () { return new Array(); };
    MetadataTestArray.prototype.getTypeName = function () { return 'MetadataTestArray'; };
    return MetadataTestArray;
}());
exports.MetadataTestArray = MetadataTestArray;
// @Route("/example", "GET")
// @DataContract
var GetExample = /** @class */ (function () {
    function GetExample(init) {
        Object.assign(this, init);
    }
    GetExample.prototype.createResponse = function () { return new GetExampleResponse(); };
    GetExample.prototype.getTypeName = function () { return 'GetExample'; };
    return GetExample;
}());
exports.GetExample = GetExample;
// @Route("/messages/{Id}", "GET")
var RequestMessage = /** @class */ (function () {
    function RequestMessage(init) {
        Object.assign(this, init);
    }
    RequestMessage.prototype.createResponse = function () { return new Message(); };
    RequestMessage.prototype.getTypeName = function () { return 'RequestMessage'; };
    return RequestMessage;
}());
exports.RequestMessage = RequestMessage;
// @Route("/randomids")
var GetRandomIds = /** @class */ (function () {
    function GetRandomIds(init) {
        Object.assign(this, init);
    }
    GetRandomIds.prototype.createResponse = function () { return new GetRandomIdsResponse(); };
    GetRandomIds.prototype.getTypeName = function () { return 'GetRandomIds'; };
    return GetRandomIds;
}());
exports.GetRandomIds = GetRandomIds;
// @Route("/textfile-test")
var TextFileTest = /** @class */ (function () {
    function TextFileTest(init) {
        Object.assign(this, init);
    }
    return TextFileTest;
}());
exports.TextFileTest = TextFileTest;
// @Route("/return/text")
var ReturnText = /** @class */ (function () {
    function ReturnText(init) {
        Object.assign(this, init);
    }
    return ReturnText;
}());
exports.ReturnText = ReturnText;
// @Route("/return/html")
var ReturnHtml = /** @class */ (function () {
    function ReturnHtml(init) {
        Object.assign(this, init);
    }
    return ReturnHtml;
}());
exports.ReturnHtml = ReturnHtml;
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = /** @class */ (function () {
    function Hello(init) {
        Object.assign(this, init);
    }
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    Hello.prototype.getTypeName = function () { return 'Hello'; };
    return Hello;
}());
exports.Hello = Hello;
/**
* Description on HelloAll type
*/
// @DataContract
var HelloAnnotated = /** @class */ (function () {
    function HelloAnnotated(init) {
        Object.assign(this, init);
    }
    HelloAnnotated.prototype.createResponse = function () { return new HelloAnnotatedResponse(); };
    HelloAnnotated.prototype.getTypeName = function () { return 'HelloAnnotated'; };
    return HelloAnnotated;
}());
exports.HelloAnnotated = HelloAnnotated;
var HelloWithNestedClass = /** @class */ (function () {
    function HelloWithNestedClass(init) {
        Object.assign(this, init);
    }
    HelloWithNestedClass.prototype.createResponse = function () { return new HelloResponse(); };
    HelloWithNestedClass.prototype.getTypeName = function () { return 'HelloWithNestedClass'; };
    return HelloWithNestedClass;
}());
exports.HelloWithNestedClass = HelloWithNestedClass;
var HelloList = /** @class */ (function () {
    function HelloList(init) {
        Object.assign(this, init);
    }
    HelloList.prototype.createResponse = function () { return new Array(); };
    HelloList.prototype.getTypeName = function () { return 'HelloList'; };
    return HelloList;
}());
exports.HelloList = HelloList;
var HelloArray = /** @class */ (function () {
    function HelloArray(init) {
        Object.assign(this, init);
    }
    HelloArray.prototype.createResponse = function () { return new Array(); };
    HelloArray.prototype.getTypeName = function () { return 'HelloArray'; };
    return HelloArray;
}());
exports.HelloArray = HelloArray;
var HelloWithEnum = /** @class */ (function () {
    function HelloWithEnum(init) {
        Object.assign(this, init);
    }
    return HelloWithEnum;
}());
exports.HelloWithEnum = HelloWithEnum;
var HelloWithEnumList = /** @class */ (function () {
    function HelloWithEnumList(init) {
        Object.assign(this, init);
    }
    return HelloWithEnumList;
}());
exports.HelloWithEnumList = HelloWithEnumList;
var HelloWithEnumMap = /** @class */ (function () {
    function HelloWithEnumMap(init) {
        Object.assign(this, init);
    }
    return HelloWithEnumMap;
}());
exports.HelloWithEnumMap = HelloWithEnumMap;
var RestrictedAttributes = /** @class */ (function () {
    function RestrictedAttributes(init) {
        Object.assign(this, init);
    }
    return RestrictedAttributes;
}());
exports.RestrictedAttributes = RestrictedAttributes;
/**
* AllowedAttributes Description
*/
// @Route("/allowed-attributes", "GET")
// @Api(Description="AllowedAttributes Description")
// @ApiResponse(Description="Your request was not understood", StatusCode=400)
// @DataContract
var AllowedAttributes = /** @class */ (function () {
    function AllowedAttributes(init) {
        Object.assign(this, init);
    }
    return AllowedAttributes;
}());
exports.AllowedAttributes = AllowedAttributes;
// @Route("/all-types")
var HelloAllTypes = /** @class */ (function () {
    function HelloAllTypes(init) {
        Object.assign(this, init);
    }
    HelloAllTypes.prototype.createResponse = function () { return new HelloAllTypesResponse(); };
    HelloAllTypes.prototype.getTypeName = function () { return 'HelloAllTypes'; };
    return HelloAllTypes;
}());
exports.HelloAllTypes = HelloAllTypes;
var HelloSubAllTypes = /** @class */ (function (_super) {
    __extends(HelloSubAllTypes, _super);
    function HelloSubAllTypes(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    HelloSubAllTypes.prototype.createResponse = function () { return new SubAllTypes(); };
    HelloSubAllTypes.prototype.getTypeName = function () { return 'HelloSubAllTypes'; };
    return HelloSubAllTypes;
}(AllTypesBase));
exports.HelloSubAllTypes = HelloSubAllTypes;
var HelloString = /** @class */ (function () {
    function HelloString(init) {
        Object.assign(this, init);
    }
    HelloString.prototype.createResponse = function () { return ''; };
    HelloString.prototype.getTypeName = function () { return 'HelloString'; };
    return HelloString;
}());
exports.HelloString = HelloString;
var HelloVoid = /** @class */ (function () {
    function HelloVoid(init) {
        Object.assign(this, init);
    }
    return HelloVoid;
}());
exports.HelloVoid = HelloVoid;
// @DataContract
var HelloWithDataContract = /** @class */ (function () {
    function HelloWithDataContract(init) {
        Object.assign(this, init);
    }
    HelloWithDataContract.prototype.createResponse = function () { return new HelloWithDataContractResponse(); };
    HelloWithDataContract.prototype.getTypeName = function () { return 'HelloWithDataContract'; };
    return HelloWithDataContract;
}());
exports.HelloWithDataContract = HelloWithDataContract;
/**
* Description on HelloWithDescription type
*/
var HelloWithDescription = /** @class */ (function () {
    function HelloWithDescription(init) {
        Object.assign(this, init);
    }
    HelloWithDescription.prototype.createResponse = function () { return new HelloWithDescriptionResponse(); };
    HelloWithDescription.prototype.getTypeName = function () { return 'HelloWithDescription'; };
    return HelloWithDescription;
}());
exports.HelloWithDescription = HelloWithDescription;
var HelloWithInheritance = /** @class */ (function (_super) {
    __extends(HelloWithInheritance, _super);
    function HelloWithInheritance(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    HelloWithInheritance.prototype.createResponse = function () { return new HelloWithInheritanceResponse(); };
    HelloWithInheritance.prototype.getTypeName = function () { return 'HelloWithInheritance'; };
    return HelloWithInheritance;
}(HelloBase));
exports.HelloWithInheritance = HelloWithInheritance;
var HelloWithGenericInheritance = /** @class */ (function (_super) {
    __extends(HelloWithGenericInheritance, _super);
    function HelloWithGenericInheritance(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return HelloWithGenericInheritance;
}(HelloBase_1));
exports.HelloWithGenericInheritance = HelloWithGenericInheritance;
var HelloWithGenericInheritance2 = /** @class */ (function (_super) {
    __extends(HelloWithGenericInheritance2, _super);
    function HelloWithGenericInheritance2(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return HelloWithGenericInheritance2;
}(HelloBase_1));
exports.HelloWithGenericInheritance2 = HelloWithGenericInheritance2;
var HelloWithNestedInheritance = /** @class */ (function (_super) {
    __extends(HelloWithNestedInheritance, _super);
    function HelloWithNestedInheritance(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return HelloWithNestedInheritance;
}(HelloBase_1));
exports.HelloWithNestedInheritance = HelloWithNestedInheritance;
var HelloWithReturn = /** @class */ (function () {
    function HelloWithReturn(init) {
        Object.assign(this, init);
    }
    HelloWithReturn.prototype.createResponse = function () { return new HelloWithAlternateReturnResponse(); };
    HelloWithReturn.prototype.getTypeName = function () { return 'HelloWithReturn'; };
    return HelloWithReturn;
}());
exports.HelloWithReturn = HelloWithReturn;
// @Route("/helloroute")
var HelloWithRoute = /** @class */ (function () {
    function HelloWithRoute(init) {
        Object.assign(this, init);
    }
    HelloWithRoute.prototype.createResponse = function () { return new HelloWithRouteResponse(); };
    HelloWithRoute.prototype.getTypeName = function () { return 'HelloWithRoute'; };
    return HelloWithRoute;
}());
exports.HelloWithRoute = HelloWithRoute;
var HelloWithType = /** @class */ (function () {
    function HelloWithType(init) {
        Object.assign(this, init);
    }
    HelloWithType.prototype.createResponse = function () { return new HelloWithTypeResponse(); };
    HelloWithType.prototype.getTypeName = function () { return 'HelloWithType'; };
    return HelloWithType;
}());
exports.HelloWithType = HelloWithType;
var HelloInterface = /** @class */ (function () {
    function HelloInterface(init) {
        Object.assign(this, init);
    }
    return HelloInterface;
}());
exports.HelloInterface = HelloInterface;
var HelloInnerTypes = /** @class */ (function () {
    function HelloInnerTypes(init) {
        Object.assign(this, init);
    }
    HelloInnerTypes.prototype.createResponse = function () { return new HelloInnerTypesResponse(); };
    HelloInnerTypes.prototype.getTypeName = function () { return 'HelloInnerTypes'; };
    return HelloInnerTypes;
}());
exports.HelloInnerTypes = HelloInnerTypes;
var HelloBuiltin = /** @class */ (function () {
    function HelloBuiltin(init) {
        Object.assign(this, init);
    }
    return HelloBuiltin;
}());
exports.HelloBuiltin = HelloBuiltin;
var HelloGet = /** @class */ (function () {
    function HelloGet(init) {
        Object.assign(this, init);
    }
    HelloGet.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloGet.prototype.getTypeName = function () { return 'HelloGet'; };
    return HelloGet;
}());
exports.HelloGet = HelloGet;
var HelloPost = /** @class */ (function (_super) {
    __extends(HelloPost, _super);
    function HelloPost(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    HelloPost.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPost.prototype.getTypeName = function () { return 'HelloPost'; };
    return HelloPost;
}(HelloBase));
exports.HelloPost = HelloPost;
var HelloPut = /** @class */ (function () {
    function HelloPut(init) {
        Object.assign(this, init);
    }
    HelloPut.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPut.prototype.getTypeName = function () { return 'HelloPut'; };
    return HelloPut;
}());
exports.HelloPut = HelloPut;
var HelloDelete = /** @class */ (function () {
    function HelloDelete(init) {
        Object.assign(this, init);
    }
    HelloDelete.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloDelete.prototype.getTypeName = function () { return 'HelloDelete'; };
    return HelloDelete;
}());
exports.HelloDelete = HelloDelete;
var HelloPatch = /** @class */ (function () {
    function HelloPatch(init) {
        Object.assign(this, init);
    }
    HelloPatch.prototype.createResponse = function () { return new HelloVerbResponse(); };
    HelloPatch.prototype.getTypeName = function () { return 'HelloPatch'; };
    return HelloPatch;
}());
exports.HelloPatch = HelloPatch;
var HelloReturnVoid = /** @class */ (function () {
    function HelloReturnVoid(init) {
        Object.assign(this, init);
    }
    HelloReturnVoid.prototype.createResponse = function () { };
    HelloReturnVoid.prototype.getTypeName = function () { return 'HelloReturnVoid'; };
    return HelloReturnVoid;
}());
exports.HelloReturnVoid = HelloReturnVoid;
var EnumRequest = /** @class */ (function () {
    function EnumRequest(init) {
        Object.assign(this, init);
    }
    EnumRequest.prototype.createResponse = function () { return new EnumResponse(); };
    EnumRequest.prototype.getTypeName = function () { return 'EnumRequest'; };
    return EnumRequest;
}());
exports.EnumRequest = EnumRequest;
// @Route("/hellozip")
// @DataContract
var HelloZip = /** @class */ (function () {
    function HelloZip(init) {
        Object.assign(this, init);
    }
    HelloZip.prototype.createResponse = function () { return new HelloZipResponse(); };
    HelloZip.prototype.getTypeName = function () { return 'HelloZip'; };
    return HelloZip;
}());
exports.HelloZip = HelloZip;
// @Route("/ping")
var Ping = /** @class */ (function () {
    function Ping(init) {
        Object.assign(this, init);
    }
    Ping.prototype.createResponse = function () { return new PingResponse(); };
    Ping.prototype.getTypeName = function () { return 'Ping'; };
    return Ping;
}());
exports.Ping = Ping;
// @Route("/reset-connections")
var ResetConnections = /** @class */ (function () {
    function ResetConnections(init) {
        Object.assign(this, init);
    }
    return ResetConnections;
}());
exports.ResetConnections = ResetConnections;
// @Route("/requires-role")
var RequiresRole = /** @class */ (function () {
    function RequiresRole(init) {
        Object.assign(this, init);
    }
    RequiresRole.prototype.createResponse = function () { return new RequiresRoleResponse(); };
    RequiresRole.prototype.getTypeName = function () { return 'RequiresRole'; };
    return RequiresRole;
}());
exports.RequiresRole = RequiresRole;
// @Route("/return/string")
var ReturnString = /** @class */ (function () {
    function ReturnString(init) {
        Object.assign(this, init);
    }
    ReturnString.prototype.createResponse = function () { return ''; };
    ReturnString.prototype.getTypeName = function () { return 'ReturnString'; };
    return ReturnString;
}());
exports.ReturnString = ReturnString;
// @Route("/return/bytes")
var ReturnBytes = /** @class */ (function () {
    function ReturnBytes(init) {
        Object.assign(this, init);
    }
    ReturnBytes.prototype.createResponse = function () { return new Blob(); };
    ReturnBytes.prototype.getTypeName = function () { return 'ReturnBytes'; };
    return ReturnBytes;
}());
exports.ReturnBytes = ReturnBytes;
// @Route("/return/stream")
var ReturnStream = /** @class */ (function () {
    function ReturnStream(init) {
        Object.assign(this, init);
    }
    ReturnStream.prototype.createResponse = function () { return new Blob(); };
    ReturnStream.prototype.getTypeName = function () { return 'ReturnStream'; };
    return ReturnStream;
}());
exports.ReturnStream = ReturnStream;
// @Route("/Request1", "GET")
var GetRequest1 = /** @class */ (function () {
    function GetRequest1(init) {
        Object.assign(this, init);
    }
    GetRequest1.prototype.createResponse = function () { return new Array(); };
    GetRequest1.prototype.getTypeName = function () { return 'GetRequest1'; };
    return GetRequest1;
}());
exports.GetRequest1 = GetRequest1;
// @Route("/Request2", "GET")
var GetRequest2 = /** @class */ (function () {
    function GetRequest2(init) {
        Object.assign(this, init);
    }
    GetRequest2.prototype.createResponse = function () { return new Array(); };
    GetRequest2.prototype.getTypeName = function () { return 'GetRequest2'; };
    return GetRequest2;
}());
exports.GetRequest2 = GetRequest2;
// @Route("/sendjson")
var SendJson = /** @class */ (function () {
    function SendJson(init) {
        Object.assign(this, init);
    }
    SendJson.prototype.createResponse = function () { return ''; };
    SendJson.prototype.getTypeName = function () { return 'SendJson'; };
    return SendJson;
}());
exports.SendJson = SendJson;
// @Route("/sendtext")
var SendText = /** @class */ (function () {
    function SendText(init) {
        Object.assign(this, init);
    }
    SendText.prototype.createResponse = function () { return ''; };
    SendText.prototype.getTypeName = function () { return 'SendText'; };
    return SendText;
}());
exports.SendText = SendText;
// @Route("/sendraw")
var SendRaw = /** @class */ (function () {
    function SendRaw(init) {
        Object.assign(this, init);
    }
    SendRaw.prototype.createResponse = function () { return new Blob(); };
    SendRaw.prototype.getTypeName = function () { return 'SendRaw'; };
    return SendRaw;
}());
exports.SendRaw = SendRaw;
var SendDefault = /** @class */ (function () {
    function SendDefault(init) {
        Object.assign(this, init);
    }
    SendDefault.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendDefault.prototype.getTypeName = function () { return 'SendDefault'; };
    return SendDefault;
}());
exports.SendDefault = SendDefault;
// @Route("/sendrestget/{Id}", "GET")
var SendRestGet = /** @class */ (function () {
    function SendRestGet(init) {
        Object.assign(this, init);
    }
    SendRestGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendRestGet.prototype.getTypeName = function () { return 'SendRestGet'; };
    return SendRestGet;
}());
exports.SendRestGet = SendRestGet;
var SendGet = /** @class */ (function () {
    function SendGet(init) {
        Object.assign(this, init);
    }
    SendGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendGet.prototype.getTypeName = function () { return 'SendGet'; };
    return SendGet;
}());
exports.SendGet = SendGet;
var SendPost = /** @class */ (function () {
    function SendPost(init) {
        Object.assign(this, init);
    }
    SendPost.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendPost.prototype.getTypeName = function () { return 'SendPost'; };
    return SendPost;
}());
exports.SendPost = SendPost;
var SendPut = /** @class */ (function () {
    function SendPut(init) {
        Object.assign(this, init);
    }
    SendPut.prototype.createResponse = function () { return new SendVerbResponse(); };
    SendPut.prototype.getTypeName = function () { return 'SendPut'; };
    return SendPut;
}());
exports.SendPut = SendPut;
var SendReturnVoid = /** @class */ (function () {
    function SendReturnVoid(init) {
        Object.assign(this, init);
    }
    SendReturnVoid.prototype.createResponse = function () { };
    SendReturnVoid.prototype.getTypeName = function () { return 'SendReturnVoid'; };
    return SendReturnVoid;
}());
exports.SendReturnVoid = SendReturnVoid;
// @Route("/session")
var GetSession = /** @class */ (function () {
    function GetSession(init) {
        Object.assign(this, init);
    }
    GetSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    GetSession.prototype.getTypeName = function () { return 'GetSession'; };
    return GetSession;
}());
exports.GetSession = GetSession;
// @Route("/session/edit/{CustomName}")
var UpdateSession = /** @class */ (function () {
    function UpdateSession(init) {
        Object.assign(this, init);
    }
    UpdateSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    UpdateSession.prototype.getTypeName = function () { return 'UpdateSession'; };
    return UpdateSession;
}());
exports.UpdateSession = UpdateSession;
// @Route("/Stuff")
// @DataContract(Namespace="http://schemas.servicestack.net/types")
var GetStuff = /** @class */ (function () {
    function GetStuff(init) {
        Object.assign(this, init);
    }
    GetStuff.prototype.createResponse = function () { return new GetStuffResponse(); };
    GetStuff.prototype.getTypeName = function () { return 'GetStuff'; };
    return GetStuff;
}());
exports.GetStuff = GetStuff;
var StoreLogs = /** @class */ (function () {
    function StoreLogs(init) {
        Object.assign(this, init);
    }
    StoreLogs.prototype.createResponse = function () { return new StoreLogsResponse(); };
    StoreLogs.prototype.getTypeName = function () { return 'StoreLogs'; };
    return StoreLogs;
}());
exports.StoreLogs = StoreLogs;
var HelloAuth = /** @class */ (function () {
    function HelloAuth(init) {
        Object.assign(this, init);
    }
    HelloAuth.prototype.createResponse = function () { return new HelloResponse(); };
    HelloAuth.prototype.getTypeName = function () { return 'HelloAuth'; };
    return HelloAuth;
}());
exports.HelloAuth = HelloAuth;
// @Route("/testauth")
var TestAuth = /** @class */ (function () {
    function TestAuth(init) {
        Object.assign(this, init);
    }
    TestAuth.prototype.createResponse = function () { return new TestAuthResponse(); };
    TestAuth.prototype.getTypeName = function () { return 'TestAuth'; };
    return TestAuth;
}());
exports.TestAuth = TestAuth;
// @Route("/testdata/AllTypes")
var TestDataAllTypes = /** @class */ (function () {
    function TestDataAllTypes(init) {
        Object.assign(this, init);
    }
    TestDataAllTypes.prototype.createResponse = function () { return new AllTypes(); };
    TestDataAllTypes.prototype.getTypeName = function () { return 'TestDataAllTypes'; };
    return TestDataAllTypes;
}());
exports.TestDataAllTypes = TestDataAllTypes;
// @Route("/testdata/AllCollectionTypes")
var TestDataAllCollectionTypes = /** @class */ (function () {
    function TestDataAllCollectionTypes(init) {
        Object.assign(this, init);
    }
    TestDataAllCollectionTypes.prototype.createResponse = function () { return new AllCollectionTypes(); };
    TestDataAllCollectionTypes.prototype.getTypeName = function () { return 'TestDataAllCollectionTypes'; };
    return TestDataAllCollectionTypes;
}());
exports.TestDataAllCollectionTypes = TestDataAllCollectionTypes;
// @Route("/void-response")
var TestVoidResponse = /** @class */ (function () {
    function TestVoidResponse(init) {
        Object.assign(this, init);
    }
    return TestVoidResponse;
}());
exports.TestVoidResponse = TestVoidResponse;
// @Route("/null-response")
var TestNullResponse = /** @class */ (function () {
    function TestNullResponse(init) {
        Object.assign(this, init);
    }
    return TestNullResponse;
}());
exports.TestNullResponse = TestNullResponse;
// @Route("/auth")
// @Route("/auth/{provider}")
// @DataContract
var Authenticate = /** @class */ (function () {
    function Authenticate(init) {
        Object.assign(this, init);
    }
    Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
    Authenticate.prototype.getTypeName = function () { return 'Authenticate'; };
    return Authenticate;
}());
exports.Authenticate = Authenticate;
// @Route("/assignroles")
// @DataContract
var AssignRoles = /** @class */ (function () {
    function AssignRoles(init) {
        Object.assign(this, init);
    }
    AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
    AssignRoles.prototype.getTypeName = function () { return 'AssignRoles'; };
    return AssignRoles;
}());
exports.AssignRoles = AssignRoles;
// @Route("/unassignroles")
// @DataContract
var UnAssignRoles = /** @class */ (function () {
    function UnAssignRoles(init) {
        Object.assign(this, init);
    }
    UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
    UnAssignRoles.prototype.getTypeName = function () { return 'UnAssignRoles'; };
    return UnAssignRoles;
}());
exports.UnAssignRoles = UnAssignRoles;
// @Route("/session-to-token")
// @DataContract
var ConvertSessionToToken = /** @class */ (function () {
    function ConvertSessionToToken(init) {
        Object.assign(this, init);
    }
    ConvertSessionToToken.prototype.createResponse = function () { return new ConvertSessionToTokenResponse(); };
    ConvertSessionToToken.prototype.getTypeName = function () { return 'ConvertSessionToToken'; };
    return ConvertSessionToToken;
}());
exports.ConvertSessionToToken = ConvertSessionToToken;
// @Route("/access-token")
// @DataContract
var GetAccessToken = /** @class */ (function () {
    function GetAccessToken(init) {
        Object.assign(this, init);
    }
    GetAccessToken.prototype.createResponse = function () { return new GetAccessTokenResponse(); };
    GetAccessToken.prototype.getTypeName = function () { return 'GetAccessToken'; };
    return GetAccessToken;
}());
exports.GetAccessToken = GetAccessToken;
var QueryRockstarAudit = /** @class */ (function (_super) {
    __extends(QueryRockstarAudit, _super);
    function QueryRockstarAudit(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    QueryRockstarAudit.prototype.createResponse = function () { return new QueryResponse(); };
    QueryRockstarAudit.prototype.getTypeName = function () { return 'QueryRockstarAudit'; };
    return QueryRockstarAudit;
}(QueryDbTenant_2));
exports.QueryRockstarAudit = QueryRockstarAudit;
var QueryRockstarAuditSubOr = /** @class */ (function (_super) {
    __extends(QueryRockstarAuditSubOr, _super);
    function QueryRockstarAuditSubOr(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    QueryRockstarAuditSubOr.prototype.createResponse = function () { return new QueryResponse(); };
    QueryRockstarAuditSubOr.prototype.getTypeName = function () { return 'QueryRockstarAuditSubOr'; };
    return QueryRockstarAuditSubOr;
}(QueryDb_2));
exports.QueryRockstarAuditSubOr = QueryRockstarAuditSubOr;
var QueryPocoBase = /** @class */ (function (_super) {
    __extends(QueryPocoBase, _super);
    function QueryPocoBase(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    QueryPocoBase.prototype.createResponse = function () { return new QueryResponse(); };
    QueryPocoBase.prototype.getTypeName = function () { return 'QueryPocoBase'; };
    return QueryPocoBase;
}(QueryDb_1));
exports.QueryPocoBase = QueryPocoBase;
var QueryPocoIntoBase = /** @class */ (function (_super) {
    __extends(QueryPocoIntoBase, _super);
    function QueryPocoIntoBase(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    QueryPocoIntoBase.prototype.createResponse = function () { return new QueryResponse(); };
    QueryPocoIntoBase.prototype.getTypeName = function () { return 'QueryPocoIntoBase'; };
    return QueryPocoIntoBase;
}(QueryDb_2));
exports.QueryPocoIntoBase = QueryPocoIntoBase;
// @Route("/message/query/{Id}", "GET")
var MessageQuery = /** @class */ (function (_super) {
    __extends(MessageQuery, _super);
    function MessageQuery(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    MessageQuery.prototype.createResponse = function () { return new QueryResponse(); };
    MessageQuery.prototype.getTypeName = function () { return 'MessageQuery'; };
    return MessageQuery;
}(QueryDb_1));
exports.MessageQuery = MessageQuery;
// @Route("/rockstars", "GET")
var QueryRockstars = /** @class */ (function (_super) {
    __extends(QueryRockstars, _super);
    function QueryRockstars(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    QueryRockstars.prototype.createResponse = function () { return new QueryResponse(); };
    QueryRockstars.prototype.getTypeName = function () { return 'QueryRockstars'; };
    return QueryRockstars;
}(QueryDb_1));
exports.QueryRockstars = QueryRockstars;
var CreateRockstarAudit = /** @class */ (function (_super) {
    __extends(CreateRockstarAudit, _super);
    function CreateRockstarAudit(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    CreateRockstarAudit.prototype.createResponse = function () { return new RockstarWithIdResponse(); };
    CreateRockstarAudit.prototype.getTypeName = function () { return 'CreateRockstarAudit'; };
    return CreateRockstarAudit;
}(RockstarBase));
exports.CreateRockstarAudit = CreateRockstarAudit;
var CreateRockstarAuditTenant = /** @class */ (function (_super) {
    __extends(CreateRockstarAuditTenant, _super);
    function CreateRockstarAuditTenant(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    CreateRockstarAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
    CreateRockstarAuditTenant.prototype.getTypeName = function () { return 'CreateRockstarAuditTenant'; };
    return CreateRockstarAuditTenant;
}(CreateAuditTenantBase));
exports.CreateRockstarAuditTenant = CreateRockstarAuditTenant;
var UpdateRockstarAuditTenant = /** @class */ (function (_super) {
    __extends(UpdateRockstarAuditTenant, _super);
    function UpdateRockstarAuditTenant(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    UpdateRockstarAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
    UpdateRockstarAuditTenant.prototype.getTypeName = function () { return 'UpdateRockstarAuditTenant'; };
    return UpdateRockstarAuditTenant;
}(UpdateAuditTenantBase));
exports.UpdateRockstarAuditTenant = UpdateRockstarAuditTenant;
var PatchRockstarAuditTenant = /** @class */ (function (_super) {
    __extends(PatchRockstarAuditTenant, _super);
    function PatchRockstarAuditTenant(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    PatchRockstarAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
    PatchRockstarAuditTenant.prototype.getTypeName = function () { return 'PatchRockstarAuditTenant'; };
    return PatchRockstarAuditTenant;
}(PatchAuditTenantBase));
exports.PatchRockstarAuditTenant = PatchRockstarAuditTenant;
var SoftDeleteAuditTenant = /** @class */ (function (_super) {
    __extends(SoftDeleteAuditTenant, _super);
    function SoftDeleteAuditTenant(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    SoftDeleteAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
    SoftDeleteAuditTenant.prototype.getTypeName = function () { return 'SoftDeleteAuditTenant'; };
    return SoftDeleteAuditTenant;
}(SoftDeleteAuditTenantBase));
exports.SoftDeleteAuditTenant = SoftDeleteAuditTenant;
var CreateRockstarAuditMqToken = /** @class */ (function (_super) {
    __extends(CreateRockstarAuditMqToken, _super);
    function CreateRockstarAuditMqToken(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    CreateRockstarAuditMqToken.prototype.createResponse = function () { return new RockstarWithIdResponse(); };
    CreateRockstarAuditMqToken.prototype.getTypeName = function () { return 'CreateRockstarAuditMqToken'; };
    return CreateRockstarAuditMqToken;
}(RockstarBase));
exports.CreateRockstarAuditMqToken = CreateRockstarAuditMqToken;
var RealDeleteAuditTenant = /** @class */ (function () {
    function RealDeleteAuditTenant(init) {
        Object.assign(this, init);
    }
    RealDeleteAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndCountResponse(); };
    RealDeleteAuditTenant.prototype.getTypeName = function () { return 'RealDeleteAuditTenant'; };
    return RealDeleteAuditTenant;
}());
exports.RealDeleteAuditTenant = RealDeleteAuditTenant;
var CreateRockstarVersion = /** @class */ (function (_super) {
    __extends(CreateRockstarVersion, _super);
    function CreateRockstarVersion(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    CreateRockstarVersion.prototype.createResponse = function () { return new RockstarWithIdAndRowVersionResponse(); };
    CreateRockstarVersion.prototype.getTypeName = function () { return 'CreateRockstarVersion'; };
    return CreateRockstarVersion;
}(RockstarBase));
exports.CreateRockstarVersion = CreateRockstarVersion;
