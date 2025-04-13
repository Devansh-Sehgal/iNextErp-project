
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaAppStore, FaQrcode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <img src='/Logo.png' className='w-10 h-10 mr-2' alt="Logo" />
              iNextERP
            </h3>
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
              <li><Link to="/solutions/fashion-distribution" className="text-white hover:text-[#6495ed] transition-colors">Fashion Distribution</Link></li>
              <li><Link to="/solutions/lifestyle-brands" className="text-white hover:text-[#6495ed] transition-colors">Lifestyle Brands</Link></li>
              <li><Link to="/solutions/fashion-retail" className="text-white hover:text-[#6495ed] transition-colors">Fashion Retail</Link></li>
              <li><Link to="/solutions/d2c-brands" className="text-white hover:text-[#6495ed] transition-colors">D2C Brands</Link></li>
              <li><Link to="/solutions/warehouse-management" className="text-white hover:text-[#6495ed] transition-colors">Warehouse Management</Link></li>
              <li><Link to="/solutions/multi-location" className="text-white hover:text-[#6495ed] transition-colors">Multi Location</Link></li>
            </ul>
          </div>

          <div>
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white hover:text-[#6495ed] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-[#6495ed] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white hover:text-[#6495ed] transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-white hover:text-[#6495ed] transition-colors">Terms & Condition</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-[#6495ed] transition-colors">Privacy Policy</Link></li>  
            </ul>
            
            <h4 className="font-semibold text-lg mb-3 mt-6">Download Our App</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition-colors">
                <FaAppStore size={20} className="text-[#6495ed] mr-2" />
                <span>App Store</span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.inextsales" className="flex items-center bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition-colors" target='_blank'>
                <FaGooglePlay size={20} className="text-[#6495ed] mr-2" />
                <span>Play Store</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#6495ed] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white mb-2">
                    <a 
                      href="https://maps.google.com/?q=Electronics+City+Metro+Station+H-43+Sector+63" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#6495ed] transition-colors"
                    >
                      <strong>Registered Office:</strong><br />
                      Near Electronics City Metro Station H-43, Sector 63
                    </a>
                  </p>
                  <p className="text-white">
                    <a 
                      href="https://maps.google.com/?q=Electronics+City+Metro+Station+H-43+Sector+63" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#6495ed] transition-colors"
                    >
                      <strong>Corporate Office:</strong><br />
                      Near Electronics City Metro Station H-43, Sector 63
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#6495ed] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9220034859" className="text-white hover:text-[#6495ed] transition-colors">9220034859</a>
                  <a href="tel:9220034860" className="text-white hover:text-[#6495ed] transition-colors">9220034860</a>
                  <a href="tel:9220034861" className="text-white hover:text-[#6495ed] transition-colors">9220034861</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#6495ed] flex-shrink-0" />
                <a href="mailto:sales@inexterpsolutions.com" className="text-white hover:text-[#6495ed] transition-colors">sales@inexterpsolutions.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} iNextERP. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
