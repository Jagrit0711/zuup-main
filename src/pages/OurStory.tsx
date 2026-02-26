import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Users, Award, Calendar, Heart, BookOpen, Lightbulb, Globe, Rocket, Star, Code, Palette, Video } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingBackground from "../components/FloatingBackground";

const OurStory = () => {
  const impactMetrics = [
    { label: "Youth Trained", value: "500+", icon: Users },
    { label: "Skill Programs", value: "3", icon: Award },
    { label: "Founded", value: "2024", icon: Calendar },
    { label: "Partner NGOs", value: "10+", icon: Globe },
  ];

  const timelineEvents = [
    {
      year: "2024",
      title: "The Spark",
      description: "At just 16, Jagrit Sachdev saw the digital divide first-hand. Kids with talent but no access. The idea for Zuup was born — not as charity, but as a launchpad.",
      icon: Lightbulb,
    },
    {
      year: "Early 2025",
      title: "Building the Foundation",
      description: "Zuup officially became part of Zylon Labs. The team designed a curriculum covering graphic design, video editing, and coding — skills that translate directly into freelance income.",
      icon: BookOpen,
    },
    {
      year: "March 2025",
      title: "First Batch Launched",
      description: "The first cohort of trainees began their journey. Within weeks, students were completing real client projects and earning their first income online.",
      icon: Rocket,
    },
    {
      year: "2025",
      title: "Research Published",
      description: "Zuup's AI-powered skill-gap analysis methodology was published in IJRASET, validating our data-driven approach to digital empowerment.",
      icon: Star,
    },
    {
      year: "2025+",
      title: "Scaling Nationwide",
      description: "Expanding to 10+ partner NGOs, hiring state heads across India, and building a self-sustaining ecosystem where trained youth become the next generation of mentors.",
      icon: Globe,
    },
  ];

  const skills = [
    { icon: Palette, name: "Graphic Design", desc: "Brand identity, social media, UI/UX — from Canva to Figma" },
    { icon: Video, name: "Video Editing", desc: "Reels, YouTube content, client work — CapCut to Premiere" },
    { icon: Code, name: "Web Development", desc: "HTML, CSS, JavaScript, React — building real products" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Story — How Zuup Empowers Youth Through Digital Skills | Founded by Jagrit Sachdev</title>
        <meta name="description" content="Zuup is a teen-led NPO founded by Jagrit Sachdev that trains underprivileged youth in graphic design, video editing, and coding. Learn our story of empowerment over charity." />
        <meta name="keywords" content="Zuup, Zuup NPO, Zuup NGO, Jagrit Sachdev, teen-led nonprofit, digital skills training, youth empowerment India, freelance training, zuup.dev" />
        <link rel="canonical" href="https://zuup.dev/our-story" />
        
        <meta property="og:title" content="Our Story — How Zuup Empowers Youth Through Digital Skills" />
        <meta property="og:description" content="From a 16-year-old's vision to a nationwide movement. Zuup trains underprivileged youth in real digital skills for real income." />
        <meta property="og:url" content="https://zuup.dev/our-story" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://zuup.dev/og-image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Story — Zuup: Empowerment Over Charity" />
        <meta name="twitter:description" content="A teen-led NPO training underprivileged youth in digital skills. Founded by 16-year-old Jagrit Sachdev." />
        <meta name="twitter:image" content="https://zuup.dev/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Our Story — How Zuup Empowers Youth Through Digital Skills",
            "author": {
              "@type": "Person",
              "name": "Jagrit Sachdev",
              "url": "https://zuup.dev/jagrit-sachdev",
              "sameAs": "https://www.linkedin.com/in/jagritsachdev"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString(),
            "publisher": {
              "@type": "Organization",
              "name": "Zuup",
              "url": "https://zuup.dev",
              "logo": { "@type": "ImageObject", "url": "https://zuup.dev/og-image.png" }
            },
            "description": "How a 16-year-old founded Zuup, a teen-led NPO that trains underprivileged youth in graphic design, video editing, and coding for freelance careers.",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://zuup.dev/our-story" }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <FloatingBackground />
        <Navbar />
        
        <div className="max-w-5xl mx-auto px-4 pt-28 pb-20">
          {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">Our Journey</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              From a Teen's Vision<br />
              <span className="text-primary">To a Movement</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Zuup started with a simple belief: every young person deserves a shot at the digital economy — 
              not through handouts, but through real skills that pay real money.
            </p>
          </motion.div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-3">
                  <metric.icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{metric.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* The Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12 mb-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart size={20} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Why Zuup Exists</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In India, millions of young people have smartphones but no idea how to turn them into income. 
                They scroll through Instagram watching others succeed, not realising that the same phone in their 
                pocket is a professional design studio, a video editing suite, and a coding environment.
              </p>
              <p>
                Jagrit Sachdev saw this gap at 16 and refused to accept it. Not as a billionaire philanthropist 
                writing cheques, but as a teenager who understood the digital world these kids lived in. He didn't 
                want to build another NGO that hands out laptops and walks away. He wanted to build something that 
                actually works.
              </p>
              <p>
                Zuup's model is brutally simple: find talented youth through partner NGOs, teach them marketable 
                digital skills in 8-12 weeks, connect them with freelance clients, and let their work speak for 
                itself. No charity labels. No pity. Just professionals earning their keep.
              </p>
              <p>
                The curriculum is built on real-world data. Zuup's AI-powered skill-gap analysis (published in IJRASET) 
                identifies exactly which skills have the highest demand-to-supply ratio in the freelance market, 
                ensuring every hour of training translates into earning potential.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Timeline</span>
              <h2 className="text-3xl font-bold text-foreground">The Journey So Far</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />
              
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-start mb-10 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10 mt-1.5" />
                    
                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon size={16} className="text-primary" />
                          </div>
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">{event.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Skills We Teach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">What We Teach</span>
              <h2 className="text-3xl font-bold text-foreground">Skills That Pay Bills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-2xl p-7 text-center group"
                    whileHover={{ y: -4 }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/15 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Founder Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-strong rounded-2xl p-10 md:p-14 text-center mb-24"
          >
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6 italic">
              "We don't want to be the organisation that gives people fish. We want to be the one that 
              makes them fishermen — and then helps them start a fishing business."
            </blockquote>
            <div className="text-primary font-semibold">Jagrit Sachdev</div>
            <div className="text-sm text-muted-foreground">Founder, Zuup · Age 16</div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Join the Movement</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you want to volunteer, partner with us, or sponsor a trainee — there's a role for you in building
              a more digitally inclusive future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Apply to Volunteer
              </a>
              <a
                href="/#contact"
                className="px-8 py-3.5 glass-card-strong text-foreground font-semibold rounded-xl hover:shadow-md transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default OurStory;
