
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Shirt, TrendingUp, PackageOpen, Truck, BarChart2, Users } from 'lucide-react';

const FashionDistribution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Fashion Distribution Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Streamline your fashion distribution operations with our specialized inventory and supply chain management system. Track styles, sizes, colors, and seasons with precision to ensure the right products reach the right retailers.
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
                    <Shirt size={180} className="text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Specialized Features for Fashion Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted/20 p-8 rounded-lg">
                <Shirt className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Style & SKU Management</h3>
                <p>Manage complex fashion SKUs with multiple variations like size, color, and style in a unified system.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Seasonal Planning</h3>
                <p>Plan and track seasonal collections with forecasting tools to optimize inventory across distribution channels.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <PackageOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">B2B Order Management</h3>
                <p>Streamline wholesale orders from retailers with automated processing and fulfillment tracking.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Logistics Optimization</h3>
                <p>Optimize shipping routes and consolidate orders to reduce costs and improve delivery times.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <BarChart2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p>Track sell-through rates and performance metrics by retailer, region, and product category.</p>
              </div>
              <div className="bg-muted/20 p-8 rounded-lg">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Retailer Portal</h3>
                <p>Provide your retail partners with a dedicated portal to place orders and check inventory availability.</p>
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

export default FashionDistribution;
