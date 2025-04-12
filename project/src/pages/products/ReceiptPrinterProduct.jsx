
import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Printer, Check, ArrowRight, Receipt, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReceiptPrinterProduct = () => {
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                  Reliable Receipt Printers for Your Business. Powering Seamless Transactions.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At iNextERP, based in Delhi, we understand the critical role efficient and reliable receipt printers play in the smooth operation of your business. We are dedicated to providing a wide selection of high-quality receipt printers to meet the diverse needs of businesses across Delhi and the surrounding areas.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Compatible with all iNexterp POS systems</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Ultra-fast printing speeds</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Low maintenance requirements</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Energy-efficient design</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Inquire Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              {/* Receipt Printer Image */}
              <div 
                ref={imageRef} 
                className="order-1 lg:order-2 flex justify-center items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/Products/Receipt Printer 1.png" 
                    alt="Receipt Printer" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">High Performance Printers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Receipt Printer Features
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High Speed</h3>
                <p className="mb-4 text-muted-foreground">Print receipts at speeds of up to 300mm per second to minimize customer wait times.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connectivity</h3>
                <p className="mb-4 text-muted-foreground">Multiple connectivity options including USB, Ethernet, Bluetooth, and Wi-Fi.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Printer className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="mb-4 text-muted-foreground">Designed for continuous use in retail environments with high durability.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Receipt className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Versatile Printing</h3>
                <p className="mb-4 text-muted-foreground">Support for various receipt types, logos, graphics, and barcodes.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 space-y-6">
                <img 
                  src="/Products/Receipt Printer 2.png" 
                  alt="Receipt Printer in Use" 
                  className="rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 w-full hover:shadow-2xl"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our Receipt Printers</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience in point-of-sale (POS) solutions, we offer a curated range of receipt printers from leading brands, ensuring performance, durability, and compatibility with your existing systems. Whether you need thermal printers for fast and quiet printing, impact printers for multi-part forms, or mobile printers for on-the-go transactions, we have the perfect solution for your business in Delhi.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our commitment goes beyond just selling printers. We provide expert advice, helping you choose the right model for your specific requirements and budget. We also offer ongoing support and can assist with consumables and basic troubleshooting, making us your reliable partner for all your receipt printing needs in India.
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
                Why Choose Us for Receipt Printers in Delhi
                <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
              </h2>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Supplier</h3>
                    <p className="text-muted-foreground">We are based in Delhi and understand the needs of local businesses.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
                    <p className="text-muted-foreground">A diverse range of receipt printer types and brands to choose from.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
                    <p className="text-muted-foreground">We offer reliable and durable printers from reputable manufacturers.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Advice</h3>
                    <p className="text-muted-foreground">Our knowledgeable team can help you select the right printer for your needs.</p>
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
                    <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground">We are here to assist you with your printer needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center transform transition-all hover:scale-105 shadow-lg">
                  Request a Quote Today
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

export default ReceiptPrinterProduct;
