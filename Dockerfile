FROM microsoft/dotnet:latest
COPY src/Test /app/Test
COPY src/Test/deploy /app/Test
WORKDIR /app/Test
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 5000/tcp
ENV ASPNETCORE_URLS https://*:5000
ENTRYPOINT ["dotnet", "run", "--server.urls", "http://*:5000"]