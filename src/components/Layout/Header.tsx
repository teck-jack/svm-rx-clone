import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { name: 'Medicines', href: '/medicines' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Lab Tests', href: '/lab-tests' },
    { name: 'Consult Doctors', href: '/consult' },
    { name: 'Ayurvedic', href: '/ayurvedic' },
    { name: 'Care Plan', href: '/care-plan' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-accent text-accent-foreground py-2 px-4">
        <div className="container mx-auto text-center text-sm">
          <strong>QUICK BUY!</strong> Get 15% off on medicines* | 
          <Button variant="link" className="text-accent-foreground underline p-1 h-auto">
            Order Now
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-2">
              <span className="font-bold text-xl">SVM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SVM Pharmacy</h1>
              <p className="text-xs text-muted-foreground">Your Health Partner</p>
            </div>
          </Link>

          {/* Location Selector */}
          <div className="hidden lg:flex items-center space-x-2 bg-secondary rounded-lg px-3 py-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Deliver to</span>
            <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold">
              Mumbai 400001
            </Button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
            <Input
              type="text"
              placeholder="Search for Medicines and Health Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 py-2 w-full"
            />
            <Button 
              size="icon" 
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Hello, Sign In</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/register" className="w-full">Create Account</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Orders</DropdownMenuItem>
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for Medicines and Health Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 py-2 w-full"
            />
            <Button 
              size="icon" 
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`border-t border-border ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 py-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="py-3 md:py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;