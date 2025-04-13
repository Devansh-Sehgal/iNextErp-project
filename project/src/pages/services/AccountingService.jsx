
import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import { motion } from "framer-motion";
import { Calculator, FileText, CreditCard, BarChart3, Layers, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountingService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Seamless Inventory Integration",
      description: "Our accounting software directly integrates with inventory management for real-time financial insights."
    },
    {
      title: "Multi-branch Management",
      description: "Easily manage books for multiple branches with centralized control and branch-specific reporting."
    },
    {
      title: "Voucher Accuracy",
      description: "Ensure precise voucher creation and management to maintain financial record integrity."
    },
    {
      title: "Time-saving Automation",
      description: "Save up to 60% of your accounting time with automated processes and intelligent workflows."
    },
    {
      title: "Cross-branch Transactions",
      description: "Seamlessly manage and track financial movements between different business locations."
    },
    {
      title: "Accurate Balance Sheets",
      description: "Generate comprehensive balance sheets that reflect your true financial position."
    }
  ];

  const benefits = [
    {
      title: "Business Growth Focus",
      description: "Free up time to concentrate on expanding your business with streamlined accounting processes."
    },
    {
      title: "Informed Decision Making",
      description: "Access comprehensive financial data to make strategic business decisions."
    },
    {
      title: "Simplified Compliance",
      description: "Meet regulatory requirements easily with built-in compliance features and reports."
    },
    {
      title: "Reduced Manual Errors",
      description: "Minimize mistakes with automated calculations and validation checks."
    }
  ];

  const icons = [
    <Layers className="w-full h-full" />,
    <FileText className="w-full h-full" />,
    <Calculator className="w-full h-full" />,
    <DollarSign className="w-full h-full" />,
    <BarChart3 className="w-full h-full" />,
    <CreditCard className="w-full h-full" />
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-cover bg-center relative text-white overflow-hidden" 
          style={{ backgroundImage: `url('/banner1.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Use India's Finest Accounting Software to Revolutionize Inventory Management
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-blue-50 mb-8"
              >
                Inventory management and our accounting software in India work together seamlessly to streamline procedures and produce excellent reporting. By ensuring voucher accuracy and saving up to 60% of your time, this integration frees you up to concentrate on expanding your business.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button size="lg" className="rounded-full">Get Started</Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold mb-6"
                >
                  Powerful Features Designed for Your Business
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col"
                    >
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-50 rounded-full p-2 mr-2 w-10 h-10 flex items-center justify-center">
                          {icons[index % icons.length]}
                        </div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Services/Accounting 1.png" 
                    alt="Accounting Services" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-20">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="w-full lg:w-1/2">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-6"
                  >
                    Transforming Financial Management
                  </motion.h2>
                  <p className="text-gray-600 mb-6">
                    Easily manage books for several branches with our accounting software for small businesses. Using a single platform to manage cross-branch transactions and monitor financial performance allows for accurate balance sheets and well-informed company choices.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-blue-50 rounded-full p-2 mr-3 flex items-center justify-center">
                        <FileText size={16} className="text-primary" />
                      </div>
                      <span>Automated financial reporting</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-50 rounded-full p-2 mr-3 flex items-center justify-center">
                        <Calculator size={16} className="text-primary" />
                      </div>
                      <span>Tax calculation and management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-50 rounded-full p-2 mr-3 flex items-center justify-center">
                        <DollarSign size={16} className="text-primary" />
                      </div>
                      <span>Cash flow optimization tools</span>
                    </li>
                  </ul>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="/Services/Accounting 2.png" 
                      alt="Financial Analytics" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-4"
              >
                Key Benefits
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Experience transformative advantages with our accounting solution
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-50 rounded-full p-3 inline-flex w-12 h-12 items-center justify-center mb-4">
                    {icons[(index + 2) % icons.length]}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
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

export default AccountingService;
