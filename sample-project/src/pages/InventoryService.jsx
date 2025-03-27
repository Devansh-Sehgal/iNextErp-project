
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Laptop, BarChart, ShieldCheck, Clock, PenTool } from "lucide-react";
import { Link } from 'react-router-dom';

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
    <>
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
                  Next-Generation Inventory Management System
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                  Streamline your retail operations with our powerful inventory management solution that brings efficiency, accuracy, and intelligence to your business.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="rounded-full px-8 py-6 text-base">
                    Schedule a Demo
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base group bg-white dark:bg-gray-800">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
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

        {/* Interactive Demo Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  See How Our System Works
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our intuitive dashboard gives you complete visibility of your inventory across all channels. Monitor stock levels, track performance, and make data-driven decisions.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Real-time stock tracking across all locations",
                    "Predictive analytics to forecast demand",
                    "Automated reordering based on custom rules",
                    "Comprehensive reporting and insights"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Button size="lg" className="rounded-full px-8">
                  View Live Demo
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-lg opacity-20 animate-pulse"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Inventory Dashboard" 
                    className="rounded-xl shadow-lg w-full relative z-10"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                      Case Study
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      How Fashion Retailer Boosted Sales by 35%
                    </h3>
                    <p className="text-gray-700 mb-6">
                      A leading fashion retailer implemented our inventory management system and saw dramatic improvements in efficiency, accuracy, and overall sales performance.
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 text-xs font-medium">35%</span>
                        <span>Increase in sales</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 text-xs font-medium">42%</span>
                        <span>Reduction in stockouts</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 text-xs font-medium">28%</span>
                        <span>Lower inventory costs</span>
                      </li>
                    </ul>
                    
                    <Button variant="outline" className="group bg-white dark:bg-gray-800">
                      Read Full Case Study
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="h-full rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" 
                        alt="Fashion Retail Store" 
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Inventory Management?
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Join thousands of retailers who have revolutionized their operations with our system.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-8">
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/10 rounded-full px-8">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InventoryService;
