
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Globe, Store, BarChart2, RefreshCw, ShieldCheck, Zap } from 'lucide-react';

const MultiLocation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Multi-Location Retail Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Seamlessly manage inventory, sales, and operations across multiple store locations with our integrated retail management system. Scale your business with confidence using iNextERP's multi-location solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg">
                    Schedule Consultation
                  </a>
                  <a href="/contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-lg">
                    <Globe size={180} className="text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Benefits for Multi-Location Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Store className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Centralized Management</h3>
                <p>Control all your store locations from a single dashboard with unified inventory and sales data.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <BarChart2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Location-specific Analytics</h3>
                <p>Compare performance across locations with detailed analytics for data-driven decision making.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <RefreshCw className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Inventory Transfer</h3>
                <p>Easily transfer inventory between locations to optimize stock levels and availability.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Consistent Operations</h3>
                <p>Implement standardized procedures and policies across all locations to ensure consistent customer experience.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Faster Growth</h3>
                <p>Quickly add new store locations with templated setup and onboarding processes.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Unified Customer Data</h3>
                <p>Maintain a single customer database across all locations for improved customer service and marketing.</p>
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

export default MultiLocation;
