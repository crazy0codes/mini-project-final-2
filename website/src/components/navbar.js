import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import { ShopsContext } from "../context/shopsContext";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(ShopsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <PhoneCallIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Neighborhood Navigator</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {isLoggedIn.isLogged ? (
              <>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <Link to="/register-shop" className="hover:underline">
                  Register Shop
                </Link>
                <Link to="/shopDetailsPage" className="hover:underline" onClick={toggleMenu}>
                  Shop Details
                </Link>
                {
                  isLoggedIn.isAdmin ? (
                    <Link to="/admin" className="hover:underline">
                      Admin
                    </Link>
                  ) : null
                }
                <Link to="/" className="hover:underline" 
                onClick={
                  () => { 
                    localStorage.removeItem('email');
                    setIsLoggedIn({ email: '', isLogged: false }); 
                    toggleMenu(); 
                  } 
                } 
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="hover:underline">
                Login/Signup
              </Link>
            )}
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <Button variant="outline" className="md:hidden" onClick={toggleMenu}>
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="flex flex-col md:hidden bg-primary text-primary-foreground py-4 px-6">
            {isLoggedIn ? (
              <>
                <Link to="/" className="hover:underline" onClick={toggleMenu}>
                  Home
                </Link>
                <Link to="/register-shop" className="hover:underline" onClick={toggleMenu}>
                  Register Shop
                </Link>
                <Link to="/shopDetailsPage" className="hover:underline" onClick={toggleMenu}>
                  Shop Details
                </Link>
                {
                  isLoggedIn.isAdmin ? (
                    <Link to="/admin" className="hover:underline" onClick={toggleMenu}>
                      Admin
                    </Link>
                  ) : null
                }
                <Link to="/" className="hover:underline" onClick={() => { setIsLoggedIn(false); toggleMenu(); }}>
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="hover:underline" onClick={toggleMenu}>
                Login/Signup
              </Link>
            )}
            <Link to="/about" className="hover:underline" onClick={toggleMenu}>
              About
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line className="text-black" x1="4" x2="20" y1="12" y2="12" />
      <line className="text-black" x1="4" x2="20" y1="6" y2="6" />
      <line className="text-black" x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PhoneCallIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
}
