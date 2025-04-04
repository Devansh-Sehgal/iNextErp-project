
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">iNexterp</h3>
            <p className="text-white mb-6">
              Transforming retail operations with intelligent inventory solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61565418553156&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6495ed] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/InexterpS50262" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6495ed] transition-colors">
                <X size={20} />
              </a>
              <a href="https://www.linkedin.com/company/106386750/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6495ed] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/inexterpsolution/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6495ed] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Fashion Distribution</a></li>
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Lifestyle Brands</a></li>
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Fashion Retail</a></li>
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Supermarkets</a></li>
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">D2C Brands</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white hover:text-[#6495ed] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-[#6495ed] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white hover:text-[#6495ed] transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-white hover:text-[#6495ed] transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-[#6495ed] transition-colors">Privacy Policy</Link></li>  
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#6495ed] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">
                    <a 
                      href="https://maps.google.com/?q=Electronics+City+Metro+Station+H-43+Sector+63" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#6495ed] transition-colors"
                    >
                      <strong>Office:</strong><br />
                      Near Electronics City Metro Station H-43, Sector 63
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#6495ed] flex-shrink-0" />
                <a href="tel:8527262031" className="text-white hover:text-[#6495ed] transition-colors">8527262031</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#6495ed] flex-shrink-0" />
                <a href="mailto:sales@inexterpsolution.com" className="text-white hover:text-[#6495ed] transition-colors">sales@inexterpsolution.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
