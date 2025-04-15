import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { ShirtIcon, Check, ArrowRight, ShoppingBag, Tag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FashionRetail = () => {
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
                  Fashion Retail Inventory Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Elevate your fashion retail operations with our specialized inventory management system designed specifically for apparel, footwear, and accessories businesses.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Size/color matrix management</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Style-level analytics and reporting</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Seasonal inventory planning tools</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Integrated omnichannel capabilities</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/Services/inventoryManagement1.webp" 
                  alt="Fashion Retail" 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">Modern Retail Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Specialized Features for Fashion Retailers
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShirtIcon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Size/Color Matrix</h3>
                <p className="mb-4 text-muted-foreground">Efficiently manage products with complex size and color combinations through our intuitive matrix system.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Seasonal Management</h3>
                <p className="mb-4 text-muted-foreground">Tools for planning, tracking, and transitioning between fashion seasons and collections.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tag className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Style-Based Inventory</h3>
                <p className="mb-4 text-muted-foreground">Manage inventory at the style level while maintaining visibility of individual SKUs.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fashion Analytics</h3>
                <p className="mb-4 text-muted-foreground">Specialized reports and dashboards for fashion retail metrics and KPIs.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Omnichannel Integration</h3>
                <p className="mb-4 text-muted-foreground">Seamlessly connect in-store and online inventories for consistent shopping experiences.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tag className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Merchandising</h3>
                <p className="mb-4 text-muted-foreground">Tools for planning product assortments, visual merchandising, and store layouts.</p>
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
              Benefits for Fashion Retailers
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
                  <h3 className="text-xl font-semibold mb-2">Reduced Stockouts</h3>
                  <p className="text-muted-foreground">Minimize lost sales with accurate inventory forecasting for each size and color combination.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimized Markdowns</h3>
                  <p className="text-muted-foreground">Identify slow-moving items earlier and implement strategic markdowns to maintain margins.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enhanced Customer Experience</h3>
                  <p className="text-muted-foreground">Provide accurate product availability information across all shopping channels.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Check className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Better Buying Decisions</h3>
                  <p className="text-muted-foreground">Make data-driven purchasing decisions based on historical sales patterns by style, size, and color.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center transform transition-all hover:scale-105 shadow-lg">
                Transform Your Fashion Retail
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

export default FashionRetail;