
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-navy mb-8">About GrandStay</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              GrandStay is a premier hotel booking service dedicated to providing exceptional accommodations across India. 
              With a carefully curated selection of luxury and budget-friendly hotels, we ensure every traveler finds their perfect stay.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Our Story</h2>
            <p className="mb-6">
              Founded in 2023, GrandStay was born from a passion for hospitality and a desire to simplify the hotel booking experience.
              Our team of travel enthusiasts has personally visited and vetted each property in our collection to ensure they meet our high standards of comfort, service, and value.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              At GrandStay, our mission is to connect travelers with exceptional accommodations that enhance their journey.
              We believe that where you stay is more than just a place to sleep—it's an integral part of your travel experience.
            </p>
            
            <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Carefully selected properties that meet our quality standards</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>24/7 customer support for seamless booking assistance</li>
              <li>Detailed and honest hotel descriptions</li>
              <li>Exclusive deals and loyalty rewards for frequent travelers</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
