
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Tag, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const LabelProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  High-Quality Label Solutions for Retail
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Premium labels for price tags, product information, barcodes, and inventory management. Designed specifically for retail environments.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Compatible with all standard printers</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Durable and smudge-resistant</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Multiple sizes and formats available</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Custom designs and branding options</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Request Samples
                </Link>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <Tag size={250} className="text-primary mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Label Products We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Barcode Labels</h3>
                <p>High-quality barcode labels in various sizes compatible with all standard barcode systems.</p>
              </div>
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Price Tags</h3>
                <p>Durable price tags with customizable designs for clear pricing display.</p>
              </div>
              <div className="bg-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Inventory Labels</h3>
                <p>Specialized labels for inventory management and tracking across warehouse operations.</p>
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

export default LabelProduct;
