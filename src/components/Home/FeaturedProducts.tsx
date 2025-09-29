import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/staticData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  
  // Get first 6 products as featured
  const featuredProducts = products.slice(0, 6);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Top-selling medicines and healthcare products
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative bg-secondary/50 aspect-square rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                  
                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <Badge variant="destructive" className="absolute top-3 left-3">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}

                  {/* Prescription Badge */}
                  {product.prescription && (
                    <Badge variant="secondary" className="absolute top-3 right-3">
                      Rx Required
                    </Badge>
                  )}

                  {/* Product placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-primary/5">
                    <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-2xl">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Brand */}
                  <p className="text-sm text-primary font-medium">{product.brand}</p>

                  {/* Product Name */}
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center justify-between">
                    <Badge variant={product.inStock ? "success" : "destructive"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Link to={`/product/${product.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="default"
                      disabled={!product.inStock}
                      className="flex-1"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;