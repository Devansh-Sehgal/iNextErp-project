
import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicePageTemplate from '../components/ServicePageTemplate';
import { Calculator, FileText, CreditCard, BarChart3, Layers, DollarSign } from "lucide-react";

const AccountingService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Seamless Inventory Integration",
      description: "Our accounting software directly integrates with inventory management for real-time financial insights."
    },
    {
      title: "Multi-branch Management",
      description: "Easily manage books for multiple branches with centralized control and branch-specific reporting."
    },
    {
      title: "Voucher Accuracy",
      description: "Ensure precise voucher creation and management to maintain financial record integrity."
    },
    {
      title: "Time-saving Automation",
      description: "Save up to 60% of your accounting time with automated processes and intelligent workflows."
    },
    {
      title: "Cross-branch Transactions",
      description: "Seamlessly manage and track financial movements between different business locations."
    },
    {
      title: "Accurate Balance Sheets",
      description: "Generate comprehensive balance sheets that reflect your true financial position."
    }
  ];

  const benefits = [
    {
      title: "Business Growth Focus",
      description: "Free up time to concentrate on expanding your business with streamlined accounting processes."
    },
    {
      title: "Informed Decision Making",
      description: "Access comprehensive financial data to make strategic business decisions."
    },
    {
      title: "Simplified Compliance",
      description: "Meet regulatory requirements easily with built-in compliance features and reports."
    },
    {
      title: "Reduced Manual Errors",
      description: "Minimize mistakes with automated calculations and validation checks."
    }
  ];

  const icons = [
    <Layers className="w-full h-full" />,
    <FileText className="w-full h-full" />,
    <Calculator className="w-full h-full" />,
    <DollarSign className="w-full h-full" />,
    <BarChart3 className="w-full h-full" />,
    <CreditCard className="w-full h-full" />,
    <Calculator className="w-full h-full" />,
    <FileText className="w-full h-full" />,
    <BarChart3 className="w-full h-full" />,
    <Layers className="w-full h-full" />
  ];

  return (
    <ServicePageTemplate 
      title="Use India's Finest Accounting Software to Revolutionize Inventory Management"
      description="Inventory management and our accounting software in India work together seamlessly to streamline procedures and produce excellent reporting. By ensuring voucher accuracy and saving up to 60% of your time, this integration frees you up to concentrate on expanding your business."
      features={features}
      benefits={benefits}
      bgImageUrl="/banner1.jpg"
      featureImageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd64"
      icons={icons}
    />
  );
};

export default AccountingService;