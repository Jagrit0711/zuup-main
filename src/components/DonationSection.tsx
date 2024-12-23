import { Heart } from 'lucide-react';

const DonationSection = () => {
  const handleDonateClick = () => {
    window.open('https://rzp.io/rzp/gaRST27V', '_blank');
  };

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
          
          <button
            onClick={handleDonateClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ea384c] to-[#4299e1] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;