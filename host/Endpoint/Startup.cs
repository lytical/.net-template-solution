using System;

namespace Lyt.Host.Endpoint;

public static class Startup
{
  public static ApplicationBuilder UseLytEndpoints(this ApplicationBuilder app)
  {
    app
      .UseTemplateEndpoint()
    #region endpoints
    // auto generated endpoint registerations
    #endregion
    ;
    return app;
  }
}
