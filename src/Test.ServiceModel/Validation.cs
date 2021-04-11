using System.Collections.Generic;
using ServiceStack;

namespace Test.ServiceModel
{
    public class DeclarativeChildValidation
    {
        public string Name { get; set; }
        [ValidateMaximumLength(20)]
        public string Value { get; set; }
    } 

    public class FluentChildValidation
    {
        public string Name { get; set; }
        public string Value { get; set; }
    } 

    public class DeclarativeCollectiveValidationTest : IReturn<EmptyResponse>
    {
        [ValidateNotEmpty]
        [ValidateMaximumLength(20)]
        public string Site { get; set; }
        public List<DeclarativeChildValidation> DeclarativeValidations { get; set; }
        public List<FluentChildValidation> FluentValidations { get; set; }
    }

    public class DeclarativeSingleValidation
    {
        public string Name { get; set; }
        [ValidateMaximumLength(20)]
        public string Value { get; set; }
    } 

    public class FluentSingleValidation
    {
        public string Name { get; set; }
        public string Value { get; set; }
    } 

    public class DeclarativeSingleValidationTest : IReturn<EmptyResponse>
    {
        [ValidateNotEmpty]
        [ValidateMaximumLength(20)]
        public string Site { get; set; }
        public DeclarativeSingleValidation DeclarativeSingleValidation { get; set; }
        public FluentSingleValidation FluentSingleValidation { get; set; }
    }
}