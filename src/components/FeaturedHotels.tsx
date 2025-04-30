
import { Hotel } from "@/types";
import HotelCard from "./HotelCard";

interface FeaturedHotelsProps {
  hotels: Hotel[];
  title: string;
  subtitle?: string;
}

const FeaturedHotels = ({ hotels, title, subtitle }: FeaturedHotelsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
