
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#6495ed]">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                At RetailSolutions, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect several types of information from and about users of our website, including information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>By which you may be personally identified, such as name, email address, telephone number ("personal information");</li>
                <li>That is about you but individually does not identify you; and/or</li>
                <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To present our website and its contents to you;</li>
                <li>To provide you with information, products, or services that you request from us;</li>
                <li>To fulfill any other purpose for which you provide it;</li>
                <li>To carry out our obligations and enforce our rights;</li>
                <li>To notify you about changes to our website or any products or services we offer;</li>
                <li>In any other way we may describe when you provide the information;</li>
                <li>For any other purpose with your consent.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
              <p className="mb-4">
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To our subsidiaries and affiliates;</li>
                <li>To contractors, service providers, and other third parties we use to support our business;</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets;</li>
                <li>To fulfill the purpose for which you provide it;</li>
                <li>For any other purpose disclosed by us when you provide the information;</li>
                <li>With your consent.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p className="mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Our Privacy Policy</h2>
              <p className="mb-4">
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
              <p className="mb-4">
                To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:sales@inexterpsolutions.com" className="text-[#6495ed] hover:underline">sales@inexterpsolutions.com</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
