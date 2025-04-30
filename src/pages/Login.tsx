
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        window.location.href = "/"; // Redirect to home page
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-playfair text-center">Login</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-500 px-4 py-2 rounded-md text-sm">
                    {error}
                  </div>
                )}
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-navy hover:text-gold-dark"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-navy hover:text-gold font-medium">
                    Register
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

export default Login;
