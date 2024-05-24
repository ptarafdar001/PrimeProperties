using PrimeProperties.Models;

namespace PrimeProperties.Services.Iservices;

public interface IJwtTokenGenerator
{
    string GenerateToken(ApplicationsUser applicationsUser, IEnumerable<string> roles);
}
