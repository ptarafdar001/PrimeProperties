
using PrimeProperties.Common;
using PrimeProperties.Mapper;
using PrimeProperties.Models;
using PrimeProperties.Models.Dto;
using PrimeProperties.Repositories.IRepositories;
using PrimeProperties.Services.IServices;
using System.Net;

namespace PrimeProperties.Services
{
    public class PropertyServices : IPropertyServices
    {
        private readonly IPropertyRepo _propertyRepo;
        public PropertyServices(IPropertyRepo propertyRepo)
        {
            _propertyRepo = propertyRepo;
        }
        public async Task<ServiceResult<PropertyResponseDto>> AddProperty(PropertyRequestDto addProperty)
        {
            Property property = new Property()
            {
                Id = Guid.NewGuid(),
                City = addProperty.City,
                Location = addProperty.Location,
                PropertyType = addProperty.PropertyType,
                NoOfBedroom = addProperty.NoOfBedroom,
                NoOfBathroom = addProperty.NoOfBathroom,
                SizeInSqft = addProperty.SizeInSqft,
                NearbySchool = addProperty.NearbySchool,
                NearbyHospital = addProperty.NearbyHospital,
                Description = addProperty.Description,
                Price = addProperty.Price,

            };

            var serviceResult = new ServiceResult<PropertyResponseDto>();
            var result = await _propertyRepo.Add(property);
            if (result == false)
            {
                serviceResult.StatusCode = HttpStatusCode.BadRequest;
                return serviceResult;
            }

            serviceResult.Data = property.ToDto();
            return serviceResult;
        }

        public async Task<ServiceResult> DeleteProperty(Guid id)
        {
            var serviceResult = new ServiceResult();
            var isp = await _propertyRepo.GetById(id);
            if (isp == null)
            {
                serviceResult.StatusCode = HttpStatusCode.NotFound;
                return serviceResult;
            }

            var result = await _propertyRepo.Delete(id);
            if (result == false)
            {
                serviceResult.StatusCode = HttpStatusCode.BadRequest;
                return serviceResult;
            }

            return serviceResult;
        }

        public async Task<ServiceResult<IEnumerable<PropertyResponseDto>>> GetAllProperties()
        {
            var serviceResult = new ServiceResult<IEnumerable<PropertyResponseDto>>();
            var allISPs = await _propertyRepo.GetAll();
            if (allISPs == null)
            {
                serviceResult.StatusCode = HttpStatusCode.NotFound;
                return serviceResult;
            }
            serviceResult.Data = allISPs.Select(x => x.ToDto());
            return serviceResult;
        }

        public async Task<ServiceResult<PropertyResponseDto>> GetById(Guid id)
        {
            var serviceResult = new ServiceResult<PropertyResponseDto>();
            var isp = await _propertyRepo.GetById(id);
            if (isp == null)
            {
                serviceResult.StatusCode = HttpStatusCode.NotFound;
                return serviceResult;
            }
            serviceResult.Data = isp.ToDto();
            return serviceResult;
        }

        public async Task<ServiceResult> UpdateProperty(PropertyRequestDto updateProperty, Guid id)
        {
            var serviceResult = new ServiceResult();

            var property = await _propertyRepo.GetById(id);
            if (property == null)
            {
                serviceResult.StatusCode = HttpStatusCode.NotFound;
                return serviceResult;
            }

            property.City = updateProperty.City;
            property.Location = updateProperty.Location;
            property.PropertyType = updateProperty.PropertyType;
            property.NoOfBedroom = updateProperty.NoOfBedroom;
            property.NoOfBathroom = updateProperty.NoOfBathroom;
            property.SizeInSqft = updateProperty.SizeInSqft;
            property.NearbySchool = updateProperty.NearbySchool;
            property.NearbyHospital = updateProperty.NearbyHospital;
            property.Description = updateProperty.Description;
            property.Price = updateProperty.Price;


            var result = await _propertyRepo.Update(property);
            if (result == false)
            {
                serviceResult.StatusCode = HttpStatusCode.BadRequest;
                return serviceResult;
            }

            return serviceResult;
        }
    }
}
