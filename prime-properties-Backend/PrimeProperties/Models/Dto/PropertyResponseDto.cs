using System.ComponentModel.DataAnnotations;

namespace PrimeProperties.Models.Dto
{
    public class PropertyResponseDto
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string City { get; set; } = string.Empty;
        [Required]
        public string Location { get; set; } = string.Empty;
        [Required]
        public string PropertyType { get; set; } = string.Empty;
        [Required]
        public int NoOfBedroom { get; set; }
        [Required]
        public int NoOfBathroom { get; set; }
        [Required]
        public int SizeInSqft { get; set; }
        [Required]
        public string NearbySchool { get; set; } = string.Empty;
        [Required]
        public string NearbyHospital { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        public decimal Price { get; set; }
    }
}
