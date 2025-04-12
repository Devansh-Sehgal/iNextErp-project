import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Laptop, BarChart, ShieldCheck, Clock, PenTool } from "lucide-react";
import { Link } from 'react-router-dom';
import CTA from "../../components/CTA";

const InventoryService = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const features = [
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Real-time Analytics",
      description: "Track inventory levels, sales trends, and stock movements in real-time with comprehensive dashboards."
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Multi-channel Integration",
      description: "Seamlessly manage inventory across online and physical stores with unified stock visibility."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Stock Protection",
      description: "Advanced algorithms for theft prevention, damage control, and loss minimization."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Automated Reordering",
      description: "Smart reordering system that maintains optimal stock levels without manual intervention."
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                  Inventory Management
                </span>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                  A comprehensive inventory management tool that increases revenue
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                  With iNextERP's top inventory management software in India, you can take charge of your company. Make quick decisions for greater profits by using real-time data into turnover ratio, stock age, and top-selling items.
                </p>
                
                <Link to="/contact" className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="rounded-full px-8 py-6 text-base">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-white relative" ref={targetRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              style={{ opacity, y, scale }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Inventory Features for Modern Retailers
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive inventory management system is designed to solve the most complex challenges faced by retailers today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpVariants}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="mb-5 p-3 bg-blue-50 rounded-xl inline-block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Section with Image */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg mb-6">
                      Use the robust procurement options to keep your inventory efficient and well-organized. Manage your inventory while on the go and take prompt action to increase returns with mobile access and dynamic reporting.
                    </p>
                    
                    <p className="text-lg mb-6">
                      Handle online orders from the closest showrooms and manage your multi-channel inventory with ease, providing customers with quick delivery and flawless service.
                    </p>

                    <div className="mt-10">
                      <Button size="lg" className="rounded-full px-8">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="/Services/inventoryManagement1.png" 
                      alt="Inventory Management Interface" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Section with Image */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Multi-channel Inventory Control
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg mb-6">
                      Keep track of your inventory across multiple sales channels, from physical stores to e-commerce platforms, all in one centralized system.
                    </p>
                    
                    <p className="text-lg mb-6">
                      Our real-time analytics provide deep insights into stock performance, helping you make data-driven decisions to optimize your inventory and maximize profits.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-1/2"
                >
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="/Services/inventoryManagement2.png" 
                      alt="Inventory Analytics Dashboard" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default InventoryService;
