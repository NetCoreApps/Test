using NUnit.Framework;
using ServiceStack;

namespace Test.Tests
{
    public class NativeTypeTests
    {
        [Test]
        public void Can_generate_Swift_PocoLookupMap()
        {
            var typeName = "Dictionary`2";
            var genericArgs = new[] { "String", "List<Dictionary<String,Poco>>" };

            var gen = new ServiceStack.NativeTypes.Swift.SwiftGenerator(new MetadataTypesConfig());
            var type = gen.Type(typeName, genericArgs);
            
            Assert.That(type, Is.EqualTo("[String:[[String:Poco]]]"));
        }

        [Test]
        public void Does_generate_Swift_IntArray()
        {
            var genericArgs = new string[] { };

            var gen = new ServiceStack.NativeTypes.Swift.SwiftGenerator(new MetadataTypesConfig());
            Assert.That(gen.Type("Int32[]", genericArgs), Is.EqualTo("[Int]"));
            Assert.That(gen.Type("Int64[]", genericArgs), Is.EqualTo("[Int]"));
        }

        [Test]
        public void Does_generate_Swift_IntList()
        {
            var gen = new ServiceStack.NativeTypes.Swift.SwiftGenerator(new MetadataTypesConfig());
            Assert.That(gen.Type("List`1", new[] { "Int32" }), Is.EqualTo("[Int]"));
            Assert.That(gen.Type("List`1", new[] { "Int64" }), Is.EqualTo("[Int]"));
        }
    }
}