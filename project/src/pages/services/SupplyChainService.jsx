
import React, { useEffect } from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import { Truck, Boxes, Factory, ClipboardList, BarChart3, Cog } from "lucide-react";
import CTA from "../../components/CTA";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SupplyChainService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Job Card Management",
      description: "Streamline and digitize your job cards for better tracking and management of manufacturing processes."
    },
    {
      title: "Raw Material Management",
      description: "Efficiently track, allocate and optimize raw materials throughout the production process."
    },
    {
      title: "Production Planning",
      description: "Create detailed production plans with resource allocation and timeline management."
    },
    {
      title: "Quality Control",
      description: "Implement comprehensive quality check systems at every stage of production."
    },
    {
      title: "Real-time Insights",
      description: "Access real-time data on production status, bottlenecks, and efficiency metrics."
    },
    {
      title: "Worker Task Assignment",
      description: "Assign and standardize tasks with worker-wise rate standardization for optimal productivity."
    }
  ];

  const benefits = [
    {
      title: "Seamless Automation",
      description: "Automate routine manufacturing tasks to reduce manual errors and increase efficiency."
    },
    {
      title: "Waste Reduction",
      description: "Optimize processes to minimize material waste and maximize resource utilization."
    },
    {
      title: "Comprehensive Reporting",
      description: "Generate detailed reports on production metrics, quality standards, and performance indicators."
    },
    {
      title: "Cost Reduction",
      description: "Identify inefficiencies and implement cost-saving measures throughout the manufacturing process."
    }
  ];

  const icons = [
    <Factory size={24} />,
    <Boxes size={24} />,
    <ClipboardList size={24} />,
    <Cog size={24} />,
    <BarChart3 size={24} />,
    <Truck size={24} />,
    <Factory size={24} />,
    <Boxes size={24} />,
    <ClipboardList size={24} />,
    <BarChart3 size={24} />
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-20 bg-cover bg-center relative text-white overflow-hidden"
          style={{ backgroundImage: `url('/banner3.jpg')` }}
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
                Use iNextERP to revolutionize your production processes for the Indian industrial sector
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-blue-50 mb-8"
              >
                From job cards and raw material management to production planning and quality control, INextERP software for manufacturing in India simplifies every step of your manufacturing process. Our system guarantees effective workflows, reduces waste, and offers comprehensive reporting along with real-time insights.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link to={"/contact"}>
                  <Button size="lg" className="rounded-full">Get Started</Button>
                </Link>
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
                          {icons && icons[index % icons.length]}
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
                    src="/Services/Supply chain 1.png"
                    alt="Supply Chain Management"
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
                    Transforming Business Operations
                  </motion.h2>
                  <p className="text-gray-600 mb-6">
                    Enjoy smooth automation, proactive inventory management, and worker-wise task rate standardization—all while preserving high standards of quality and cutting expenses.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-blue-50 rounded-full p-2 mr-3 flex items-center justify-center">
                        <Factory size={16} className="text-primary" />
                      </div>
                      <span>Optimized production workflows</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-50 rounded-full p-2 mr-3 flex items-center justify-center">
                        <Boxes size={16} className="text-primary" />
                      </div>
                      <span>Advanced inventory forecasting</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-50 rounded-full p-2 mr-3 flex items-center justify-center">
                        <ClipboardList size={16} className="text-primary" />
                      </div>
                      <span>Streamlined quality assurance processes</span>
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
                      src="/Services/Supply chain 2.png"
                      alt="Supply Chain Analytics"
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
                Experience transformative advantages with our supply chain solution
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
                    {icons && icons[(index + features.length) % icons.length]}
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

export default SupplyChainService;
