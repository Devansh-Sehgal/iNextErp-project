import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Database, Cloud, Server, Shield, Workflow, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudService = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    // Ensure scroll to top on page load
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (faqsRef.current) observer.observe(faqsRef.current);

    const featureItems = document.querySelectorAll('.feature-item');
    const faqItems = document.querySelectorAll('.faq-item');
    
    featureItems.forEach(item => observer.observe(item));
    faqItems.forEach(item => observer.observe(item));

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (faqsRef.current) observer.unobserve(faqsRef.current);
      featureItems.forEach(item => observer.unobserve(item));
      faqItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  const features = [
    {
      icon: <Database size={24} />,
      title: 'High Availability',
      description: 'Our cloud infrastructure ensures your business applications are always accessible, with 99.9% uptime guarantees.',
    },
    {
      icon: <Server size={24} />,
      title: 'Flexible Scaling',
      description: 'Scale your resources up or down based on your retail business needs without having to invest in physical hardware.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise-grade Security',
      description: 'Protect your sensitive retail data with advanced encryption, regular backups, and comprehensive disaster recovery options.',
    },
    {
      icon: <Workflow size={24} />,
      title: 'Streamlined Operations',
      description: 'Automated updates and maintenance ensure your systems are always running the latest, most secure software.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Our cloud infrastructure is optimized for retail applications, ensuring fast response times for inventory queries and transactions.',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Hybrid Cloud Solutions',
      description: 'Integrate on-premises systems with cloud resources for a solution that perfectly matches your business requirements.',
    }
  ];

  const faqs = [
    {
      question: "How does cloud computing benefit my retail business?",
      answer: "Cloud computing eliminates the need for expensive on-site infrastructure, reduces IT maintenance costs, enables remote access to your systems, and provides the flexibility to scale resources as your business grows or during peak seasons."
    },
    {
      question: "Is my data secure in the cloud?",
      answer: "Yes, we implement enterprise-level security protocols including data encryption, regular security audits, access controls, and compliance with industry standards to keep your retail data safe."
    },
    {
      question: "Can I access my inventory system from multiple locations?",
      answer: "Absolutely. Cloud-based systems allow authorized users to access your inventory data from anywhere with an internet connection, perfect for businesses with multiple retail locations."
    },
    {
      question: "What happens if internet connectivity is lost?",
      answer: "Our solutions include offline functionality for critical operations and automatic synchronization when connectivity is restored, minimizing disruption to your business."
    },
    {
      question: "How long does migration to the cloud take?",
      answer: "Migration timelines depend on the complexity of your current systems and data volume. We typically complete migrations in phases, with basic functionality available within 2-4 weeks and full implementation within 1-3 months."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 
                  ref={titleRef} 
                  className="text-3xl md:text-5xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                  Cloud Computing Solutions
                </h1>
                <p 
                  ref={contentRef} 
                  className="text-lg text-muted-foreground mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
                >
                  Secure, scalable cloud infrastructure optimized for retail inventory and operations management. Access your inventory, sales, and customer data from anywhere with our reliable cloud services designed specifically for the retail industry.
                </p>
                <div className="flex flex-wrap gap-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
                  <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Get Started
                  </Link>
                  <Link to="/contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Request a Consultation
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                  <img 
                    src="/Services/Cloud%20Computing%201.png" 
                    alt="Cloud Computing Infrastructure" 
                    className="w-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center relative">
              Cloud Features for Retail
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item bg-white p-8 rounded-xl shadow-md border border-muted/20 opacity-0 translate-y-10 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Benefits Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Move Your Retail Business to the Cloud?</h2>
                <p className="mb-6 text-muted-foreground">
                  Moving your retail operations to the cloud provides numerous advantages that can help your business stay competitive, resilient, and agile in today's fast-paced market.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-muted/20">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Cost Savings
                    </h3>
                    <p className="text-sm text-muted-foreground">Reduce capital expenditure and only pay for the resources you use</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-muted/20">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Scalability
                    </h3>
                    <p className="text-sm text-muted-foreground">Easily scale resources up during peak seasons and down during slower periods</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-muted/20">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      Security
                    </h3>
                    <p className="text-sm text-muted-foreground">Enterprise-level security protocols and automatic security updates</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-muted/20">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Compliance
                    </h3>
                    <p className="text-sm text-muted-foreground">Meet industry regulations with built-in compliance controls</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-block transform transition-transform duration-300 hover:scale-105">
                  Learn More
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/Services/Cloud%20Computing%202.png" 
                    alt="Cloud Computing Dashboard" 
                    className="w-full object-cover h-80 lg:h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 
              ref={faqsRef}
              className="text-2xl md:text-3xl font-bold mb-16 text-center relative opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              Frequently Asked Questions
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="faq-item bg-muted/10 rounded-lg p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out shadow-sm hover:shadow-md"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-action Section */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-primary/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Want to move your retail operations to the cloud?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the process and help you implement the perfect cloud solution for your business.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-block transform transition-transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default CloudService;
