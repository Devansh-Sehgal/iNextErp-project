import React, { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Laptop, Computer, Check, ArrowRight, MonitorSmartphone, Server, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerProduct = () => {
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
                  Your Trusted Partner for All Computer Needs in India.Expert Services & Solutions.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At iNextERP based in the heart of Delhi, we understand how crucial technology is to your daily life and business operations. We are dedicated to providing comprehensive and reliable computer product services to individuals and businesses across Delhi and the surrounding areas.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Pre-installed with iNexterp software</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Commercial-grade durability</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">On-site technical support</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Extended warranty options</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Get a Quote
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
                    src="/Products/computer 2.webp" 
                    alt="Desktop Computer" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">High Performance Systems</span>
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
              Computer Solutions We Offer
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Computer className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">POS Terminals</h3>
                <p className="mb-4 text-muted-foreground">All-in-one POS systems designed for speed and reliability at checkout counters.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Server className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Desktop Systems</h3>
                <p className="mb-4 text-muted-foreground">High-performance desktop computers for back-office operations and inventory management.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Laptop className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Laptops</h3>
                <p className="mb-4 text-muted-foreground">Portable computing solutions for retail managers and staff on the move.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MonitorSmartphone className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">All-in-One PCs</h3>
                <p className="mb-4 text-muted-foreground">Space-saving solutions with integrated displays for retail environments.</p>
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
                  src="/Products/computer 1.webp" 
                  alt="Laptop Computer" 
                  className="rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 w-full hover:shadow-2xl"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Expert Services & Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With years of experience in the IT sector, our team of skilled technicians and product specialists offers a wide range of services, from expert repairs and maintenance to providing the latest computer hardware and software solutions. We pride ourselves on our technical expertise, commitment to customer satisfaction, and our ability to deliver timely and effective solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you're facing a frustrating computer issue, need to upgrade your system, or are looking for the right software to boost your productivity, iNextERP is your local partner you can trust. We strive to make technology accessible and hassle-free for everyone in Delhi.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Laptop className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Customized Configurations</h3>
                      <p className="text-muted-foreground">Tailored hardware setups to match your specific business requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Shield className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Setup & Support</h3>
                      <p className="text-muted-foreground">Professional installation and ongoing technical assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
                Why Choose Us for Your Computer Needs
                <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
              </h2>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Presence</h3>
                    <p className="text-muted-foreground">We are based in Delhi and understand the specific needs of our community.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experienced & Certified Technicians</h3>
                    <p className="text-muted-foreground">Our team possesses in-depth knowledge of various computer systems and technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Service Offerings</h3>
                    <p className="text-muted-foreground">From repairs and upgrades to sales and support.</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fast & Reliable Service</h3>
                    <p className="text-muted-foreground">We understand the urgency of your tech needs and aim for quick turnaround times.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
                    <p className="text-muted-foreground">We offer a curated selection of reliable computer hardware and software.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Customer-Centric Approach</h3>
                    <p className="text-muted-foreground">Your satisfaction is our top priority in everything we do.</p>
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

export default ComputerProduct;