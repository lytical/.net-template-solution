using System.Security.Claims;

namespace Lyt.Host.Service;

public interface ITemplateService
{
  Task<string> GetDataAsync(ClaimsPrincipal usr, CancellationToken ct);
}

class TemplateService : ITemplateService
{
  public Task<string> GetDataAsync(ClaimsPrincipal usr, CancellationToken ct)
    => Task.FromResult("foobar");
}