using System.Net.Mime;
using System.Threading.Tasks;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class SendRawService : Service
    {
        [JsonOnly]
        public async Task<object> Any(SendJson request)
        {
            base.Response.AddHeader("X-Args", $"{request.Id},{request.Name}");

            return await request.RequestStream.ReadFullyAsync();
        }

        public async Task<object> Any(SendText request)
        {
            base.Response.AddHeader("X-Args", $"{request.Id},{request.Name}");

            base.Request.ResponseContentType = request.ContentType ?? base.Request.AcceptTypes[0];
            return await request.RequestStream.ReadFullyAsync();
        }

        public async Task<object> Any(SendRaw request)
        {
            base.Response.AddHeader("X-Args", $"{request.Id},{request.Name}");

            base.Request.ResponseContentType = request.ContentType ?? base.Request.AcceptTypes[0];
            return await request.RequestStream.ReadFullyAsync();
        }
    }
}