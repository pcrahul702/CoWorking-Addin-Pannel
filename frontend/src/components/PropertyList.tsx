import React from 'react';
import PropertyCard from './PropertyCard';

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
  isFavorite?: boolean;
}

const PropertyList: React.FC = () => {
  const properties: Property[] = [
    {
      imageUrl: 'https://via.placeholder.com/150',
      isPopular: true,
      title: 'Awfis - Business Mantri',
      location: 'Viman Nagar, Pune',
      hours: 'Open Now, 11:00 to 23:00',
      meetingRooms: ['Meeting Rooms', 'Break Rooms'],
      facilities: ['Dedicated Desks', 'Private Cabins', 'Managed Office'],
      price: '6,999',
      currency: '₹',
      isFavorite: true,
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      isPopular: false,
      title: 'CoWorks - Magarpatta',
      location: 'Magarpatta, Pune',
      hours: 'Open Now, 09:00 to 18:00',
      meetingRooms: ['Conference Rooms', 'Event Spaces'],
      facilities: ['Open Workspaces', 'Private Offices'],
      price: '15,999',
      currency: '₹',
      isFavorite: false,
    },
    {
        imageUrl: 'https://via.placeholder.com/150',
        isPopular: true,
        title: 'Rahul - Business Kumar',
        location: 'Lohegoan , Pune',
        hours: 'Open Now, 08:00 to 22:00',
        meetingRooms: ['Meeting Rooms', 'Break Rooms'],
        facilities: ['Dedicated Desks', 'Private Cabins', 'Managed Office'],
        price: '3,999',
        currency: '₹',
        isFavorite: true,
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        isPopular: true,
        title: 'Vikash - Bussiness Soln',
        location: 'shivagi Nagar , Pune',
        hours: 'Open Now, 08:00 to 22:00',
        meetingRooms: ['Meeting Rooms', 'Break Rooms'],
        facilities: ['Dedicated Desks', 'Private Cabins', 'Managed Office'],
        price: '10,999',
        currency: '₹',
        isFavorite: true,
      },
  ];

  const handleQuoteClick = (title: string) => {
    console.log(`Get Quote clicked for ${title}`);
  };

  return (
    <div className=' container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 my-5 '>
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          imageUrl={property.imageUrl}
          isPopular={property.isPopular}
          title={property.title}
          location={property.location}
          hours={property.hours}
          meetingRooms={property.meetingRooms}
          facilities={property.facilities}
          price={property.price}
          currency={property.currency}
          onQuoteClick={() => handleQuoteClick(property.title)}
          isFavorite={property.isFavorite}
        />
      ))}
    </div>
  );
};

export default PropertyList;
