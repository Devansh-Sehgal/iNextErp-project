
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Warehouse, BarChart2, Truck, Box, PackageOpen, Database } from 'lucide-react';

const WarehouseManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Warehouse Management Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Optimize your warehouse operations with our comprehensive management system designed specifically for retail inventory. Increase efficiency, reduce errors, and improve order fulfillment with iNextERP's warehouse solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg">
                    Request Demo
                  </a>
                  <a href="/contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg">
                    Contact Sales
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-lg">
                    <Warehouse size={180} className="text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted/20 p-8 rounded-lg">
                <BarChart2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Real-time Inventory Tracking</h3>
                <p>Track your inventory in real-time across multiple warehouse locations with precise accuracy.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Efficient Order Fulfillment</h3>
                <p>Streamline picking, packing, and shipping processes to fulfill orders faster and more accurately.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <Box className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Space Optimization</h3>
                <p>Maximize warehouse space utilization with intelligent storage suggestions and layout planning.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <PackageOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Receiving & Returns</h3>
                <p>Simplified processes for receiving new inventory and processing returns back into stock.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <Database className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comprehensive Reporting</h3>
                <p>Generate detailed reports on inventory levels, order fulfillment, employee productivity, and more.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <Warehouse className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Multi-Warehouse Support</h3>
                <p>Manage multiple warehouses from a single interface with location-specific inventory control.</p>
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

export default WarehouseManagement;
