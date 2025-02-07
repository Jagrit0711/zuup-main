
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Code2, Palette, Video } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "design", name: "Design", icon: Palette },
    { id: "video", name: "Video Editing", icon: Video },
    { id: "code", name: "Coding", icon: Code2 },
  ];

  const projects = [
    {
      id: 1,
      title: "Digital Art Workshop",
      category: "design",
      description: "Teaching digital art fundamentals to underprivileged youth",
      image: "https://picsum.photos/400/300",
    },
    {
      id: 2,
      title: "Video Editing Course",
      category: "video",
      description: "Professional video editing skills training program",
      image: "https://picsum.photos/401/300",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      category: "code",
      description: "Intensive coding bootcamp for aspiring developers",
      image: "https://picsum.photos/402/300",
    },
  ];

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Our Projects | Zuup</title>
        <meta name="description" content="Explore our various projects empowering youth through digital skills training." />
      </Helmet>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1]">
            Our Projects
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                activeCategory === category.id
                  ? "bg-[#ea384c] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl overflow-hidden group"
            >
              <motion.div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
