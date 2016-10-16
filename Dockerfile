FROM microsoft/dotnet:latest
COPY lib /app/lib
COPY src/Test /app/src/Test
COPY src/Test/deploy /app/src/Test
WORKDIR /app/src/Test
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 5000/tcp
ENV ASPNETCORE_URLS https://*:5000
ENTRYPOINT ["dotnet", "run", "--server.urls", "http://*:5000"]