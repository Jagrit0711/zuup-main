import { Heart } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const DonationSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_PbURC7JG32Etib");
    script.async = true;

    const form = document.getElementById("razorpay-form");
    if (form) form.appendChild(script);

    return () => {
      if (form && script.parentNode === form) form.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="glass-card rounded-2xl p-10 md:p-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(var(--primary))]/10 mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="h-7 w-7 text-[hsl(var(--primary))]" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Support Our Mission
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Your contribution helps us empower underprivileged kids through freelancing
          opportunities. Every donation makes a difference in shaping their future.
        </p>

        <form id="razorpay-form" className="inline-block" />
      </motion.div>
    </div>
  );
};

export default DonationSection;
