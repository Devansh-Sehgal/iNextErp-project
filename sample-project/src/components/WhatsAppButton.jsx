
import React, { useState, useEffect } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "8527262031"; // This is the number for WhatsApp
  
  useEffect(() => {
    // Close the popup when clicking outside
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('#whatsapp-popup') && !event.target.closest('#whatsapp-button')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button
        id="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 z-50 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us via WhatsApp"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <FaWhatsapp size={24} />
        )}
      </button>
      
      {isOpen && (
        <div
          id="whatsapp-popup"
          className="fixed bottom-20 right-6 bg-white rounded-xl shadow-2xl p-4 w-72 z-50 animate-in fade-in slide-in-from-bottom duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-medium text-gray-800">Contact Us</p>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={16} />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Have questions? Contact our support team through WhatsApp for quick assistance.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp size={16} className="mr-2" />
            Chat on WhatsApp
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
