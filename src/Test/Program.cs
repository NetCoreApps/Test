ServiceStack.Licensing.RegisterLicense("OSS BSD-3-Clause 2023 https://github.com/NetCoreApps/Test sucmAEguKA1eVJFFH9tTZctUZLpDLctGXsgqzDQ4VRSm7PM5LCg7QkZa4YnbTnmUt+tXnS4zP5PlG9TXbO70B/Hyz6qr/D73HTqRXoy3iHpv1Nd4ylqFiujXTkde5wbG8PelmxfJvZ3XyCVACrfF8lhuBCDffZerEMKpJcFnync=");

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