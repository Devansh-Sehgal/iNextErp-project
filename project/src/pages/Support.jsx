import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink } from 'lucide-react';

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-white to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Customer Support Center
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                We're here to help you get the most out of iNextERP. Our support team is ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Support Portal Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl shadow-lg border border-border p-8 text-center">
                <h2 className="text-2xl font-semibold mb-6">Access Support Portal</h2>
                <p className="text-muted-foreground mb-8">
                  Log in to our support portal to track your tickets, access documentation, and get help from our support team.
                </p>
                <a 
                  href="https://support.inexterpsolutions.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Go to Support Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                  Saturday: 9:00 AM - 2:00 PM (IST)<br />
                  Sunday: Closed
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent issues outside business hours, please use our 24/7 emergency support line.
                </p>
                <a href="tel:9220034859" className="text-primary hover:underline">
                  9220034859
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
