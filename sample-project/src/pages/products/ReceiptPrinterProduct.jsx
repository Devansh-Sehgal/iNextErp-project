
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Printer, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReceiptPrinterProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Fast & Reliable Receipt Printers
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  High-speed thermal receipt printers designed for busy retail environments. Speed up checkout processes and improve customer satisfaction.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Compatible with all iNexterp POS systems</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Ultra-fast printing speeds</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Low maintenance requirements</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Energy-efficient design</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Inquire Now
                </Link>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <Printer size={250} className="text-primary mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Receipt Printer Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">High Speed</h3>
                <p>Print receipts at speeds of up to 300mm per second to minimize customer wait times.</p>
              </div>
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Connectivity</h3>
                <p>Multiple connectivity options including USB, Ethernet, Bluetooth, and Wi-Fi.</p>
              </div>
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p>Designed for continuous use in retail environments with high durability.</p>
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
