
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';

const MobileProduct = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            iNexterp Mobile
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full"></div>
          </h1>
          <p className="text-muted-foreground text-lg mt-6">
            Powerful mobile solutions for managing your business on the go.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-right">
            <h2 className="text-3xl font-semibold mb-6">Business Management in Your Pocket</h2>
            <p className="mb-6 text-muted-foreground">
              iNexterp Mobile gives you the freedom to manage your business from anywhere, with powerful features accessible right from your smartphone or tablet.
            </p>
            <ul className="space-y-3 mb-8">
              {['Real-time sales tracking', 'Inventory management', 'Employee time tracking', 'Mobile POS capabilities', 'Business insights dashboard'].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate('/contact')} size="lg">
                Request Demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/services/analytics')}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-left">
            <img 
              src="/placeholder.svg" 
              alt="iNexterp Mobile App" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MobileProduct;
