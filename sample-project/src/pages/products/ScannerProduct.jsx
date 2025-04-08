
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { ScanLine, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScannerProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Professional Barcode Scanning Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  High-performance barcode scanners that integrate seamlessly with our inventory and POS systems. Improve checkout speed and inventory accuracy.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Fast and accurate scanning capability</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Wireless and wired options available</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Durable design for retail environments</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Compatible with all iNexterp software</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Get Product Details
                </Link>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <ScanLine size={250} className="text-primary mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Scanner Models We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Handheld Scanners</h3>
                <p>Ergonomic handheld scanners for retail checkout and inventory management.</p>
              </div>
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Wireless Scanners</h3>
                <p>Bluetooth-connected scanners for mobility throughout your retail space.</p>
              </div>
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Presentation Scanners</h3>
                <p>Hands-free scanning solutions for high-volume checkout environments.</p>
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

export default ScannerProduct;
