using System.Collections.Generic;
using ServiceStack;

namespace Test.ServiceInterface
{
    public class Foo
    {
        public List<Bar> bars { get; set; }
    }
    public class Bar
    {
        public string name { get; set; }
        public string description { get; set; }
    }
    public class Baz
    {
        public string name { get; set; }
        public string description { get; set; }
    }

    public class FooRequest : IReturn<Foo> { }
    public class RawBazRequest : IReturn<List<Baz>> { }
    
    public class DartIssueService : Service
    {
        public Foo Get(FooRequest dto)
        {
            return new Foo
            {
                bars = new List<Bar> {
                    new Bar {
                        name = "bar item 1",
                        description = "item 1 description"
                    },
                    new Bar {
                        name = "bar item 2",
                        description = "item 2 description"
                    }
                }
            };
        }

        public List<Baz> Get(RawBazRequest dto)
        {
            return new List<Baz> {
                new Baz {
                    name = "item 1",
                    description = "item 1 description"
                },
                new Baz {
                    name = "item 2",
                    description = "item 2 description"
                }
            };
        }
    }
}