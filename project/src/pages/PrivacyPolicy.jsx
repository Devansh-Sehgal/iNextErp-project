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
      <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg p-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-4 border-gray-200 dark:border-gray-700">Privacy Policy</h1>
            
            <div className="prose max-w-none dark:prose-invert">
              <div className="bg-gray-50 dark:bg-gray-800/90 p-6 rounded-lg mb-10 shadow-sm">
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  At iNextERP Solution, we are committed to protecting the privacy of individuals who visit our website and use our services. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information. 
                  By accessing our Website or using our Services, you consent to the practices described in this Privacy Policy.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">1. Information We Collect</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">We may collect the following types of information:</p>
              <ul className="list-disc pl-8 mb-8 space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Personal Information:</strong> This includes information that can be used to identify you, such as your name, 
                  email address, phone number, company name, job title, and any other information you voluntarily provide to us through forms 
                  on our Website, during account registration, or in communication with us.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect information about how you access and use our Website and Services, 
                  including your IP address, browser type, operating system, referring URLs, pages visited, and the dates and times of your visits.
                </li>
                <li>
                  <strong>Device Information:</strong> We may collect information about the device you use to access our Website or Services, 
                  including the device model, operating system, unique device identifiers, and mobile network information.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We may use cookies, web beacons, and other tracking technologies 
                  to collect information about your browsing activities and preferences. You can control cookies through your browser settings.
                </li>
                <li>
                  <strong>Information You Provide Voluntarily:</strong> This includes any information you provide to us through surveys, 
                  feedback forms, customer support interactions, or other means.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">2. How We Use Your Information</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">We may use your information for the following purposes:</p>
              <ul className="list-disc pl-8 mb-8 space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>To Provide and Maintain our Services:</strong> To operate our Website and provide you with the Services you have requested.
                </li>
                <li>
                  <strong>To Communicate with You:</strong> To respond to your inquiries, provide customer support, and send you important notices and updates about our Services.
                </li>
                <li>
                  <strong>To Personalize Your Experience:</strong> To tailor our content and offerings to your interests and preferences.
                </li>
                <li>
                  <strong>To Improve our Website and Services:</strong> To analyze usage patterns and trends, and to develop and enhance our Website and Services.
                </li>
                <li>
                  <strong>For Marketing and Promotional Purposes:</strong> With your consent where required by applicable law, we may send you promotional emails and other marketing communications about our Services and related offerings.
                </li>
                <li>
                  <strong>For Security and Fraud Prevention:</strong> To protect our Website and Services from unauthorized access, misuse, and fraudulent activities.
                </li>
                <li>
                  <strong>To Comply with Legal Obligations:</strong> To comply with applicable laws, regulations, and legal processes.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">3. How We Share Your Information</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">We may share your information with the following categories of recipients:</p>
              <ul className="list-disc pl-8 mb-8 space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Service Providers:</strong> We may engage third-party service providers to assist us in operating our Website, providing our Services, conducting business analytics, processing payments, sending emails, and performing other functions.
                </li>
                <li>
                  <strong>Business Partners:</strong> We may share information with our business partners to offer you integrated services or promotions.
                </li>
                <li>
                  <strong>Affiliates:</strong> We may share information with our affiliated companies for internal business purposes.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> We may disclose your information to law enforcement agencies, government authorities, or other third parties if required by law or legal process, or if we believe in good faith that such disclosure is necessary to protect our rights, property, or safety.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with third parties with your explicit consent.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">4. Data Security</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                We take reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. 
                These measures include encryption, firewalls, secure servers, and access controls. However, please understand that no method of transmission over 
                the internet or method of electronic storage is completely secure, and we cannot guarantee the absolute security of your information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">5. Data Retention</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">6. Your Rights</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Depending on your location and applicable law, you may have certain rights regarding your personal information, including the right to:</p>
              <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete personal information.</li>
                <li><strong>Deletion:</strong> Request the deletion of your personal information.</li>
                <li><strong>Objection to Processing:</strong> Object to the processing of your personal information for certain purposes, such as direct marketing.</li>
                <li><strong>Restriction of Processing:</strong> Request the restriction of the processing of your personal information.</li>
                <li><strong>Data Portability:</strong> Request to receive your personal information in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Withdraw Consent:</strong> If we are processing your personal information based on your consent, you have the right to withdraw your consent at any time.</li>
              </ul>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                To exercise these rights, please contact us using the contact information provided below. We may require you to verify your identity before responding to your requests.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">7. Children's Privacy</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                Our Website and Services are not intended for children under the age of 15. We do not knowingly collect personal information from children. 
                If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">8. Links to Other Websites</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                Our Website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these websites. 
                We encourage you to review the privacy policies of those websites before providing any personal information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">9. Changes to this Privacy Policy</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated Privacy Policy on our Website and indicate the "Last Updated" date. 
                Your continued use of our Website or Services after the posting of a revised Privacy Policy constitutes your acceptance of the changes.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-5 text-gray-800 dark:text-gray-100">10. Contact Us</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                <br />
                <a href="mailto:Info@inexterpsolutions.com" className="text-primary hover:underline font-medium">Info@inexterpsolutions.com</a>
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800/90 p-6 rounded-lg mt-10 mb-8 shadow-sm">
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  By using our Website and Services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Important Considerations for India</h3>
                <ul className="list-disc pl-8 mb-6 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Sensitive Personal Data or Information (SPDI):</strong> Under the IT Rules, certain categories of personal information are considered "sensitive personal data or information" (SPDI). 
                    This includes passwords, financial information, health information, biometric information, etc. We implement specific security practices and obtain explicit consent for its collection and processing.
                  </li>
                  <li>
                    <strong>Reasonable Security Practices and Procedures:</strong> We implement and maintain reasonable security practices and procedures to protect the personal information we collect as mandated by the IT Rules.
                  </li>
                  <li>
                    <strong>Grievance Officer:</strong> In accordance with the IT Rules, we have designated a Grievance Officer to address any complaints or concerns regarding the processing of personal information.
                  </li>
                </ul>
                
                <p className="text-sm mt-8 text-gray-600 dark:text-gray-400 italic">
                  Disclaimer: For any questions or concerns about this Privacy Policy, please contact us at info@inexterpsolutions.com. We will respond to your inquiry within 7 days after verifying your identity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;