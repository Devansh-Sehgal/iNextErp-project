
import React from 'react';
import ServicePageTemplate from '../components/ServicePageTemplate';
import { Database, Cloud, Server, Shield, Workflow, Zap } from 'lucide-react';

const CloudService = () => {
  const features = [
    {
      icon: <Database size={24} />,
      title: 'High Availability',
      description: 'Our cloud infrastructure ensures your business applications are always accessible, with 99.9% uptime guarantees.',
    },
    {
      icon: <Server size={24} />,
      title: 'Flexible Scaling',
      description: 'Scale your resources up or down based on your retail business needs without having to invest in physical hardware.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise-grade Security',
      description: 'Protect your sensitive retail data with advanced encryption, regular backups, and comprehensive disaster recovery options.',
    },
    {
      icon: <Workflow size={24} />,
      title: 'Streamlined Operations',
      description: 'Automated updates and maintenance ensure your systems are always running the latest, most secure software.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Our cloud infrastructure is optimized for retail applications, ensuring fast response times for inventory queries and transactions.',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Hybrid Cloud Solutions',
      description: 'Integrate on-premises systems with cloud resources for a solution that perfectly matches your business requirements.',
    },
  ];

  const faqs = [
    {
      question: "How does cloud computing benefit my retail business?",
      answer: "Cloud computing eliminates the need for expensive on-site infrastructure, reduces IT maintenance costs, enables remote access to your systems, and provides the flexibility to scale resources as your business grows or during peak seasons."
    },
    {
      question: "Is my data secure in the cloud?",
      answer: "Yes, we implement enterprise-level security protocols including data encryption, regular security audits, access controls, and compliance with industry standards to keep your retail data safe."
    },
    {
      question: "Can I access my inventory system from multiple locations?",
      answer: "Absolutely. Cloud-based systems allow authorized users to access your inventory data from anywhere with an internet connection, perfect for businesses with multiple retail locations."
    },
    {
      question: "What happens if internet connectivity is lost?",
      answer: "Our solutions include offline functionality for critical operations and automatic synchronization when connectivity is restored, minimizing disruption to your business."
    },
    {
      question: "How long does migration to the cloud take?",
      answer: "Migration timelines depend on the complexity of your current systems and data volume. We typically complete migrations in phases, with basic functionality available within 2-4 weeks and full implementation within 1-3 months."
    }
  ];

  return (
    <ServicePageTemplate
      title="Cloud Computing"
      headline="Secure, scalable cloud infrastructure optimized for retail inventory and operations management."
      description="With iNextERP's cloud computing solutions, retailers can access their inventory, sales, and customer data from anywhere. Our cloud infrastructure is designed specifically for the needs of the retail industry, providing the security, scalability, and reliability businesses need to thrive in today's competitive market. As an authorized distributor, we offer premium cloud services at competitive rates."
      features={features}
      faqs={faqs}
      image1="/Services/Cloud%20Computing%201.png"
      image2="/Services/Cloud%20Computing%202.png"
      ctaText="Want to move your retail operations to the cloud? Let our experts guide you through the process."
      ctaButtonText="Get Started"
    />
  );
};

export default CloudService;
