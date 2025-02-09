
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Medal, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Hackathon = () => {
  const { data: hackathon, isLoading } = useQuery({
    queryKey: ["hackathon"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("hackathon_events")
        .select("*")
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {hackathon?.name}
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {hackathon?.description}
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FF6D59] to-[#ea384c] hover:opacity-90"
              >
                <a href={hackathon?.registration_link} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Key Details Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-black p-6 rounded-lg"
              >
                <CalendarDays className="w-12 h-12 text-[#FF6D59] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Registration Deadline</h3>
                <p className="text-gray-400">
                  {new Date(hackathon?.registration_deadline).toLocaleDateString()}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-black p-6 rounded-lg"
              >
                <Users className="w-12 h-12 text-[#FF6D59] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Registration Fee</h3>
                <p className="text-gray-400">₹{hackathon?.registration_fee} per team</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-black p-6 rounded-lg"
              >
                <Medal className="w-12 h-12 text-[#FF6D59] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Prizes</h3>
                <p className="text-gray-400">Smart Watch & More Goodies</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-black p-6 rounded-lg"
              >
                <Clock className="w-12 h-12 text-[#FF6D59] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
                <p className="text-gray-400">Problem Statements & Judges Panel</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">In Collaboration With</h2>
            <div className="flex justify-center items-center space-x-12">
              <img 
                src="/lovable-uploads/b44b8051-6117-4b37-999d-014c4c33dd13.png" 
                alt="Zuup Logo" 
                className="h-16 md:h-20"
              />
              <img 
                src="/lovable-uploads/dcb03761-44e9-4b86-8627-04ac72de3491.png" 
                alt="Zylon Labs Logo" 
                className="h-16 md:h-20"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hackathon;
