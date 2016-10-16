using ServiceStack;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Northwind.ServiceModel.Types;

namespace Northwind.ServiceModel
{
    [DataContract]
    [Route("/customers")]
    public class Customers : IReturn<CustomersResponse> {}

    [DataContract]
    public class CustomersResponse : IHasResponseStatus
    {
        public CustomersResponse()
        {
            this.ResponseStatus = new ResponseStatus();
            this.Customers = new List<Customer>();
        }

        [DataMember]
        public List<Customer> Customers { get; set; }

        [DataMember]
        public ResponseStatus ResponseStatus { get; set; }
    }
}