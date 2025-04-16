
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactPopup = ({ open, onOpenChange }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const { toast } = useToast();

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhone(value);
    
    if (value.length === 10) {
      setPhoneError('');
    } else if (value.length > 0) {
      setPhoneError('Phone number must be exactly 10 digits');
    }
  };

  const validatePhone = () => {
    if (phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePhone()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formattedMessage = `Contact Form Inquiry\nName: ${name}\nPhone Number: ${phone}\n\nMessage: ${message || "No message provided"}`;
      
      const templateParams = {
        from_name: name,
        phone_number: phone,
        message: formattedMessage,
        to_email: "Info@inexterpsolutions.com",
      };

      await emailjs.send(
        "service_kcdgjkn",
        "template_g4gwmo7",
        templateParams,
        "F2tTKnOXIv5menGxL"
      );
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you soon.",
        className: "bg-white dark:bg-gray-800"
      });
      
      onOpenChange(false);
      setPhone('');
      setName('');
      setMessage('');
      setPhoneError('');
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        className: "bg-white dark:bg-gray-800"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Contact Us</DialogTitle>
          <DialogDescription>
            Have questions about our products or services? Let us know and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
            <Input 
              id="name" 
              placeholder="Your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Your phone number" 
              value={phone}
              onChange={handlePhoneChange}
              required
              className={phoneError ? "border-red-500" : ""}
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <textarea 
              id="message" 
              className="w-full min-h-[100px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          
          <DialogFooter className="pt-2">
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;