
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Mail, User, Building, MessageSquare, MapPin, Phone, Send, CheckCircle, Facebook, Instagram, Twitter, Linkedin, X } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    // Scroll to top when contact page loads
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });

  const validatePhone = () => {
    if (formData.phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const sendForm = async (e) => {
    e.preventDefault();
    
    // Validate phone number
    if (!validatePhone()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Format message to include name and phone
      const formattedMessage = `Name: ${formData.name}\nPhone Number: ${formData.phone}\nCompany: ${formData.company || "Not provided"}\n\nMessage: ${formData.message || "No message provided"}`;
      
      // Prepare the template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        phone_number: formData.phone,
        message: formattedMessage,
        to_email: "devanshsehgal51@gmail.com", // Your email
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_kcdgjkn", // Service ID
        "template_g4gwmo7", // Template ID
        templateParams,
        "F2tTKnOXIv5menGxL" // User ID (public key)
      );

      setIsSubmitting(false);
      setIsSuccess(true);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);

        // Reset form
        setFormData({
          name: '',
          phone: '',
          company: '',
          message: ''
        });
        
        setPhoneError('');
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numbers for phone field
    if (name === 'phone') {
      const phoneValue = value.replace(/[^0-9]/g, '');
      setFormData({
        ...formData,
        [name]: phoneValue
      });
      
      // Clear error if length is becoming correct
      if (phoneValue.length === 10) {
        setPhoneError('');
      } else if (phoneValue.length > 0) {
        setPhoneError('Phone number must be exactly 10 digits');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Get in Touch
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/70 rounded-full"></div>
          </h1>
          <p className="text-muted-foreground text-lg mt-6">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact information */}
            <div className="space-y-8 order-2 lg:order-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary/5 backdrop-blur-md rounded-2xl p-8 border border-border/30 shadow-lg relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl"></div>
                
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground mt-1">
                        Arihant Ambar, D-808, Sector 1, Greater Noida West, <br />
                        Gautam Budh Nagar-201318 (UP)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground mt-1">
                        info@inexterpsolution.com<br />
                        support@inexterpsolution.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground mt-1">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61565418553156&mibextid=ZbWKwL" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors z-20"
                    >
                      <span className="sr-only">Facebook</span>
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="https://twitter.com/inexterp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <X size={18} />
                    </a>
                    <a 
                      href="https://linkedin.com/company/inexterp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="https://www.instagram.com/inexterpsolution/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl shadow-lg p-8 border border-border/30">
                <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-border/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                
                <h2 className="text-2xl font-semibold mb-6 relative z-10">Send Us a Message</h2>
                
                <form onSubmit={sendForm} className="space-y-6 relative z-10">
                  <div className="relative">
                    <label className="flex items-center text-sm font-medium mb-2">
                      <User className="w-4 h-4 mr-2" />
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      required
                      disabled={isSubmitting || isSuccess}
                    />
                  </div>

                  <div className="relative">
                    <label className="flex items-center text-sm font-medium mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${phoneError ? "border-red-500" : ""}`}
                      required
                      disabled={isSubmitting || isSuccess}
                    />
                    {phoneError && (
                      <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="flex items-center text-sm font-medium mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      disabled={isSubmitting || isSuccess}
                    />
                  </div>

                  <div className="relative">
                    <label className="flex items-center text-sm font-medium mb-2">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Your Message 
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      disabled={isSubmitting || isSuccess}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 rounded-lg transition-colors group"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
