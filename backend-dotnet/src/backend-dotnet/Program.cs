using System.Data.Common;
using System.IO.Pipelines;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Message> messages =
[
    new Message()
    {
        Id = 1,
        User = "madiDotnet",
        MessageText = "Hello World!"
    },
];

app.MapGet("/messages", () =>
{
    return new { Messages = messages };
});

app.MapPost("/messages", (MessageCreateDTO message) =>
{
    int id = messages.Last().Id + 1;
    messages.Add(new Message()
    {
        Id = id,
        User = message.User,
        MessageText = message.Message
    });
    Console.WriteLine(JsonSerializer.Serialize(messages));
    return new { Status = "success" };
});

app.MapPut("/messages/{id}", (int id) =>
{
    return new { Status = "not implemented" };
});

app.MapDelete("/messages/{id:int}", (int id) =>
{
    return new { Status = "not implemented" };
});

app.MapGet("/messages/{id}", (int id) =>
{
    var message = messages.Find(m => m.Id == id);
    return message;
});


app.Run();


public class Message
{
    [JsonPropertyName("id")]
    public int Id { get; set; }
    [JsonPropertyName("user")]
    public string User { get; set; }
    [JsonPropertyName("message")]
    public string? MessageText { get; set; }
}

public record MessageCreateDTO(string User, string Message);
