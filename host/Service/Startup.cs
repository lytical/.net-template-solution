namespace Lyt.Host.Service;

public static partial class Startup
{
  public static IServiceCollection AddLytServices(this IServiceCollection sc, IConfiguration cfg)
  {
    sc
      .AddTransient<ITemplateService, TemplateService>()
    #region services
    // auto generated service registerations
    #endregion
    ;
    return sc;
  }
}