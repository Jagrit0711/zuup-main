import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";
import { Link } from "react-router-dom";

const mozaEventsHero = "/moza_events_hero_1780978768456.png";
const mozaRocket = "/moza_rocket_skateboard_inverted_1780938078817.png";
const mozaSide = "/moza_cool_jumping_inverted_1780937501871.png";

const artFaraway = "/art_faraway_1780979214793.png";
const artCohort = "/art_cohort_1780979228987.png";
const artCycleRally = "/art_cyclerally_1780979240851.png";
const artStargazing = "/art_stargazing_1780979253321.png";
const artHardware = "/art_hardware_1780979266323.png";

const EventCard = ({ title, date, location, description, image, link, linkText, isPast }: any) => {
  const content = (
    <div className={`relative h-full flex flex-col justify-end p-6 md:p-8 rounded-[2rem] overflow-hidden group border border-white/10 hover:border-white/30 transition-all duration-300 ${isPast ? 'opacity-80 hover:opacity-100 grayscale-[0.3] hover:grayscale-0' : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20'}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-end min-h-[300px]">
        {isPast && (
          <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white/80 border border-white/10">
            Past Event
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Caveat', cursive", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            {title}
          </h3>
          <p className="text-white/80 font-medium text-sm md:text-base">
            {location} · {date}
          </p>
        </div>

        <p className="text-white/70 text-sm md:text-base mb-8 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          {link && (
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${isPast ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20'}`}>
              {linkText} {link.startsWith('http') ? <ExternalLink size={18} /> : <ArrowRight size={18} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (link) {
    if (link.startsWith('http')) {
      return <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">{content}</a>;
    }
    return <Link to={link} className="block h-full">{content}</Link>;
  }

  return <div className="h-full">{content}</div>;
};

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events & Hackathons — Zuup</title>
        <meta name="description" content="Join the chaos. Explore upcoming Zuup hackathons, bootcamps, and community events." />
      </Helmet>

      <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <div className="pt-32 pb-16 px-4 relative flex flex-col items-center justify-center text-center">
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 h-64 opacity-30 pointer-events-none hidden md:block"
          >
            <TransparentMoza src={mozaEventsHero} alt="Event Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-10 w-56 h-56 opacity-20 pointer-events-none hidden lg:block"
          >
            <TransparentMoza src={mozaSide} alt="Side Moza" className="w-full h-full object-contain" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[12vw] sm:text-7xl md:text-[8rem] font-bold text-foreground leading-[0.9] mb-8 relative z-10"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            We Build. <br/> <span className="text-primary underline decoration-wavy underline-offset-[12px]">We Gather.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-muted-foreground font-medium max-w-3xl leading-relaxed mx-auto relative z-10"
          >
            Hackathons, bootcamps, and tech meetups. Get off the internet and come build with us in person.
          </motion.p>
        </div>

        {/* Events Feed Grid */}
        <div className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Upcoming/Current */}
              <EventCard 
                title="FAR AWAY Hackathon"
                date="2026"
                location="Online -> Delhi -> Tokyo"
                description="India's biggest international youth hackathon. From your screen, across Delhi, all the way to Tokyo. Top 5 teams fly to Japan fully sponsored."
                image={artFaraway}
                link="/hackathon"
                linkText="View Hackathon"
                isPast={false}
              />

              <EventCard 
                title="Zuup Cohort 01 — Summer"
                date="July - September 2026"
                location="India · Dubai · Giza"
                description="A selective student fellowship focused on execution. We don't believe students learn through PDFs. Deploy skills to run actual campaigns for Gurudikshaam."
                image={artCohort}
                link="https://summer.zuup.dev"
                linkText="Apply for Cohort"
                isPast={false}
              />

              <EventCard 
                title="Zuup x Gurudikshaam Cycle Rally"
                date="July 25-30, 2026"
                location="Delhi NCR"
                description="A massive physical endurance event pushing limits and building community resilience across the region."
                image={artCycleRally}
                link="mailto:hello@zuup.dev?subject=Cycle Rally Info"
                linkText="Join the Rally"
                isPast={false}
              />

              <div className="md:col-span-2 py-12 flex items-center gap-4">
                <div className="h-px bg-border/50 flex-1"></div>
                <span className="text-2xl font-bold text-muted-foreground" style={{ fontFamily: "'Caveat', cursive" }}>The Archive</span>
                <div className="h-px bg-border/50 flex-1"></div>
              </div>

              {/* Past Events */}
              <EventCard 
                title="Stargazing Hackathon"
                date="April 10th"
                location="Delhi -> Mussoorie"
                description="Hack the night away. We pick you up from Delhi and head to the mountains. Theme: Signal in the sky. Built something that helps people notice hidden patterns under the stars."
                image={artStargazing}
                link="https://stargazing.zuup.dev"
                linkText="View Event"
                isPast={true}
              />

              <EventCard 
                title="Hardware Grant Event"
                date="Early 2026"
                location="Tokyo, Japan"
                description="Funding and equipping young builders with the hardware they need to bring massive ideas to life. From soldering irons to single-board computers."
                image={artHardware}
                link="mailto:hello@zuup.dev?subject=Hardware Grant"
                linkText="View Gallery"
                isPast={true}
              />
            </div>

          </div>
        </div>

        {/* Massive Final CTA */}
        <div className="py-32 border-t border-border/10 text-center px-4 relative flex flex-col items-center justify-center">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 mb-8"
          >
            <TransparentMoza src={mozaRocket} alt="Rocket Moza" className="w-full h-full object-contain" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8" style={{ fontFamily: "'Caveat', cursive" }}>Wanna be part of something cool, right?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">Join the community. Hop into the Slack and start building with hundreds of other young creators.</p>
          <a
            href="https://faraway.zuup.dev/slack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-4 px-12 py-6 bg-primary text-primary-foreground font-bold text-2xl rounded-2xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,61,127,0.3)] transition-all"
          >
            Join Slack <ExternalLink size={24} />
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Events;
