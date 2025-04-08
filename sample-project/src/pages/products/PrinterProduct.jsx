
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import { Printer, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrinterProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Business-Grade Printing Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  High-quality printers for all your retail documentation needs. From invoices to reports, we provide reliable printing solutions for your business.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Cost-effective printing solutions</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Fast printing speeds for high-volume needs</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Network connectivity for office-wide access</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" />
                    <p>Full maintenance and support services</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Request Information
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
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Printer Options for Retail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Laser Printers</h3>
                <p>Fast and efficient printing for high-volume documentation needs.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Inkjet Printers</h3>
                <p>Cost-effective color printing for marketing materials and reports.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">All-in-One Printers</h3>
                <p>Multifunction devices for printing, scanning, and copying in one unit.</p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Mobile Printers</h3>
                <p>Portable solutions for on-the-go printing needs in retail environments.</p>
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

export default PrinterProduct;
