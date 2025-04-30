
import { Facility, Hotel } from "../types";

// Define common facilities
export const facilities: Facility[] = [
  { id: "1", name: "AC Rooms", icon: "snowflake" },
  { id: "2", name: "Non-AC Rooms", icon: "fan" },
  { id: "3", name: "Suites", icon: "hotel" },
  { id: "4", name: "Breakfast Lounge", icon: "coffee" },
  { id: "5", name: "Swimming Pool", icon: "pool" },
  { id: "6", name: "Gym", icon: "dumbbell" },
  { id: "7", name: "Party Hall", icon: "glass-cheers" },
  { id: "8", name: "Spa", icon: "spa" },
  { id: "9", name: "Free WiFi", icon: "wifi" },
  { id: "10", name: "Restaurant", icon: "utensils" },
  { id: "11", name: "Bar", icon: "glass-martini-alt" },
  { id: "12", name: "Room Service", icon: "concierge-bell" }
];

// Mock hotel data
export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Taj Palace",
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Palace Road, Vasanth Nagar"
    },
    rating: 4.8,
    starCategory: 5,
    price: 15000,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000"
    ],
    description: "Experience luxury at its finest in the heart of Bangalore. The Taj Palace offers world-class amenities, fine dining, and exceptional service in an iconic setting.",
    facilities: [
      facilities[0], facilities[2], facilities[3], facilities[4], 
      facilities[5], facilities[6], facilities[7], facilities[8], 
      facilities[9], facilities[10], facilities[11]
    ],
    reviews: [
      {
        id: "r1",
        userId: "u1",
        userName: "Rahul Sharma",
        rating: 5,
        comment: "Absolutely stunning property with impeccable service. The rooms are spacious and the food is delicious.",
        date: "2023-09-15"
      },
      {
        id: "r2",
        userId: "u2",
        userName: "Priya Patel",
        rating: 4,
        comment: "Beautiful hotel with amazing amenities. The spa was particularly excellent.",
        date: "2023-10-22"
      }
    ],
    rooms: [
      {
        id: "room1",
        name: "Deluxe Room",
        description: "Spacious room with city view",
        price: 15000,
        capacity: 2,
        amenities: ["King Bed", "Mini Bar", "Free Wi-Fi", "Flat-screen TV"],
        images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000"],
        available: true
      },
      {
        id: "room2",
        name: "Luxury Suite",
        description: "Elegant suite with separate living area",
        price: 25000,
        capacity: 3,
        amenities: ["King Bed", "Jacuzzi", "Mini Bar", "Free Wi-Fi", "Flat-screen TV"],
        images: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000"],
        available: true
      }
    ]
  },
  {
    id: "2",
    name: "ITC Grand Chola",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Mount Road, Guindy"
    },
    rating: 4.7,
    starCategory: 5,
    price: 18000,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=1000",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000"
    ],
    description: "ITC Grand Chola, a tribute to Southern India's greatest empires, stands tall in the heart of Chennai. Experience royal luxury with exquisite dining and world-class amenities.",
    facilities: [
      facilities[0], facilities[2], facilities[3], facilities[4], 
      facilities[5], facilities[7], facilities[8], facilities[9], 
      facilities[10], facilities[11]
    ],
    reviews: [
      {
        id: "r3",
        userId: "u3",
        userName: "Vikram Malhotra",
        rating: 5,
        comment: "The architecture and grandeur of this hotel is unmatched. Truly a royal experience.",
        date: "2023-11-05"
      },
      {
        id: "r4",
        userId: "u4",
        userName: "Anjali Reddy",
        rating: 4,
        comment: "Excellent service and food. The restaurant options are diverse and amazing.",
        date: "2023-12-12"
      }
    ],
    rooms: [
      {
        id: "room3",
        name: "Executive Room",
        description: "Modern room with business amenities",
        price: 18000,
        capacity: 2,
        amenities: ["Queen Bed", "Work Desk", "Free Wi-Fi", "Smart TV"],
        images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=1000"],
        available: true
      },
      {
        id: "room4",
        name: "Royal Suite",
        description: "Opulent suite with panoramic city views",
        price: 30000,
        capacity: 4,
        amenities: ["King Bed", "Living Room", "Dining Area", "Jacuzzi", "Butler Service"],
        images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000"],
        available: true
      }
    ]
  },
  {
    id: "3",
    name: "The Imperial",
    location: {
      city: "Delhi",
      state: "Delhi",
      address: "Janpath Lane, Connaught Place"
    },
    rating: 4.9,
    starCategory: 5,
    price: 20000,
    images: [
      "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=1000",
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1000",
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1000"
    ],
    description: "The Imperial is an iconic colonial-style hotel offering a perfect blend of old-world charm and modern luxury in the heart of Delhi.",
    facilities: [
      facilities[0], facilities[2], facilities[3], facilities[4], 
      facilities[5], facilities[7], facilities[8], facilities[9], 
      facilities[10], facilities[11]
    ],
    reviews: [
      {
        id: "r5",
        userId: "u5",
        userName: "Arjun Mehra",
        rating: 5,
        comment: "The colonial architecture and art collection make this hotel unique. Impeccable service.",
        date: "2023-10-18"
      },
      {
        id: "r6",
        userId: "u6",
        userName: "Nisha Singh",
        rating: 5,
        comment: "Simply the best hotel experience in Delhi. The spa treatments are exceptional.",
        date: "2024-01-05"
      }
    ],
    rooms: [
      {
        id: "room5",
        name: "Heritage Room",
        description: "Classic room with colonial design",
        price: 20000,
        capacity: 2,
        amenities: ["Queen Bed", "Antique Furniture", "Free Wi-Fi", "Premium Toiletries"],
        images: ["https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1000"],
        available: true
      },
      {
        id: "room6",
        name: "Grand Heritage Suite",
        description: "Luxurious suite with historical artifacts",
        price: 35000,
        capacity: 3,
        amenities: ["King Bed", "Living Room", "Private Library", "24-hour Butler"],
        images: ["https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1000"],
        available: true
      }
    ]
  },
  {
    id: "4",
    name: "Leela Palace",
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Old Airport Road"
    },
    rating: 4.6,
    starCategory: 7,
    price: 25000,
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000",
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000"
    ],
    description: "The Leela Palace Bangalore is an opulent 7-star luxury hotel set amidst seven acres of lush gardens, offering unparalleled luxury and service excellence.",
    facilities: [
      facilities[0], facilities[2], facilities[3], facilities[4], 
      facilities[5], facilities[6], facilities[7], facilities[8], 
      facilities[9], facilities[10], facilities[11]
    ],
    reviews: [
      {
        id: "r7",
        userId: "u7",
        userName: "Rajiv Kumar",
        rating: 5,
        comment: "The epitome of luxury. Stunning architecture and gardens. The service level is extraordinary.",
        date: "2023-09-30"
      },
      {
        id: "r8",
        userId: "u8",
        userName: "Meena Iyer",
        rating: 4,
        comment: "Beautiful property with magnificent interiors. The food is exceptional, especially at the specialty restaurants.",
        date: "2023-11-15"
      }
    ],
    rooms: [
      {
        id: "room7",
        name: "Royal Deluxe",
        description: "Elegant room with garden view",
        price: 25000,
        capacity: 2,
        amenities: ["King Bed", "Private Balcony", "Free Wi-Fi", "Luxury Toiletries"],
        images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000"],
        available: true
      },
      {
        id: "room8",
        name: "Maharaja Suite",
        description: "Ultra-luxury suite with private pool",
        price: 45000,
        capacity: 4,
        amenities: ["King Bed", "Private Pool", "Living Room", "Dining Area", "24-hour Butler"],
        images: ["https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000"],
        available: true
      }
    ]
  },
  {
    id: "5",
    name: "Trident",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Marine Drive, Nariman Point"
    },
    rating: 4.5,
    starCategory: 5,
    price: 16000,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000",
      "https://images.unsplash.com/photo-1551016052-973e9f53494f?q=80&w=1000"
    ],
    description: "The Trident, Nariman Point offers stunning views of the Arabian Sea and Mumbai's skyline, with elegant rooms and world-class dining options.",
    facilities: [
      facilities[0], facilities[2], facilities[3], facilities[4], 
      facilities[5], facilities[8], facilities[9], facilities[10], 
      facilities[11]
    ],
    reviews: [
      {
        id: "r9",
        userId: "u9",
        userName: "Suresh Mehta",
        rating: 4,
        comment: "Fantastic location with great views of Marine Drive. Professional and courteous staff.",
        date: "2023-12-05"
      },
      {
        id: "r10",
        userId: "u10",
        userName: "Pooja Shah",
        rating: 5,
        comment: "Excellent hotel with amazing food and service. The sea view rooms are worth the upgrade.",
        date: "2024-01-20"
      }
    ],
    rooms: [
      {
        id: "room9",
        name: "Deluxe Sea View",
        description: "Elegant room with Arabian Sea view",
        price: 16000,
        capacity: 2,
        amenities: ["King Bed", "Sea View", "Free Wi-Fi", "Premium Toiletries"],
        images: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000"],
        available: true
      },
      {
        id: "room10",
        name: "Executive Suite",
        description: "Spacious suite with panoramic sea views",
        price: 28000,
        capacity: 3,
        amenities: ["King Bed", "Living Area", "Work Desk", "Club Access", "Luxury Bathroom"],
        images: ["https://images.unsplash.com/photo-1551016052-973e9f53494f?q=80&w=1000"],
        available: true
      }
    ]
  },
  {
    id: "6",
    name: "The Oberoi",
    location: {
      city: "Delhi",
      state: "Delhi",
      address: "Dr. Zakir Hussain Marg"
    },
    rating: 4.9,
    starCategory: 7,
    price: 22000,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000"
    ],
    description: "The Oberoi, New Delhi, a 7-star architectural marvel, offers luxury accommodations with panoramic views of Delhi's Golf Course and Humayun's Tomb.",
    facilities: [
      facilities[0], facilities[2], facilities[3], facilities[4], 
      facilities[5], facilities[6], facilities[7], facilities[8], 
      facilities[9], facilities[10], facilities[11]
    ],
    reviews: [
      {
        id: "r11",
        userId: "u11",
        userName: "Karan Khanna",
        rating: 5,
        comment: "The best hotel in Delhi, period. World-class service, fantastic restaurants, and beautiful interiors.",
        date: "2023-11-25"
      },
      {
        id: "r12",
        userId: "u12",
        userName: "Divya Mathur",
        rating: 5,
        comment: "Pure luxury with impeccable attention to detail. The rooftop bar and pool are spectacular.",
        date: "2024-02-10"
      }
    ],
    rooms: [
      {
        id: "room11",
        name: "Luxury Room",
        description: "Modern room with golf course view",
        price: 22000,
        capacity: 2,
        amenities: ["King Bed", "iPad Control", "Free Wi-Fi", "Luxury Toiletries"],
        images: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000"],
        available: true
      },
      {
        id: "room12",
        name: "Premier Suite",
        description: "Opulent suite with 24-hour butler service",
        price: 40000,
        capacity: 3,
        amenities: ["King Bed", "Living Room", "Dining Area", "Private Bar", "24-hour Butler"],
        images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000"],
        available: true
      }
    ]
  }
];

// Filter functions for hotels
export const filterHotelsByCity = (city: string) => {
  if (city === 'All') return hotels;
  return hotels.filter(hotel => hotel.location.city === city);
};

export const filterHotelsByStarCategory = (stars: number) => {
  return hotels.filter(hotel => hotel.starCategory === stars);
};

export const filterHotelsByFacilities = (facilityIds: string[]) => {
  return hotels.filter(hotel => 
    facilityIds.every(facilityId => 
      hotel.facilities.some(facility => facility.id === facilityId)
    )
  );
};

export const getHotelById = (id: string) => {
  return hotels.find(hotel => hotel.id === id);
};
