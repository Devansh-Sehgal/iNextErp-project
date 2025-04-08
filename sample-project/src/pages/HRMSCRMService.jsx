
import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { Users, UserPlus, CreditCard, BarChart, Star, ClipboardList } from 'lucide-react';

const HRMSCRMService = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: 'Employee Management',
      description: 'Streamline employee records, attendance tracking, leave management, and performance evaluation in one integrated system.',
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Payroll Processing',
      description: 'Automate salary calculations, tax deductions, and generate pay slips with our user-friendly payroll system.',
    },
    {
      icon: <Star size={24} />,
      title: 'Customer Relationship',
      description: 'Build stronger relationships with customers through detailed profiles, purchase history, and personalized communication.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Analytics & Reporting',
      description: 'Gain insights with advanced HR metrics and customer analytics to make data-driven business decisions.',
    },
    {
      icon: <UserPlus size={24} />,
      title: 'Recruitment Management',
      description: 'Manage the entire recruitment process from job postings to onboarding new employees efficiently.',
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Task & Goal Management',
      description: 'Set, track, and evaluate employee goals and tasks aligned with your retail business objectives.',
    },
  ];

  const faqs = [
    {
      question: "How does the HRMS integrate with our existing systems?",
      answer: "Our HRMS is designed to integrate seamlessly with your existing ERP, POS, and inventory management systems, providing a unified platform for all your business operations."
    },
    {
      question: "Can employees access their information remotely?",
      answer: "Yes, employees can access their profiles, apply for leave, check attendance, and view pay slips through our mobile-friendly employee self-service portal."
    },
    {
      question: "How does the CRM help improve customer retention?",
      answer: "Our CRM tracks customer preferences, purchase history, and interactions, enabling personalized marketing campaigns, loyalty programs, and better customer service that boost retention."
    },
    {
      question: "Is the system compliant with labor laws?",
      answer: "Yes, our HRMS is regularly updated to comply with the latest labor laws and regulations, helping you maintain compliance across your HR operations."
    },
    {
      question: "Can we customize the system to our specific retail needs?",
      answer: "Absolutely. Our HRMS and CRM solutions are highly customizable to accommodate your unique retail business processes, organizational structure, and customer engagement strategies."
    }
  ];

  return (
    <ServicePageTemplate
      title="HRMS & CRM"
      headline="Human Resource Management and Customer Relationship Management systems for retail businesses."
      description="iNextERP's integrated HRMS and CRM solutions help retail businesses efficiently manage their workforce and customer relationships. Our comprehensive systems automate HR processes, improve employee engagement, and provide valuable customer insights to enhance your retail operations and drive growth."
      features={features}
      faqs={faqs}
      image1="/Services/HRMS%20CRM%201.png"
      image2="/Services/HRMS%20CRM%202.png"
      ctaText="Looking to optimize your HR operations and customer relationships? Our experts are ready to help."
      ctaButtonText="Get Started"
    />
  );
};

export default HRMSCRMService;
