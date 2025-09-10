import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink, Star, Sparkles } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "SME Business of the Year Award Winner 2025",
      description: "Zuup recognized as the outstanding SME business for innovative social impact and youth empowerment initiatives",
      link: "https://www.greatcompanies.in/post/zuup-sme-business-of-the-year-award-winner-2025",
      icon: Trophy,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
      title: "AI for Social Good Research Paper",
      description: "Published groundbreaking research on identifying and bridging freelance skill gaps in underprivileged communities using machine learning",
      link: "https://doi.org/10.22214/ijraset.2025.73265",
      icon: Award,
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      glowColor: "shadow-blue-500/50"
    }
  ];

  const floatingAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleAnimation = {
    initial: { scale: 0, rotate: 0 },
    animate: { 
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        staggerChildren: 0.5
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            {...floatingAnimation}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <Sparkles className="w-12 h-12 text-yellow-400" />
              <motion.div
                {...sparkleAnimation}
                className="absolute -top-2 -right-2"
              >
                <Star className="w-6 h-6 text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">
              Recent Achievements
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full mx-auto max-w-xs"
          />
          
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Celebrating groundbreaking milestones that showcase our commitment to innovation and social impact
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 ${achievement.glowColor} hover:shadow-2xl`}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      {...floatingAnimation}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${achievement.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-500 transition-all duration-300">
                      {achievement.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    {/* CTA Link */}
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${achievement.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                  
                  {/* Decorative Elements */}
                  <motion.div
                    {...sparkleAnimation}
                    className="absolute top-4 right-4 opacity-20 group-hover:opacity-40"
                  >
                    <Sparkles className={`w-6 h-6 text-yellow-400`} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 text-gray-400">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-24" />
            <span className="text-sm font-medium">More achievements coming soon</span>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-24" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;