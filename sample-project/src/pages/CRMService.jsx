
import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { Users, Star, BarChart, MessageCircle, Search, Repeat } from 'lucide-react';

const CRMService = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: 'Customer Management',
      description: 'Build comprehensive customer profiles with purchase history, preferences, and interaction records.',
    },
    {
      icon: <Star size={24} />,
      title: 'Loyalty Programs',
      description: 'Create and manage effective loyalty programs to increase customer retention and lifetime value.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Sales Analytics',
      description: 'Track customer acquisition, conversion rates, and sales performance with detailed analytics.',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Engagement Tools',
      description: 'Streamline customer communications with automated email campaigns and follow-ups.',
    },
    {
      icon: <Search size={24} />,
      title: 'Customer Insights',
      description: 'Gain valuable insights into customer behavior and preferences to optimize retail strategies.',
    },
    {
      icon: <Repeat size={24} />,
      title: 'Seamless Integration',
      description: 'Integrates with your existing POS and inventory systems for a complete retail solution.',
    }
  ];

  const faqs = [
    {
      question: "How does CRM improve customer retention?",
      answer: "Our CRM tracks customer preferences, purchase history, and interactions, enabling personalized marketing campaigns, loyalty programs, and better customer service that boost retention."
    },
    {
      question: "Can the CRM help identify our most valuable customers?",
      answer: "Yes, our CRM solution provides detailed analytics that help you identify high-value customers, understand their purchasing patterns, and create targeted strategies to enhance their experience."
    },
    {
      question: "How does the CRM integrate with our existing retail systems?",
      answer: "Our CRM is designed to integrate seamlessly with your existing POS, inventory management, and e-commerce platforms, creating a unified system for all customer interactions."
    },
    {
      question: "Can we automate marketing campaigns with the CRM?",
      answer: "Absolutely. Our CRM includes marketing automation tools that allow you to create, schedule, and track targeted campaigns based on customer segments, purchase history, and engagement metrics."
    },
    {
      question: "How does the CRM handle multi-channel retail operations?",
      answer: "Our CRM provides a centralized platform that consolidates customer data across all channels—in-store, online, mobile, and social—giving you a complete view of customer interactions regardless of touchpoint."
    }
  ];

  return (
    <ServicePageTemplate
      title="Customer Relationship Management"
      headline="Enhance customer satisfaction and drive loyalty with our retail-focused CRM solutions."
      description="iNextERP's CRM solutions help retail businesses build stronger customer relationships through comprehensive data management, personalized marketing, and insightful analytics. Our system empowers retailers to understand customer needs better, enhance engagement, and ultimately increase retention and revenue."
      features={features}
      faqs={faqs}
      image1="/Services/HRMS%20CRM%201.png"
      image2="/Services/HRMS%20CRM%202.png"
      ctaText="Ready to transform your customer relationships? Let our experts help you implement the perfect CRM solution."
      ctaButtonText="Get Started"
    />
  );
};

export default CRMService;
