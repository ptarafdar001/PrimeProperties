using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PrimeProperties.Models.Dto;
using PrimeProperties.Services.IServices;
using System.Net;

namespace PrimeProperties.Controllers
{
    [Route("api/property")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyServices _propertyServices;
        public PropertyController(IPropertyServices propertyServices)
        {
            _propertyServices = propertyServices;
        }

        [HttpGet("allProperty")]
        public async Task<IActionResult> GetAllProperty()
        {
            try
            {
                var response = await _propertyServices.GetAllProperties();
                if (response.StatusCode == HttpStatusCode.NotFound)
                {
                    return NotFound();
                }
                return Ok(response.Data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetProperty(Guid id)
        {
            try
            {
                var response = await _propertyServices.GetById(id);
                if (response.StatusCode == HttpStatusCode.NotFound)
                {
                    return NotFound();
                }
                return Ok(response.Data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        //[Authorize(Roles = "Seller")]
        [HttpPost("addProperty")]
        public async Task<IActionResult> AddProperty([FromBody] PropertyRequestDto property)
        {
            try
            {
                var response = await _propertyServices.AddProperty(property);
                if (response.StatusCode == HttpStatusCode.BadRequest)
                {
                    return BadRequest();
                }
                return Ok(response.Data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("updateProperty/{id:Guid}")]
        //[Authorize(Roles = "Seller")]
        public async Task<IActionResult> UpdateProperty([FromBody] PropertyRequestDto property, Guid id)
        {
            try
            {
                var response = await _propertyServices.UpdateProperty(property, id);
                if (response.StatusCode == HttpStatusCode.NotFound)
                {
                    return NotFound();
                }
                if (response.StatusCode == HttpStatusCode.BadRequest)
                {
                    return BadRequest();
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id:Guid}")]
        //[Authorize(Roles = "Seller")]
        public async Task<IActionResult> DeleteProperty(Guid id)
        {
            try
            {
                var response = await _propertyServices.DeleteProperty(id);
                if (response.StatusCode == HttpStatusCode.NotFound)
                {
                    return NotFound();
                }
                if (response.StatusCode == HttpStatusCode.BadRequest)
                {
                    return BadRequest();
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
