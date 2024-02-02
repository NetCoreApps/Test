using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class DeclarativeValidationServices : Service
    {
        public object Any(DeclarativeValidationAuth request) => new EmptyResponse();
        public object Any(DeclarativeCollectiveValidationTest request) => new EmptyResponse();
        public object Any(DeclarativeSingleValidationTest request) => new EmptyResponse();
    }
}