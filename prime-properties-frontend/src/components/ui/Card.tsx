import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface CardProps {
  id: string;
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

const Card = ({ item }: any) => {
  return (
    <div className="flex flex-row bg-white rounded-xl shadow-md m-5">
      <div className="w-1/3 m-3 ">
        <img
          src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/74f75-diffrence-between-a-flat-and-an-apartmetn.jpg?fit=1000%2C667&ssl=1"
          alt="Demo"
          className="border rounded-xl "
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center m-4">
          <h1 className="text-xl font-bold text-lime-600">
            {item.noOfBedroom} BHK {item.propertyType} {item.sizeInSqft} Sq.ft.
            for Sale in {item.location}
            {item.city}
          </h1>
          <h2 className="text-xl font-bold text-gray-800">₹ {item.price}</h2>
        </div>
        <div className="flex flex-row justify-between items-center m-4">
          <div className="border-r-2 pr-20">
            <p className="text-lg font-bold text-neutral-300 ">Built up area</p>
            <p className="text-base">{item.sizeInSqft} sq.ft</p>
          </div>
          <div className="border-r-2 pr-20">
            <p className="text-lg font-bold text-neutral-300">Bead room</p>
            <p>{item.noOfBedroom}</p>
          </div>
          <div className="border-r-2 pr-20">
            <p className="text-lg font-bold text-neutral-300">Bath room</p>
            <p>{item.noOfBathroom}</p>
          </div>
          <div className=" pr-20">
            <p className="text-lg font-bold text-neutral-300">location</p>
            <p>{item.location}</p>
          </div>
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className="m-4">
          <p className="text-sm text-black">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
