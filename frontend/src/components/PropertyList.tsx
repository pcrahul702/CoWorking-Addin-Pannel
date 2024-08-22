import React from "react";
import PropertyCard from "./PropertyCard";
import { deleteProperty } from "../services/WebService";
import { PropertywithId } from "../Interface/interface";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addData } from "../redux/slices/PropertiesSlice";

interface PropertyListProps {
  properties: PropertywithId[];
}
const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id: String) => {
    try {
      await deleteProperty(id);
      dispatch(
        addData(
          properties.filter((property: PropertywithId) => property._id !== id)
        )
      );
    } catch (error) {
      console.error(`Error deleting property with id ${id}:`, error);
    }
  };

  const handleEdit = (id: String) => {
    navigate(`/edit/${id}`);
  };

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
    
          handleDelete={() => handleDelete(property._id)}
          state={property.state}
          propertyTyp={property.propertyType}
          city={property.city}
          handleEdit={() => handleEdit(property._id)}
        />
      ))}
    </div>
  );
};

export default PropertyList;
