export interface Property {
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
  export interface PropertywithId {
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