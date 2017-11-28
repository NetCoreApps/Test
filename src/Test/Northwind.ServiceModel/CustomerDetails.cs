using ServiceStack;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Northwind.ServiceModel.Types;

namespace Northwind.ServiceModel
{
    [DataContract]
    [Route("/customers/{Id}")]
    public class CustomerDetails : IReturn<CustomerDetailsResponse>
    {
        [DataMember]
        public string Id { get; set; }
    }

    [DataContract]
    public class CustomerDetailsResponse : IHasResponseStatus
    {
        public CustomerDetailsResponse()
        {
            this.ResponseStatus = new ResponseStatus();
            this.CustomerOrders = new List<CustomerOrder>();
        }

        [DataMember]
        public Customer Customer { get; set; }

        [DataMember]
        public List<CustomerOrder> CustomerOrders { get; set; }

        [DataMember]
        public ResponseStatus ResponseStatus { get; set; }
    }
}