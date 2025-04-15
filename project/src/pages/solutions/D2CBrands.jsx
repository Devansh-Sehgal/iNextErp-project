import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Package, Check, ArrowRight, ShoppingBag, TrendingUp, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const D2CBrands = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (benefitsRef.current) observer.unobserve(benefitsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                ref={heroRef} 
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                  D2C Brand Inventory Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Empower your direct-to-consumer brand with our comprehensive inventory management system designed specifically for digital-first businesses that ship directly to customers.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Integrated fulfillment management</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Customer-centric inventory insights</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">E-commerce platform integrations</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Returns management automation</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/Services/inventoryManagement2.webp" 
                  alt="D2C Brands" 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">Direct-to-Consumer Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Tailored Features for D2C Brands
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Order Fulfillment</h3>
                <p className="mb-4 text-muted-foreground">Streamline picking, packing, and shipping processes with integrated workflows and automation.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">E-commerce Integration</h3>
                <p className="mb-4 text-muted-foreground">Seamless connections with popular online selling platforms and marketplaces.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Returns Management</h3>
                <p className="mb-4 text-muted-foreground">Efficient processing and tracking of returns with automated restocking and refund workflows.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Analytics</h3>
                <p className="mb-4 text-muted-foreground">Gain insights into customer preferences and purchasing patterns to inform inventory decisions.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lot & Batch Tracking</h3>
                <p className="mb-4 text-muted-foreground">Track products by batch or lot number for quality control and traceability.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cross-Sell Analytics</h3>
                <p className="mb-4 text-muted-foreground">Identify complementary products and bundling opportunities to increase average order value.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Why D2C Brands Choose Our Solution
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={benefitsRef}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="flex gap-4 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Faster Order Fulfillment</h3>
                  <p className="text-muted-foreground">Reduce shipping times and improve customer satisfaction with streamlined workflows.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Returns Costs</h3>
                  <p className="text-muted-foreground">Efficiently process returns and minimize the impact on your bottom line.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improved Cash Flow</h3>
                  <p className="text-muted-foreground">Optimize inventory levels to reduce tied-up capital while maintaining product availability.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Growth</h3>
                  <p className="text-muted-foreground">Easily scale your operations as your D2C brand grows without system limitations.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center transform transition-all hover:scale-105 shadow-lg">
                Boost Your D2C Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default D2CBrands;