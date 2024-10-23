using NUnit.Framework;
using ServiceStack.Data;
using ServiceStack.DataAnnotations;
using ServiceStack.Model;
using ServiceStack.OrmLite;

namespace Test.Tests;

public class Company : IHasId<long>
{
    [AutoIncrement]
    public long Id { get; set; }
    public ulong RowVersion { get; set; }
    public string Description { get; set; }
}

public class OrmLiteTests
{
    private readonly IDbConnectionFactory dbFactory = new OrmLiteConnectionFactory(":memory:", SqliteDialect.Provider);
    [Test]
    public void Can_save_row_with_no_RowVersion()
    {
        using var db = dbFactory.Open();
        db.DropAndCreateTable<Company>();
        var company = new Company { Description = "description" };
        db.Save(company);
    }
}