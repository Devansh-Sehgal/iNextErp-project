
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Printer, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const BarcodeProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Professional Barcode Printing Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  High-quality barcode printers for retail, warehouse, and inventory management. Enhance efficiency and accuracy with our reliable printing solutions.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Compatible with all iNexterp software solutions</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>High-speed printing capability</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Durable construction for retail environments</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Full technical support and maintenance</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Request a Quote
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
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Why Choose Our Barcode Printers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Integration Ready</h3>
                <p>Seamlessly works with all iNexterp inventory and POS systems right out of the box.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p>Industrial-grade components ensure reliable performance even in demanding retail environments.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                <p>Complete installation service and ongoing technical support from our experienced team.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
                <p>Competitive pricing with options for both purchase and leasing to suit your business needs.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Multiple Formats</h3>
                <p>Print barcodes, QR codes, and product labels in various sizes and formats.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Warranty Included</h3>
                <p>All hardware comes with comprehensive warranty and optional extended service plans.</p>
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

export default BarcodeProduct;
