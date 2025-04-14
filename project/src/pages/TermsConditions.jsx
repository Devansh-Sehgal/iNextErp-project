
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
      <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-700"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-4 border-gray-200 dark:border-gray-700">
              <span className="text-[#4a78d0] dark:text-[#6495ed]">Terms & Conditions</span>
            </h1>
            
            <div className="prose max-w-none dark:prose-invert">
              <div className="bg-gray-50 dark:bg-gray-800/90 p-6 rounded-lg mb-10 shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Welcome to <span className="font-semibold text-gray-800 dark:text-gray-200">iNextERP Solution</span>. These Terms and Conditions govern your access to and use of our website and our services. 
                  By accessing our Website or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access our Website or use our Services.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">1. Acceptance of Terms</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing or using our Website or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, 
                including any additional guidelines and future modifications.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">2. Description of Services</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                iNextERP Solution provides ERP software solutions, consulting services, and software development solutions focused on 
                retail operations. The specific features and functionalities of our Services may vary depending on the subscription plan 
                or agreement you have with us.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">3. User Accounts</h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>Account Creation:</strong> If our Services require you to create an account, you are responsible for providing accurate and complete information during the registration process. You are also responsible for maintaining the confidentiality of your account credentials (username and password) and for all activities that occur under your account.</p>
              <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>Account Security:</strong> You agree to notify us immediately of any unauthorized access to or use of your account. We will not be liable for any loss or damage arising from your failure to comply with these security obligations.</p>
              <p className="mb-8 text-gray-700 dark:text-gray-300"><strong>Account Termination:</strong> We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to a breach of these Terms.</p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">4. Use of the Website and Services</h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>Permitted Use:</strong> You may use our Website and Services for lawful purposes and in accordance with these Terms.</p>
              <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>Prohibited Conduct:</strong> You agree not to:</p>
              <ul className="list-disc pl-8 mb-8 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use our Website or Services in any way that violates applicable laws or regulations.</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our Website or Services.</li>
                <li>Attempt to gain unauthorized access to our Website, Services, or related systems or networks.</li>
                <li>Introduce viruses, worms, or other malicious code to our Website or Services.</li>
                <li>Scrape, data mine, or otherwise extract data from our Website or Services without our express written consent.</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
                <li>Interfere with or disrupt the operation of our Website or Services.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">5. Intellectual Property Rights</h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                <strong>Our Content:</strong> The Website and its entire contents, features, and functionality (including but not limited to text, graphics, 
                logos, images, software, and the design, selection, and arrangement thereof) are owned by iNextERP Solution, its licensors, 
                or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                <strong>Your Content:</strong> If you submit, upload, or otherwise make available any content through our Services ("Your Content"), 
                you retain ownership of Your Content. However, you grant us a non-exclusive, worldwide, royalty-free, transferable, sub-licensable license 
                to use, reproduce, modify, adapt, publish, translate, distribute, and display Your Content in connection with the provision of our Services. 
                You represent and warrant that you have all necessary rights to grant this license.
              </p>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                <strong>Trademarks:</strong> The iNextERP Solution name, logo, and all related names, logos, product and service names, designs, 
                and slogans are trademarks of iNextERP Solution or its affiliates or licensors. You must not use such marks without our prior written permission.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">6. Payment and Fees</h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>Fees:</strong> If you use Services that require payment, you agree to pay the applicable fees as described on our Website or in your agreement with us.</p>
              <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>Payment Terms:</strong> Payment terms will be specified at the time of purchase or in your agreement. You agree to provide accurate and complete payment information.</p>
              <p className="mb-3 text-gray-700 dark:text-gray-300"><strong>Taxes:</strong> You are responsible for any applicable taxes related to your use of our Services.</p>
              <p className="mb-8 text-gray-700 dark:text-gray-300"><strong>Changes to Fees:</strong> We reserve the right to change our fees at any time, with notice to you.</p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">7. Disclaimer of Warranties</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 p-5 rounded-md">
                Our Website and Services are provided on an "as is" and "as available" basis, without any warranties of any kind, 
                express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, 
                non-infringement, and any warranties arising out of course of dealing or usage of trade. 
                We do not warrant that our Website or Services will be uninterrupted, error-free, secure, or free of viruses or other harmful components.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">8. Limitation of Liability</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 p-5 rounded-md">
                To the fullest extent permitted by applicable law, in no event shall iNextERP Solution, its affiliates, officers, directors, 
                employees, agents, suppliers, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages 
                (including without limitation damages for loss of profits, data, use, goodwill, or other intangible losses) arising out of or relating to 
                your access to or use of (or inability to access or use) our Website or Services, whether based on warranty, contract, tort (including negligence), 
                statute, or any other legal theory, even if we have been advised of the possibility of such damages. Our total liability to you for all 
                claims arising out of or relating to these Terms or your use of our Website or Services shall not exceed the amount you paid to us (if any) 
                in the twelve (12) months preceding the event giving rise to the liability, or INR 1000 if no such payment was made.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">9. Indemnification</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                You agree to indemnify, defend, and hold harmless iNextERP Solution, its affiliates, officers, directors, employees, agents, 
                suppliers, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees 
                (including reasonable attorneys' fees) arising out of or relating to: (a) your use of our Website or Services; 
                (b) Your Content; (c) your violation of these Terms; or (d) your violation of any rights of another party.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">10. Governing Law and Dispute Resolution</h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India, 
                without regard to its conflict of law principles.
              </p>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                <strong>Dispute Resolution:</strong> Any dispute arising out of or relating to these Terms or your use of our Website or 
                Services shall be subject to the exclusive jurisdiction of the courts located in Noida, India.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">11. Termination</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                We may terminate these Terms at any time, with or without cause, and with or without notice. Upon termination, your right to access 
                and use our Website and Services will immediately cease. All provisions of these Terms which by their nature should survive termination 
                shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">12. Entire Agreement</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                These Terms constitute the entire agreement between you and iNextERP Solution regarding your access to and use of 
                our Website and Services and supersede all prior or contemporaneous communications and proposals, whether oral or written.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">13. Severability</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and 
                the remaining provisions shall remain in full force and effect.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">14. Waiver</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">15. Contact Us</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:info@inexterpsolutions.com" className="text-primary hover:underline">info@inexterpsolutions.com</a>
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800/90 p-6 rounded-lg mt-10 mb-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  By using our Website and Services, you acknowledge that you have read and understood these Terms and agree to be bound by them.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Important Considerations for India</h3>
                <ul className="list-disc pl-8 mb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Information Technology Act, 2000:</strong> These Terms comply with the provisions of the Information Technology Act, 2000, and any relevant rules and regulations thereunder.
                  </li>
                  <li>
                    <strong>Consumer Protection Laws:</strong> Our Terms are designed to be fair and not misleading to consumers, in accordance with Indian consumer protection laws.
                  </li>
                  <li>
                    <strong>Specific Clauses:</strong> Depending on the nature of your Services, you may need to include specific clauses related to data privacy (though that is typically covered in a separate Privacy Policy), service levels, warranties specific to your services, and any other terms relevant to your offerings.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsConditions;