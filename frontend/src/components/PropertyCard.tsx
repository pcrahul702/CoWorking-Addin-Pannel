import React from 'react';

interface PropertyCardProps {
  imageUrl: string;
  isPopular: boolean;
  title: string;
  location: string;
  hours: string;
  meetingRooms: string[];
  facilities: string[];
  price: string;
  currency: string;
  onQuoteClick: () => void;
  isFavorite?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  isPopular,
  title,
  location,
  hours,
  meetingRooms,
  facilities,
  price,
  currency,
  onQuoteClick,
  isFavorite = false,
}) => {
  return (
    <div className="border rounded-lg shadow-lg flex p-4 w-full mx-auto">
      <div className="w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            {isPopular && (
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                Popular
              </span>
            )}
            <span className="text-gray-500">
              <i className={`fas fa-heart ${isFavorite ? 'text-red-500' : ''}`}></i>
            </span>
          </div>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <p className="text-gray-600">
            <i className="fas fa-map-marker-alt"></i> {location}
          </p>
          <p className="text-gray-600">
            <i className="fas fa-clock"></i> {hours}
          </p>
          <div className="flex items-center mt-2">
            {meetingRooms.map((room, index) => (
              <button
                key={index}
                className="bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2"
              >
                {room}
              </button>
            ))}
            {meetingRooms.length > 2 && (
              <span className="text-gray-600">+{meetingRooms.length - 2}</span>
            )}
          </div>
          <div className="flex flex-wrap mt-4">
            {facilities.map((facility, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 mb-2"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-gray-600">Price Starting at</p>
            <p className="text-2xl font-bold text-gray-800">
              {currency}
              {price}
            </p>
            <p className="text-sm text-gray-600">/ desk / month</p>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={onQuoteClick}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
