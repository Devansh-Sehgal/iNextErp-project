import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Printer, Check, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrinterProduct = () => {
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent pb-2">
                  Find the Perfect Printer for Your Business.Explore Our Range.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At iNextERP Solution, based in Delhi, we understand that having the right printing equipment is essential for both personal and professional productivity. We are dedicated to providing a comprehensive selection of high-quality printer products to meet the diverse needs of individuals and businesses across Delhi and the surrounding areas.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Cost-effective printing solutions</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Fast printing speeds for high-volume needs</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Network connectivity for office-wide access</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Full maintenance and support services</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              {/* Single image for better presentation */}
              <div 
                ref={imageRef} 
                className="order-1 lg:order-2 flex justify-center items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/Products/printer 1.png" 
                    alt="Business Printer" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">High Quality Printing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Printer Options Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Explore Our Printer Range
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Printer className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Laser Printers</h3>
                <p className="text-muted-foreground mb-4">Fast and efficient printing for high-volume documentation needs.</p>
                <div className="pt-4 border-t border-border">
                  <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Printer className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inkjet Printers</h3>
                <p className="text-muted-foreground mb-4">Cost-effective color printing for marketing materials and reports.</p>
                <div className="pt-4 border-t border-border">
                  <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Printer className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">All-in-One Printers</h3>
                <p className="text-muted-foreground mb-4">Multifunction devices for printing, scanning, and copying in one unit.</p>
                <div className="pt-4 border-t border-border">
                  <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Printer className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile Printers</h3>
                <p className="text-muted-foreground mb-4">Portable solutions for on-the-go printing needs in retail environments.</p>
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

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 space-y-6">
                <img 
                  src="/Products/printer 2.png" 
                  alt="Office Printer Setup" 
                  className="rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 w-full hover:shadow-2xl"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Comprehensive Printing Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience in the printing industry, we offer a curated range of printers from leading brands, including inkjet, laser, multi-function, and more. We also stock a wide variety of genuine and compatible ink and toner cartridges, ensuring optimal performance and print quality for your devices.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our commitment goes beyond just selling printers and supplies. Our knowledgeable team is here to provide expert advice, helping you choose the perfect printer for your specific requirements and budget. We strive to be your reliable partner for all your printing needs in Delhi, offering quality products and exceptional customer service.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Local Supplier</h3>
                      <p className="text-muted-foreground">We are based in Delhi and understand the needs of our local community.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Shield className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Support</h3>
                      <p className="text-muted-foreground">Professional setup and ongoing technical assistance for all printer products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
                Why Choose Us for Printer Products in Delhi
                <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
              </h2>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Supplier</h3>
                    <p className="text-muted-foreground">We are based in Delhi and understand the needs of our local community.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
                    <p className="text-muted-foreground">A diverse range of printers and consumables to choose from.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Top Brands</h3>
                    <p className="text-muted-foreground">We offer products from reputable and reliable manufacturers.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Advice</h3>
                    <p className="text-muted-foreground">Our team can help you find the right printer and supplies.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Get excellent value for your investment.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Genuine & Compatible Supplies</h3>
                    <p className="text-muted-foreground">Ensuring quality and cost-effectiveness with our printer supplies.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center transform transition-all hover:scale-105 shadow-lg">
                  Get in Touch
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

export default PrinterProduct;