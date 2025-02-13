using Microsoft.Extensions.DependencyInjection;
using Lyt.Host.Service;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;

namespace Lyt.Test;

public class TemplateTest
{
  [Fact]
  public async Task TemplateServiceReturnsString()
  {
    var sc = new ServiceCollection();
    var cfg = new ConfigurationBuilder().Build();
    sc.AddLytServices(cfg);
    var sp = sc.BuildServiceProvider();
    Assert.NotNull(sp);
    var svc = sp.GetRequiredService<ITemplateService>();
    Assert.NotNull(svc);
    var rs = await svc.GetDataAsync(new ClaimsPrincipal(), default);
    Assert.Equal("foobar", rs);
  }
}