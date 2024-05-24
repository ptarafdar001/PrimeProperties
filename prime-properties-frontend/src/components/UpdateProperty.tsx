import React, { useState } from 'react';

interface Property {
  id: number;
  city: string;
  location: string;
  propertyType: string;
  noOfBedroom: number;
  noOfBathroom: number;
  sizeInSqft: number;
  nearbySchool: string;
  nearbyHospital: string;
  description: string;
  price: number;
}

interface UpdatePropertyProps {
  property: Property;
  onUpdate: (updatedProperty: Property) => void;
}

const UpdateProperty: React.FC<UpdatePropertyProps> = ({
  property,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<Property>(property);

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
    onUpdate(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded h-screen overflow-y-auto hidden-scrollbar">
      <h2 className="text-2xl font-bold mb-4">Update Property</h2>
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
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
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
          <input
            type="text"
            name="nearbySchool"
            value={formData.nearbySchool}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nearby Hospital
          </label>
          <input
            type="text"
            name="nearbyHospital"
            value={formData.nearbyHospital}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
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
            Update Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProperty;
