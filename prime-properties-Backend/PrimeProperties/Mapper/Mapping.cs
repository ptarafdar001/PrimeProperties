using PrimeProperties.Models;
using PrimeProperties.Models.Dto;

namespace PrimeProperties.Mapper
{
    public static class Mapping
    {
        public static PropertyResponseDto ToDto(this Property property)
        {
            return new PropertyResponseDto()
            {
                Id = property.Id,
                City = property.City,
                Location = property.Location,
                PropertyType = property.PropertyType,
                NoOfBedroom = property.NoOfBedroom,
                NoOfBathroom = property.NoOfBathroom,
                SizeInSqft = property.SizeInSqft,
                NearbySchool = property.NearbySchool,
                NearbyHospital = property.NearbyHospital,
                Description = property.Description,
                Price = property.Price,
            };
        }
    }
}
