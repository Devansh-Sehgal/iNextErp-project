import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Printer, Check, ArrowRight, Barcode, Zap, RefreshCw, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const BarcodeProduct = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef(null);
  
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

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
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
                ref={contentRef} 
                className="order-2 lg:order-1 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                  Seamless Barcode Printing Solutions.Expert Service & Support.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At iNextERP Solution, we understand the critical role barcode printers play in the efficiency and accuracy of your business operations. Downtime and malfunctions can lead to costly delays and errors. That's why we're dedicated to providing comprehensive and reliable barcode printer services to businesses of all sizes.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Experienced and Certified Technicians</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Comprehensive Service: repairs, maintenance & installation</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Fast Response Times with quick turnaround</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Support for Multiple Leading Brands</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              {/* Barcode Printer Image */}
              <div 
                ref={imageRef} 
                className="order-1 lg:order-2 flex justify-center items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/Products/barcode printer 1.webp"
                    alt="Barcode Printer" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">Expert Barcode Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Barcode Printer Features & Services
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Barcode className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Printer Repair</h3>
                <p className="mb-4 text-muted-foreground">Expert repair services for all major barcode printer brands and models.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
                <p className="mb-4 text-muted-foreground">Regular maintenance services to keep your barcode printers running at peak performance.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Installation</h3>
                <p className="mb-4 text-muted-foreground">Professional setup and installation of new barcode printers and systems.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <RefreshCw className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Training</h3>
                <p className="mb-4 text-muted-foreground">Comprehensive training sessions for your staff on barcode printer operation and maintenance.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 space-y-6">
                <img 
                  src="/Products/barcode printer 2.webp"
                  alt="Barcode Printing Service" 
                  className="rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 w-full hover:shadow-2xl"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Expert Service & Support</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience in the industry, our team of skilled technicians offers a wide range of services, from routine maintenance and repairs to expert troubleshooting and setup. We work with a variety of leading barcode printer brands and models, ensuring we have the expertise to address your specific needs.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our commitment is to provide fast, efficient, and cost-effective solutions that minimize disruption and maximize the lifespan of your barcode printing equipment. We're more than just a service provider; we're your trusted partner in ensuring smooth and accurate labeling processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
                Why Choose Us for Your Barcode Printer Needs
                <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
              </h2>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experienced and Certified Technicians</h3>
                    <p className="text-muted-foreground">Our team possesses in-depth knowledge of various barcode printer technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Service Offerings</h3>
                    <p className="text-muted-foreground">From repairs and maintenance to installations and training.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fast Response Times</h3>
                    <p className="text-muted-foreground">We understand the urgency of printer issues and strive for quick turnaround times.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Quality service doesn't have to break the bank.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Focus on Customer Satisfaction</h3>
                    <p className="text-muted-foreground">Your success is our priority.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Support for Multiple Brands</h3>
                    <p className="text-muted-foreground">We service a wide range of leading barcode printer manufacturers.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center transform transition-all hover:scale-105 shadow-lg">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default BarcodeProduct;