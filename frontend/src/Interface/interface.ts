export interface Property {
  imageUrl: string;
  isPopular: boolean;
  title: string;
  location: string;
  city:string;
  hours: string;
  meetingRooms: string[];
  facilities: string[];
  price: string;
  state:string;
  propertyType:string;
  }
 
  export interface PropertywithId {
    _id: string;
    imageUrl: string;
    isPopular: boolean;
    title: string;
    location: string;
    city:string;
    hours: string;
    meetingRooms: string[];
    facilities: string[];
    price: string;
    state:string;
    propertyType:string;
  }