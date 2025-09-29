import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { healthConcerns } from '@/data/staticData';

const HealthConcernsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Health Concerns
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find targeted solutions for your specific health needs and concerns.
          </p>
        </div>

        {/* Health Concerns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {healthConcerns.map((concern) => (
            <Link 
              key={concern.id} 
              to={`/health-concern/${concern.id}`}
              className="group"
            >
              <Card className="hover:shadow-md transition-all duration-300 border-border hover:border-primary/20">
                <CardContent className="p-4 text-center">
                  {/* Concern Image */}
                  <div className="bg-primary/10 rounded-xl w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">
                        {concern.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Concern Name */}
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {concern.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthConcernsSection;