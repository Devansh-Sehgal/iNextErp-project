
import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { Users, UserPlus, CreditCard, ClipboardList, Calendar, Award } from 'lucide-react';

const HRMService = () => {
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
      icon: <UserPlus size={24} />,
      title: 'Recruitment Management',
      description: 'Manage the entire recruitment process from job postings to onboarding new employees efficiently.',
    },
    {
      icon: <ClipboardList size={24} />,
      title: 'Task & Goal Management',
      description: 'Set, track, and evaluate employee goals and tasks aligned with your retail business objectives.',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Attendance & Scheduling',
      description: 'Optimize staff scheduling and track attendance with automated systems designed for retail environments.',
    },
    {
      icon: <Award size={24} />,
      title: 'Performance Reviews',
      description: 'Implement structured performance review processes to motivate staff and improve productivity.',
    }
  ];

  const faqs = [
    {
      question: "How does the HRM integrate with our existing systems?",
      answer: "Our HRM is designed to integrate seamlessly with your existing ERP, POS, and inventory management systems, providing a unified platform for all your business operations."
    },
    {
      question: "Can employees access their information remotely?",
      answer: "Yes, employees can access their profiles, apply for leave, check attendance, and view pay slips through our mobile-friendly employee self-service portal."
    },
    {
      question: "Is the system compliant with labor laws?",
      answer: "Yes, our HRM is regularly updated to comply with the latest labor laws and regulations, helping you maintain compliance across your HR operations."
    },
    {
      question: "How does the HRM help with staff retention?",
      answer: "Our HRM includes tools for career development tracking, performance management, and recognition systems that help improve employee satisfaction and retention."
    },
    {
      question: "Can we customize the system to our specific retail needs?",
      answer: "Absolutely. Our HRM solutions are highly customizable to accommodate your unique retail business processes and organizational structure."
    }
  ];

  return (
    <ServicePageTemplate
      title="Human Resource Management"
      headline="Streamline your workforce management with HR solutions built for retail businesses."
      description="iNextERP's Human Resource Management solutions help retail businesses efficiently manage their workforce through automated processes, improved employee engagement, and comprehensive tools for recruitment, payroll, and performance management."
      features={features}
      faqs={faqs}
      image1="/Services/HRMS%20CRM%201.png"
      image2="/Services/HRMS%20CRM%202.png"
      ctaText="Looking to optimize your HR operations? Our experts are ready to help you implement the right solution."
      ctaButtonText="Get Started"
    />
  );
};

export default HRMService;
