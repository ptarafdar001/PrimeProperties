using Microsoft.AspNetCore.Identity;
using PrimeProperties.Data;
using PrimeProperties.Models;
using PrimeProperties.Models.Dto;
using PrimeProperties.Services.Iservices;

namespace PrimeProperties.Services;

public class AuthService(
    AppDbContext db,
    UserManager<ApplicationsUser> userManager,
    RoleManager<IdentityRole> roleManager,
    IJwtTokenGenerator jwtTokenGenerator) : IAuthService
{
    private readonly AppDbContext _db = db;
    private readonly UserManager<ApplicationsUser> _userManager = userManager;
    private readonly RoleManager<IdentityRole> _roleManager = roleManager;
    private readonly IJwtTokenGenerator _jwtTokenGenerator = jwtTokenGenerator;

    public async Task<LoginResponseDto?> Login(LoginRequestDto loginRequestDto)
    {
        try
        {
            var loginResponse = new LoginResponseDto();

            var user = _db.ApplicationsUsers.FirstOrDefault(u => u.UserName!.ToLower() == loginRequestDto.Username.ToLower());

            if (user == null)
            {
                return null;
            }

            bool isValid = await _userManager.CheckPasswordAsync(user, loginRequestDto.Password);

            if (isValid == false)
            {
                return null;
            }

            //if user was found, Generate JWT Token
            var roles = await _userManager.GetRolesAsync(user);
            var token = _jwtTokenGenerator.GenerateToken(user, roles);

            if (string.IsNullOrEmpty(token))
            {
                return null;
            }

            UserDto userDto = new()
            {
                Email = user.Email ?? "",
                ID = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                ContactNumber = user.PhoneNumber ?? ""
            };

            loginResponse.User = userDto;
            loginResponse.Token = token;

            return loginResponse;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<IdentityResult> Register(RegistrationRequestDto registrationRequestDto)
    {
        try
        {
            ApplicationsUser user = new()
            {
                UserName = registrationRequestDto.Email,
                Email = registrationRequestDto.Email,
                NormalizedEmail = registrationRequestDto.Email.ToUpper(),
                FirstName = registrationRequestDto.FirstName,
                LastName = registrationRequestDto.LastName,
                PhoneNumber = registrationRequestDto.ContactNumber,
            };

            var result = await _userManager.CreateAsync(user, registrationRequestDto.Password);

            if (result.Succeeded)
            {
                if (!_roleManager.RoleExistsAsync(registrationRequestDto.Role).GetAwaiter().GetResult())
                {
                    // create role if it does not exist
                    _roleManager.CreateAsync(new IdentityRole(registrationRequestDto.Role)).GetAwaiter().GetResult();
                }
                await _userManager.AddToRoleAsync(user, registrationRequestDto.Role);
            }

            return result;
        }
        catch (Exception)
        {
            throw;
        }
    }
}
