using Lyt.Host.Model;
using Lyt.Host.Service;

namespace Lyt.Host.Endpoint;

public static class TemplateEndpoint
{
  public static IApplicationBuilder UseTemplateEndpoint(this IApplicationBuilder app)
  {
    if(app is WebApplication wapp)
    {
      wapp.MapGet("/api/foobar", async (HttpContext ctx, ITemplateService svc) =>
        new ApiReponse<string>(
          value: await svc.GetDataAsync(ctx.User, ctx.RequestAborted)
        ));
    }
    return app;
  }
}