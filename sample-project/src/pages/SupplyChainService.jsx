
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, BarChart3, ShieldCheck, RefreshCw, Zap, Globe, Check, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

const SupplyChainService = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
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

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "End-to-End Visibility",
      description: "Track orders and inventory in real-time across your entire supply chain network."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Demand Forecasting",
      description: "AI-powered predictions help you optimize inventory levels and reduce stockouts."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks before they impact your business."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Automated Workflows",
      description: "Streamline procurement, receiving, and fulfillment processes with intelligent automation."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Source",
      description: "Optimize supplier selection and procurement with AI-driven recommendations and automated order workflows.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Manufacture",
      description: "Connect production planning with real-time inventory and sales data for optimal manufacturing schedules.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      number: "03",
      title: "Distribute",
      description: "Streamline warehouse operations and optimize transportation routes for efficient distribution.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "04",
      title: "Deliver",
      description: "Ensure on-time deliveries with real-time tracking, alerts, and last-mile delivery optimization.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <svg className="absolute right-0 top-0 h-full w-1/2 translate-x-1/3 transform text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="absolute right-0 top-0 h-full w-3/4 bg-gradient-to-l from-blue-50 to-white"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {isLoaded && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                      Supply Chain Management
                    </span>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      Smart Supply Chain Solutions for Modern Retail
                    </h1>
                    
                    <p className="text-lg text-gray-600 mb-10">
                      Optimize your entire supply chain with our intelligent, connected platform. From sourcing to delivery, gain complete visibility and control.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="rounded-full px-8">
                        Get Started
                      </Button>
                      <Button size="lg" variant="outline" className="rounded-full px-8 group">
                        Book a Consultation
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block"
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl blur-xl"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" 
                        alt="Supply Chain Management" 
                        className="rounded-xl shadow-xl w-full relative z-10"
                      />
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Features for Modern Supply Chains
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive platform brings visibility, intelligence, and automation to every stage of your supply chain.
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

        {/* Supply Chain Process */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Streamline Your Entire Supply Chain
              </h2>
              <p className="text-lg text-gray-600">
                Our platform optimizes every stage of your supply chain process, from sourcing to final delivery.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  custom={index}
                  className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white h-full"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${step.color}`}></div>
                  <div className="p-6">
                    <div className="text-4xl font-bold text-gray-200 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button size="lg" className="rounded-full px-8">
                Learn More About Our Process
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Integration Showcase */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a" 
                    alt="Supply Chain Integration" 
                    className="rounded-2xl relative z-10"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Seamless Integration with Your Existing Systems
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our platform connects with your ERP, WMS, TMS, and other systems to create a unified view of your entire supply chain.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Bi-directional data sync with major ERP systems",
                    "API-first architecture for easy custom integrations",
                    "EDI support for traditional supply chain connections",
                    "IoT compatibility for real-time asset tracking"
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
                  Explore Integrations
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-white">
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
                      Success Story
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      How We Helped Retail Giant Cut Supply Chain Costs by 32%
                    </h3>
                    <p className="text-gray-700 mb-6">
                      A multinational retailer implemented our supply chain solution and revolutionized their operations with better visibility and smarter procurement.
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 text-xs font-medium">32%</span>
                        <span>Reduction in supply chain costs</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 text-xs font-medium">45%</span>
                        <span>Faster order fulfillment</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 text-xs font-medium">98%</span>
                        <span>Order accuracy improvement</span>
                      </li>
                    </ul>
                    
                    <Button variant="outline" className="group">
                      Read Full Case Study
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="h-full rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1566936737687-8f392a237b8b" 
                        alt="Warehouse operations" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Supply Chain Visibility
              </h2>
              <p className="text-lg text-gray-300">
                Connect your entire network across continents with real-time tracking and insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-xl blur-xl opacity-70"></div>
              <div className="relative z-10 bg-gray-800 rounded-xl p-8 flex items-center justify-center">
                <Globe className="h-64 w-64 text-blue-400/30" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
                    alt="Global Network" 
                    className="h-full w-full object-cover rounded-xl opacity-40"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 rounded-xl"></div>
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">100+ Countries</h3>
                  <p className="text-gray-300">Seamlessly manage supply chains across borders with localized compliance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Revolutionize Your Supply Chain?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join leading retailers who have transformed their operations with our platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-8 text-blue-600">
                  Request a Demo
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

export default SupplyChainService;
