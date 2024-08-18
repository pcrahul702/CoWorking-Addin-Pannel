import axios from 'axios';
import { Property } from '../Interface/interface';
const API_URL = 'http://localhost:5000/api/properties';

export const getProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
export const GetProperty = async (id: String) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  };

export const addProperty = async (property: Property) => {
  try {
    const response = await axios.post(API_URL, property);
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error);
    throw error;
  }
};

export const deleteProperty = async (id: String) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting property with id ${id}:`, error);
    throw error;
  }
};

export const updateProperty = async (id: String, property: Property) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, property);
    return response.data;
  } catch (error) {
    console.error(`Error updating property with id ${id}:`, error);
    throw error;
  }
};
