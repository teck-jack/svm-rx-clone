import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout/Layout';

const OrderSuccess = () => {
  const location = useLocation();
  const { orderId, total } = location.state || {};

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-success mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for choosing SVM Pharmacy
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Package className="h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderId && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="text-lg font-bold text-primary">#{orderId}</p>
                </div>
              )}
              
              {total && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="text-lg font-bold text-foreground">₹{total.toFixed(2)}</p>
                </div>
              )}

              <div className="bg-accent/50 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• You'll receive an order confirmation via SMS/Email</li>
                  <li>• Our pharmacist will verify your order</li>
                  <li>• Your order will be packed and dispatched</li>
                  <li>• Expected delivery: 2-3 business days</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Need help with your order? Contact us at{' '}
              <a href="tel:+91-1234567890" className="text-primary hover:underline">
                +91-1234567890
              </a>{' '}
              or{' '}
              <a href="mailto:support@svmpharmacy.com" className="text-primary hover:underline">
                support@svmpharmacy.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;