
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTA from './CTA';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServicePageTemplate = ({ 
  title, 
  headline, 
  description, 
  features, 
  faqs, 
  image1, 
  image2, 
  ctaText, 
  ctaButtonText 
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">{headline}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 relative">
                Key Features
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></div>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md border border-border hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-primary mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-primary/10 to-blue-300/20 rounded-2xl p-1">
                <img
                  src={image1}
                  alt={`${title} illustration`}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="bg-gradient-to-bl from-primary/10 to-purple-300/20 rounded-2xl p-1">
                <img
                  src={image2}
                  alt={`${title} benefits`}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-300/30 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl -z-10"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8 relative">
                Frequently Asked Questions
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></div>
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        headline={ctaText}
        buttonText={ctaButtonText}
      />
      
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
