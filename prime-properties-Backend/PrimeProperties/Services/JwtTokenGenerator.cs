using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PrimeProperties.Models;
using PrimeProperties.Services.Iservices;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PrimeProperties.Services;

public class JwtTokenGenerator(IOptions<JwtOptions> jwtOptions) : IJwtTokenGenerator
{
    private readonly JwtOptions _jwtOptions = jwtOptions.Value;

    public string GenerateToken(ApplicationsUser applicationsUser, IEnumerable<string> roles)
    {
        try
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(_jwtOptions.Secret);

            var claimList = new List<Claim>
            {
                new(JwtRegisteredClaimNames.Email, applicationsUser.Email!),
                new(JwtRegisteredClaimNames.Sub, applicationsUser.Id),
                new(JwtRegisteredClaimNames.Name, applicationsUser.UserName!),
            };

            claimList.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = _jwtOptions.Audience,
                Issuer = _jwtOptions.Issuer,
                Subject = new ClaimsIdentity(claimList),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
        catch (Exception)
        {
            throw;
        }
    }
}
