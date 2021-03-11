using System.Collections.Generic;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface
{
    public class CustomItemsService : Service
    {
        public object Any(AltQueryItems request) => new QueryResponseAlt<Item> {
            Results = Get(new GetNakedItems())
        };
        
        public Items Get(GetItems dto)
        {
            return new Items
            {
                Results = new List<Item> {
                    new Item {
                        Name = "bar item 1",
                        Description = "item 1 description"
                    },
                    new Item {
                        Name = "bar item 2",
                        Description = "item 2 description"
                    }
                }
            };
        }

        public List<Item> Get(GetNakedItems request)
        {
            return new() {
                new Item {
                    Name = "item 1",
                    Description = "item 1 description"
                },
                new Item {
                    Name = "item 2",
                    Description = "item 2 description"
                }
            };
        }
    }
}