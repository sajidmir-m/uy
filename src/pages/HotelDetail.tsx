import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHotelById } from "../data/hotels";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Room } from "@/types";

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = getHotelById(id || "");

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!hotel) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
            <p className="text-gray-600 mb-6">
              The hotel you are looking for does not exist.
            </p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hotel!.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hotel!.images.length - 1 : prevIndex - 1
    );
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom || !checkIn || !checkOut) return 0;

    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return selectedRoom.price * diffDays;
  };

  const handleWhatsAppBooking = () => {
    if (!selectedRoom || !checkIn || !checkOut) return;
    
    const checkInDate = checkIn ? format(checkIn, 'dd/MM/yyyy') : '';
    const checkOutDate = checkOut ? format(checkOut, 'dd/MM/yyyy') : '';
    
    const message = `Hello, I would like to book ${hotel!.name} - ${hotel!.starCategory} star hotel in ${hotel!.location.city}.
Room: ${selectedRoom.name}
Check-in: ${checkInDate}
Check-out: ${checkOutDate}
Guests: ${guests}
Total Price: ₹${calculateTotalPrice()}

Please confirm my booking. Thank you!`;

    const whatsappUrl = `https://wa.me/919149559393?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hotel Header */}
        <div className="bg-navy-light py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
                  {hotel.name}
                </h1>
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < hotel.rating
                            ? "text-gold fill-gold"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm">{hotel.rating} out of 5</span>
                </div>
                <p className="text-gray-300">
                  {hotel.location.address}, {hotel.location.city},{" "}
                  {hotel.location.state}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-gold text-white px-4 py-2 rounded-full text-lg font-semibold">
                  {hotel.starCategory}-Star Hotel
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Hotel Info */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8 relative rounded-lg overflow-hidden shadow-md h-[400px]">
                <img
                  src={hotel.images[currentImageIndex]}
                  alt={`${hotel.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <Button
                    onClick={handlePrevImage}
                    variant="outline"
                    className="rounded-full h-10 w-10 p-0 bg-white/70 hover:bg-white border-none"
                  >
                    &lt;
                  </Button>
                  <Button
                    onClick={handleNextImage}
                    variant="outline"
                    className="rounded-full h-10 w-10 p-0 bg-white/70 hover:bg-white border-none"
                  >
                    &gt;
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {hotel.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {hotel.images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded overflow-hidden h-20 w-32 flex-shrink-0 transition-all ${
                      currentImageIndex === index
                        ? "ring-2 ring-gold"
                        : "opacity-70"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${hotel.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Hotel Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">About this hotel</h2>
                <p className="text-gray-600 mb-4">{hotel.description}</p>
              </div>

              {/* Facilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.facilities.map((facility) => (
                    <div
                      key={facility.id}
                      className="flex items-center bg-gray-50 p-3 rounded-md"
                    >
                      <div className="mr-3 text-gold">
                        {/* Icon would go here */}
                      </div>
                      <span>{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rooms */}
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">Available Rooms</h2>
                <div className="space-y-4">
                  {hotel.rooms.map((room) => (
                    <Card
                      key={room.id}
                      className={cn(
                        "transition-all",
                        selectedRoom?.id === room.id && "ring-2 ring-gold"
                      )}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img
                            src={room.images[0]}
                            alt={room.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <CardHeader>
                            <CardTitle>{room.name}</CardTitle>
                            <CardDescription>{room.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-4">
                              <h4 className="font-semibold mb-1">Amenities:</h4>
                              <div className="flex flex-wrap gap-2">
                                {room.amenities.map((amenity, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-gray-100 text-xs px-2 py-1 rounded-full"
                                  >
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">Capacity:</h4>
                              <p>Up to {room.capacity} guests</p>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center">
                            <div>
                              <span className="font-bold text-xl">₹{room.price}</span>
                              <span className="text-sm text-gray-500">/night</span>
                            </div>
                            <Button
                              onClick={() => handleRoomSelect(room)}
                              className={cn(
                                "bg-gold hover:bg-gold-dark text-white",
                                selectedRoom?.id === room.id &&
                                  "bg-gold-dark"
                              )}
                            >
                              {selectedRoom?.id === room.id
                                ? "Selected"
                                : "Select Room"}
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-bold mb-4">Guest Reviews</h2>
                {hotel.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {hotel.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{review.userName}</h3>
                          <div className="flex items-center">
                            <span className="mr-2 font-medium">
                              {review.rating}
                            </span>
                            <Star className="h-5 w-5 text-gold fill-gold" />
                          </div>
                        </div>
                        <p className="text-gray-600 mb-1">{review.comment}</p>
                        <p className="text-gray-400 text-sm">{review.date}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet.</p>
                )}
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-playfair">Book Your Stay</CardTitle>
                    <CardDescription>
                      Fill in the details to book your stay
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Room Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Selected Room
                      </label>
                      <Select
                        value={selectedRoom?.id || ""}
                        onValueChange={(value) => {
                          const room = hotel.rooms.find(
                            (room) => room.id === value
                          );
                          setSelectedRoom(room || null);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a room" />
                        </SelectTrigger>
                        <SelectContent>
                          {hotel.rooms.map((room) => (
                            <SelectItem key={room.id} value={room.id}>
                              {room.name} - ₹{room.price}/night
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Check-in Date */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Check-in Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Check-out Date */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Check-out Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            disabled={(date) =>
                              date < new Date() ||
                              (checkIn && date <= checkIn)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Number of Guests
                      </label>
                      <Select
                        value={String(guests)}
                        onValueChange={(value) => setGuests(Number(value))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedRoom
                            ? [...Array(selectedRoom.capacity)].map((_, i) => (
                                <SelectItem key={i + 1} value={String(i + 1)}>
                                  {i + 1} {i === 0 ? "Guest" : "Guests"}
                                </SelectItem>
                              ))
                            : [...Array(4)].map((_, i) => (
                                <SelectItem key={i + 1} value={String(i + 1)}>
                                  {i + 1} {i === 0 ? "Guest" : "Guests"}
                                </SelectItem>
                              ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Summary */}
                    {selectedRoom && checkIn && checkOut && (
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">Price Summary</h4>
                        <div className="flex justify-between mb-2">
                          <span>
                            ₹{selectedRoom.price} x{" "}
                            {Math.ceil(
                              (checkOut.getTime() - checkIn.getTime()) /
                                (1000 * 60 * 60 * 24)
                            )}{" "}
                            nights
                          </span>
                          <span>₹{calculateTotalPrice()}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg mt-4 border-t pt-4">
                          <span>Total</span>
                          <span>₹{calculateTotalPrice()}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
                      onClick={handleWhatsAppBooking}
                      disabled={!selectedRoom || !checkIn || !checkOut}
                    >
                      <MessageSquare size={18} />
                      Book Now on WhatsApp
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetail;
