import React  from "react";
import PropertyCard from "./PropertyCard";

interface PropertyListProps {
  properties: Property[];
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}
export interface Property {
  _id: string;
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
const PropertyList: React.FC<PropertyListProps> = ({properties,handleDelete,handleEdit}) => {



  return (
    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 my-5">
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
          handleDelete={() => handleDelete(property._id)}
          isFavorite={property.isFavorite}
          handleEdit={() => handleEdit(property._id)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
