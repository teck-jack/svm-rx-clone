import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/staticData';

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of healthcare products and medicines organized by category for easy shopping.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  {/* Category Image */}
                  <div className="bg-primary/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {category.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {category.productCount}+ Products
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link to={`/category/${category.id}`}>
                      Shop Now
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/categories">
              View All Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;