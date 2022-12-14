using ServiceStack;

Licensing.RegisterLicense("OSS BSD-3-Clause 2022 https://github.com/NetCoreApps/Test u95ySKVHFfNYZKUaUtvFTP8/+oaZLQBjcyQQA6enXR7yf5UxPRRfafgy4tiXdSck8Nwlxs5pRfTOxJN+ht64dkus9x37IVBrbzkX2WNsBRNzow9eCIZI+PYmdSj3vSNC5+/QagOnj6nhD30jx6mCx/b8qxRdv8x+rv5YRN7afnY=");

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