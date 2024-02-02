using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Text;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class ReturnDataService : Service
    {
        public object Any(ReturnString request) => request.Data;
        public object Any(ReturnBytes request) => request.Data;
        public object Any(ReturnStream request) => request.Data;

        private const string Json = "{\"A\":\"b\",\"c\":3}";
        public object Any(ReturnJson request)
        {
            Response.ContentType = MimeTypes.Json;
            return Json;
        }

        [AddHeader(ContentType = MimeTypes.Json)]
        public object Any(ReturnJsonHeader request) => Json;

        public async Task Any(WriteJson request)
        {
            Response.ContentType = MimeTypes.Json;
            await Response.OutputStream.WriteAsync(MemoryProvider.Instance.ToUtf8(Json));
        }

        //not supported by non .NET Languages
        //public object Any(ReturnHttpWebResponse request) => request.Data;
    }
}