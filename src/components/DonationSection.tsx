import { Heart } from 'lucide-react';
import { useEffect } from 'react';

const DonationSection = () => {
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_PbURC7JG32Etib');
    script.async = true;
    
    // Find the form element and append the script
    const form = document.getElementById('razorpay-form');
    if (form) {
      form.appendChild(script);
    }

    // Cleanup
    return () => {
      if (form && script) {
        form.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-br from-[#ea384c]/10 to-[#4299e1]/5 rounded-2xl p-8 border border-[#4299e1]/20">
        <div className="text-center space-y-6">
          <div className="inline-block p-3 bg-[#ea384c]/10 rounded-full">
            <Heart className="h-8 w-8 text-[#ea384c]" />
          </div>
          
          <h2 className="text-3xl font-bold text-white">
            Support Our Mission
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your contribution helps us empower underprivileged kids through freelancing opportunities. Every donation makes a difference in shaping their future.
          </p>
          
          <form id="razorpay-form" className="inline-block">
            {/* Razorpay script will inject the payment button here */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;