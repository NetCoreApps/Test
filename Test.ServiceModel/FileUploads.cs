#nullable enable

using System;
using System.Collections.Generic;
using System.IO;
using ServiceStack;
using ServiceStack.DataAnnotations;
using Test.ServiceModel.Types;

namespace Test.ServiceModel;

public interface IGeneration
{
    string? RefId { get; set; }
    string? Tag { get; set; }
}

[Description("Output object for generated artifacts")]
public class ArtifactOutput
{
    [ApiMember(Description = "URL to access the generated image")]
    [Description("URL to access the generated image")]
    public string? Url { get; set; }

    [ApiMember(Description = "Filename of the generated image")]
    [Description("Filename of the generated image")]
    public string? FileName { get; set; }

    [ApiMember(Description = "Provider used for image generation")]
    [Description("Provider used for image generation")]
    public string? Provider { get; set; }
}

[Description("Output object for generated text")]
public class TextOutput
{
    [ApiMember(Description = "The generated text")]
    [Description("The generated text")]
    public string? Text { get; set; }
}

[Description("Response object for generation requests")]
public class GenerationResponse
{
    [ApiMember(Description = "List of generated outputs")]
    [Description("List of generated outputs")]
    public List<ArtifactOutput>? Outputs { get; set; }

    [ApiMember(Description = "List of generated text outputs")]
    [Description("List of generated text outputs")]
    public List<TextOutput>? TextOutputs { get; set; }

    [ApiMember(Description = "Detailed response status information")]
    [Description("Detailed response status information")]
    public ResponseStatus? ResponseStatus { get; set; }
}

[Api("Response object for text generation requests")]
public class TextGenerationResponse
{
    [ApiMember(Description = "List of generated text outputs")]
    public List<TextOutput>? Results { get; set; }

    [ApiMember(Description = "Detailed response status information")]
    public ResponseStatus? ResponseStatus { get; set; }
}

[Tag("AI")]
[Api("Convert speech to text")]
[SystemJson(UseSystemJson.Response)]
public class SpeechToText : IGeneration, IReturn<TextGenerationResponse>
{
    [ApiMember(Description = "The audio stream containing the speech to be transcribed")]
    [Required]
    [Input(Type = "file")]
    public string? Audio { get; set; }
    
    [ApiMember(Description = "Optional client-provided identifier for the request")]
    public string? RefId { get; set; }

    [ApiMember(Description = "Tag to identify the request")]
    public string? Tag { get; set; }
}

public class UploadInfo
{
    public string Name { get; set; }
    public string FileName { get; set; }
    public long ContentLength { get; set; }
    public string ContentType { get; set; }
}

public class TestFileUploads : IReturn<TestFileUploadsResponse>
{
    public int? Id { get; set; }
    public string? RefId { get; set; }
}

public class TestFileUploadsResponse
{
    public int? Id { get; set; }
    public string? RefId { get; set; }
    public List<UploadInfo> Files { get; set; } = [];
    public ResponseStatus? ResponseStatus { get; set; }
}

public class TestUploadWithDto : IPost, IReturn<TestUploadWithDto>
{
    public int Int { get; set; }
    public int? NullableId { get; set; }
    public long Long { get; set; }
    public double Double { get; set; }
    public string String { get; set; }
    public DateTime DateTime { get; set; }
    
    public int[]? IntArray { get; set; }
    public List<int>? IntList { get; set; }
    public string[]? StringArray { get; set; }
    public List<string>? StringList { get; set; }
    public Poco[]? PocoArray { get; set; }
    public List<Poco>? PocoList { get; set; }
    public byte?[]? NullableByteArray { get; set; }
    public List<byte?>? NullableByteList { get; set; }
    public DateTime?[]? NullableDateTimeArray { get; set; }
    public List<DateTime?>? NullableDateTimeList { get; set; }
    public Dictionary<string, List<Poco>>? PocoLookup { get; set; }
    public Dictionary<string, List<Dictionary<string,Poco>>>? PocoLookupMap { get; set; } 
    public Dictionary<string, List<string>>? MapList { get; set; }
}
