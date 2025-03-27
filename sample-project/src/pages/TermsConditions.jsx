
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const TermsConditions = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#6495ed]">Terms and Conditions</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to RetailSolutions. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on RetailSolutions's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose or for any public display;</li>
                <li>Attempt to reverse engineer any software contained on RetailSolutions's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                The materials on RetailSolutions's website are provided "as is". RetailSolutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
              <p className="mb-4">
                In no event shall RetailSolutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RetailSolutions's website, even if RetailSolutions or a RetailSolutions authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Revisions and Errata</h2>
              <p className="mb-4">
                The materials appearing on RetailSolutions's website could include technical, typographical, or photographic errors. RetailSolutions does not warrant that any of the materials on its website are accurate, complete, or current. RetailSolutions may make changes to the materials contained on its website at any time without notice.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws applicable in your jurisdiction, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at <a href="mailto:sales@inexterpsolutions.com" className="text-[#6495ed] hover:underline">sales@inexterpsolutions.com</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsConditions;
