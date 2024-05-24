import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
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
            2 BHK Apartment 1000 Sq.ft. for Sale in Allalasandra, Yelahanka,
            Bangalore{title}
          </h1>
          <h2 className="text-xl font-bold text-gray-800">$ 6578</h2>
        </div>
        <div className="flex flex-row justify-between items-center m-4">
          <div className="border-r-2 pr-20">
            <p className="text-lg font-bold text-neutral-300 ">Built up area</p>
            <p className="text-base">1034 sq.ft</p>
          </div>
          <div className="border-r-2 pr-20">
            <p className="text-lg font-bold text-neutral-300">Bead room</p>
            <p>4</p>
          </div>
          <div className="border-r-2 pr-20">
            <p className="text-lg font-bold text-neutral-300">Bath room</p>
            <p>2</p>
          </div>
          <div className=" pr-20">
            <p className="text-lg font-bold text-neutral-300">location</p>
            <p>Newtown, kolkata, 70001</p>
          </div>
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className="m-4">
          <p className="text-sm text-black">
            This spacious 2.0 BHK Flats / Apartments is available for sale and
            is located at Kr Puram, Bangalore. It has a Super Area of 1210
            Sq.ft. and is available at a price of Rs. 71 Lac.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
