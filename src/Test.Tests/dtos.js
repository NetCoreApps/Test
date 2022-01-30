"use strict";
/* Options:
Date: 2022-01-30 22:29:13
Version: 6.01
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rockstar = exports.Logger = exports.Device = exports.Channel = exports.PingService = exports.ScopeType = exports.DayOfWeek = exports.EmptyClass = exports.HelloBase_1 = exports.HelloBase = exports.AllTypesBase = exports.SubType = exports.KeyValuePair = exports.EnumStyleMembers = exports.EnumStyle = exports.EnumAsInt = exports.EnumFlags = exports.EnumWithValues = exports.EnumTypeFlags = exports.EnumType = exports.NestedClass = exports.AuthUserSession = exports.AuditBase = exports.StringsResponse = exports.StringResponse = exports.IdResponse = exports.GetNavItemsResponse = exports.GetNavItems = exports.NavItem = exports.RegenerateApiKeysResponse = exports.RegenerateApiKeys = exports.GetApiKeysResponse = exports.UserApiKey = exports.GetApiKeys = exports.UpdateEventSubscriberResponse = exports.UpdateEventSubscriber = exports.CancelRequestResponse = exports.ResponseStatus = exports.ResponseError = exports.CancelRequest = exports.FluentSingleValidation = exports.DeclarativeSingleValidation = exports.FluentChildValidation = exports.DeclarativeChildValidation = exports.SetterType = exports.CustomType = exports.Poco = exports.Item = exports.QueryDb_2 = exports.QueryBase = void 0;
exports.Project = exports.Account = exports.ThrowBusinessErrorResponse = exports.ThrowValidationResponse = exports.ThrowTypeResponse = exports.ReturnCustom400Response = exports.EmptyResponse = exports.Items = exports.QueryResponseAlt = exports.CustomHttpErrorResponse = exports.GetUserDetailsResponse = exports.GetChatHistoryResponse = exports.ChatMessage = exports.QueryResponse = exports.TypesGroup = exports.UnAuthInfo = exports.CustomUserSession = exports.ReturnedDto = exports.InnerEnum = exports.InnerType = exports.HelloType = exports.HelloWithReturnResponse = exports.HelloResponseBase = exports.ArrayResult = exports.ListResult = exports.MenuExample = exports.MenuItemExample = exports.MenuItemExampleItem = exports.MetadataTestChild = exports.MetadataTestNestedChild = exports.MessageCrud = exports.RockstarVersion = exports.SoftDeleteAuditTenantBase = exports.SoftDeleteAuditBase = exports.PatchAuditTenantBase = exports.PatchAuditBase = exports.UpdateAuditTenantBase = exports.UpdateAuditBase = exports.CreateAuditTenantBase = exports.CreateAuditBase = exports.RockstarAudit = exports.OnlyDefinedInGenericTypeInto = exports.OnlyDefinedInGenericTypeFrom = exports.OnlyDefinedInGenericType = exports.QueryDb_1 = exports.RockstarAuto = exports.RockstarBase = exports.RockstarAuditTenant = exports.LivingStatus = exports.QueryDbTenant_2 = void 0;
exports.QueryItems = exports.RockstarWithIdAndRowVersionResponse = exports.RockstarWithIdAndCountResponse = exports.RockstarWithIdAndResultResponse = exports.RockstarWithIdResponse = exports.GetAccessTokenResponse = exports.ConvertSessionToTokenResponse = exports.RegisterResponse = exports.UnAssignRolesResponse = exports.AssignRolesResponse = exports.AuthenticateResponse = exports.StoreRockstars = exports.EchoComplexTypes = exports.EchoCollections = exports.EchoTypes = exports.Wait = exports.CustomRoute = exports.RequiresAdmin = exports.TestAuthResponse = exports.StoreLogsResponse = exports.GetStuffResponse = exports.GetSessionResponse = exports.SendVerbResponse = exports.RequiresRoleResponse = exports.PingResponse = exports.HelloZipResponse = exports.HelloTypes = exports.EnumResponse = exports.HelloVerbResponse = exports.HelloInnerTypesResponse = exports.HelloWithTypeResponse = exports.HelloWithRouteResponse = exports.HelloWithAlternateReturnResponse = exports.HelloWithInheritanceResponse = exports.HelloWithDescriptionResponse = exports.HelloWithDataContractResponse = exports.HelloDateTime = exports.SubAllTypes = exports.HelloAllTypesResponse = exports.AllCollectionTypes = exports.AllTypes = exports.HelloAnnotatedResponse = exports.HelloResponse = exports.GetRandomIdsResponse = exports.Message = exports.GetExampleResponse = exports.MetadataTestResponse = exports.CreateRefreshJwtResponse = exports.CreateJwtResponse = exports.SecuredResponse = void 0;
exports.HelloAnnotated = exports.HelloSecure = exports.Hello = exports.ReturnHtml = exports.ReturnText = exports.TextFileTest = exports.GetRandomIds = exports.RequestMessage = exports.GetExample = exports.MetadataTestArray = exports.MetadataTest = exports.ViewLogs = exports.InvalidateLastAccessToken = exports.CreateRefreshJwt = exports.CreateJwt = exports.Secured = exports.HelloImage = exports.ImageAsRedirect = exports.ImageAsFile = exports.ImageWriteToResponse = exports.ImageAsCustomResult = exports.ImageAsBytes = exports.ImageAsStream = exports.GetProject = exports.GetAccount = exports.RootPathRoutes = exports.ThrowBusinessError = exports.ThrowValidation = exports.ThrowType = exports.ReturnCustom400 = exports.ThrowCustom400 = exports.Throw404 = exports.ThrowHttpError = exports.DummyTypes = exports.GetAccessToken = exports.ConvertSessionToToken = exports.DeclarativeSingleValidationTest = exports.DeclarativeCollectiveValidationTest = exports.DeclarativeValidationAuth = exports.GetNakedItems = exports.GetItems = exports.AltQueryItems = exports.CustomHttpError = exports.GetUserDetails = exports.PostObjectToChannel = exports.ResetServerEvents = exports.ClearChatHistory = exports.GetChatHistory = exports.PostChatToChannel = exports.PostRawToChannel = void 0;
exports.SendPut = exports.SendPost = exports.SendGet = exports.SendRestGet = exports.SendDefault = exports.SendRaw = exports.SendText = exports.SendJson = exports.GetRequest2 = exports.GetRequest1 = exports.WriteJson = exports.ReturnJsonHeader = exports.ReturnJson = exports.ReturnStream = exports.ReturnBytes = exports.ReturnString = exports.RequiresRole = exports.ResetConnections = exports.Ping = exports.HelloZip = exports.EnumRequest = exports.HelloReturnVoid = exports.HelloPatch = exports.HelloDelete = exports.HelloPut = exports.HelloPost = exports.HelloGet = exports.HelloBuiltin = exports.HelloInnerTypes = exports.HelloInterface = exports.HelloWithType = exports.HelloWithRoute = exports.HelloWithReturn = exports.HelloWithGenericInheritance2 = exports.HelloWithGenericInheritance = exports.HelloWithInheritance = exports.HelloWithDescription = exports.HelloWithDataContract = exports.HelloVoid = exports.HelloString = exports.HelloSubAllTypes = exports.HelloAllTypes = exports.AllowedAttributes = exports.RestrictedAttributes = exports.HelloWithEnumMap = exports.HelloWithEnumList = exports.HelloWithEnum = exports.HelloArray = exports.HelloList = exports.HelloWithNestedClass = void 0;
exports.CreateRockstarVersion = exports.RealDeleteAuditTenant = exports.CreateRockstarAuditMqToken = exports.SoftDeleteAuditTenant = exports.PatchRockstarAuditTenant = exports.UpdateRockstarAuditTenant = exports.CreateRockstarAuditTenant = exports.CreateRockstarAudit = exports.QueryRockstars = exports.MessageQuery = exports.QueryPocoIntoBase = exports.QueryPocoBase = exports.QueryRockstarAuditSubOr = exports.QueryRockstarAudit = exports.Register = exports.UnAssignRoles = exports.AssignRoles = exports.Authenticate = exports.TestNullResponse = exports.TestVoidResponse = exports.TestDataAllCollectionTypes = exports.TestDataAllTypes = exports.TestAuth = exports.HelloAuth = exports.StoreLogs = exports.GetStuff = exports.UpdateSession = exports.GetSession = exports.SendReturnVoid = void 0;
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
var CancelRequest = /** @class */ (function () {
    function CancelRequest(init) {
        Object.assign(this, init);
    }
    return CancelRequest;
}());
exports.CancelRequest = CancelRequest;
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
// @DataContract
var CancelRequestResponse = /** @class */ (function () {
    function CancelRequestResponse(init) {
        Object.assign(this, init);
    }
    return CancelRequestResponse;
}());
exports.CancelRequestResponse = CancelRequestResponse;
// @DataContract
var UpdateEventSubscriber = /** @class */ (function () {
    function UpdateEventSubscriber(init) {
        Object.assign(this, init);
    }
    return UpdateEventSubscriber;
}());
exports.UpdateEventSubscriber = UpdateEventSubscriber;
// @DataContract
var UpdateEventSubscriberResponse = /** @class */ (function () {
    function UpdateEventSubscriberResponse(init) {
        Object.assign(this, init);
    }
    return UpdateEventSubscriberResponse;
}());
exports.UpdateEventSubscriberResponse = UpdateEventSubscriberResponse;
// @DataContract
var GetApiKeys = /** @class */ (function () {
    function GetApiKeys(init) {
        Object.assign(this, init);
    }
    return GetApiKeys;
}());
exports.GetApiKeys = GetApiKeys;
// @DataContract
var UserApiKey = /** @class */ (function () {
    function UserApiKey(init) {
        Object.assign(this, init);
    }
    return UserApiKey;
}());
exports.UserApiKey = UserApiKey;
// @DataContract
var GetApiKeysResponse = /** @class */ (function () {
    function GetApiKeysResponse(init) {
        Object.assign(this, init);
    }
    return GetApiKeysResponse;
}());
exports.GetApiKeysResponse = GetApiKeysResponse;
// @DataContract
var RegenerateApiKeys = /** @class */ (function () {
    function RegenerateApiKeys(init) {
        Object.assign(this, init);
    }
    return RegenerateApiKeys;
}());
exports.RegenerateApiKeys = RegenerateApiKeys;
// @DataContract
var RegenerateApiKeysResponse = /** @class */ (function () {
    function RegenerateApiKeysResponse(init) {
        Object.assign(this, init);
    }
    return RegenerateApiKeysResponse;
}());
exports.RegenerateApiKeysResponse = RegenerateApiKeysResponse;
var NavItem = /** @class */ (function () {
    function NavItem(init) {
        Object.assign(this, init);
    }
    return NavItem;
}());
exports.NavItem = NavItem;
// @DataContract
var GetNavItems = /** @class */ (function () {
    function GetNavItems(init) {
        Object.assign(this, init);
    }
    return GetNavItems;
}());
exports.GetNavItems = GetNavItems;
// @DataContract
var GetNavItemsResponse = /** @class */ (function () {
    function GetNavItemsResponse(init) {
        Object.assign(this, init);
    }
    return GetNavItemsResponse;
}());
exports.GetNavItemsResponse = GetNavItemsResponse;
// @DataContract
var IdResponse = /** @class */ (function () {
    function IdResponse(init) {
        Object.assign(this, init);
    }
    return IdResponse;
}());
exports.IdResponse = IdResponse;
// @DataContract
var StringResponse = /** @class */ (function () {
    function StringResponse(init) {
        Object.assign(this, init);
    }
    return StringResponse;
}());
exports.StringResponse = StringResponse;
// @DataContract
var StringsResponse = /** @class */ (function () {
    function StringsResponse(init) {
        Object.assign(this, init);
    }
    return StringsResponse;
}());
exports.StringsResponse = StringsResponse;
// @DataContract
var AuditBase = /** @class */ (function () {
    function AuditBase(init) {
        Object.assign(this, init);
    }
    return AuditBase;
}());
exports.AuditBase = AuditBase;
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
    EnumFlags[EnumFlags["Value0"] = 0] = "Value0";
    EnumFlags[EnumFlags["Value1"] = 1] = "Value1";
    EnumFlags[EnumFlags["Value2"] = 2] = "Value2";
    EnumFlags[EnumFlags["Value3"] = 4] = "Value3";
    EnumFlags[EnumFlags["Value123"] = 7] = "Value123";
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
    MessageCrud.prototype.getTypeName = function () { return 'MessageCrud'; };
    MessageCrud.prototype.getMethod = function () { return 'PUT'; };
    MessageCrud.prototype.createResponse = function () { };
    return MessageCrud;
}());
exports.MessageCrud = MessageCrud;
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
var ReturnCustom400Response = /** @class */ (function () {
    function ReturnCustom400Response(init) {
        Object.assign(this, init);
    }
    return ReturnCustom400Response;
}());
exports.ReturnCustom400Response = ReturnCustom400Response;
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
    Message.prototype.getTypeName = function () { return 'Message'; };
    Message.prototype.getMethod = function () { return 'PUT'; };
    Message.prototype.createResponse = function () { return new Message(); };
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
    AllTypes.prototype.getTypeName = function () { return 'AllTypes'; };
    AllTypes.prototype.getMethod = function () { return 'POST'; };
    AllTypes.prototype.createResponse = function () { return new AllTypes(); };
    return AllTypes;
}());
exports.AllTypes = AllTypes;
var AllCollectionTypes = /** @class */ (function () {
    function AllCollectionTypes(init) {
        Object.assign(this, init);
    }
    AllCollectionTypes.prototype.getTypeName = function () { return 'AllCollectionTypes'; };
    AllCollectionTypes.prototype.getMethod = function () { return 'POST'; };
    AllCollectionTypes.prototype.createResponse = function () { return new AllCollectionTypes(); };
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
    HelloDateTime.prototype.getTypeName = function () { return 'HelloDateTime'; };
    HelloDateTime.prototype.getMethod = function () { return 'POST'; };
    HelloDateTime.prototype.createResponse = function () { return new HelloDateTime(); };
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
    HelloTypes.prototype.getTypeName = function () { return 'HelloTypes'; };
    HelloTypes.prototype.getMethod = function () { return 'POST'; };
    HelloTypes.prototype.createResponse = function () { return new HelloTypes(); };
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
    RequiresAdmin.prototype.getTypeName = function () { return 'RequiresAdmin'; };
    RequiresAdmin.prototype.getMethod = function () { return 'POST'; };
    RequiresAdmin.prototype.createResponse = function () { return new RequiresAdmin(); };
    return RequiresAdmin;
}());
exports.RequiresAdmin = RequiresAdmin;
// @Route("/custom")
// @Route("/custom/{Data}")
var CustomRoute = /** @class */ (function () {
    function CustomRoute(init) {
        Object.assign(this, init);
    }
    CustomRoute.prototype.getTypeName = function () { return 'CustomRoute'; };
    CustomRoute.prototype.getMethod = function () { return 'POST'; };
    CustomRoute.prototype.createResponse = function () { return new CustomRoute(); };
    return CustomRoute;
}());
exports.CustomRoute = CustomRoute;
// @Route("/wait/{ForMs}")
var Wait = /** @class */ (function () {
    function Wait(init) {
        Object.assign(this, init);
    }
    Wait.prototype.getTypeName = function () { return 'Wait'; };
    Wait.prototype.getMethod = function () { return 'POST'; };
    Wait.prototype.createResponse = function () { return new Wait(); };
    return Wait;
}());
exports.Wait = Wait;
// @Route("/echo/types")
var EchoTypes = /** @class */ (function () {
    function EchoTypes(init) {
        Object.assign(this, init);
    }
    EchoTypes.prototype.getTypeName = function () { return 'EchoTypes'; };
    EchoTypes.prototype.getMethod = function () { return 'POST'; };
    EchoTypes.prototype.createResponse = function () { return new EchoTypes(); };
    return EchoTypes;
}());
exports.EchoTypes = EchoTypes;
// @Route("/echo/collections")
var EchoCollections = /** @class */ (function () {
    function EchoCollections(init) {
        Object.assign(this, init);
    }
    EchoCollections.prototype.getTypeName = function () { return 'EchoCollections'; };
    EchoCollections.prototype.getMethod = function () { return 'POST'; };
    EchoCollections.prototype.createResponse = function () { return new EchoCollections(); };
    return EchoCollections;
}());
exports.EchoCollections = EchoCollections;
// @Route("/echo/complex")
var EchoComplexTypes = /** @class */ (function () {
    function EchoComplexTypes(init) {
        Object.assign(this, init);
    }
    EchoComplexTypes.prototype.getTypeName = function () { return 'EchoComplexTypes'; };
    EchoComplexTypes.prototype.getMethod = function () { return 'POST'; };
    EchoComplexTypes.prototype.createResponse = function () { return new EchoComplexTypes(); };
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
    StoreRockstars.prototype.getTypeName = function () { return 'StoreRockstars'; };
    StoreRockstars.prototype.getMethod = function () { return 'POST'; };
    StoreRockstars.prototype.createResponse = function () { return new StoreRockstars(); };
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
var RegisterResponse = /** @class */ (function () {
    function RegisterResponse(init) {
        Object.assign(this, init);
    }
    return RegisterResponse;
}());
exports.RegisterResponse = RegisterResponse;
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
    QueryItems.prototype.getTypeName = function () { return 'QueryItems'; };
    QueryItems.prototype.getMethod = function () { return 'GET'; };
    QueryItems.prototype.createResponse = function () { return new QueryResponse(); };
    return QueryItems;
}(QueryDb_2));
exports.QueryItems = QueryItems;
// @Route("/channels/{Channel}/raw")
var PostRawToChannel = /** @class */ (function () {
    function PostRawToChannel(init) {
        Object.assign(this, init);
    }
    PostRawToChannel.prototype.getTypeName = function () { return 'PostRawToChannel'; };
    PostRawToChannel.prototype.getMethod = function () { return 'POST'; };
    PostRawToChannel.prototype.createResponse = function () { };
    return PostRawToChannel;
}());
exports.PostRawToChannel = PostRawToChannel;
// @Route("/channels/{Channel}/chat")
var PostChatToChannel = /** @class */ (function () {
    function PostChatToChannel(init) {
        Object.assign(this, init);
    }
    PostChatToChannel.prototype.getTypeName = function () { return 'PostChatToChannel'; };
    PostChatToChannel.prototype.getMethod = function () { return 'POST'; };
    PostChatToChannel.prototype.createResponse = function () { return new ChatMessage(); };
    return PostChatToChannel;
}());
exports.PostChatToChannel = PostChatToChannel;
// @Route("/chathistory")
var GetChatHistory = /** @class */ (function () {
    function GetChatHistory(init) {
        Object.assign(this, init);
    }
    GetChatHistory.prototype.getTypeName = function () { return 'GetChatHistory'; };
    GetChatHistory.prototype.getMethod = function () { return 'POST'; };
    GetChatHistory.prototype.createResponse = function () { return new GetChatHistoryResponse(); };
    return GetChatHistory;
}());
exports.GetChatHistory = GetChatHistory;
// @Route("/reset")
var ClearChatHistory = /** @class */ (function () {
    function ClearChatHistory(init) {
        Object.assign(this, init);
    }
    ClearChatHistory.prototype.getTypeName = function () { return 'ClearChatHistory'; };
    ClearChatHistory.prototype.getMethod = function () { return 'POST'; };
    ClearChatHistory.prototype.createResponse = function () { };
    return ClearChatHistory;
}());
exports.ClearChatHistory = ClearChatHistory;
// @Route("/reset-serverevents")
var ResetServerEvents = /** @class */ (function () {
    function ResetServerEvents(init) {
        Object.assign(this, init);
    }
    ResetServerEvents.prototype.getTypeName = function () { return 'ResetServerEvents'; };
    ResetServerEvents.prototype.getMethod = function () { return 'POST'; };
    ResetServerEvents.prototype.createResponse = function () { };
    return ResetServerEvents;
}());
exports.ResetServerEvents = ResetServerEvents;
// @Route("/channels/{Channel}/object")
var PostObjectToChannel = /** @class */ (function () {
    function PostObjectToChannel(init) {
        Object.assign(this, init);
    }
    PostObjectToChannel.prototype.getTypeName = function () { return 'PostObjectToChannel'; };
    PostObjectToChannel.prototype.getMethod = function () { return 'POST'; };
    PostObjectToChannel.prototype.createResponse = function () { };
    return PostObjectToChannel;
}());
exports.PostObjectToChannel = PostObjectToChannel;
// @Route("/account")
var GetUserDetails = /** @class */ (function () {
    function GetUserDetails(init) {
        Object.assign(this, init);
    }
    GetUserDetails.prototype.getTypeName = function () { return 'GetUserDetails'; };
    GetUserDetails.prototype.getMethod = function () { return 'GET'; };
    GetUserDetails.prototype.createResponse = function () { return new GetUserDetailsResponse(); };
    return GetUserDetails;
}());
exports.GetUserDetails = GetUserDetails;
var CustomHttpError = /** @class */ (function () {
    function CustomHttpError(init) {
        Object.assign(this, init);
    }
    CustomHttpError.prototype.getTypeName = function () { return 'CustomHttpError'; };
    CustomHttpError.prototype.getMethod = function () { return 'POST'; };
    CustomHttpError.prototype.createResponse = function () { return new CustomHttpErrorResponse(); };
    return CustomHttpError;
}());
exports.CustomHttpError = CustomHttpError;
var AltQueryItems = /** @class */ (function () {
    function AltQueryItems(init) {
        Object.assign(this, init);
    }
    AltQueryItems.prototype.getTypeName = function () { return 'AltQueryItems'; };
    AltQueryItems.prototype.getMethod = function () { return 'POST'; };
    AltQueryItems.prototype.createResponse = function () { return new QueryResponseAlt(); };
    return AltQueryItems;
}());
exports.AltQueryItems = AltQueryItems;
var GetItems = /** @class */ (function () {
    function GetItems(init) {
        Object.assign(this, init);
    }
    GetItems.prototype.getTypeName = function () { return 'GetItems'; };
    GetItems.prototype.getMethod = function () { return 'GET'; };
    GetItems.prototype.createResponse = function () { return new Items(); };
    return GetItems;
}());
exports.GetItems = GetItems;
var GetNakedItems = /** @class */ (function () {
    function GetNakedItems(init) {
        Object.assign(this, init);
    }
    GetNakedItems.prototype.getTypeName = function () { return 'GetNakedItems'; };
    GetNakedItems.prototype.getMethod = function () { return 'GET'; };
    GetNakedItems.prototype.createResponse = function () { return new Array(); };
    return GetNakedItems;
}());
exports.GetNakedItems = GetNakedItems;
// @ValidateRequest(Validator="IsAuthenticated")
var DeclarativeValidationAuth = /** @class */ (function () {
    function DeclarativeValidationAuth(init) {
        Object.assign(this, init);
    }
    DeclarativeValidationAuth.prototype.getTypeName = function () { return 'DeclarativeValidationAuth'; };
    DeclarativeValidationAuth.prototype.getMethod = function () { return 'POST'; };
    DeclarativeValidationAuth.prototype.createResponse = function () { };
    return DeclarativeValidationAuth;
}());
exports.DeclarativeValidationAuth = DeclarativeValidationAuth;
var DeclarativeCollectiveValidationTest = /** @class */ (function () {
    function DeclarativeCollectiveValidationTest(init) {
        Object.assign(this, init);
    }
    DeclarativeCollectiveValidationTest.prototype.getTypeName = function () { return 'DeclarativeCollectiveValidationTest'; };
    DeclarativeCollectiveValidationTest.prototype.getMethod = function () { return 'POST'; };
    DeclarativeCollectiveValidationTest.prototype.createResponse = function () { return new EmptyResponse(); };
    return DeclarativeCollectiveValidationTest;
}());
exports.DeclarativeCollectiveValidationTest = DeclarativeCollectiveValidationTest;
var DeclarativeSingleValidationTest = /** @class */ (function () {
    function DeclarativeSingleValidationTest(init) {
        Object.assign(this, init);
    }
    DeclarativeSingleValidationTest.prototype.getTypeName = function () { return 'DeclarativeSingleValidationTest'; };
    DeclarativeSingleValidationTest.prototype.getMethod = function () { return 'POST'; };
    DeclarativeSingleValidationTest.prototype.createResponse = function () { return new EmptyResponse(); };
    return DeclarativeSingleValidationTest;
}());
exports.DeclarativeSingleValidationTest = DeclarativeSingleValidationTest;
// @Route("/session-to-token")
// @DataContract
var ConvertSessionToToken = /** @class */ (function () {
    function ConvertSessionToToken(init) {
        Object.assign(this, init);
    }
    ConvertSessionToToken.prototype.getTypeName = function () { return 'ConvertSessionToToken'; };
    ConvertSessionToToken.prototype.getMethod = function () { return 'POST'; };
    ConvertSessionToToken.prototype.createResponse = function () { return new ConvertSessionToTokenResponse(); };
    return ConvertSessionToToken;
}());
exports.ConvertSessionToToken = ConvertSessionToToken;
// @Route("/access-token")
// @DataContract
var GetAccessToken = /** @class */ (function () {
    function GetAccessToken(init) {
        Object.assign(this, init);
    }
    GetAccessToken.prototype.getTypeName = function () { return 'GetAccessToken'; };
    GetAccessToken.prototype.getMethod = function () { return 'POST'; };
    GetAccessToken.prototype.createResponse = function () { return new GetAccessTokenResponse(); };
    return GetAccessToken;
}());
exports.GetAccessToken = GetAccessToken;
var DummyTypes = /** @class */ (function () {
    function DummyTypes(init) {
        Object.assign(this, init);
    }
    DummyTypes.prototype.getTypeName = function () { return 'DummyTypes'; };
    DummyTypes.prototype.getMethod = function () { return 'POST'; };
    DummyTypes.prototype.createResponse = function () { };
    return DummyTypes;
}());
exports.DummyTypes = DummyTypes;
// @Route("/throwhttperror/{Status}")
var ThrowHttpError = /** @class */ (function () {
    function ThrowHttpError(init) {
        Object.assign(this, init);
    }
    ThrowHttpError.prototype.getTypeName = function () { return 'ThrowHttpError'; };
    ThrowHttpError.prototype.getMethod = function () { return 'POST'; };
    ThrowHttpError.prototype.createResponse = function () { };
    return ThrowHttpError;
}());
exports.ThrowHttpError = ThrowHttpError;
// @Route("/throw404")
// @Route("/throw404/{Message}")
var Throw404 = /** @class */ (function () {
    function Throw404(init) {
        Object.assign(this, init);
    }
    Throw404.prototype.getTypeName = function () { return 'Throw404'; };
    Throw404.prototype.getMethod = function () { return 'POST'; };
    Throw404.prototype.createResponse = function () { };
    return Throw404;
}());
exports.Throw404 = Throw404;
// @Route("/throwcustom400")
// @Route("/throwcustom400/{Message}")
var ThrowCustom400 = /** @class */ (function () {
    function ThrowCustom400(init) {
        Object.assign(this, init);
    }
    ThrowCustom400.prototype.getTypeName = function () { return 'ThrowCustom400'; };
    ThrowCustom400.prototype.getMethod = function () { return 'POST'; };
    ThrowCustom400.prototype.createResponse = function () { };
    return ThrowCustom400;
}());
exports.ThrowCustom400 = ThrowCustom400;
// @Route("/returncustom400")
// @Route("/returncustom400/{Message}")
var ReturnCustom400 = /** @class */ (function () {
    function ReturnCustom400(init) {
        Object.assign(this, init);
    }
    ReturnCustom400.prototype.getTypeName = function () { return 'ReturnCustom400'; };
    ReturnCustom400.prototype.getMethod = function () { return 'POST'; };
    ReturnCustom400.prototype.createResponse = function () { return new ReturnCustom400Response(); };
    return ReturnCustom400;
}());
exports.ReturnCustom400 = ReturnCustom400;
// @Route("/throw/{Type}")
var ThrowType = /** @class */ (function () {
    function ThrowType(init) {
        Object.assign(this, init);
    }
    ThrowType.prototype.getTypeName = function () { return 'ThrowType'; };
    ThrowType.prototype.getMethod = function () { return 'POST'; };
    ThrowType.prototype.createResponse = function () { return new ThrowTypeResponse(); };
    return ThrowType;
}());
exports.ThrowType = ThrowType;
// @Route("/throwvalidation")
var ThrowValidation = /** @class */ (function () {
    function ThrowValidation(init) {
        Object.assign(this, init);
    }
    ThrowValidation.prototype.getTypeName = function () { return 'ThrowValidation'; };
    ThrowValidation.prototype.getMethod = function () { return 'POST'; };
    ThrowValidation.prototype.createResponse = function () { return new ThrowValidationResponse(); };
    return ThrowValidation;
}());
exports.ThrowValidation = ThrowValidation;
// @Route("/throwbusinesserror")
var ThrowBusinessError = /** @class */ (function () {
    function ThrowBusinessError(init) {
        Object.assign(this, init);
    }
    ThrowBusinessError.prototype.getTypeName = function () { return 'ThrowBusinessError'; };
    ThrowBusinessError.prototype.getMethod = function () { return 'POST'; };
    ThrowBusinessError.prototype.createResponse = function () { return new ThrowBusinessErrorResponse(); };
    return ThrowBusinessError;
}());
exports.ThrowBusinessError = ThrowBusinessError;
var RootPathRoutes = /** @class */ (function () {
    function RootPathRoutes(init) {
        Object.assign(this, init);
    }
    RootPathRoutes.prototype.getTypeName = function () { return 'RootPathRoutes'; };
    RootPathRoutes.prototype.getMethod = function () { return 'POST'; };
    RootPathRoutes.prototype.createResponse = function () { };
    return RootPathRoutes;
}());
exports.RootPathRoutes = RootPathRoutes;
var GetAccount = /** @class */ (function () {
    function GetAccount(init) {
        Object.assign(this, init);
    }
    GetAccount.prototype.getTypeName = function () { return 'GetAccount'; };
    GetAccount.prototype.getMethod = function () { return 'POST'; };
    GetAccount.prototype.createResponse = function () { return new Account(); };
    return GetAccount;
}());
exports.GetAccount = GetAccount;
var GetProject = /** @class */ (function () {
    function GetProject(init) {
        Object.assign(this, init);
    }
    GetProject.prototype.getTypeName = function () { return 'GetProject'; };
    GetProject.prototype.getMethod = function () { return 'POST'; };
    GetProject.prototype.createResponse = function () { return new Project(); };
    return GetProject;
}());
exports.GetProject = GetProject;
// @Route("/image-stream")
var ImageAsStream = /** @class */ (function () {
    function ImageAsStream(init) {
        Object.assign(this, init);
    }
    ImageAsStream.prototype.getTypeName = function () { return 'ImageAsStream'; };
    ImageAsStream.prototype.getMethod = function () { return 'POST'; };
    ImageAsStream.prototype.createResponse = function () { return new Blob(); };
    return ImageAsStream;
}());
exports.ImageAsStream = ImageAsStream;
// @Route("/image-bytes")
var ImageAsBytes = /** @class */ (function () {
    function ImageAsBytes(init) {
        Object.assign(this, init);
    }
    ImageAsBytes.prototype.getTypeName = function () { return 'ImageAsBytes'; };
    ImageAsBytes.prototype.getMethod = function () { return 'POST'; };
    ImageAsBytes.prototype.createResponse = function () { return new Uint8Array(0); };
    return ImageAsBytes;
}());
exports.ImageAsBytes = ImageAsBytes;
// @Route("/image-custom")
var ImageAsCustomResult = /** @class */ (function () {
    function ImageAsCustomResult(init) {
        Object.assign(this, init);
    }
    ImageAsCustomResult.prototype.getTypeName = function () { return 'ImageAsCustomResult'; };
    ImageAsCustomResult.prototype.getMethod = function () { return 'POST'; };
    ImageAsCustomResult.prototype.createResponse = function () { return new Uint8Array(0); };
    return ImageAsCustomResult;
}());
exports.ImageAsCustomResult = ImageAsCustomResult;
// @Route("/image-response")
var ImageWriteToResponse = /** @class */ (function () {
    function ImageWriteToResponse(init) {
        Object.assign(this, init);
    }
    ImageWriteToResponse.prototype.getTypeName = function () { return 'ImageWriteToResponse'; };
    ImageWriteToResponse.prototype.getMethod = function () { return 'POST'; };
    ImageWriteToResponse.prototype.createResponse = function () { return new Uint8Array(0); };
    return ImageWriteToResponse;
}());
exports.ImageWriteToResponse = ImageWriteToResponse;
// @Route("/image-file")
var ImageAsFile = /** @class */ (function () {
    function ImageAsFile(init) {
        Object.assign(this, init);
    }
    ImageAsFile.prototype.getTypeName = function () { return 'ImageAsFile'; };
    ImageAsFile.prototype.getMethod = function () { return 'POST'; };
    ImageAsFile.prototype.createResponse = function () { return new Uint8Array(0); };
    return ImageAsFile;
}());
exports.ImageAsFile = ImageAsFile;
// @Route("/image-redirect")
var ImageAsRedirect = /** @class */ (function () {
    function ImageAsRedirect(init) {
        Object.assign(this, init);
    }
    ImageAsRedirect.prototype.getTypeName = function () { return 'ImageAsRedirect'; };
    ImageAsRedirect.prototype.getMethod = function () { return 'POST'; };
    ImageAsRedirect.prototype.createResponse = function () { };
    return ImageAsRedirect;
}());
exports.ImageAsRedirect = ImageAsRedirect;
// @Route("/hello-image/{Name}")
var HelloImage = /** @class */ (function () {
    function HelloImage(init) {
        Object.assign(this, init);
    }
    HelloImage.prototype.getTypeName = function () { return 'HelloImage'; };
    HelloImage.prototype.getMethod = function () { return 'GET'; };
    HelloImage.prototype.createResponse = function () { return new Uint8Array(0); };
    return HelloImage;
}());
exports.HelloImage = HelloImage;
// @Route("/secured")
// @ValidateRequest(Validator="IsAuthenticated")
var Secured = /** @class */ (function () {
    function Secured(init) {
        Object.assign(this, init);
    }
    Secured.prototype.getTypeName = function () { return 'Secured'; };
    Secured.prototype.getMethod = function () { return 'POST'; };
    Secured.prototype.createResponse = function () { return new SecuredResponse(); };
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
    CreateJwt.prototype.getTypeName = function () { return 'CreateJwt'; };
    CreateJwt.prototype.getMethod = function () { return 'POST'; };
    CreateJwt.prototype.createResponse = function () { return new CreateJwtResponse(); };
    return CreateJwt;
}(AuthUserSession));
exports.CreateJwt = CreateJwt;
// @Route("/jwt-refresh")
var CreateRefreshJwt = /** @class */ (function () {
    function CreateRefreshJwt(init) {
        Object.assign(this, init);
    }
    CreateRefreshJwt.prototype.getTypeName = function () { return 'CreateRefreshJwt'; };
    CreateRefreshJwt.prototype.getMethod = function () { return 'POST'; };
    CreateRefreshJwt.prototype.createResponse = function () { return new CreateRefreshJwtResponse(); };
    return CreateRefreshJwt;
}());
exports.CreateRefreshJwt = CreateRefreshJwt;
// @Route("/jwt-invalidate")
var InvalidateLastAccessToken = /** @class */ (function () {
    function InvalidateLastAccessToken(init) {
        Object.assign(this, init);
    }
    InvalidateLastAccessToken.prototype.getTypeName = function () { return 'InvalidateLastAccessToken'; };
    InvalidateLastAccessToken.prototype.getMethod = function () { return 'POST'; };
    InvalidateLastAccessToken.prototype.createResponse = function () { return new EmptyResponse(); };
    return InvalidateLastAccessToken;
}());
exports.InvalidateLastAccessToken = InvalidateLastAccessToken;
// @Route("/logs")
var ViewLogs = /** @class */ (function () {
    function ViewLogs(init) {
        Object.assign(this, init);
    }
    ViewLogs.prototype.getTypeName = function () { return 'ViewLogs'; };
    ViewLogs.prototype.getMethod = function () { return 'POST'; };
    ViewLogs.prototype.createResponse = function () { return ''; };
    return ViewLogs;
}());
exports.ViewLogs = ViewLogs;
// @Route("/metadatatest")
var MetadataTest = /** @class */ (function () {
    function MetadataTest(init) {
        Object.assign(this, init);
    }
    MetadataTest.prototype.getTypeName = function () { return 'MetadataTest'; };
    MetadataTest.prototype.getMethod = function () { return 'POST'; };
    MetadataTest.prototype.createResponse = function () { return new MetadataTestResponse(); };
    return MetadataTest;
}());
exports.MetadataTest = MetadataTest;
// @Route("/metadatatest-array")
var MetadataTestArray = /** @class */ (function () {
    function MetadataTestArray(init) {
        Object.assign(this, init);
    }
    MetadataTestArray.prototype.getTypeName = function () { return 'MetadataTestArray'; };
    MetadataTestArray.prototype.getMethod = function () { return 'POST'; };
    MetadataTestArray.prototype.createResponse = function () { return new Array(); };
    return MetadataTestArray;
}());
exports.MetadataTestArray = MetadataTestArray;
// @Route("/example", "GET")
// @DataContract
var GetExample = /** @class */ (function () {
    function GetExample(init) {
        Object.assign(this, init);
    }
    GetExample.prototype.getTypeName = function () { return 'GetExample'; };
    GetExample.prototype.getMethod = function () { return 'GET'; };
    GetExample.prototype.createResponse = function () { return new GetExampleResponse(); };
    return GetExample;
}());
exports.GetExample = GetExample;
// @Route("/messages/{Id}", "GET")
var RequestMessage = /** @class */ (function () {
    function RequestMessage(init) {
        Object.assign(this, init);
    }
    RequestMessage.prototype.getTypeName = function () { return 'RequestMessage'; };
    RequestMessage.prototype.getMethod = function () { return 'GET'; };
    RequestMessage.prototype.createResponse = function () { return new Message(); };
    return RequestMessage;
}());
exports.RequestMessage = RequestMessage;
// @Route("/randomids")
var GetRandomIds = /** @class */ (function () {
    function GetRandomIds(init) {
        Object.assign(this, init);
    }
    GetRandomIds.prototype.getTypeName = function () { return 'GetRandomIds'; };
    GetRandomIds.prototype.getMethod = function () { return 'POST'; };
    GetRandomIds.prototype.createResponse = function () { return new GetRandomIdsResponse(); };
    return GetRandomIds;
}());
exports.GetRandomIds = GetRandomIds;
// @Route("/textfile-test")
var TextFileTest = /** @class */ (function () {
    function TextFileTest(init) {
        Object.assign(this, init);
    }
    TextFileTest.prototype.getTypeName = function () { return 'TextFileTest'; };
    TextFileTest.prototype.getMethod = function () { return 'POST'; };
    TextFileTest.prototype.createResponse = function () { };
    return TextFileTest;
}());
exports.TextFileTest = TextFileTest;
// @Route("/return/text")
var ReturnText = /** @class */ (function () {
    function ReturnText(init) {
        Object.assign(this, init);
    }
    ReturnText.prototype.getTypeName = function () { return 'ReturnText'; };
    ReturnText.prototype.getMethod = function () { return 'POST'; };
    ReturnText.prototype.createResponse = function () { };
    return ReturnText;
}());
exports.ReturnText = ReturnText;
// @Route("/return/html")
var ReturnHtml = /** @class */ (function () {
    function ReturnHtml(init) {
        Object.assign(this, init);
    }
    ReturnHtml.prototype.getTypeName = function () { return 'ReturnHtml'; };
    ReturnHtml.prototype.getMethod = function () { return 'POST'; };
    ReturnHtml.prototype.createResponse = function () { };
    return ReturnHtml;
}());
exports.ReturnHtml = ReturnHtml;
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = /** @class */ (function () {
    function Hello(init) {
        Object.assign(this, init);
    }
    Hello.prototype.getTypeName = function () { return 'Hello'; };
    Hello.prototype.getMethod = function () { return 'POST'; };
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    return Hello;
}());
exports.Hello = Hello;
// @Route("/hello-secure/{Name}")
// @ValidateRequest(Validator="IsAuthenticated")
var HelloSecure = /** @class */ (function () {
    function HelloSecure(init) {
        Object.assign(this, init);
    }
    HelloSecure.prototype.getTypeName = function () { return 'HelloSecure'; };
    HelloSecure.prototype.getMethod = function () { return 'POST'; };
    HelloSecure.prototype.createResponse = function () { return new HelloResponse(); };
    return HelloSecure;
}());
exports.HelloSecure = HelloSecure;
/**
* Description on HelloAll type
*/
// @DataContract
var HelloAnnotated = /** @class */ (function () {
    function HelloAnnotated(init) {
        Object.assign(this, init);
    }
    HelloAnnotated.prototype.getTypeName = function () { return 'HelloAnnotated'; };
    HelloAnnotated.prototype.getMethod = function () { return 'POST'; };
    HelloAnnotated.prototype.createResponse = function () { return new HelloAnnotatedResponse(); };
    return HelloAnnotated;
}());
exports.HelloAnnotated = HelloAnnotated;
var HelloWithNestedClass = /** @class */ (function () {
    function HelloWithNestedClass(init) {
        Object.assign(this, init);
    }
    HelloWithNestedClass.prototype.getTypeName = function () { return 'HelloWithNestedClass'; };
    HelloWithNestedClass.prototype.getMethod = function () { return 'GET'; };
    HelloWithNestedClass.prototype.createResponse = function () { return new HelloResponse(); };
    return HelloWithNestedClass;
}());
exports.HelloWithNestedClass = HelloWithNestedClass;
var HelloList = /** @class */ (function () {
    function HelloList(init) {
        Object.assign(this, init);
    }
    HelloList.prototype.getTypeName = function () { return 'HelloList'; };
    HelloList.prototype.getMethod = function () { return 'POST'; };
    HelloList.prototype.createResponse = function () { return new Array(); };
    return HelloList;
}());
exports.HelloList = HelloList;
var HelloArray = /** @class */ (function () {
    function HelloArray(init) {
        Object.assign(this, init);
    }
    HelloArray.prototype.getTypeName = function () { return 'HelloArray'; };
    HelloArray.prototype.getMethod = function () { return 'POST'; };
    HelloArray.prototype.createResponse = function () { return new Array(); };
    return HelloArray;
}());
exports.HelloArray = HelloArray;
var HelloWithEnum = /** @class */ (function () {
    function HelloWithEnum(init) {
        Object.assign(this, init);
    }
    HelloWithEnum.prototype.getTypeName = function () { return 'HelloWithEnum'; };
    HelloWithEnum.prototype.getMethod = function () { return 'POST'; };
    HelloWithEnum.prototype.createResponse = function () { };
    return HelloWithEnum;
}());
exports.HelloWithEnum = HelloWithEnum;
var HelloWithEnumList = /** @class */ (function () {
    function HelloWithEnumList(init) {
        Object.assign(this, init);
    }
    HelloWithEnumList.prototype.getTypeName = function () { return 'HelloWithEnumList'; };
    HelloWithEnumList.prototype.getMethod = function () { return 'POST'; };
    HelloWithEnumList.prototype.createResponse = function () { };
    return HelloWithEnumList;
}());
exports.HelloWithEnumList = HelloWithEnumList;
var HelloWithEnumMap = /** @class */ (function () {
    function HelloWithEnumMap(init) {
        Object.assign(this, init);
    }
    HelloWithEnumMap.prototype.getTypeName = function () { return 'HelloWithEnumMap'; };
    HelloWithEnumMap.prototype.getMethod = function () { return 'POST'; };
    HelloWithEnumMap.prototype.createResponse = function () { };
    return HelloWithEnumMap;
}());
exports.HelloWithEnumMap = HelloWithEnumMap;
var RestrictedAttributes = /** @class */ (function () {
    function RestrictedAttributes(init) {
        Object.assign(this, init);
    }
    RestrictedAttributes.prototype.getTypeName = function () { return 'RestrictedAttributes'; };
    RestrictedAttributes.prototype.getMethod = function () { return 'POST'; };
    RestrictedAttributes.prototype.createResponse = function () { };
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
    AllowedAttributes.prototype.getTypeName = function () { return 'AllowedAttributes'; };
    AllowedAttributes.prototype.getMethod = function () { return 'GET'; };
    AllowedAttributes.prototype.createResponse = function () { };
    return AllowedAttributes;
}());
exports.AllowedAttributes = AllowedAttributes;
// @Route("/all-types")
var HelloAllTypes = /** @class */ (function () {
    function HelloAllTypes(init) {
        Object.assign(this, init);
    }
    HelloAllTypes.prototype.getTypeName = function () { return 'HelloAllTypes'; };
    HelloAllTypes.prototype.getMethod = function () { return 'POST'; };
    HelloAllTypes.prototype.createResponse = function () { return new HelloAllTypesResponse(); };
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
    HelloSubAllTypes.prototype.getTypeName = function () { return 'HelloSubAllTypes'; };
    HelloSubAllTypes.prototype.getMethod = function () { return 'POST'; };
    HelloSubAllTypes.prototype.createResponse = function () { return new SubAllTypes(); };
    return HelloSubAllTypes;
}(AllTypesBase));
exports.HelloSubAllTypes = HelloSubAllTypes;
var HelloString = /** @class */ (function () {
    function HelloString(init) {
        Object.assign(this, init);
    }
    HelloString.prototype.getTypeName = function () { return 'HelloString'; };
    HelloString.prototype.getMethod = function () { return 'POST'; };
    HelloString.prototype.createResponse = function () { return ''; };
    return HelloString;
}());
exports.HelloString = HelloString;
var HelloVoid = /** @class */ (function () {
    function HelloVoid(init) {
        Object.assign(this, init);
    }
    HelloVoid.prototype.getTypeName = function () { return 'HelloVoid'; };
    HelloVoid.prototype.getMethod = function () { return 'POST'; };
    HelloVoid.prototype.createResponse = function () { };
    return HelloVoid;
}());
exports.HelloVoid = HelloVoid;
// @DataContract
var HelloWithDataContract = /** @class */ (function () {
    function HelloWithDataContract(init) {
        Object.assign(this, init);
    }
    HelloWithDataContract.prototype.getTypeName = function () { return 'HelloWithDataContract'; };
    HelloWithDataContract.prototype.getMethod = function () { return 'POST'; };
    HelloWithDataContract.prototype.createResponse = function () { return new HelloWithDataContractResponse(); };
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
    HelloWithDescription.prototype.getTypeName = function () { return 'HelloWithDescription'; };
    HelloWithDescription.prototype.getMethod = function () { return 'POST'; };
    HelloWithDescription.prototype.createResponse = function () { return new HelloWithDescriptionResponse(); };
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
    HelloWithInheritance.prototype.getTypeName = function () { return 'HelloWithInheritance'; };
    HelloWithInheritance.prototype.getMethod = function () { return 'POST'; };
    HelloWithInheritance.prototype.createResponse = function () { return new HelloWithInheritanceResponse(); };
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
    HelloWithGenericInheritance.prototype.getTypeName = function () { return 'HelloWithGenericInheritance'; };
    HelloWithGenericInheritance.prototype.getMethod = function () { return 'POST'; };
    HelloWithGenericInheritance.prototype.createResponse = function () { };
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
    HelloWithGenericInheritance2.prototype.getTypeName = function () { return 'HelloWithGenericInheritance2'; };
    HelloWithGenericInheritance2.prototype.getMethod = function () { return 'POST'; };
    HelloWithGenericInheritance2.prototype.createResponse = function () { };
    return HelloWithGenericInheritance2;
}(HelloBase_1));
exports.HelloWithGenericInheritance2 = HelloWithGenericInheritance2;
var HelloWithReturn = /** @class */ (function () {
    function HelloWithReturn(init) {
        Object.assign(this, init);
    }
    HelloWithReturn.prototype.getTypeName = function () { return 'HelloWithReturn'; };
    HelloWithReturn.prototype.getMethod = function () { return 'POST'; };
    HelloWithReturn.prototype.createResponse = function () { return new HelloWithAlternateReturnResponse(); };
    return HelloWithReturn;
}());
exports.HelloWithReturn = HelloWithReturn;
// @Route("/helloroute")
var HelloWithRoute = /** @class */ (function () {
    function HelloWithRoute(init) {
        Object.assign(this, init);
    }
    HelloWithRoute.prototype.getTypeName = function () { return 'HelloWithRoute'; };
    HelloWithRoute.prototype.getMethod = function () { return 'POST'; };
    HelloWithRoute.prototype.createResponse = function () { return new HelloWithRouteResponse(); };
    return HelloWithRoute;
}());
exports.HelloWithRoute = HelloWithRoute;
var HelloWithType = /** @class */ (function () {
    function HelloWithType(init) {
        Object.assign(this, init);
    }
    HelloWithType.prototype.getTypeName = function () { return 'HelloWithType'; };
    HelloWithType.prototype.getMethod = function () { return 'POST'; };
    HelloWithType.prototype.createResponse = function () { return new HelloWithTypeResponse(); };
    return HelloWithType;
}());
exports.HelloWithType = HelloWithType;
var HelloInterface = /** @class */ (function () {
    function HelloInterface(init) {
        Object.assign(this, init);
    }
    HelloInterface.prototype.getTypeName = function () { return 'HelloInterface'; };
    HelloInterface.prototype.getMethod = function () { return 'POST'; };
    HelloInterface.prototype.createResponse = function () { };
    return HelloInterface;
}());
exports.HelloInterface = HelloInterface;
var HelloInnerTypes = /** @class */ (function () {
    function HelloInnerTypes(init) {
        Object.assign(this, init);
    }
    HelloInnerTypes.prototype.getTypeName = function () { return 'HelloInnerTypes'; };
    HelloInnerTypes.prototype.getMethod = function () { return 'POST'; };
    HelloInnerTypes.prototype.createResponse = function () { return new HelloInnerTypesResponse(); };
    return HelloInnerTypes;
}());
exports.HelloInnerTypes = HelloInnerTypes;
var HelloBuiltin = /** @class */ (function () {
    function HelloBuiltin(init) {
        Object.assign(this, init);
    }
    HelloBuiltin.prototype.getTypeName = function () { return 'HelloBuiltin'; };
    HelloBuiltin.prototype.getMethod = function () { return 'POST'; };
    HelloBuiltin.prototype.createResponse = function () { };
    return HelloBuiltin;
}());
exports.HelloBuiltin = HelloBuiltin;
var HelloGet = /** @class */ (function () {
    function HelloGet(init) {
        Object.assign(this, init);
    }
    HelloGet.prototype.getTypeName = function () { return 'HelloGet'; };
    HelloGet.prototype.getMethod = function () { return 'GET'; };
    HelloGet.prototype.createResponse = function () { return new HelloVerbResponse(); };
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
    HelloPost.prototype.getTypeName = function () { return 'HelloPost'; };
    HelloPost.prototype.getMethod = function () { return 'POST'; };
    HelloPost.prototype.createResponse = function () { return new HelloVerbResponse(); };
    return HelloPost;
}(HelloBase));
exports.HelloPost = HelloPost;
var HelloPut = /** @class */ (function () {
    function HelloPut(init) {
        Object.assign(this, init);
    }
    HelloPut.prototype.getTypeName = function () { return 'HelloPut'; };
    HelloPut.prototype.getMethod = function () { return 'PUT'; };
    HelloPut.prototype.createResponse = function () { return new HelloVerbResponse(); };
    return HelloPut;
}());
exports.HelloPut = HelloPut;
var HelloDelete = /** @class */ (function () {
    function HelloDelete(init) {
        Object.assign(this, init);
    }
    HelloDelete.prototype.getTypeName = function () { return 'HelloDelete'; };
    HelloDelete.prototype.getMethod = function () { return 'DELETE'; };
    HelloDelete.prototype.createResponse = function () { return new HelloVerbResponse(); };
    return HelloDelete;
}());
exports.HelloDelete = HelloDelete;
var HelloPatch = /** @class */ (function () {
    function HelloPatch(init) {
        Object.assign(this, init);
    }
    HelloPatch.prototype.getTypeName = function () { return 'HelloPatch'; };
    HelloPatch.prototype.getMethod = function () { return 'PATCH'; };
    HelloPatch.prototype.createResponse = function () { return new HelloVerbResponse(); };
    return HelloPatch;
}());
exports.HelloPatch = HelloPatch;
var HelloReturnVoid = /** @class */ (function () {
    function HelloReturnVoid(init) {
        Object.assign(this, init);
    }
    HelloReturnVoid.prototype.getTypeName = function () { return 'HelloReturnVoid'; };
    HelloReturnVoid.prototype.getMethod = function () { return 'POST'; };
    HelloReturnVoid.prototype.createResponse = function () { };
    return HelloReturnVoid;
}());
exports.HelloReturnVoid = HelloReturnVoid;
var EnumRequest = /** @class */ (function () {
    function EnumRequest(init) {
        Object.assign(this, init);
    }
    EnumRequest.prototype.getTypeName = function () { return 'EnumRequest'; };
    EnumRequest.prototype.getMethod = function () { return 'PUT'; };
    EnumRequest.prototype.createResponse = function () { return new EnumResponse(); };
    return EnumRequest;
}());
exports.EnumRequest = EnumRequest;
// @Route("/hellozip")
// @DataContract
var HelloZip = /** @class */ (function () {
    function HelloZip(init) {
        Object.assign(this, init);
    }
    HelloZip.prototype.getTypeName = function () { return 'HelloZip'; };
    HelloZip.prototype.getMethod = function () { return 'POST'; };
    HelloZip.prototype.createResponse = function () { return new HelloZipResponse(); };
    return HelloZip;
}());
exports.HelloZip = HelloZip;
// @Route("/ping")
var Ping = /** @class */ (function () {
    function Ping(init) {
        Object.assign(this, init);
    }
    Ping.prototype.getTypeName = function () { return 'Ping'; };
    Ping.prototype.getMethod = function () { return 'POST'; };
    Ping.prototype.createResponse = function () { return new PingResponse(); };
    return Ping;
}());
exports.Ping = Ping;
// @Route("/reset-connections")
var ResetConnections = /** @class */ (function () {
    function ResetConnections(init) {
        Object.assign(this, init);
    }
    ResetConnections.prototype.getTypeName = function () { return 'PingService.ResetConnections'; };
    ResetConnections.prototype.getMethod = function () { return 'POST'; };
    ResetConnections.prototype.createResponse = function () { };
    return ResetConnections;
}());
exports.ResetConnections = ResetConnections;
// @Route("/requires-role")
var RequiresRole = /** @class */ (function () {
    function RequiresRole(init) {
        Object.assign(this, init);
    }
    RequiresRole.prototype.getTypeName = function () { return 'RequiresRole'; };
    RequiresRole.prototype.getMethod = function () { return 'POST'; };
    RequiresRole.prototype.createResponse = function () { return new RequiresRoleResponse(); };
    return RequiresRole;
}());
exports.RequiresRole = RequiresRole;
// @Route("/return/string")
var ReturnString = /** @class */ (function () {
    function ReturnString(init) {
        Object.assign(this, init);
    }
    ReturnString.prototype.getTypeName = function () { return 'ReturnString'; };
    ReturnString.prototype.getMethod = function () { return 'POST'; };
    ReturnString.prototype.createResponse = function () { return ''; };
    return ReturnString;
}());
exports.ReturnString = ReturnString;
// @Route("/return/bytes")
var ReturnBytes = /** @class */ (function () {
    function ReturnBytes(init) {
        Object.assign(this, init);
    }
    ReturnBytes.prototype.getTypeName = function () { return 'ReturnBytes'; };
    ReturnBytes.prototype.getMethod = function () { return 'POST'; };
    ReturnBytes.prototype.createResponse = function () { return new Uint8Array(0); };
    return ReturnBytes;
}());
exports.ReturnBytes = ReturnBytes;
// @Route("/return/stream")
var ReturnStream = /** @class */ (function () {
    function ReturnStream(init) {
        Object.assign(this, init);
    }
    ReturnStream.prototype.getTypeName = function () { return 'ReturnStream'; };
    ReturnStream.prototype.getMethod = function () { return 'POST'; };
    ReturnStream.prototype.createResponse = function () { return new Blob(); };
    return ReturnStream;
}());
exports.ReturnStream = ReturnStream;
// @Route("/return/json")
var ReturnJson = /** @class */ (function () {
    function ReturnJson(init) {
        Object.assign(this, init);
    }
    ReturnJson.prototype.getTypeName = function () { return 'ReturnJson'; };
    ReturnJson.prototype.getMethod = function () { return 'POST'; };
    ReturnJson.prototype.createResponse = function () { };
    return ReturnJson;
}());
exports.ReturnJson = ReturnJson;
// @Route("/return/json/header")
var ReturnJsonHeader = /** @class */ (function () {
    function ReturnJsonHeader(init) {
        Object.assign(this, init);
    }
    ReturnJsonHeader.prototype.getTypeName = function () { return 'ReturnJsonHeader'; };
    ReturnJsonHeader.prototype.getMethod = function () { return 'POST'; };
    ReturnJsonHeader.prototype.createResponse = function () { };
    return ReturnJsonHeader;
}());
exports.ReturnJsonHeader = ReturnJsonHeader;
// @Route("/write/json")
var WriteJson = /** @class */ (function () {
    function WriteJson(init) {
        Object.assign(this, init);
    }
    WriteJson.prototype.getTypeName = function () { return 'WriteJson'; };
    WriteJson.prototype.getMethod = function () { return 'POST'; };
    WriteJson.prototype.createResponse = function () { };
    return WriteJson;
}());
exports.WriteJson = WriteJson;
// @Route("/Request1", "GET")
var GetRequest1 = /** @class */ (function () {
    function GetRequest1(init) {
        Object.assign(this, init);
    }
    GetRequest1.prototype.getTypeName = function () { return 'GetRequest1'; };
    GetRequest1.prototype.getMethod = function () { return 'GET'; };
    GetRequest1.prototype.createResponse = function () { return new Array(); };
    return GetRequest1;
}());
exports.GetRequest1 = GetRequest1;
// @Route("/Request2", "GET")
var GetRequest2 = /** @class */ (function () {
    function GetRequest2(init) {
        Object.assign(this, init);
    }
    GetRequest2.prototype.getTypeName = function () { return 'GetRequest2'; };
    GetRequest2.prototype.getMethod = function () { return 'GET'; };
    GetRequest2.prototype.createResponse = function () { return new Array(); };
    return GetRequest2;
}());
exports.GetRequest2 = GetRequest2;
// @Route("/sendjson")
var SendJson = /** @class */ (function () {
    function SendJson(init) {
        Object.assign(this, init);
    }
    SendJson.prototype.getTypeName = function () { return 'SendJson'; };
    SendJson.prototype.getMethod = function () { return 'POST'; };
    SendJson.prototype.createResponse = function () { return ''; };
    return SendJson;
}());
exports.SendJson = SendJson;
// @Route("/sendtext")
var SendText = /** @class */ (function () {
    function SendText(init) {
        Object.assign(this, init);
    }
    SendText.prototype.getTypeName = function () { return 'SendText'; };
    SendText.prototype.getMethod = function () { return 'POST'; };
    SendText.prototype.createResponse = function () { return ''; };
    return SendText;
}());
exports.SendText = SendText;
// @Route("/sendraw")
var SendRaw = /** @class */ (function () {
    function SendRaw(init) {
        Object.assign(this, init);
    }
    SendRaw.prototype.getTypeName = function () { return 'SendRaw'; };
    SendRaw.prototype.getMethod = function () { return 'POST'; };
    SendRaw.prototype.createResponse = function () { return new Uint8Array(0); };
    return SendRaw;
}());
exports.SendRaw = SendRaw;
var SendDefault = /** @class */ (function () {
    function SendDefault(init) {
        Object.assign(this, init);
    }
    SendDefault.prototype.getTypeName = function () { return 'SendDefault'; };
    SendDefault.prototype.getMethod = function () { return 'POST'; };
    SendDefault.prototype.createResponse = function () { return new SendVerbResponse(); };
    return SendDefault;
}());
exports.SendDefault = SendDefault;
// @Route("/sendrestget/{Id}", "GET")
var SendRestGet = /** @class */ (function () {
    function SendRestGet(init) {
        Object.assign(this, init);
    }
    SendRestGet.prototype.getTypeName = function () { return 'SendRestGet'; };
    SendRestGet.prototype.getMethod = function () { return 'GET'; };
    SendRestGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    return SendRestGet;
}());
exports.SendRestGet = SendRestGet;
var SendGet = /** @class */ (function () {
    function SendGet(init) {
        Object.assign(this, init);
    }
    SendGet.prototype.getTypeName = function () { return 'SendGet'; };
    SendGet.prototype.getMethod = function () { return 'GET'; };
    SendGet.prototype.createResponse = function () { return new SendVerbResponse(); };
    return SendGet;
}());
exports.SendGet = SendGet;
var SendPost = /** @class */ (function () {
    function SendPost(init) {
        Object.assign(this, init);
    }
    SendPost.prototype.getTypeName = function () { return 'SendPost'; };
    SendPost.prototype.getMethod = function () { return 'POST'; };
    SendPost.prototype.createResponse = function () { return new SendVerbResponse(); };
    return SendPost;
}());
exports.SendPost = SendPost;
var SendPut = /** @class */ (function () {
    function SendPut(init) {
        Object.assign(this, init);
    }
    SendPut.prototype.getTypeName = function () { return 'SendPut'; };
    SendPut.prototype.getMethod = function () { return 'PUT'; };
    SendPut.prototype.createResponse = function () { return new SendVerbResponse(); };
    return SendPut;
}());
exports.SendPut = SendPut;
var SendReturnVoid = /** @class */ (function () {
    function SendReturnVoid(init) {
        Object.assign(this, init);
    }
    SendReturnVoid.prototype.getTypeName = function () { return 'SendReturnVoid'; };
    SendReturnVoid.prototype.getMethod = function () { return 'POST'; };
    SendReturnVoid.prototype.createResponse = function () { };
    return SendReturnVoid;
}());
exports.SendReturnVoid = SendReturnVoid;
// @Route("/session")
var GetSession = /** @class */ (function () {
    function GetSession(init) {
        Object.assign(this, init);
    }
    GetSession.prototype.getTypeName = function () { return 'GetSession'; };
    GetSession.prototype.getMethod = function () { return 'POST'; };
    GetSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    return GetSession;
}());
exports.GetSession = GetSession;
// @Route("/session/edit/{CustomName}")
var UpdateSession = /** @class */ (function () {
    function UpdateSession(init) {
        Object.assign(this, init);
    }
    UpdateSession.prototype.getTypeName = function () { return 'UpdateSession'; };
    UpdateSession.prototype.getMethod = function () { return 'POST'; };
    UpdateSession.prototype.createResponse = function () { return new GetSessionResponse(); };
    return UpdateSession;
}());
exports.UpdateSession = UpdateSession;
// @Route("/Stuff")
// @DataContract(Namespace="http://schemas.servicestack.net/types")
var GetStuff = /** @class */ (function () {
    function GetStuff(init) {
        Object.assign(this, init);
    }
    GetStuff.prototype.getTypeName = function () { return 'GetStuff'; };
    GetStuff.prototype.getMethod = function () { return 'POST'; };
    GetStuff.prototype.createResponse = function () { return new GetStuffResponse(); };
    return GetStuff;
}());
exports.GetStuff = GetStuff;
var StoreLogs = /** @class */ (function () {
    function StoreLogs(init) {
        Object.assign(this, init);
    }
    StoreLogs.prototype.getTypeName = function () { return 'StoreLogs'; };
    StoreLogs.prototype.getMethod = function () { return 'POST'; };
    StoreLogs.prototype.createResponse = function () { return new StoreLogsResponse(); };
    return StoreLogs;
}());
exports.StoreLogs = StoreLogs;
var HelloAuth = /** @class */ (function () {
    function HelloAuth(init) {
        Object.assign(this, init);
    }
    HelloAuth.prototype.getTypeName = function () { return 'HelloAuth'; };
    HelloAuth.prototype.getMethod = function () { return 'POST'; };
    HelloAuth.prototype.createResponse = function () { return new HelloResponse(); };
    return HelloAuth;
}());
exports.HelloAuth = HelloAuth;
// @Route("/testauth")
var TestAuth = /** @class */ (function () {
    function TestAuth(init) {
        Object.assign(this, init);
    }
    TestAuth.prototype.getTypeName = function () { return 'TestAuth'; };
    TestAuth.prototype.getMethod = function () { return 'POST'; };
    TestAuth.prototype.createResponse = function () { return new TestAuthResponse(); };
    return TestAuth;
}());
exports.TestAuth = TestAuth;
// @Route("/testdata/AllTypes")
var TestDataAllTypes = /** @class */ (function () {
    function TestDataAllTypes(init) {
        Object.assign(this, init);
    }
    TestDataAllTypes.prototype.getTypeName = function () { return 'TestDataAllTypes'; };
    TestDataAllTypes.prototype.getMethod = function () { return 'POST'; };
    TestDataAllTypes.prototype.createResponse = function () { return new AllTypes(); };
    return TestDataAllTypes;
}());
exports.TestDataAllTypes = TestDataAllTypes;
// @Route("/testdata/AllCollectionTypes")
var TestDataAllCollectionTypes = /** @class */ (function () {
    function TestDataAllCollectionTypes(init) {
        Object.assign(this, init);
    }
    TestDataAllCollectionTypes.prototype.getTypeName = function () { return 'TestDataAllCollectionTypes'; };
    TestDataAllCollectionTypes.prototype.getMethod = function () { return 'POST'; };
    TestDataAllCollectionTypes.prototype.createResponse = function () { return new AllCollectionTypes(); };
    return TestDataAllCollectionTypes;
}());
exports.TestDataAllCollectionTypes = TestDataAllCollectionTypes;
// @Route("/void-response")
var TestVoidResponse = /** @class */ (function () {
    function TestVoidResponse(init) {
        Object.assign(this, init);
    }
    TestVoidResponse.prototype.getTypeName = function () { return 'TestVoidResponse'; };
    TestVoidResponse.prototype.getMethod = function () { return 'POST'; };
    TestVoidResponse.prototype.createResponse = function () { };
    return TestVoidResponse;
}());
exports.TestVoidResponse = TestVoidResponse;
// @Route("/null-response")
var TestNullResponse = /** @class */ (function () {
    function TestNullResponse(init) {
        Object.assign(this, init);
    }
    TestNullResponse.prototype.getTypeName = function () { return 'TestNullResponse'; };
    TestNullResponse.prototype.getMethod = function () { return 'POST'; };
    TestNullResponse.prototype.createResponse = function () { };
    return TestNullResponse;
}());
exports.TestNullResponse = TestNullResponse;
/**
* Sign In
*/
// @Route("/auth")
// @Route("/auth/{provider}")
// @Api(Description="Sign In")
// @DataContract
var Authenticate = /** @class */ (function () {
    function Authenticate(init) {
        Object.assign(this, init);
    }
    Authenticate.prototype.getTypeName = function () { return 'Authenticate'; };
    Authenticate.prototype.getMethod = function () { return 'POST'; };
    Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
    return Authenticate;
}());
exports.Authenticate = Authenticate;
// @Route("/assignroles")
// @DataContract
var AssignRoles = /** @class */ (function () {
    function AssignRoles(init) {
        Object.assign(this, init);
    }
    AssignRoles.prototype.getTypeName = function () { return 'AssignRoles'; };
    AssignRoles.prototype.getMethod = function () { return 'POST'; };
    AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
    return AssignRoles;
}());
exports.AssignRoles = AssignRoles;
// @Route("/unassignroles")
// @DataContract
var UnAssignRoles = /** @class */ (function () {
    function UnAssignRoles(init) {
        Object.assign(this, init);
    }
    UnAssignRoles.prototype.getTypeName = function () { return 'UnAssignRoles'; };
    UnAssignRoles.prototype.getMethod = function () { return 'POST'; };
    UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
    return UnAssignRoles;
}());
exports.UnAssignRoles = UnAssignRoles;
/**
* Sign Up
*/
// @Route("/register")
// @Api(Description="Sign Up")
// @DataContract
var Register = /** @class */ (function () {
    function Register(init) {
        Object.assign(this, init);
    }
    Register.prototype.getTypeName = function () { return 'Register'; };
    Register.prototype.getMethod = function () { return 'POST'; };
    Register.prototype.createResponse = function () { return new RegisterResponse(); };
    return Register;
}());
exports.Register = Register;
var QueryRockstarAudit = /** @class */ (function (_super) {
    __extends(QueryRockstarAudit, _super);
    function QueryRockstarAudit(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    QueryRockstarAudit.prototype.getTypeName = function () { return 'QueryRockstarAudit'; };
    QueryRockstarAudit.prototype.getMethod = function () { return 'GET'; };
    QueryRockstarAudit.prototype.createResponse = function () { return new QueryResponse(); };
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
    QueryRockstarAuditSubOr.prototype.getTypeName = function () { return 'QueryRockstarAuditSubOr'; };
    QueryRockstarAuditSubOr.prototype.getMethod = function () { return 'GET'; };
    QueryRockstarAuditSubOr.prototype.createResponse = function () { return new QueryResponse(); };
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
    QueryPocoBase.prototype.getTypeName = function () { return 'QueryPocoBase'; };
    QueryPocoBase.prototype.getMethod = function () { return 'GET'; };
    QueryPocoBase.prototype.createResponse = function () { return new QueryResponse(); };
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
    QueryPocoIntoBase.prototype.getTypeName = function () { return 'QueryPocoIntoBase'; };
    QueryPocoIntoBase.prototype.getMethod = function () { return 'GET'; };
    QueryPocoIntoBase.prototype.createResponse = function () { return new QueryResponse(); };
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
    MessageQuery.prototype.getTypeName = function () { return 'MessageQuery'; };
    MessageQuery.prototype.getMethod = function () { return 'GET'; };
    MessageQuery.prototype.createResponse = function () { return new QueryResponse(); };
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
    QueryRockstars.prototype.getTypeName = function () { return 'QueryRockstars'; };
    QueryRockstars.prototype.getMethod = function () { return 'GET'; };
    QueryRockstars.prototype.createResponse = function () { return new QueryResponse(); };
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
    CreateRockstarAudit.prototype.getTypeName = function () { return 'CreateRockstarAudit'; };
    CreateRockstarAudit.prototype.getMethod = function () { return 'POST'; };
    CreateRockstarAudit.prototype.createResponse = function () { return new RockstarWithIdResponse(); };
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
    CreateRockstarAuditTenant.prototype.getTypeName = function () { return 'CreateRockstarAuditTenant'; };
    CreateRockstarAuditTenant.prototype.getMethod = function () { return 'POST'; };
    CreateRockstarAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
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
    UpdateRockstarAuditTenant.prototype.getTypeName = function () { return 'UpdateRockstarAuditTenant'; };
    UpdateRockstarAuditTenant.prototype.getMethod = function () { return 'PUT'; };
    UpdateRockstarAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
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
    PatchRockstarAuditTenant.prototype.getTypeName = function () { return 'PatchRockstarAuditTenant'; };
    PatchRockstarAuditTenant.prototype.getMethod = function () { return 'PATCH'; };
    PatchRockstarAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
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
    SoftDeleteAuditTenant.prototype.getTypeName = function () { return 'SoftDeleteAuditTenant'; };
    SoftDeleteAuditTenant.prototype.getMethod = function () { return 'PUT'; };
    SoftDeleteAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndResultResponse(); };
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
    CreateRockstarAuditMqToken.prototype.getTypeName = function () { return 'CreateRockstarAuditMqToken'; };
    CreateRockstarAuditMqToken.prototype.getMethod = function () { return 'POST'; };
    CreateRockstarAuditMqToken.prototype.createResponse = function () { return new RockstarWithIdResponse(); };
    return CreateRockstarAuditMqToken;
}(RockstarBase));
exports.CreateRockstarAuditMqToken = CreateRockstarAuditMqToken;
var RealDeleteAuditTenant = /** @class */ (function () {
    function RealDeleteAuditTenant(init) {
        Object.assign(this, init);
    }
    RealDeleteAuditTenant.prototype.getTypeName = function () { return 'RealDeleteAuditTenant'; };
    RealDeleteAuditTenant.prototype.getMethod = function () { return 'DELETE'; };
    RealDeleteAuditTenant.prototype.createResponse = function () { return new RockstarWithIdAndCountResponse(); };
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
    CreateRockstarVersion.prototype.getTypeName = function () { return 'CreateRockstarVersion'; };
    CreateRockstarVersion.prototype.getMethod = function () { return 'POST'; };
    CreateRockstarVersion.prototype.createResponse = function () { return new RockstarWithIdAndRowVersionResponse(); };
    return CreateRockstarVersion;
}(RockstarBase));
exports.CreateRockstarVersion = CreateRockstarVersion;
