import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { BarChart3, Check, Clock, Users, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultingService = () => {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (processRef.current) observer.observe(processRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (processRef.current) observer.unobserve(processRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                ref={heroRef} 
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
                  Strategic IT Consulting for Retail Success
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our expert IT consulting services are tailored specifically for retail businesses, helping you navigate technology challenges and implement solutions that drive growth and efficiency.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Industry-specific strategic planning</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Technology assessment and roadmapping</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Software selection and implementation guidance</p>
                  </div>
                  <div className="flex items-start group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mt-1 mr-3 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="group-hover:translate-x-1 transition-transform">Retail operations optimization</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transform transition-transform hover:scale-105 shadow-lg">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/Services/inventoryManagement1.png" 
                  alt="IT Consulting Services" 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105 z-10 relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">Expert Consultants</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Our Consulting Expertise
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={featuresRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                <p className="mb-4 text-muted-foreground">Develop comprehensive IT strategies aligned with your retail business goals and growth plans.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Change Management</h3>
                <p className="mb-4 text-muted-foreground">Guide your team through technology transitions with minimal disruption to daily operations.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vendor Selection</h3>
                <p className="mb-4 text-muted-foreground">Identify and evaluate the best technology providers for your specific retail needs.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              
              <div className="bg-background rounded-lg shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Project Management</h3>
                <p className="mb-4 text-muted-foreground">Expert oversight of technology implementation projects with clear timelines and deliverables.</p>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative">
              Our Consulting Process
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <div 
              ref={processRef}
              className="max-w-4xl mx-auto space-y-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
              <div className="flex gap-6 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
                  <p className="text-muted-foreground">We begin by thoroughly understanding your retail business, current systems, pain points, and objectives through in-depth discussions and analysis.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Recommendations</h3>
                  <p className="text-muted-foreground">Based on our findings, we develop a customized technology roadmap with clear, actionable recommendations aligned with your business goals.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementation Support</h3>
                  <p className="text-muted-foreground">We provide guidance and oversight throughout the implementation process, ensuring smooth deployment of recommended solutions.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Partnership</h3>
                  <p className="text-muted-foreground">Our relationship doesn't end with implementation. We provide continued support and strategic advice as your business evolves.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg inline-flex items-center transform transition-all hover:scale-105 shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsultingService;