
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">RetailSolutions</h3>
            <p className="text-white mb-6">
              Transforming retail operations with intelligent inventory solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61565418553156&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6495ed] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#6495ed] transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#6495ed] transition-colors">
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
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Inventory Management</a></li>
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Retail and Point of Sale</a></li>
              <li><a href="#" className="text-white hover:text-[#6495ed] transition-colors">Accounts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#6495ed] mt-1 flex-shrink-0" />
                <span className="text-white">123 Retail Avenue, Suite 500<br />Silicon Valley, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#6495ed] flex-shrink-0" />
                <span className="text-white">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#6495ed] flex-shrink-0" />
                <a href="mailto:sales@inexterpsolutions.com" className="text-white hover:text-[#6495ed] transition-colors">sales@inexterpsolutions.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RetailSolutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Terms & Conditions</Link>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;