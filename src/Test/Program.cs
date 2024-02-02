ServiceStack.Licensing.RegisterLicense("OSS BSD-3-Clause 2024 https://github.com/NetCoreApps/Test fyIJciQwB1gqTrcpY03DJbazVUK5dcQK4/ZjC/3rk+tKIGcAtHdtxSTrmrBr4iY2b0vGEGHen2mKR+BGsho7kDEU0QDNVPWZOY/BPnT3zgRkMUK4BsNhAOMCSos1VaP6oQZYaMGimJ4dogRNorh2Aui5muFVuhL7kJEnKHOXFf8=");

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseHttpsRedirection();
}

app.Run();