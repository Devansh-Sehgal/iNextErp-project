
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CreditCard, BarChart, Database, Zap, Layers, Check, ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const POSService = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "Streamlined Checkout",
      description: "Reduce wait times with our intuitive, fast checkout process that handles even complex transactions with ease."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Flexible Payments",
      description: "Accept all payment types from cash to contactless, with integrated payment processing and split payment options."
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Real-time Inventory",
      description: "POS and inventory systems work together, updating stock levels instantly with every transaction."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Sales Analytics",
      description: "Gain powerful insights with real-time reporting on sales, customers, and product performance."
    }
  ];

  const features = [
    {
      title: "Lightning Fast Transactions",
      icon: <Zap className="h-8 w-8 text-primary" />,
      description: "Process sales in seconds with our optimized checkout flow and intuitive interface."
    },
    {
      title: "Centralized Inventory Control",
      icon: <Layers className="h-8 w-8 text-primary" />,
      description: "Manage your entire inventory across all locations from a single dashboard."
    },
    {
      title: "Customer Relationship Management",
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      description: "Build customer loyalty with integrated profiles, purchase history, and personalized marketing."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6">
                    Point of Sale System
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  Modern POS System for 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> Growing Retailers</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
                >
                  Streamline your checkout process, manage inventory in real-time, and gain powerful insights with our integrated POS solution.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Button size="lg" className="rounded-full px-8 py-6 text-base bg-white text-blue-900 hover:bg-blue-50">
                    Request Demo
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-white bg-transparent text-white hover:bg-white/10">
                    View Features
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="relative mt-16"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-lg opacity-30"></div>
                <AspectRatio ratio={16 / 9} className="bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df" 
                    alt="POS System Interface" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 bg-white relative" ref={containerRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              style={{ opacity, y }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Designed for Retail Excellence
              </h2>
              <p className="text-lg text-gray-600">
                Our POS system is built specifically for retailers, with features that streamline operations, enhance customer experiences, and boost sales.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="mb-5 p-3 bg-blue-50 rounded-xl inline-block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Powerful Features for Modern Retail
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  Our POS system combines powerful technology with user-friendly design to create the ultimate retail management solution.
                </p>
                
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
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
                    src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7" 
                    alt="POS System in use" 
                    className="rounded-2xl relative z-10"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="md:w-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="rounded-xl overflow-hidden aspect-square shadow-lg"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                        alt="Satisfied Customer" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <svg className="h-10 w-10 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    <p className="text-xl md:text-2xl font-medium mb-6 text-gray-800">
                      "The POS system has completely transformed our retail operations. Checkout times are cut in half, and we have real-time visibility into inventory across all our locations. The customer insights have helped us personalize our marketing and increase repeat sales by 24%."
                    </p>
                    
                    <div>
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-gray-600">Director of Operations, Fashion Boutique Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Retail Operations?
              </h2>
              <p className="text-lg mb-8 text-blue-200">
                Join thousands of retailers who have revolutionized their point of sale experience.
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

export default POSService;
