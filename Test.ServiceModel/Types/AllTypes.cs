﻿using System;
using System.Collections.Generic;
using ServiceStack;

namespace Test.ServiceModel.Types;

public class HelloSubAllTypes : AllTypesBase, IReturn<SubAllTypes>
{
    public int Hierarchy { get; set; }
}
public class SubAllTypes : AllTypesBase
{
    public int Hierarchy { get; set; } = 1;
}
[Synthesize]
public abstract class AllTypesBase
{
    public int Id { get; set; }
    public int? NullableId { get; set; }
    public byte Byte { get; set; }
    public short Short { get; set; }
    public int Int { get; set; }
    public long Long { get; set; }
    public UInt16 UShort { get; set; }
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
    public Char Char { get; set; }
    public KeyValuePair<string, string> KeyValuePair { get; set; }
    public DateTime? NullableDateTime { get; set; }
    public TimeSpan? NullableTimeSpan { get; set; }
    public List<string> StringList { get; set; } = [];
    public string[] StringArray { get; set; } = [];
    public Dictionary<string, string> StringMap { get; set; } = new();
    public Dictionary<int, string> IntStringMap { get; set; } = new();
    public SubType SubType { get; set; }
}
    
public class AllTypes : IReturn<AllTypes>
{
    public int Id { get; set; }
    public int? NullableId { get; set; }
    public byte Byte { get; set; }
    public short Short { get; set; }
    public int Int { get; set; }
    public long Long { get; set; }
    public UInt16 UShort { get; set; }
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
    public Char Char { get; set; }
    public KeyValuePair<string, string> KeyValuePair { get; set; }
    public DateTime? NullableDateTime { get; set; }
    public TimeSpan? NullableTimeSpan { get; set; }
    public List<string> StringList { get; set; } = [];
    public string[] StringArray { get; set; } = [];
    public Dictionary<string, string> StringMap { get; set; } = new();
    public Dictionary<int, string> IntStringMap { get; set; } = new();
    public SubType SubType { get; set; }
}

public class AllCollectionTypes : IReturn<AllCollectionTypes>
{
    public int[] IntArray { get; set; } = [];
    public List<int> IntList { get; set; } = [];

    public string[] StringArray { get; set; } = [];
    public List<string> StringList { get; set; } = [];

    public float[] FloatArray { get; set; } = [];
    public List<double> DoubleList { get; set; } = [];

    public byte[] ByteArray { get; set; } = [];
    public char[] CharArray { get; set; } = [];
    public List<decimal> DecimalList { get; set; } = [];

    public Poco[] PocoArray { get; set; } = [];
    public List<Poco> PocoList { get; set; } = [];

    public Dictionary<string, List<Poco>> PocoLookup { get; set; } = new();
    public Dictionary<string, List<Dictionary<string, Poco>>> PocoLookupMap { get; set; } = new();
}

public class Poco
{
    public string Name { get; set; }
}

public abstract class HelloBase
{
    public int Id { get; set; }
}

public class SubType
{
    public int Id { get; set; }
    public string Name { get; set; }
}
    
public abstract class HelloResponseBase
{
    public int RefId { get; set; }
}

public class HelloType
{
    public string Result { get; set; }
}

public abstract class HelloWithReturnResponse
{
    public string Result { get; set; }
}