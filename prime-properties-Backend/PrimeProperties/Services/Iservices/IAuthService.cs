using Microsoft.AspNetCore.Identity;
using PrimeProperties.Models.Dto;

namespace PrimeProperties.Services.Iservices;

public interface IAuthService
{
    Task<IdentityResult> Register(RegistrationRequestDto registrationRequestDTO);
    Task<LoginResponseDto?> Login(LoginRequestDto loginRequestDTO);
}

