using System;
using ServiceStack;
using Test.ServiceModel;

namespace Test.ServiceInterface;

public class FileUploadServices : Service
{
    public object Any(SpeechToText request)
    {
        
        if (Request?.Files == null || Request.Files.Length == 0)
        {
            throw new ArgumentNullException(nameof(request.Audio));
        }

        var to = new TextGenerationResponse();

        var file = Request.Files[0];
        var bytes = file.InputStream.ReadFully();
        to.Results =
        [
            new() { Text = $"{file.Name}, {nameof(request.Audio)} {bytes.Length}, {file.FileName}, {file.ContentType}" },
            new() { Text = $"{nameof(request.Tag)} {request.Tag}" },
            new() { Text = $"{nameof(request.RefId)} {request.RefId}" },
        ];
        
        return to;
    }

    public object Any(TestFileUploads request)
    {
        if (Request?.Files == null || Request.Files.Length == 0)
            throw new ArgumentNullException(nameof(Request.Files));

        var to = new TestFileUploadsResponse
        {
            Id = request.Id,
            RefId = request.RefId,
            Files = [],
        };

        foreach (var file in Request.Files)
        {
            to.Files.Add(new UploadInfo
            {
                Name = file.Name,
                FileName = file.FileName,
                ContentLength = file.ContentLength,
                ContentType = file.ContentType,
            });
        }
        
        return to;
    }
}