
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTA from './CTA';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicePageTemplate = ({ 
  title, 
  description, 
  features, 
  benefits, 
  bgImageUrl, 
  featureImageUrl,
  icons 
}) => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Setup animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all items with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      // Clean up observer
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
          style={bgImageUrl ? {
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,1)), url(${bgImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          } : {}}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-100">
                {description}
              </p>
              <div className="flex justify-center gap-4 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-200">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0 -translate-y-10 transition-all duration-700">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0 -translate-y-10 transition-all duration-700 delay-100">
                Our comprehensive suite of tools to optimize your {title.toLowerCase()} operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll opacity-0 -translate-y-10 transition-all duration-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {icons && icons[index] ? (
                      <span className="text-primary h-6 w-6">
                        {icons[index]}
                      </span>
                    ) : (
                      <div className="w-6 h-6 bg-primary/40 rounded-full"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 transform -translate-x-10 transition-all duration-700">
                <div className="relative">
                  <div className="bg-gradient-to-tr from-primary/10 to-blue-300/20 rounded-xl p-1 shadow-lg">
                    <img
                      src={featureImageUrl || "/placeholder.svg"}
                      alt="Feature Image"
                      className="rounded-xl w-full h-auto"
                      width="600"
                      height="400"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl -z-10"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl -z-10"></div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 animate-on-scroll opacity-0 transform translate-x-10 transition-all duration-700">
                  Benefits
                </h2>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex animate-on-scroll opacity-0 transform translate-x-10 transition-all duration-700"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mr-4 bg-primary/10 p-3 rounded-full flex-shrink-0">
                        {icons && icons[index + features.length] ? (
                          <span className="text-primary h-5 w-5">
                            {icons[index + features.length]}
                          </span>
                        ) : (
                          <div className="w-5 h-5 bg-primary/40 rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
