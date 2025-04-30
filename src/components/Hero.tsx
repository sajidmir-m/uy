
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000')",
      }}
    >
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
            Discover Luxury Accommodations Across India
          </h1>
          <p className="text-xl text-white/90 mb-8 text-shadow">
            Experience the finest hotels in Bangalore, Chennai, Mumbai, and Delhi. 
            From 3-star comfort to 7-star opulence, find your perfect stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/hotels">
              <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg">
                Browse Hotels
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
