
import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicePageTemplate from '../components/ServicePageTemplate';
import { Truck, Boxes, Factory, ClipboardList, BarChart3, Cog } from "lucide-react";

const SupplyChainService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Job Card Management",
      description: "Streamline and digitize your job cards for better tracking and management of manufacturing processes."
    },
    {
      title: "Raw Material Management",
      description: "Efficiently track, allocate and optimize raw materials throughout the production process."
    },
    {
      title: "Production Planning",
      description: "Create detailed production plans with resource allocation and timeline management."
    },
    {
      title: "Quality Control",
      description: "Implement comprehensive quality check systems at every stage of production."
    },
    {
      title: "Real-time Insights",
      description: "Access real-time data on production status, bottlenecks, and efficiency metrics."
    },
    {
      title: "Worker Task Assignment",
      description: "Assign and standardize tasks with worker-wise rate standardization for optimal productivity."
    }
  ];

  const benefits = [
    {
      title: "Seamless Automation",
      description: "Automate routine manufacturing tasks to reduce manual errors and increase efficiency."
    },
    {
      title: "Waste Reduction",
      description: "Optimize processes to minimize material waste and maximize resource utilization."
    },
    {
      title: "Comprehensive Reporting",
      description: "Generate detailed reports on production metrics, quality standards, and performance indicators."
    },
    {
      title: "Cost Reduction",
      description: "Identify inefficiencies and implement cost-saving measures throughout the manufacturing process."
    }
  ];

  const icons = [
    <Factory className="w-full h-full" />,
    <Boxes className="w-full h-full" />,
    <ClipboardList className="w-full h-full" />,
    <Cog className="w-full h-full" />,
    <BarChart3 className="w-full h-full" />,
    <Truck className="w-full h-full" />,
    <Factory className="w-full h-full" />,
    <Boxes className="w-full h-full" />,
    <ClipboardList className="w-full h-full" />,
    <BarChart3 className="w-full h-full" />
  ];

  return (
    <ServicePageTemplate 
      title="Use iNextERP to revolutionize your production processes for the Indian industrial sector"
      description="From job cards and raw material management to production planning and quality control, INextERP software for manufacturing in India simplifies every step of your manufacturing process. Our system guarantees effective workflows, reduces waste, and offers comprehensive reporting along with real-time insights."
      features={features}
      benefits={benefits}
      bgImageUrl="/banner3.jpg"
      featureImageUrl="https://images.unsplash.com/photo-1581092162384-8987c1d64924"
      icons={icons}
    />
  );
};

export default SupplyChainService;