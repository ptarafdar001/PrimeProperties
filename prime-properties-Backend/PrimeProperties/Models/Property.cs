using System.ComponentModel.DataAnnotations;

namespace PrimeProperties.Models
{
    public class Property
    {

        public Guid Id { get; set; }
        public string City { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string PropertyType { get; set; } = string.Empty;
        public int NoOfBedroom { get; set; }
        public int NoOfBathroom { get; set; }
        public int SizeInSqft { get; set; }
        public string NearbySchool { get; set; } = string.Empty;
        public string NearbyHospital { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }

    }
}
