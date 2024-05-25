using Microsoft.AspNetCore.Mvc;
using PrimeProperties.Models.Dto;
using PrimeProperties.Services.Iservices;

namespace PrimeProperties.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthAPIController(IAuthService authService) : ControllerBase
{
    private readonly IAuthService _authService = authService;
    protected ResponseDto _response = new();

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegistrationRequestDto model)
    {
        var response = await _authService.Register(model);

        if (response.Succeeded == false)
        {
            _response.IsSuccess = false;
            _response.Message = response.Errors.FirstOrDefault()?.Description ?? "Something went wrong! Please try again after sometime.";
            return BadRequest(_response);
        }

        _response.Message = "Registration Successful";
        return Ok(_response);
    }


    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDto model)
    {
        var loginResponse = await _authService.Login(model);

        if (loginResponse == null)
        {
            _response.IsSuccess = false;
            _response.Message = "Username or Password is incorrect";
            return BadRequest(_response);
        }

        _response.Result = loginResponse;
        return Ok(_response);
    }

}
