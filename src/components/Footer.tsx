
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-playfair font-bold text-white">
                GrandStay
              </span>
              <span className="ml-1 text-gold text-2xl">.</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Discover luxury accommodations across India with our premium hotel booking service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-gray-300 hover:text-gold transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hotels?city=Kashmir" className="text-gray-300 hover:text-gold transition-colors">
                  Kashmir
                </Link>
              </li>
              <li>
                <Link to="/hotels?city=Bangalore" className="text-gray-300 hover:text-gold transition-colors">
                  Bangalore
                </Link>
              </li>
              <li>
                <Link to="/hotels?city=Mumbai" className="text-gray-300 hover:text-gold transition-colors">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link to="/hotels?city=Delhi" className="text-gray-300 hover:text-gold transition-colors">
                  Delhi
                </Link>
              </li>
              <li>
                <Link to="/hotels?city=Chennai" className="text-gray-300 hover:text-gold transition-colors">
                  Chennai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">GrandStay Services</h3>
            <address className="text-gray-300 not-italic space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gold" />
                <p>ITPL Main Road</p>
              </div>
              <p className="ml-6">Bengaluru, Karnataka</p>
              <div className="flex items-center mt-2">
                <Mail className="h-4 w-4 mr-2 text-gold" />
                <p>thejashwinids@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gold" />
                <p>+91 7259608853</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GrandStay. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
