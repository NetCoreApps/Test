using System;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace Test.ServiceModel;

public abstract class RockstarBase
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime? DateDied { get; set; }
    public LivingStatus LivingStatus { get; set; }
}

public enum LivingStatus
{
    Alive,
    Dead
}
    
public class RockstarAudit : RockstarBase
{
    [AutoIncrement]
    public int Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatedBy { get; set; }
    public string CreatedInfo { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedBy { get; set; }
    public string ModifiedInfo { get; set; }
}

public class RockstarAuditTenant : AuditBase
{
    [Index]
    public int TenantId { get; set; }
    [AutoIncrement]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime? DateDied { get; set; }
    public LivingStatus LivingStatus { get; set; }
}
    
[Alias(nameof(Rockstar))]
public class RockstarAuto : RockstarBase
{
    [AutoIncrement]
    public int Id { get; set; }
}

public class RockstarVersion : RockstarBase
{
    [AutoIncrement]
    public int Id { get; set; }
    public ulong RowVersion { get; set; }
}
    
public class CreateRockstarResponse
{
    public ResponseStatus ResponseStatus { get; set; }
}

public class RockstarWithIdResponse
{
    public int Id { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}
public class RockstarWithIdAndCountResponse
{
    public int Id { get; set; }
    public int Count { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}
    
public class RockstarWithIdAndRowVersionResponse
{
    public int Id { get; set; }
    public uint RowVersion { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}
    
public class RockstarWithIdAndResultResponse
{
    public int Id { get; set; }
    public RockstarAuto Result { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

public interface IAuditTenant
{
    int TenantId { get; set; }
}

[AutoPopulate(nameof(RockstarAudit.CreatedDate),  Eval = "utcNow")]
[AutoPopulate(nameof(RockstarAudit.CreatedBy),    Eval = "userAuthName")] //or userAuthId
[AutoPopulate(nameof(RockstarAudit.CreatedInfo),  Eval = "`${userSession.DisplayName} (${userSession.City})`")]
[AutoPopulate(nameof(RockstarAudit.ModifiedDate), Eval = "utcNow")]
[AutoPopulate(nameof(RockstarAudit.ModifiedBy),   Eval = "userAuthName")] //or userAuthId
[AutoPopulate(nameof(RockstarAudit.ModifiedInfo), Eval = "`${userSession.DisplayName} (${userSession.City})`")]
public class CreateRockstarAudit : RockstarBase, ICreateDb<RockstarAudit>, IReturn<RockstarWithIdResponse>
{
}

[AutoPopulate(nameof(AuditBase.CreatedDate),  Eval = "utcNow")]
[AutoPopulate(nameof(AuditBase.CreatedBy),    Eval = "userAuthName")] //or userAuthId
[AutoPopulate(nameof(AuditBase.ModifiedDate), Eval = "utcNow")]
[AutoPopulate(nameof(AuditBase.ModifiedBy),   Eval = "userAuthName")] //or userAuthId
public abstract class CreateAuditBase<Table,TResponse> : ICreateDb<Table>, IReturn<TResponse> {}

[AutoPopulate(nameof(IAuditTenant.TenantId), Eval = "Request.Items.TenantId")]
public abstract class CreateAuditTenantBase<Table,TResponse> : CreateAuditBase<Table,TResponse> {}

[AutoPopulate(nameof(AuditBase.ModifiedDate), Eval = "utcNow")]
[AutoPopulate(nameof(AuditBase.ModifiedBy),   Eval = "userAuthName")] //or userAuthId
public abstract class UpdateAuditBase<Table,TResponse> : IUpdateDb<Table>, IReturn<TResponse> {}

[AutoFilter(QueryTerm.Ensure, nameof(IAuditTenant.TenantId),  Eval = "Request.Items.TenantId")]
public abstract class UpdateAuditTenantBase<Table,TResponse> : UpdateAuditBase<Table,TResponse> {}

[AutoPopulate(nameof(AuditBase.ModifiedDate), Eval = "utcNow")]
[AutoPopulate(nameof(AuditBase.ModifiedBy),   Eval = "userAuthName")] //or userAuthId
public abstract class PatchAuditBase<Table,TResponse> : IPatchDb<Table>, IReturn<TResponse> {}

[AutoFilter(QueryTerm.Ensure, nameof(IAuditTenant.TenantId),  Eval = "Request.Items.TenantId")]
public abstract class PatchAuditTenantBase<Table,TResponse> : PatchAuditBase<Table,TResponse> {}

[AutoPopulate(nameof(AuditBase.DeletedDate), Eval = "utcNow")]
[AutoPopulate(nameof(AuditBase.DeletedBy),   Eval = "userAuthName")] //or userAuthId
public abstract class SoftDeleteAuditBase<Table,TResponse> : IUpdateDb<Table>, IReturn<TResponse> {}
    
[AutoFilter(QueryTerm.Ensure, nameof(IAuditTenant.TenantId),  Eval = "Request.Items.TenantId")]
public abstract class SoftDeleteAuditTenantBase<Table,TResponse> : SoftDeleteAuditBase<Table,TResponse> {}
    
[AutoFilter(QueryTerm.Ensure, nameof(AuditBase.DeletedDate), Template = SqlTemplate.IsNull)]
[AutoFilter(QueryTerm.Ensure, nameof(IAuditTenant.TenantId),  Eval = "Request.Items.TenantId")]
public abstract class QueryDbTenant<From, Into> : QueryDb<From, Into> {}

public class CreateRockstarAuditTenant : CreateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>, IHasSessionId
{
    public string SessionId { get; set; } //Authenticate MQ Requests
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime? DateDied { get; set; }
    public LivingStatus LivingStatus { get; set; }
}
    
public class UpdateRockstarAuditTenant : UpdateAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>, IHasSessionId
{
    public string SessionId { get; set; } //Authenticate MQ Requests
    public int Id { get; set; }
    public string FirstName { get; set; }
    public LivingStatus? LivingStatus { get; set; }
}
    
public class PatchRockstarAuditTenant : PatchAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>, IHasSessionId
{
    public string SessionId { get; set; } //Authenticate MQ Requests
    public int Id { get; set; }
    public string FirstName { get; set; }
    public LivingStatus? LivingStatus { get; set; }
}
    
public class CreateRockstarAuditTenantGateway : IReturn<RockstarWithIdAndResultResponse>
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime? DateDied { get; set; }
    public LivingStatus LivingStatus { get; set; }
}
    
public class UpdateRockstarAuditTenantGateway : IReturn<RockstarWithIdAndResultResponse>
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public LivingStatus? LivingStatus { get; set; }
}
    
public class PatchRockstarAuditTenantGateway : IReturn<RockstarWithIdAndResultResponse>
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public LivingStatus? LivingStatus { get; set; }
}
    
public class RealDeleteAuditTenantGateway : IReturn<RockstarWithIdResponse>
{
    public int Id { get; set; }
}
    
public class SoftDeleteAuditTenant : SoftDeleteAuditTenantBase<RockstarAuditTenant, RockstarWithIdAndResultResponse>
{
    public int Id { get; set; }
}
    
public class CreateRockstarAuditTenantMq : IReturnVoid
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime? DateDied { get; set; }
    public LivingStatus LivingStatus { get; set; }
}
    
public class UpdateRockstarAuditTenantMq : IReturnVoid
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public LivingStatus? LivingStatus { get; set; }
}

public class PatchRockstarAuditTenantMq : IReturnVoid
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public LivingStatus? LivingStatus { get; set; }
}

