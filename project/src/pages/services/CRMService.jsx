import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Users, Star, BarChart, MessageCircle, Search, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

const CRMService = () => {
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
      icon: <Users size={24} />,
      title: 'Customer Management',
      description: 'Build comprehensive customer profiles with purchase history, preferences, and interaction records.',
    },
    {
      icon: <Star size={24} />,
      title: 'Loyalty Programs',
      description: 'Create and manage effective loyalty programs to increase customer retention and lifetime value.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Sales Analytics',
      description: 'Track customer acquisition, conversion rates, and sales performance with detailed analytics.',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Engagement Tools',
      description: 'Streamline customer communications with automated email campaigns and follow-ups.',
    },
    {
      icon: <Search size={24} />,
      title: 'Customer Insights',
      description: 'Gain valuable insights into customer behavior and preferences to optimize retail strategies.',
    },
    {
      icon: <Repeat size={24} />,
      title: 'Seamless Integration',
      description: 'Integrates with your existing POS and inventory systems for a complete retail solution.',
    }
  ];

  const faqs = [
    {
      question: "How does CRM improve customer retention?",
      answer: "Our CRM tracks customer preferences, purchase history, and interactions, enabling personalized marketing campaigns, loyalty programs, and better customer service that boost retention."
    },
    {
      question: "Can the CRM help identify our most valuable customers?",
      answer: "Yes, our CRM solution provides detailed analytics that help you identify high-value customers, understand their purchasing patterns, and create targeted strategies to enhance their experience."
    },
    {
      question: "How does the CRM integrate with our existing retail systems?",
      answer: "Our CRM is designed to integrate seamlessly with your existing POS, inventory management, and e-commerce platforms, creating a unified system for all customer interactions."
    },
    {
      question: "Can we automate marketing campaigns with the CRM?",
      answer: "Absolutely. Our CRM includes marketing automation tools that allow you to create, schedule, and track targeted campaigns based on customer segments, purchase history, and engagement metrics."
    },
    {
      question: "How does the CRM handle multi-channel retail operations?",
      answer: "Our CRM provides a centralized platform that consolidates customer data across all channels—in-store, online, mobile, and social—giving you a complete view of customer interactions regardless of touchpoint."
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
                  Customer Relationship Management
                </h1>
                <p 
                  ref={contentRef} 
                  className="text-lg text-muted-foreground mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
                >
                  Enhance customer satisfaction and drive loyalty with our retail-focused CRM solutions. Our system empowers retailers to understand customer needs better, enhance engagement, and ultimately increase retention and revenue.
                </p>
                <div className="flex flex-wrap gap-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
                  <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Get Started
                  </Link>
                  <Link to="/contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Schedule a Demo
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                  <img 
                    src="/Services/HRMS%20CRM%201.png" 
                    alt="CRM Dashboard" 
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
              Key Features
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

        {/* Benefits Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Transform Your Customer Relationships</h2>
                <p className="mb-6 text-muted-foreground">
                  In today's competitive retail environment, understanding your customers is more important than ever. Our CRM solution helps you build stronger relationships, improve customer satisfaction, and drive repeat business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Increase customer retention by up to 27%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Boost sales conversion rates through targeted marketing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Enhance customer service with complete interaction history</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/Services/HRMS%20CRM%202.png" 
                    alt="CRM Analytics" 
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
                  className="faq-item bg-muted/10 rounded-lg p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
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
              Ready to transform your customer relationships?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let our experts help you implement the perfect CRM solution tailored to your retail business needs.
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

export default CRMService;
