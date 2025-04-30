
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hotel } from "@/types";
import { Star, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const handleWhatsAppBooking = () => {
    const message = `Hello, I would like to book ${hotel.name} - ${hotel.starCategory} star hotel in ${hotel.location.city}. Please help me with the booking process.`;
    const whatsappUrl = `https://wa.me/919149559393?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold flex items-center">
          <span className="text-gold">{hotel.rating}</span>
          <Star className="h-4 w-4 ml-1 text-gold fill-gold" />
        </div>
        <div className="absolute top-2 left-2 bg-navy px-2 py-1 rounded-full text-xs text-white font-semibold">
          {hotel.starCategory}-Star
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-playfair">{hotel.name}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <span>
            {hotel.location.city}, {hotel.location.state}
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">
          {hotel.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {hotel.facilities.slice(0, 3).map((facility) => (
            <span
              key={facility.id}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {facility.name}
            </span>
          ))}
          {hotel.facilities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              +{hotel.facilities.length - 3} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4 flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold">₹{hotel.price}</span>
          <span className="text-sm text-gray-500">/night</span>
        </div>
        <div className="flex gap-2">
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-1"
            onClick={handleWhatsAppBooking}
          >
            <MessageSquare size={16} />
            Book Now
          </Button>
          <Link to={`/hotels/${hotel.id}`}>
            <Button variant="outline">
              View Details
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
