import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Users, UserPlus, CreditCard, ClipboardList, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HRMService = () => {
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
      title: 'Employee Management',
      description: 'Streamline employee records, attendance tracking, leave management, and performance evaluation in one integrated system.',
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Payroll Processing',
      description: 'Automate salary calculations, tax deductions, and generate pay slips with our user-friendly payroll system.',
    },
    {
      icon: <UserPlus size={24} />,
      title: 'Recruitment Management',
      description: 'Manage the entire recruitment process from job postings to onboarding new employees efficiently.',
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Task & Goal Management',
      description: 'Set, track, and evaluate employee goals and tasks aligned with your retail business objectives.',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Attendance & Scheduling',
      description: 'Optimize staff scheduling and track attendance with automated systems designed for retail environments.',
    },
    {
      icon: <Award size={24} />,
      title: 'Performance Reviews',
      description: 'Implement structured performance review processes to motivate staff and improve productivity.',
    }
  ];

  const faqs = [
    {
      question: "How does the HRM integrate with our existing systems?",
      answer: "Our HRM is designed to integrate seamlessly with your existing ERP, POS, and inventory management systems, providing a unified platform for all your business operations."
    },
    {
      question: "Can employees access their information remotely?",
      answer: "Yes, employees can access their profiles, apply for leave, check attendance, and view pay slips through our mobile-friendly employee self-service portal."
    },
    {
      question: "Is the system compliant with labor laws?",
      answer: "Yes, our HRM is regularly updated to comply with the latest labor laws and regulations, helping you maintain compliance across your HR operations."
    },
    {
      question: "How does the HRM help with staff retention?",
      answer: "Our HRM includes tools for career development tracking, performance management, and recognition systems that help improve employee satisfaction and retention."
    },
    {
      question: "Can we customize the system to our specific retail needs?",
      answer: "Absolutely. Our HRM solutions are highly customizable to accommodate your unique retail business processes and organizational structure."
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
                  Human Resource Management
                </h1>
                <p 
                  ref={contentRef} 
                  className="text-lg text-muted-foreground mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
                >
                  Streamline your workforce management with HR solutions built for retail businesses. Our Human Resource Management solutions help efficiently manage your workforce through automated processes, improved employee engagement, and comprehensive tools.
                </p>
                <div className="flex flex-wrap gap-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
                  <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Get Started
                  </Link>
                  <Link to="/contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Talk to an Expert
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                  <img 
                    src="/Services/HRMS%20CRM%201.png" 
                    alt="HR Management Dashboard" 
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
              Comprehensive HR Features
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
              <div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/Services/HRMS%20CRM%202.png" 
                    alt="HR Management System" 
                    className="w-full object-cover h-80 lg:h-96"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Empower Your HR Department</h2>
                <p className="mb-6 text-muted-foreground">
                  Our HRM system is designed to reduce administrative burden, enabling your HR team to focus on strategic initiatives that drive business growth and employee satisfaction.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Reduce administrative workload by up to 40%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Improve payroll accuracy and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Enhance employee experience and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Streamline recruitment and onboarding processes</span>
                  </li>
                </ul>
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
              Looking to optimize your HR operations?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our experts are ready to help you implement the right solution tailored to your retail business needs.
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

export default HRMService;
