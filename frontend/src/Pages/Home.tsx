import React,{ useState, useEffect } from "react";
import { HeroSetion } from "../components/HeroSetion";
import PropertyList from "../components/PropertyList";
import { useNavigate } from "react-router-dom";
import { getProperties, deleteProperty } from '../services/WebService';
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
const Home = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data:any = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, []);

  const handleDelete = async (id: String) => {
    try {
      await deleteProperty(id);
      setProperties(properties.filter((property) => property._id !== id));
    } catch (error) {
      console.error(`Error deleting property with id ${id}:`, error);
    }
  };

  const handleEdit = (id: String) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="">
      <HeroSetion />
      <PropertyList  properties={properties} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;
