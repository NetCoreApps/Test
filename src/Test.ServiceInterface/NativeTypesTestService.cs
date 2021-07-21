using ServiceStack;
using Test.ServiceModel;
using Test.ServiceModel.Types;

namespace Test.ServiceInterface
{
    public class NativeTypesTestService : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse
            {
                Result = "Hello, {0}{1}!".Fmt(
                    request.Title != null ? request.Title + ". " : "",
                    request.Name)
            };
        }

        public object Any(HelloSecure request) => new HelloResponse { Result = $"Hello, {request.Name}!" };

        public object Any(HelloAnnotated request) => new HelloAnnotatedResponse { Result = request.Name };

        public object Get(HelloWithNestedClass request) => new HelloResponse { Result = request.Name };

        public object Any(HelloList request) => request.Names.Map(name => new ListResult { Result = name });

        public object Any(HelloArray request) => request.Names.Map(name => new ArrayResult { Result = name });

        public object Any(HelloWithEnum request) => request;
        public object Any(HelloWithEnumList request) => request;

        public object Any(HelloWithEnumMap request) => request;

        public object Any(HelloExternal request) => request;

        public object Any(RestrictedAttributes request) => request;

        public object Any(AllowedAttributes request) => request;

        public object Any(HelloAllTypes request)
        {
            return new HelloAllTypesResponse
            {
                AllTypes = request.AllTypes,
                AllCollectionTypes = request.AllCollectionTypes,
                Result = request.Name
            };
        }

        public object Any(HelloSubAllTypes request) => request.ConvertTo<SubAllTypes>();

        public object Any(AllTypes request) => request;

        public object Any(AllCollectionTypes request) => request;

        public object Any(HelloString request) => request.Name;

        public object Any(HelloDateTime request) => request;

        public void Any(HelloVoid request) {}

        public object Any(HelloWithDataContract request) => 
            new HelloWithDataContractResponse { Result = request.Name };

        public object Any(HelloWithDescription request) => 
            new HelloWithDescriptionResponse { Result = request.Name };

        public object Any(HelloWithInheritance request) => 
            new HelloWithInheritanceResponse { Result = request.Name };

        public object Any(HelloWithGenericInheritance request) => request;

        public object Any(HelloWithGenericInheritance2 request) => request;

        //public object Any(HelloWithNestedInheritance request) => request;

        //public object Any(HelloWithListInheritance request)
        //{
        //    return request;
        //}

        public object Any(HelloWithReturn request)
        {
            return new HelloWithAlternateReturnResponse { Result = request.Name };
        }

        public object Any(HelloWithRoute request)
        {
            return new HelloWithRouteResponse { Result = request.Name };
        }

        public object Any(HelloWithType request)
        {
            return new HelloWithTypeResponse
            {
                Result = new HelloType { Result = request.Name }
            };
        }

        public object Any(HelloInterface request)
        {
            return request;
        }

        public object Any(HelloInnerTypes request)
        {
            return new HelloInnerTypesResponse();
        }

        //Uncomment to generate SS.Client built-in types
        //public object Any(GenerateBuiltInTypes request)
        //{
        //    return request;
        //}

        public object Any(HelloBuiltin request) => request;

        public object Any(HelloGet request) => new HelloVerbResponse { Result = HttpMethods.Get };

        public object Any(HelloPost request) => new HelloVerbResponse { Result = HttpMethods.Post };

        public object Any(HelloPut request) => new HelloVerbResponse { Result = HttpMethods.Put };

        public object Any(HelloDelete request) => new HelloVerbResponse { Result = HttpMethods.Delete };

        public object Any(HelloPatch request) => new HelloVerbResponse { Result = HttpMethods.Patch };

        public void Any(HelloReturnVoid request) {}

        public object Any(EnumRequest request) => new EnumResponse { Operator = request.Operator };

        public object Any(HelloTypes request) => request;

        public object Any(HelloZip request)
        {
            return request.Test == null
                ? new HelloZipResponse { Result = $"Hello, {request.Name} {base.Request.ContentLength}" }
                : new HelloZipResponse { Result = $"Hello, {request.Name} ({request.Test?.Count}) {base.Request.ContentLength}" };
        }
    }
}