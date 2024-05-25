using PrimeProperties.Common;
using PrimeProperties.Models.Dto;

namespace PrimeProperties.Services.IServices
{
    public interface IPropertyServices
    {
        Task<ServiceResult<IEnumerable<PropertyResponseDto>>> GetAllProperties();
        Task<ServiceResult<PropertyResponseDto>> GetById(Guid id);
        Task<ServiceResult<PropertyResponseDto>> AddProperty(PropertyRequestDto addProperty);
        Task<ServiceResult> UpdateProperty(PropertyRequestDto updateProperty, Guid id);
        Task<ServiceResult> DeleteProperty(Guid id);
    }
}
