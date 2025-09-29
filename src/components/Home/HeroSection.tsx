import React from 'react';
import { ArrowRight, Shield, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health,
                <span className="text-primary block">Our Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                India's trusted online pharmacy delivering quality medicines and healthcare products 
                to your doorstep with genuine care and professional service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/medicines">
                  Order Medicines
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/lab-tests">Book Lab Tests</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">100% Genuine</p>
                <p className="text-xs text-muted-foreground">Authentic Products</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">24/7 Service</p>
                <p className="text-xs text-muted-foreground">Always Available</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">Same Day Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <div className="bg-primary/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="space-y-6">
                {/* Offer Card */}
                <div className="bg-gradient-accent text-accent-foreground rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Special Offer!</h3>
                  <p className="text-sm opacity-90 mb-4">Get 15% OFF on your first order</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Use code: WELCOME15</span>
                    <Button variant="secondary" size="sm">
                      Apply Now
                    </Button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card text-card-foreground rounded-lg p-4 border shadow-sm">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="bg-card text-card-foreground rounded-lg p-4 border shadow-sm">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Products Available</div>
                  </div>
                  <div className="bg-card text-card-foreground rounded-lg p-4 border shadow-sm">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Customer Support</div>
                  </div>
                  <div className="bg-card text-card-foreground rounded-lg p-4 border shadow-sm">
                    <div className="text-2xl font-bold text-primary">₹299</div>
                    <div className="text-sm text-muted-foreground">Free Delivery Above</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;