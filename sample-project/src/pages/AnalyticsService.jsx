
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart, PieChart, TrendingUp, LineChart, Brain, Zap, Check, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const AnalyticsService = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

  const features = [
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Sales Analytics",
      description: "Track performance metrics, identify trends, and spot opportunities with interactive dashboards."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Predictive Insights",
      description: "Leverage AI-powered forecasting to anticipate customer demand and optimize inventory."
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Customer Segmentation",
      description: "Understand your customers better with sophisticated segmentation and behavioral analysis."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Custom Reporting",
      description: "Build tailored reports with drag-and-drop simplicity, no technical skills required."
    }
  ];

  const insightTypes = [
    {
      title: "Inventory Optimization",
      description: "Identify optimal stock levels, reduce holding costs, and minimize stockouts with ML-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Customer Behavior Analysis",
      description: "Understand purchase patterns, customer journey touchpoints, and loyalty drivers to enhance experiences.",
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1",
      color: "from-purple-500 to-purple-400"
    },
    {
      title: "Operational Performance",
      description: "Track KPIs across all business functions to identify bottlenecks and improve efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      color: "from-pink-500 to-pink-400"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section 
          ref={headerRef}
          className="relative h-[100vh] flex items-center justify-center overflow-hidden"
        >
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-blue-900/90"></div>
          </motion.div>
          
          {isLoaded && (
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                style={{ y: textY, opacity }}
                className="max-w-4xl mx-auto text-center text-white"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6"
                >
                  Retail Analytics Platform
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
                >
                  Turn Your Data Into 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> Actionable Insights</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl text-blue-100 mb-10"
                >
                  Our advanced analytics platform helps retailers make data-driven decisions to boost sales, enhance customer experiences, and optimize operations.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Button size="lg" className="rounded-full px-8 py-6 text-base bg-white text-blue-900 hover:bg-blue-50">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-white text-white hover:bg-white/10 hover:text-white bg-transparent">
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          )}
          
          <div className="absolute bottom-10 left-0 right-0 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-white"
            >
              <ArrowRight className="h-8 w-8 mx-auto rotate-90 animate-bounce" />
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Analytics Solutions for Every Retail Need
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive analytics platform provides powerful insights across all areas of your retail business.
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

        {/* Dashboard Preview */}
        <section className="py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful, Intuitive Dashboards
              </h2>
              <p className="text-lg text-gray-600">
                Visualize complex data in simple, actionable dashboards that provide clear insights at a glance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868" 
                  alt="Analytics Dashboard" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-8">
                    <Button size="lg" className="rounded-full">View Live Demo</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI & ML Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                  AI-Powered Analytics
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Harness the Power of AI for Predictive Insights
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our platform leverages advanced machine learning algorithms to predict trends, identify patterns, and provide recommendations before issues arise.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Demand forecasting with up to 95% accuracy",
                    "Anomaly detection to identify issues before they impact business",
                    "Customer behavior prediction for personalized marketing",
                    "Automated inventory optimization recommendations"
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
                  Explore AI Features
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-xl blur-xl opacity-60 animate-pulse"></div>
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
                      alt="AI Analytics" 
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 mix-blend-overlay"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
                      <Brain className="h-20 w-20 mb-4 animate-pulse" strokeWidth={1} />
                      <span className="text-xl font-bold">AI-Powered Insights</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Insight Showcase */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Insights That Drive Results
              </h2>
              <p className="text-lg text-gray-600">
                Discover how our analytics platform transforms data into actionable insights across your retail business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insightTypes.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${insight.color} opacity-90`}></div>
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white px-4 text-center">{insight.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{insight.description}</p>
                    <Button variant="outline" size="sm" className="group">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      Proven ROI for Retailers of All Sizes
                    </h3>
                    <p className="text-lg text-gray-700 mb-8">
                      Our clients see measurable results within months of implementing our analytics platform. The average return on investment exceeds 300% in the first year.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">27%</div>
                        <p className="text-gray-600 text-sm">Increase in sales conversion</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">32%</div>
                        <p className="text-gray-600 text-sm">Reduction in inventory costs</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">41%</div>
                        <p className="text-gray-600 text-sm">Improvement in customer retention</p>
                      </div>
                    </div>
                    
                    <Button className="rounded-full px-8">
                      Calculate Your ROI
                    </Button>
                  </div>
                  
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-xl opacity-70"></div>
                      <div className="relative z-10 aspect-square flex items-center justify-center bg-white rounded-full shadow-lg p-8">
                        <TrendingUp className="h-24 w-24 text-blue-500" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Retail Business with Data?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of retailers who are leveraging our analytics platform to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-8 text-blue-600">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent rounded-full px-8">
                  Request a Demo
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

export default AnalyticsService;
