﻿using System;
using System.Collections.Generic;
using System.Threading;
using ServiceStack;
using Test.ServiceModel;
using Test.ServiceModel.Types;

namespace Test.ServiceInterface
{
    [Route("/void-response")]
    public class TestVoidResponse { }

    [Route("/null-response")]
    public class TestNullResponse { }

    [Route("/wait/{ForMs}")]
    public class Wait : IReturn<Wait>
    {
        public int ForMs { get; set; }
    }

    [Route("/echo/types")]
    public class EchoTypes : IReturn<EchoTypes>
    {
        public byte Byte { get; set; }
        public short Short { get; set; }
        public int Int { get; set; }
        public long Long { get; set; }
        public ushort UShort { get; set; }
        public uint UInt { get; set; }
        public ulong ULong { get; set; }
        public float Float { get; set; }
        public double Double { get; set; }
        public decimal Decimal { get; set; }
        public string String { get; set; }
        public DateTime DateTime { get; set; }
        public TimeSpan TimeSpan { get; set; }
        public DateTimeOffset DateTimeOffset { get; set; }
        public Guid Guid { get; set; }
        public char Char { get; set; }
    }

    [Route("/echo/nullables")]
    public class EchoNullableTypes : IReturn<EchoNullableTypes>
    {
        public int? Id { get; set; }
        public byte? Byte { get; set; }
        public short? Short { get; set; }
        public int? Int { get; set; }
        public long? Long { get; set; }
        public ushort? UShort { get; set; }
        public uint? UInt { get; set; }
        public ulong? ULong { get; set; }
        public float? Float { get; set; }
        public double? Double { get; set; }
        public decimal? Decimal { get; set; }
        public DateTime? DateTime { get; set; }
        public TimeSpan? TimeSpan { get; set; }
        public DateTimeOffset? DateTimeOffset { get; set; }
        public Guid? Guid { get; set; }
        public char? Char { get; set; }
    }

    [Route("/echo/collections")]
    public class EchoCollections : IReturn<EchoCollections>
    {
        public List<string> StringList { get; set; }
        public string[] StringArray { get; set; }
        public Dictionary<string, string> StringMap { get; set; }
        public Dictionary<int, string> IntStringMap { get; set; }
    }

    [Route("/echo/complex")]
    public class EchoComplexTypes : IReturn<EchoComplexTypes>
    {
        public SubType SubType { get; set; }
        public List<SubType> SubTypes { get; set; }
        public Dictionary<string, SubType> SubTypeMap { get; set; }
        public Dictionary<string, string> StringMap { get; set; }
        public Dictionary<int, string> IntStringMap { get; set; }
    }

    [Route("/custom")]
    [Route("/custom/{Data}")]
    public class CustomRoute : IReturn<CustomRoute>
    {
        public string Data { get; set; }
    }

    public class TestServices : Service
    {
        public object Any(CustomRoute request) => request;

        public void Any(TestVoidResponse response)
        {
        }

        public object Any(TestNullResponse response) => null;

        public object Any(Wait request)
        {
            Thread.Sleep(request.ForMs);

            return request;
        }

        public object Any(EchoTypes request) => request;

        public object Any(EchoCollections request) => request;

        public object Any(EchoComplexTypes request) => request;

        public object Post(StoreRockstars request) => request;
    }
}