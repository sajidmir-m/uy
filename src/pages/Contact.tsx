
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleWhatsAppContact = () => {
    const message = "Hello, I would like to inquire about hotel bookings. Can you help me?";
    const whatsappUrl = `https://wa.me/917259608853?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-navy mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-white font-medium w-full py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600 mt-1">ITPL Main Road</p>
                    <p className="text-gray-600">Bengaluru, Karnataka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 mt-1">thejashwinids@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 mt-1">+91 7259608853</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={handleWhatsAppContact}
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2 px-4 py-2"
                  >
                    <MessageSquare size={18} />
                    <span>Chat with us on WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
