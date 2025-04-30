
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { hotels, filterHotelsByCity } from "../data/hotels";
import { Hotel } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import SearchBar from "@/components/SearchBar";

const Hotels = () => {
  const [searchParams] = useSearchParams();
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const city = searchParams.get("city");

  useEffect(() => {
    if (city) {
      const filtered = filterHotelsByCity(city as any);
      setFilteredHotels(filtered);
    } else {
      setFilteredHotels(hotels);
    }
  }, [city]);

  const handleSearch = (filters: {
    location: any;
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }) => {
    const { location } = filters;
    const filtered = filterHotelsByCity(location);
    setFilteredHotels(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-navy mb-8">Our Hotels</h1>
          
          <SearchBar onSearch={handleSearch} />
          
          <div className="my-8">
            <h2 className="text-xl font-semibold mb-4">
              {city ? `Hotels in ${city}` : "All Hotels"}
              <span className="text-gray-500 ml-2">({filteredHotels.length} results)</span>
            </h2>
            
            {filteredHotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHotels.map((hotel) => (
                  <div key={hotel.id} className="animate-fade-in">
                    <HotelCard hotel={hotel} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-semibold text-navy mb-2">No Hotels Found</h3>
                <p className="text-gray-600">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;
