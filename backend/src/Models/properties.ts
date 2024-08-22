import mongoose from "mongoose";

export type PropertyType = {
  _id: string;
  imageUrl: string;
  isPopular: boolean;
  title: string;
  location: string;
  hours: string;
  meetingRooms: string[];
  facilities: string[];
  price: string;
  state: string;
  propertyType: string;
  city: string;
};
const PropertySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  isPopular: { type: Boolean, required: true },
  title: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  hours: { type: String, required: true },
  meetingRooms: { type: [String], required: true },
  facilities: { type: [String], required: true },
  price: { type: String, required: true },
  propertyType:{ type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});
const Property = mongoose.model("Property", PropertySchema);
export default Property;
