
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-navy">
            GrandStay
          </span>
          <span className="ml-1 text-gold text-2xl">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/hotels" className="font-medium hover:text-gold transition-colors">
            Hotels
          </Link>
          <Link to="/about" className="font-medium hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="font-medium hover:text-gold">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gold hover:bg-gold-dark text-white font-medium">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/hotels"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Hotels
            </Link>
            <Link
              to="/about"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium p-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