public class RealDeleteAuditTenantMq : IReturnVoid
{
    public int Id { get; set; }
}
    
[AutoPopulate(nameof(RockstarAudit.CreatedDate),  Eval = "utcNow")]
[AutoPopulate(nameof(RockstarAudit.CreatedBy),    Eval = "userAuthName")] //or userAuthId
[AutoPopulate(nameof(RockstarAudit.CreatedInfo),  Eval = "`${userSession.DisplayName} (${userSession.City})`")]
[AutoPopulate(nameof(RockstarAudit.ModifiedDate), Eval = "utcNow")]
[AutoPopulate(nameof(RockstarAudit.ModifiedBy),   Eval = "userAuthName")] //or userAuthId
[AutoPopulate(nameof(RockstarAudit.ModifiedInfo), Eval = "`${userSession.DisplayName} (${userSession.City})`")]
public class CreateRockstarAuditMqToken : RockstarBase, ICreateDb<RockstarAudit>, IReturn<RockstarWithIdResponse>, IHasBearerToken
{
    public string BearerToken { get; set; }
}
    
[AutoFilter(QueryTerm.Ensure, nameof(IAuditTenant.TenantId),  Eval = "Request.Items.TenantId")]
public class RealDeleteAuditTenant : IDeleteDb<RockstarAuditTenant>, IReturn<RockstarWithIdAndCountResponse>, IHasSessionId
{
    public string SessionId { get; set; } //Authenticate MQ Requests
    public int Id { get; set; }
    public int? Age { get; set; }
}

public class QueryRockstarAudit : QueryDbTenant<RockstarAuditTenant, RockstarAuto>
{
    public int? Id { get; set; }
}

[QueryDb(QueryTerm.Or)]
[AutoFilter(QueryTerm.Ensure, nameof(AuditBase.DeletedDate), SqlTemplate.IsNull)]
[AutoFilter(QueryTerm.Ensure, nameof(IAuditTenant.TenantId),  Eval = "Request.Items.TenantId")]
public class QueryRockstarAuditSubOr : QueryDb<RockstarAuditTenant, RockstarAuto>
{
    public string FirstNameStartsWith { get; set; }
    public int? AgeOlderThan { get; set; }
}

public class CreateRockstarVersion : RockstarBase, ICreateDb<RockstarVersion>, IReturn<RockstarWithIdAndRowVersionResponse>
{
}