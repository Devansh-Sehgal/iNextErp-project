
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { ShoppingBag, BarChart2, Layers, Globe, Users, Search } from 'lucide-react';

const LifestyleBrands = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Lifestyle Brand Solutions
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive inventory and retail management for lifestyle brands. From production to point-of-sale, our system helps you create cohesive brand experiences while managing your product line effectively.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg">
                    Schedule Demo
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
                    <ShoppingBag size={180} className="text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Solutions for Lifestyle Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Layers className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Product Line Management</h3>
                <p>Manage diverse product categories and lines within a unified inventory system designed for lifestyle brands.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Omnichannel Retail</h3>
                <p>Seamlessly integrate online and offline sales channels for consistent brand experiences and inventory management.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer Loyalty</h3>
                <p>Build and manage customer relationships with integrated CRM and loyalty program features specifically for lifestyle brands.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <BarChart2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Product Performance</h3>
                <p>Track product performance across categories and channels to optimize your product mix and inventory levels.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <Search className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trend Analysis</h3>
                <p>Analyze sales trends and customer preferences to inform future product development and inventory planning.</p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <ShoppingBag className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Consistency</h3>
                <p>Maintain consistent pricing, promotions, and product information across all sales channels and locations.</p>
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

export default LifestyleBrands;
