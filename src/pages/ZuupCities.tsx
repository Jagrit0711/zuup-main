import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ZUUP_LOCATIONS } from "./ZuupCity";
import TransparentMoza from "../components/TransparentMoza";

const ZuupCities = () => {
  const chapters = ZUUP_LOCATIONS.filter(l => l.hasChapter);
  const india = ZUUP_LOCATIONS.filter(l => l.country === "India" && !l.hasChapter);
  const international = ZUUP_LOCATIONS.filter(l => l.country !== "India" && !l.hasChapter);

  return (
    <>
      <Helmet>
        <title>Zuup Worldwide — Active in India, UAE, Egypt & 100+ Cities | Tech NPO</title>
        <meta name="description" content="Zuup (zuup.dev) is present in 100+ cities worldwide — Delhi, Dubai, Giza, Mumbai, Bangalore, London, New York, Singapore and more. Find Zuup in your city or start an Empower chapter." />
        <meta name="keywords" content="Zuup worldwide, Zuup India, Zuup Dubai, Zuup Giza, Zuup cities, Zuup chapters, Zuup global, tech NPO worldwide, free coding worldwide, youth NPO all countries, zuup.dev global" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://zuup.dev/zuup-cities" />
        <meta property="og:title" content="Zuup Worldwide — 100+ Cities | Free Tech Education Globally" />
        <meta property="og:description" content="Find Zuup in your city. Free coding, design & freelancing for teens across India, UAE, Egypt, UK, US, Africa, Asia and more." />
        <meta property="og:url" content="https://zuup.dev/zuup-cities" />
        <meta property="og:image" content="https://zuup.dev/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Zuup City Pages — Worldwide",
          "description": "Zuup (zuup.dev) city-specific pages for youth tech education across India and internationally",
          "numberOfItems": ZUUP_LOCATIONS.length,
          "itemListElement": ZUUP_LOCATIONS.map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": `Zuup in ${c.name}`,
            "url": `https://zuup.dev/zuup-in/${c.slug}`
          }))
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-foreground font-sans flex flex-col">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,61,127,0.07)_0%,transparent_60%)] pointer-events-none" />

          {/* Globe Moza */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-4 md:right-24 w-40 h-40 md:w-64 md:h-64 pointer-events-none"
          >
            <img src="/moza-globe.png" alt="Moza Globe" className="w-full h-full object-contain" style={{ mixBlendMode: "screen" }} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-24 left-4 md:left-24 w-36 h-36 md:w-52 md:h-52 pointer-events-none"
          >
            <img src="/moza-map-pin.png" alt="Moza Map" className="w-full h-full object-contain" style={{ mixBlendMode: "screen" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-5xl md:text-8xl font-bold text-white mb-6"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            zuup is{" "}
            <span className="text-primary underline decoration-wavy underline-offset-[10px]">everywhere</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Active chapters in India, UAE & Egypt. Expanding to 100+ cities worldwide. Find yours below.
          </motion.p>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://zuup.dev/join" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-white rounded-[3rem] text-2xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] transition-all"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              join zuup from anywhere →
            </a>
            <a href="https://zuup.dev/city" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-primary text-primary rounded-[3rem] text-2xl font-bold hover:bg-primary/10 transition-all"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              start a chapter in your city
            </a>
          </div>
        </section>

        {/* Active Chapters */}
        <section className="py-16 px-4 bg-[#080808]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <img src="/moza-megaphone-city.png" alt="Moza megaphone" className="w-14 h-14 object-contain" style={{ mixBlendMode: "screen" }} />
              <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>
                active empower chapters
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {chapters.map((loc, i) => (
                <motion.div key={loc.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/zuup-in/${loc.slug}`}
                    className="block p-5 bg-primary/10 border-[2px] border-primary rounded-2xl hover:bg-primary/20 hover:-translate-y-1 transition-all text-center"
                  >
                    <div className="text-white font-bold text-xl" style={{ fontFamily: "'Caveat', cursive" }}>{loc.name}</div>
                    <div className="text-primary text-base font-bold" style={{ fontFamily: "'Caveat', cursive" }}>{loc.region}</div>
                    <div className="text-white/40 text-sm mt-1" style={{ fontFamily: "'Caveat', cursive" }}>{loc.country}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* India Cities */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <img src="/moza-circuit.png" alt="Moza India" className="w-14 h-14 object-contain filter invert opacity-80" />
              <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>
                india — coming soon
              </h2>
            </div>
            <p className="text-white/50 text-xl mb-8" style={{ fontFamily: "'Caveat', cursive" }}>
              No Empower chapter yet — but you can still join Zuup from any of these cities, or start the very first chapter there.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {india.map((loc, i) => (
                <motion.div key={loc.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: Math.min(i * 0.015, 0.4) }}
                  viewport={{ once: true }}
                >
                  <Link to={`/zuup-in/${loc.slug}`}
                    className="block p-4 bg-[#0B0E14] border-2 border-white/10 rounded-2xl hover:border-primary hover:-translate-y-1 transition-all text-center"
                  >
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "'Caveat', cursive" }}>{loc.name}</div>
                    <div className="text-white/40 text-sm" style={{ fontFamily: "'Caveat', cursive" }}>{loc.region}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* International Cities */}
        <section className="py-16 px-4 bg-[#080808]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <img src="/moza-globe.png" alt="Moza Globe" className="w-14 h-14 object-contain" style={{ mixBlendMode: "screen" }} />
              <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Caveat', cursive" }}>
                rest of the world
              </h2>
            </div>
            <p className="text-white/50 text-xl mb-8" style={{ fontFamily: "'Caveat', cursive" }}>
              Zuup is going global. These cities don't have chapters yet — be the first.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {international.map((loc, i) => (
                <motion.div key={loc.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: Math.min(i * 0.015, 0.4) }}
                  viewport={{ once: true }}
                >
                  <Link to={`/zuup-in/${loc.slug}`}
                    className="block p-4 bg-[#0B0E14] border-2 border-white/10 rounded-2xl hover:border-primary hover:-translate-y-1 transition-all text-center"
                  >
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "'Caveat', cursive" }}>{loc.name}</div>
                    <div className="text-white/40 text-sm" style={{ fontFamily: "'Caveat', cursive" }}>{loc.country}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Start a chapter banner */}
        <section className="py-24 px-4 text-center">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-52 h-52 mx-auto mb-8">
            <img src="/moza-chapter.png" alt="Moza chapter" className="w-full h-full object-contain" style={{ mixBlendMode: "screen" }} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
            don't see your city?
          </h2>
          <p className="text-2xl text-white/60 mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'Caveat', cursive" }}>
            Apply anyway. Or better yet — start the Zuup Empower chapter in your city and change your whole scene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://zuup.dev/join" target="_blank" rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-primary text-white rounded-[3rem] text-2xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] transition-all"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              join zuup from anywhere →
            </a>
            <a href="https://zuup.dev/city" target="_blank" rel="noopener noreferrer"
              className="inline-block px-12 py-5 border-2 border-primary text-primary rounded-[3rem] text-2xl font-bold hover:bg-primary/10 transition-all"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              start a chapter in your city
            </a>
          </div>
        </section>

        <div className="bg-[#050505] relative z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ZuupCities;
