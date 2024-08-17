import React, { useState } from 'react';
// import { addProperty } from '../services/propertyService';
// import { useHistory } from 'react-router-dom';

interface Property {
  imageUrl: string;
  isPopular: boolean;
  title: string;
  location: string;
  hours: string;
  meetingRooms: string[];
  facilities: string[];
  price: string;
  currency: string;
  isFavorite: boolean;
}

const AddProperty: React.FC = () => {
  // const history = useHistory();
  const [property, setProperty] = useState<Property>({
    imageUrl: '',
    isPopular: false,
    title: '',
    location: '',
    hours: '',
    meetingRooms: [],
    facilities: [],
    price: '',
    currency: '₹',
    isFavorite: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setProperty({
      ...property,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    arrayName: 'meetingRooms' | 'facilities'
  ) => {
    const { value, checked } = e.target;
    setProperty((prevState) => ({
      ...prevState,
      [arrayName]: checked
        ? [...prevState[arrayName], value]
        : prevState[arrayName].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await addProperty(property);
    // history.push('/');
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="imageUrl"
            placeholder="Image URL"
            value={property.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isPopular"
              checked={property.isPopular}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-gray-700">Popular</span>
          </label>
        </div>
        <div>
          <input
            name="title"
            placeholder="Title"
            value={property.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            name="location"
            placeholder="Location"
            value={property.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            name="hours"
            placeholder="Hours"
            value={property.hours}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Meeting Rooms</label>
          <div className="flex flex-wrap space-x-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Meeting Rooms"
                checked={property.meetingRooms.includes('Meeting Rooms')}
                onChange={(e) => handleArrayChange(e, 'meetingRooms')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700">Meeting Rooms</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Break Rooms"
                checked={property.meetingRooms.includes('Break Rooms')}
                onChange={(e) => handleArrayChange(e, 'meetingRooms')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700">Break Rooms</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Facilities</label>
          <div className="flex flex-wrap space-x-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Dedicated Desks"
                checked={property.facilities.includes('Dedicated Desks')}
                onChange={(e) => handleArrayChange(e, 'facilities')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700">Dedicated Desks</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Private Cabins"
                checked={property.facilities.includes('Private Cabins')}
                onChange={(e) => handleArrayChange(e, 'facilities')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700">Private Cabins</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Managed Office"
                checked={property.facilities.includes('Managed Office')}
                onChange={(e) => handleArrayChange(e, 'facilities')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700">Managed Office</span>
            </label>
          </div>
        </div>
        <div>
          <input
            name="price"
            placeholder="Price"
            value={property.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            name="currency"
            placeholder="Currency"
            value={property.currency}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isFavorite"
              checked={property.isFavorite}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-gray-700">Favorite</span>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
