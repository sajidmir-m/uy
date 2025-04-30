
import { useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedHotels from "@/components/FeaturedHotels";
import HotelCard from "@/components/HotelCard";
import { City, Hotel } from "@/types";
import { hotels, filterHotelsByCity } from "../data/hotels";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Get top-rated hotels for featured section
  const topRatedHotels = [...hotels]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Get luxury (7-star) hotels
  const luxuryHotels = hotels.filter((hotel) => hotel.starCategory === 7);

  // Get budget (3-star) hotels
  const budgetHotels = hotels.filter((hotel) => hotel.starCategory === 3);

  const handleSearch = (filters: {
    location: City;
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }) => {
    const { location } = filters;
    const filtered = filterHotelsByCity(location);
    setFilteredHotels(filtered);
    setHasSearched(true);
  };

  const handleWhatsAppContact = () => {
    const message = "Hello, I would like to inquire about hotel bookings. Can you help me?";
    const whatsappUrl = `https://wa.me/919149559393?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        <div className="container mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* WhatsApp Contact Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button 
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg"
          >
            <MessageSquare size={28} />
          </Button>
        </div>

        {hasSearched && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-navy mb-8">Search Results</h2>
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
          </section>
        )}

        <FeaturedHotels
          hotels={topRatedHotels}
          title="Our Top-Rated Hotels"
          subtitle="Experience the best accommodations with exceptional service and amenities"
        />

        {luxuryHotels.length > 0 && (
          <FeaturedHotels
            hotels={luxuryHotels}
            title="Luxury Experience"
            subtitle="Indulge in our exclusive 7-star properties for an unforgettable stay"
          />
        )}

        {budgetHotels.length > 0 && (
          <FeaturedHotels
            hotels={budgetHotels}
            title="Budget-Friendly Options"
            subtitle="Comfortable and affordable accommodations that don't compromise on quality"
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
