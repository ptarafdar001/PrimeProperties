using Microsoft.AspNetCore.Identity;

namespace PrimeProperties.Models;

public class ApplicationsUser : IdentityUser
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
}
