import React, { useState } from 'react';
import AddProperty from './AddProperty';
import UpdateProperty from './UpdateProperty';

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

// Example data for demonstration

const SellerDashboard: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null);

  const handleAddProperty = (newProperty: Property) => {
    setProperties([
      ...properties,
      { ...newProperty, id: properties.length + 1 },
    ]);
    setIsAdding(false);
  };

  const handleUpdateProperty = (updatedProperty: Property) => {
    setProperties(
      properties.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    );
    setIsUpdating(false);
    setCurrentProperty(null);
  };

  const handleEdit = (property: Property) => {
    setCurrentProperty(property);
    setIsUpdating(true);
  };

  const handleDelete = (id: number) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center bg-slate-300 mt-10 p-5 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Seller Dashboard</h1>
      {isAdding ? (
        <AddProperty onAdd={handleAddProperty} />
      ) : isUpdating && currentProperty ? (
        <UpdateProperty
          property={currentProperty}
          onUpdate={handleUpdateProperty}
        />
      ) : (
        <div>
          <button
            onClick={() => setIsAdding(true)}
            className="mb-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
          >
            Add New Property
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="p-4 border rounded shadow-md bg-white"
              >
                <h2 className="text-xl font-bold mb-2">
                  {property.propertyType}
                </h2>
                <p className="text-gray-700">
                  {property.city}, {property.location}
                </p>
                <p className="text-gray-700">
                  Bedrooms: {property.noOfBedroom}
                </p>
                <p className="text-gray-700">
                  Bathrooms: {property.noOfBathroom}
                </p>
                <p className="text-gray-700">
                  Size: {property.sizeInSqft} sqft
                </p>
                <p className="text-gray-700">
                  Nearby School: {property.nearbySchool}
                </p>
                <p className="text-gray-700">
                  Nearby Hospital: {property.nearbyHospital}
                </p>
                <p className="text-gray-700">Price: ${property.price}</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEdit(property)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(property.id)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;
