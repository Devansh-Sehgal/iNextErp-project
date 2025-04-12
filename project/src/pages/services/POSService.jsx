
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CreditCard, BarChart, Database, Zap, Layers, Check, ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CTA from "../../components/CTA";
import { Link } from 'react-router-dom';

const POSService = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  useEffect(() => {
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
      icon: <div className="bg-blue-50 rounded-full p-3"><Zap className="h-8 w-8 text-primary" /></div>,
      description: "Process sales in seconds with our optimized checkout flow and intuitive interface."
    },
    {
      title: "Centralized Inventory Control",
      icon: <div className="bg-blue-50 rounded-full p-3"><Layers className="h-8 w-8 text-primary" /></div>,
      description: "Manage your entire inventory across all locations from a single dashboard."
    },
    {
      title: "Customer Relationship Management",
      icon: <div className="bg-blue-50 rounded-full p-3"><ShoppingBag className="h-8 w-8 text-primary" /></div>,
      description: "Build customer loyalty with integrated profiles, purchase history, and personalized marketing."
    }
  ];

  const reports = [
    "Sales at a Glance",
    "Cash at a Glance",
    "POS Transaction",
    "GST Reports",
    "Customer Ledger",
    "Customer Outstanding"
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900 text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/Services/Pos%20System%201.png')] bg-cover bg-center opacity-10"></div>
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
                  The most promising retail point-of-sale software for
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> improved client interactions</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
                >
                  Learn all about the costs and charges related to our retail point-of-sale software. Find out how our pricing structure operates and what expenses to anticipate in order to effectively manage your retail operations.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to={"/contact"}>
                    <Button size="lg" className="rounded-full px-8 py-6 text-base bg-white text-blue-900 hover:bg-blue-50">
                      Request Demo
                    </Button>
                  </Link>
                  
                  <a href={"#features"}>
                    <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-white bg-transparent text-white hover:bg-white/10">
                      View Features
                    </Button>
                  </a>

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
                    src="/Services/Pos System 2.png"
                    alt="POS System Interface"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </motion.div>
            </motion.div>
          </div>
        </section>

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
                  <div className="mb-5 p-3 bg-blue-50 rounded-full inline-block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Reporting</h2>
                <p className="text-lg text-gray-600 mb-10 text-center">
                  Use a variety of reports to obtain insightful information for your business:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {reports.map((report, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-800">{report}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Our retail POS billing software guarantees seamless transactions and improved client experiences throughout the retail and eCommerce sector verticals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" id='features'>
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
                      <div className="flex-shrink-0">
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
                    src="/Services/Pos System 1.png"
                    alt="POS System in use"
                    className="rounded-2xl relative z-10"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default POSService;
