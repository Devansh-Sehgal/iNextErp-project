import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { Factory, Clock, TrendingUp, Layers, Settings, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturingSolutions = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const featuresRef = useRef(null);

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
    if (iconRef.current) observer.observe(iconRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => observer.observe(item));

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (iconRef.current) observer.unobserve(iconRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      featureItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  const features = [
    {
      icon: Factory,
      title: "Production Planning",
      description: "Streamline production processes with advanced planning tools that optimize resource allocation and minimize waste."
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Track production metrics and machine performance in real-time to identify bottlenecks and improve efficiency."
    },
    {
      icon: TrendingUp,
      title: "Quality Control",
      description: "Implement robust quality control processes to ensure consistent product quality and reduce defects."
    },
    {
      icon: Layers,
      title: "Material Requirements",
      description: "Optimize inventory levels with accurate material requirements planning based on production schedules."
    },
    {
      icon: Settings,
      title: "Machine Maintenance",
      description: "Schedule preventive maintenance to reduce downtime and extend the lifespan of manufacturing equipment."
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Gain insights into production efficiency with comprehensive analytics and customizable dashboards."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 
                  ref={titleRef} 
                  className="text-3xl md:text-5xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                  Manufacturing Solutions
                </h1>
                <p 
                  ref={contentRef} 
                  className="text-lg text-muted-foreground mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
                >
                  Optimize your production processes with our comprehensive manufacturing solutions. From material planning to quality control, our integrated system helps you increase efficiency, reduce costs, and maintain product quality.
                </p>
                <div className="flex flex-wrap gap-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
                  <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transform transition-transform hover:scale-105">
                    Request Demo
                  </Link>
                  <Link to="/contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transform transition-transform hover:scale-105">
                    Contact Sales
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div 
                  ref={iconRef}
                  className="relative opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                  <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:rotate-3 hover:scale-105">
                    <Factory size={180} className="text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center relative">
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
                  className="feature-item bg-muted/20 p-8 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-white opacity-0 translate-y-10"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="h-12 w-12 text-primary mb-4 transform transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Streamline Your Production Processes</h2>
                <p className="mb-6">
                  Our manufacturing solutions integrate seamlessly with your existing systems, providing end-to-end visibility across your production floor. This integration enables better decision-making and helps optimize your operations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Reduce production costs by optimizing resource allocation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Minimize downtime with preventive maintenance scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Improve product quality with comprehensive quality control tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-primary/20 p-1 rounded-full">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Increase productivity through data-driven process improvements</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-lg"></div>
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="/Services/Supply%20chain%201.webp" 
                    alt="Manufacturing Process" 
                    className="w-full object-cover h-80 md:h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Manufacturing Operations?</h3>
                  <p className="mb-6">
                    Our team of experts is ready to help you implement a manufacturing solution tailored to your specific needs. Contact us today to learn more about how we can help you improve efficiency, reduce costs, and enhance product quality.
                  </p>
                  <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-block transform hover:scale-105 transition-all duration-300">
                    Schedule a Consultation
                  </Link>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                    <Settings size={200} className="text-primary relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ManufacturingSolutions;
