import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "SME Business of the Year Award Winner 2025",
      description: "Zuup recognized as the outstanding SME business for innovative social impact and youth empowerment initiatives",
      link: "https://www.greatcompanies.in/post/zuup-sme-business-of-the-year-award-winner-2025",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "AI for Social Good Research Paper",
      description: "Published groundbreaking research on identifying and bridging freelance skill gaps in underprivileged communities using machine learning",
      link: "https://doi.org/10.22214/ijraset.2025.73265",
      icon: Award,
      color: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Recent Achievements
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones that showcase our commitment to innovation and social impact
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-card/70 transition-all duration-300 h-full">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${achievement.color} p-3 mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* CTA Link */}
                  <motion.a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;