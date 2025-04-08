
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Laptop, Computer, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Retail-Ready Computing Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  High-performance computers and point-of-sale systems optimized for retail operations. From front desk to back office, we have the hardware solutions you need.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Pre-installed with iNexterp software</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Commercial-grade durability</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>On-site technical support</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Extended warranty options</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Get a Quote
                </Link>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow-xl p-4">
                    <Computer size={120} className="text-primary mx-auto" />
                  </div>
                  <div className="bg-white rounded-lg shadow-xl p-4">
                    <Laptop size={120} className="text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Computer Solutions We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">POS Terminals</h3>
                <p>All-in-one POS systems designed for speed and reliability at checkout counters.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Desktop Systems</h3>
                <p>High-performance desktop computers for back-office operations and inventory management.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Laptops</h3>
                <p>Portable computing solutions for retail managers and staff on the move.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* <CTA /> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default ComputerProduct;
