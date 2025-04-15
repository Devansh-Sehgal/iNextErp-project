import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Tag, Check, ArrowRight, Layers, Settings, Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LabelProduct = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const secondImageRef = useRef(null);
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
    if (secondImageRef.current) observer.observe(secondImageRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (secondImageRef.current) observer.unobserve(secondImageRef.current);
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                  Eye-Catching Product Labels, Crafted in India.Make Your Products Stand Out.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At iNextERP Solution, based right here in Delhi, we understand that your product label is more than just information – it's the face of your brand. We are passionate about creating high-quality, visually appealing product labels that capture attention, communicate effectively, and help your products shine on the shelves.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Local Expertise: We understand the Delhi market and its unique needs</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Custom Design Services: Unique and impactful label designs</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">High-Quality Printing: Advanced technology for vibrant colors</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Wide Range of Materials & Finishes: Various options to choose from</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Request Samples
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div 
                ref={imageRef} 
                className="order-1 lg:order-2 flex justify-center items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/Products/Labels 1.webp" 
                    alt="Product Labels" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">Premium Label Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Label Products We Offer
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tag className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  Barcode Labels
                </h3>
                <p className="text-muted-foreground mb-4">High-quality barcode labels in various sizes compatible with all standard barcode systems.</p>
                <div className="pt-4 border-t border-border">
                  <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Layers className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  Price Tags
                </h3>
                <p className="text-muted-foreground mb-4">Durable price tags with customizable designs for clear pricing display.</p>
                <div className="pt-4 border-t border-border">
                  <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  Inventory Labels
                </h3>
                <p className="text-muted-foreground mb-4">Specialized labels for inventory management and tracking across warehouse operations.</p>
                <div className="pt-4 border-t border-border">
                  <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div 
                ref={secondImageRef}
                className="md:w-1/2 opacity-0 translate-y-10 transition-all duration-1000 ease-out group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/Products/Labels 2.webp" 
                    alt="Label Design Process" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Label Design Process</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience serving businesses across Delhi and beyond, our dedicated team combines creative design expertise with state-of-the-art printing technology to deliver labels that meet your exact specifications and exceed your expectations. Whether you need labels for food and beverage, cosmetics, pharmaceuticals, industrial goods, or any other product, we have the skills and resources to bring your vision to life.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2 hover:shadow-md group">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 shrink-0 group-hover:bg-primary/30 transition-colors">
                      <span className="font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Consultation</h3>
                      <p className="text-sm text-muted-foreground">Initial consultation to understand your brand and requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2 hover:shadow-md group">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 shrink-0 group-hover:bg-primary/30 transition-colors">
                      <span className="font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Design Concepts</h3>
                      <p className="text-sm text-muted-foreground">Design concept development with multiple options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2 hover:shadow-md group">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 shrink-0 group-hover:bg-primary/30 transition-colors">
                      <span className="font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Material Selection</h3>
                      <p className="text-sm text-muted-foreground">Material selection and finishing options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:translate-x-2 hover:shadow-md group">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-4 shrink-0 group-hover:bg-primary/30 transition-colors">
                      <span className="font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Production</h3>
                      <p className="text-sm text-muted-foreground">Production and quality assurance</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Start your design journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
                Why Choose Us for Your Product Labels
                <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
              </h2>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
                    <p className="text-muted-foreground">We understand the Delhi market and its unique needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Custom Design Services</h3>
                    <p className="text-muted-foreground">Our talented designers can create unique and impactful label designs that reflect your brand identity.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">High-Quality Printing</h3>
                    <p className="text-muted-foreground">We utilize advanced printing technology for vibrant colors, sharp text, and durable finishes.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Wide Range of Materials & Finishes</h3>
                    <p className="text-muted-foreground">Choose from various paper stocks, films, adhesives, and finishes to achieve the perfect look and feel.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fast Turnaround Times</h3>
                    <p className="text-muted-foreground">We understand the importance of timely delivery, especially in a dynamic market like Delhi.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">We are dedicated to providing individual attention and tailored solutions to each of our clients.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center transform transition-all hover:scale-105 shadow-lg">
                  Get Started Today
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

export default LabelProduct;