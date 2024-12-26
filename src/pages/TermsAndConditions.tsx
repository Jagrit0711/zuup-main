import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TermsAndConditions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      
      <motion.div 
        className="max-w-4xl mx-auto px-4 py-24 text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-[#9b87f5]"
          variants={sectionVariants}
        >
          Terms and Conditions for Zuup
        </motion.h1>

        <motion.div 
          className="prose prose-invert max-w-none space-y-8"
          variants={containerVariants}
        >
          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">1. Introduction</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zuup is a community-driven project started by Zylon Labs, designed to empower individuals by teaching valuable skills and connecting them to opportunities.</li>
              <li>This document outlines the terms governing your use of our website and services, including our policies on cookies, privacy, and donation management.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">2. Acceptance of Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>By accessing our website or using our services, you agree to these terms and conditions.</li>
              <li>If you do not agree with any part of these terms, please refrain from using our services.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">3. Cookies Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zuup does not actively collect or use cookies for tracking. Any AI chatbot usage on our platform falls under the terms and conditions of third-party platforms such as Instagram.</li>
              <li>Users can continue browsing without concerns regarding cookies or tracking.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">4. Privacy Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">4.1 Data Collection:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not collect data unless you make a donation or contact us directly.</li>
                  <li>Minimal personal details such as name and payment information are collected during donations for transparency and acknowledgment purposes.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">4.2 Use of Data:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To facilitate donations and manage transactions.</li>
                  <li>To improve our initiatives and services based on feedback.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">5. Donation Management</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">5.1 Usage of Funds:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Donations are used to fund workshops and other initiatives targeting individuals aged 13 and above or senior citizens, depending on the program.</li>
                  <li>All funds, after deduction of transaction fees (e.g., bank or Razorpay fees), are transferred to the partner NGO or program.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">5.2 Transparency:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Donors will receive updates about how their contributions are used.</li>
                  <li>Funds are initially deposited in the banking account under the name <strong>Jagrit Sachdev</strong> for organizational convenience and then transferred to the NGO or initiative.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">5.3 Refund Policy:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Donations are non-refundable once processed.</li>
                  <li>Contact us for any discrepancies or issues.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">6. Ownership</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zuup is a collaborative project under the umbrella of Zylon Labs but belongs to its founder Jagrit Sachdev and its team members.</li>
              <li>For any legal disputes, Zylon Labs is not liable, as Zuup operates independently.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content on the Zuup website, including text and visuals, belongs to Zuup and its contributors unless stated otherwise.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">8. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users are expected to provide accurate details during donations or inquiries.</li>
              <li>Misuse of the platform or services is strictly prohibited.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">9. Changes to Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zuup reserves the right to update these terms at any time. Updates will be posted here, and continued use indicates agreement.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">10. Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zuup is not liable for any indirect consequences resulting from its services or website usage.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-[#8E9196]/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#9b87f5] mb-4">11. Governing Law</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>These terms are governed by Indian law, and disputes will be resolved under Delhi jurisdiction.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
