
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { City } from "@/types";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (filters: {
    location: City;
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number;
  }) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [location, setLocation] = useState<City>("All");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    onSearch({
      location,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-16 relative z-10 mb-12 mx-4 md:mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Location
          </label>
          <Select
            value={location}
            onValueChange={(value) => setLocation(value as City)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Cities</SelectItem>
              <SelectItem value="Bangalore">Bangalore</SelectItem>
              <SelectItem value="Chennai">Chennai</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Check-in
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
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
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Check-out
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
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
                initialFocus
                disabled={(date) =>
                  date < new Date() || (checkIn && date <= checkIn)
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Guests
          </label>
          <div className="flex">
            <Input
              type="number"
              min={1}
              max={10}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="rounded-r-none"
            />
            <Button
              onClick={handleSearch}
              className="bg-gold hover:bg-gold-dark text-white rounded-l-none"
            >
              <Search className="h-4 w-4" />
              <span className="ml-2 hidden md:inline">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
