using Lyt.Host.Model;
using System.Net;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services
  .AddEndpointsApiExplorer()
  .AddSwaggerGen()
  .AddHttpClient()
  .ConfigureHttpJsonOptions(opt => opt.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull);

#region add services
#endregion  

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app
    .UseSwagger()
    .UseSwaggerUI();
}

app
  .UseHttpsRedirection()
  .UseDefaultFiles()
  .UseStaticFiles()
  .Use(async (HttpContext ctx, Func<Task> next) =>
  {
    try
    {
      await next();
    }
    catch (TaskCanceledException) { }
    catch (Exception ex)
    {
      if (!ctx.Response.HasStarted)
      {
        ctx.Response.StatusCode = (int)(ex is ArgumentException aex ? HttpStatusCode.BadRequest : HttpStatusCode.InternalServerError);
        await ctx.Response.WriteAsJsonAsync(new ApiReponse(
          errors: [new ApiError(
            message: ex.Message
#if DEBUG
            , stack: ex.StackTrace
#endif
          )]
        ), ctx.RequestAborted);
      }
    }
  });

#region add services
#endregion  

app.Run();