
export interface Hotel {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    address: string;
  };
  rating: number;
  starCategory: 3 | 5 | 7;
  price: number;
  images: string[];
  description: string;
  facilities: Facility[];
  reviews: Review[];
  rooms: Room[];
}

export interface Facility {
  id: string;
  name: string;
  icon?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
  available: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  hotelId: string;
  roomId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: 'confirmed' | 'cancelled' | 'completed';
  totalPrice: number;
  createdAt: string;
}

export type City = 'Bangalore' | 'Chennai' | 'Mumbai' | 'Delhi' | 'All';
