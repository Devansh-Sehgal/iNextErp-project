
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientsCarousel from '../components/ClientsCarousel';
import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const LandingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formattedMessage = `Free Demo Request\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}`;
      
      const templateParams = {
        from_name: name,
        phone_number: phone,
        message: formattedMessage,
        to_email: "devanshsehgal51@gmail.com",
      };

      await emailjs.send(
        "service_kcdgjkn",
        "template_g4gwmo7",
        templateParams,
        "F2tTKnOXIv5menGxL"
      );
      
      toast({
        title: "Demo Request Sent",
        description: "Thank you for your interest! We'll get back to you soon.",
        className: "bg-white dark:bg-gray-800"
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
        className: "bg-white dark:bg-gray-800"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: 'Inventory Management',
      description: 'Real-time tracking and optimization of your entire inventory across multiple locations.',
      icon: '📦'
    },
    {
      title: 'POS System',
      description: 'Streamlined point-of-sale system designed specifically for retail environments.',
      icon: '💳'
    },
    {
      title: 'Supply Chain',
      description: 'End-to-end visibility and control over your entire supply chain process.',
      icon: '🚚'
    },
    {
      title: 'Analytics',
      description: 'Data-driven insights to make better business decisions and identify opportunities.',
      icon: '📊'
    }
  ];

  const products = [
    {
      title: 'iNexterp Retail',
      description: 'Complete solution for retail stores with inventory management, POS, and customer analytics.',
      icon: '🛍️'
    },
    {
      title: 'iNexterp Warehouse',
      description: 'Specialized solution for warehouse management with advanced inventory features.',
      icon: '🏭'
    },
    {
      title: 'iNexterp POS',
      description: 'Standalone point-of-sale system that integrates seamlessly with other modules.',
      icon: '🧾'
    },
    {
      title: 'iNexterp Mobile',
      description: 'Mobile applications for on-the-go inventory management and sales processing.',
      icon: '📱'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Demo Form */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - About */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Transform Your Retail Operations
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                iNexterp provides intelligent inventory solutions designed specifically for retail businesses to streamline operations, reduce costs, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center">
                  <Phone size={20} className="text-primary mr-2" />
                  <a href="tel:8527262031" className="hover:text-primary transition-colors">8527262031</a>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-primary mr-2" />
                  <a href="mailto:sales@inexterpsolution.com" className="hover:text-primary transition-colors">sales@inexterpsolution.com</a>
                </div>
              </div>
            </div>
            
            {/* Right side - Demo Form */}
            <div className="order-1 md:order-2 bg-white p-8 rounded-xl shadow-lg border border-muted">
              <h2 className="text-2xl font-bold mb-6 text-center">Request a Free Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    placeholder="Your company name"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-tr from-primary/10 to-blue-300/20 rounded-2xl p-1">
                <img
                  src="/aboutus1.jpg"
                  alt="About iNexterp"
                  className="rounded-2xl w-full object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl -z-10"></div>
            </div>
            
            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold mb-6">About iNexterp Solutions</h2>
              <p className="text-muted-foreground mb-6">
                At iNexterp, we understand the challenges retailers face in today's dynamic market. Our solution 
                provides more than just the essentials when selecting retail ERP software. We distinguish ourselves 
                by providing a full range of capabilities at an affordable price, giving retailers of all sizes unparalleled value.
              </p>
              <p className="text-muted-foreground mb-6">
                Our retail ERP offers additional features right out of the box, like centralized data analytics,
                streamlined supply chain processes, effective point-of-sale (POS) billing software, and seamless
                inventory management, all of which can be customized to meet your specific business requirements.
              </p>
              <p className="text-muted-foreground">
                Modern retail management software is available to businesses thanks to the iNextErp retail ERP system,
                which adjusts to your workflow, decreasing the need for workarounds and increasing efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients Carousel */}
      <ClientsCarousel />
      
      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-muted/20 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-primary/70 rounded-full"></div>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-border transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative inline-block">
              Our Products
              <div className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-primary/70 rounded-full"></div>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-border transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
