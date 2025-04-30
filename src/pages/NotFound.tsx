
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-navy mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            We couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
          </p>
          <Link to="/">
            <Button className="bg-gold hover:bg-gold-dark text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
