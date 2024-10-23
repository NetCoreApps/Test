using System.Threading.Tasks;
using ServiceStack;
using Test.ServiceModel;
using Test.ServiceModel.Types;

namespace Test.ServiceInterface;

public class QueryItems : QueryDb<Item,Poco> {}
    
public class AutoQueryServices : Service
{
    public IAutoQueryDb AutoQuery { get; set; }

    public async Task<object> Any(QueryItems request)
    {
        using var db = AutoQuery.GetDb(request, base.Request);
        return await AutoQuery.ExecuteAsync(request, AutoQuery.CreateQuery(request, Request, db), db);
    }
}