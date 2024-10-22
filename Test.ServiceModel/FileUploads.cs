#nullable enable

using System.Collections.Generic;
using System.IO;
using ServiceStack;
using ServiceStack.DataAnnotations;

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

[Tag("AI")]
[Api("Convert speech to text")]
[Description("Transcribe audio content to text")]
[SystemJson(UseSystemJson.Response)]
public class SpeechToText : IGeneration, IReturn<GenerationResponse>
{
    [ApiMember(Description = "The audio stream containing the speech to be transcribed")]
    [Description("The audio stream containing the speech to be transcribed")]
    [Required]
    [Input(Type = "file")]
    public Stream Audio { get; set; }
    
    [ApiMember(Description = "Optional client-provided identifier for the request")]
    [Description("Optional client-provided identifier for the request")]
    public string? RefId { get; set; }

    [ApiMember(Description = "Tag to identify the request")]
    [Description("Tag to identify the request")]
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