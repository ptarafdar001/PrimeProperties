// AddProperty.tsx
import React, { useState } from 'react';
import '../styles.css'; // Import custom CSS

const propertyTypes = [
  'Normal Home',
  'Flat',
  'Apartment',
  'Banglo',
  'Villas',
  'Duplexes',
  'Luxury Homes',
  'Penthouses',
  'Luxury Villas',
];

const distances = ['1 km', '2 km', '3 km', '4 km', '5 km', '8 km', '10 km'];

interface AddPropertyProps {
  onAdd: (newProperty: any) => void;
}

const AddProperty: React.FC<AddPropertyProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: '',
    city: '',
    location: '',
    propertyType: '',
    noOfBedroom: '',
    noOfBathroom: '',
    sizeInSqft: '',
    nearbySchool: '',
    nearbyHospital: '',
    description: '',
    price: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded h-[80vh] mb-20 overflow-y-auto hidden-scrollbar">
      <h2 className="text-2xl font-bold mb-4">Add Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Property Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Bedrooms
          </label>
          <input
            type="number"
            name="noOfBedroom"
            value={formData.noOfBedroom}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Bathrooms
          </label>
          <input
            type="number"
            name="noOfBathroom"
            value={formData.noOfBathroom}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Size in Sqft
          </label>
          <input
            type="number"
            name="sizeInSqft"
            value={formData.sizeInSqft}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nearby School
          </label>
          <select
            name="nearbySchool"
            value={formData.nearbySchool}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Distance</option>
            {distances.map((distance) => (
              <option key={distance} value={distance}>
                {distance}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nearby Hospital
          </label>
          <select
            name="nearbyHospital"
            value={formData.nearbyHospital}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Distance</option>
            {distances.map((distance) => (
              <option key={distance} value={distance}>
                {distance}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
