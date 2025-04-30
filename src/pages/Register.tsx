
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    // Simulate registration
    setTimeout(() => {
      console.log("Registration data:", { name, email, password });
      window.location.href = "/login"; // Redirect to login page
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-playfair text-center">Register</CardTitle>
              <CardDescription className="text-center">
                Create an account to start booking hotels
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleRegister}>
              <CardContent className="space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-500 px-4 py-2 rounded-md text-sm">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-navy hover:text-gold font-medium">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
