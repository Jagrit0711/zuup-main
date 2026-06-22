import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";

const roasts = [
  { moza: "/moza-circuit.png",                    line: "You searched for shoes. We build the software that could run a shoe store." },
  { moza: "/moza-hacker-inverted.png",             line: "They sell soles. We build souls — the kind that ships to production." },
  { moza: "/moza-sneakers.png",                    line: "Wrong tab, right vibe. Zuup.dev is where you learn to code, not shop." },
  { moza: "/moza-cool-jumping-inverted.png",       line: "Zuup Store has inventory. We have curiosity — and it compounds way better." },
  { moza: "/moza-rocket-skateboard-inverted.png",  line: "They have Red Chief. We have GitHub profiles. Both kinds of flex." },
  { moza: "/moza-teaching-inverted.png",           line: "No shade to shoe Zuup. We just think brains appreciate more than soles." },
];

const faqs = [
  {
    q: "Is Zuup a shoe store?",
    a: "Absolutely not. Zuup (zuup.dev) is a tech-first youth NPO that teaches coding, design, and freelancing for free. If you're looking for footwear, you may be thinking of zuupstores.com — a completely separate brand we have zero affiliation with."
  },
  {
    q: "What is the real Zuup?",
    a: "The real Zuup is zuup.dev — a teen-led movement that forces young people to build incredibly cool tech. We train youth in graphic design, video editing, web development, and coding. Free. Always."
  },
  {
    q: "Is Zuup.dev related to Zuup Stores?",
    a: "Nope! Zuup.dev (the NPO) and Zuup Stores (the footwear retailer) share only their name — nothing else. Different logos, different missions, different everything. We build humans who build software. They build shoe collections."
  },
  {
    q: "Who founded Zuup?",
    a: "Jagrit Sachdev founded zuup.dev in 2024 as a youth empowerment initiative under Zylon Labs. Zuup the NPO has won the SME Business of the Year Award 2025 and published AI for Social Good research."
  },
  {
    q: "Can I join Zuup?",
    a: "YES. And you don't need a credit card or shoe size. Just go to zuup.dev/join. It's free, it's for teens, and you'll come out building things that actually matter."
  },
  {
    q: "Does Zuup sell anything?",
    a: "We sell nothing. We build free tools like ZuupCode (a browser IDE) and ZuupTime (a coding tracker). The only thing you'll spend here is curiosity — and you'll get back 10x."
  },
];

const ZuupStore = () => {
  return (
    <>
      <Helmet>
        <title>Zuup Store? Wrong Zuup! — Zuup.dev is the Real Zuup | Tech NPO India</title>
        <meta
          name="description"
          content="Looking for Zuup Store shoes? Wrong Zuup! Zuup.dev is a teen-led tech NPO — not a footwear brand. We teach coding, design & freelancing for FREE. Zuup = zuup.dev."
        />
        <meta
          name="keywords"
          content="Zuup, Zuup Store, Zuup shoes, Zuup footwear, Zuup slippers, Zuup sandals, Zuup sneakers, is Zuup a shoe brand, Zuup NPO, Zuup tech, zuup.dev, Zuup India, Zuup not footwear, real Zuup, Zuup disambiguation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://zuup.dev/zuup-store" />
        <meta property="og:title" content="Zuup Store? Wrong Zuup! — Zuup.dev is the Tech NPO, Not the Shoe Store" />
        <meta property="og:description" content="If you searched 'Zuup' looking for shoes — surprise! You found the better Zuup. We don't sell soles, we build souls who code." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zuup.dev/zuup-store" />
        <meta property="og:image" content="https://zuup.dev/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ${JSON.stringify(faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            })))}
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://zuup.dev/zuup-store#webpage",
            "url": "https://zuup.dev/zuup-store",
            "name": "Zuup Store Disambiguation — Zuup.dev is the Real Zuup",
            "description": "Zuup.dev is a tech NPO. Zuup Stores is a footwear retailer. These are two completely separate organizations sharing a name.",
            "about": {
              "@type": "Organization",
              "name": "Zuup",
              "url": "https://zuup.dev"
            },
            "inLanguage": "en-IN"
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-foreground font-sans relative overflow-hidden flex flex-col">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 text-center relative">
          {/* Sneaker Moza — big and floating */}
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-56 h-56 md:w-80 md:h-80 mx-auto mb-2"
          >
            <TransparentMoza
              src="/moza-sneakers.png"
              alt="Moza holding a sneaker"
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,61,127,0.3)]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
          >
            Wrong{" "}
            <span className="text-primary underline decoration-wavy underline-offset-[10px]">Zuup!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-4xl text-white/70 max-w-3xl mx-auto mb-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            You were looking for shoes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            You found{" "}
            <span className="text-primary">brains</span> instead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/"
              className="px-10 py-4 bg-primary text-white rounded-[3rem] text-2xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] active:translate-y-2 active:shadow-none transition-all"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
            >
              visit the real zuup →
            </Link>
            <a
              href="https://zuup.dev/join"
              className="px-10 py-4 bg-transparent border-2 border-primary text-primary rounded-[3rem] text-2xl font-bold hover:bg-primary/10 transition-all"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
            >
              join for free
            </a>
          </motion.div>
        </section>

        {/* What We Are vs What You Expected */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-4xl md:text-6xl font-bold text-center text-white mb-12"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              zuup store has money.{" "}
              <span className="text-primary underline decoration-wavy underline-offset-[8px]">we have brain.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Them */}
              <div className="p-8 bg-[#0B0E14] border-2 border-white/10 rounded-3xl opacity-60">
                <TransparentMoza src="/moza-sneakers.png" alt="Shoe Moza" className="w-20 h-20 object-contain mb-4 opacity-40" />
                <h3 className="text-3xl font-bold text-white/60 mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
                  zuup stores (the shoe one)
                </h3>
                <ul className="space-y-3 text-white/50 text-xl" style={{ fontFamily: "'Caveat', cursive" }}>
                  <li>Sells shoes from Red Chief and comfort brands</li>
                  <li>Has a nice store in Gorakhpur</li>
                  <li>Very nice shoes, honestly</li>
                  <li className="text-white/30 line-through">Teaches you to build the future</li>
                </ul>
              </div>

              {/* Us */}
              <div className="p-8 bg-[#0B0E14] border-[3px] border-primary rounded-3xl shadow-[0_0_40px_rgba(255,61,127,0.2)]">
                <TransparentMoza src="/moza-cool.png" alt="Cool Moza" className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
                  zuup.dev (the real one)
                </h3>
                <ul className="space-y-3 text-white text-xl" style={{ fontFamily: "'Caveat', cursive" }}>
                  <li>Free coding education for teens</li>
                  <li>Graphic design, video editing, web dev</li>
                  <li>Freelance career preparation</li>
                  <li>SME Business of the Year Award 2025</li>
                  <li>Published AI for Social Good research</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Roast Cards — all Moza, no emojis */}
        <section className="py-16 px-4 bg-[#080808]">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold text-center text-white mb-3"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              6 reasons wrong zuup is actually the best zuup
            </h2>
            <p className="text-center text-white/50 text-xl mb-12" style={{ fontFamily: "'Caveat', cursive" }}>
              (with love to the shoe brand. seriously. nice slippers.)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roasts.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-[#0B0E14] border-2 border-white/10 rounded-2xl hover:border-primary/40 transition-colors"
                >
                  <TransparentMoza src={r.moza} alt="Moza" className="w-20 h-20 object-contain mb-3" />
                  <p className="text-white text-xl leading-relaxed" style={{ fontFamily: "'Caveat', cursive" }}>
                    {r.line}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Moza pitch section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-52 h-52 mx-auto mb-8"
            >
              <TransparentMoza
                src="/moza-floating-inverted.png"
                alt="Moza floating"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,61,127,0.4)]"
              />
            </motion.div>
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              ok fine, you're here now.
              <br />
              <span className="text-primary">stay and learn something.</span>
            </h2>
            <p
              className="text-2xl text-white/60 max-w-2xl mx-auto mb-10"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Zuup.dev is free. No credit card. No shoe size required. Just curiosity and a dream of building stuff.
            </p>
            <Link
              to="/empower"
              className="inline-block px-12 py-5 bg-primary text-white rounded-[3rem] text-3xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] transition-all"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
            >
              see what we do →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-[#080808]">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              the "wait, which zuup?" faq
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="p-6 bg-[#0B0E14] border-l-4 border-primary rounded-r-2xl rounded-l-sm"
                >
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Caveat', cursive" }}>
                    {faq.q}
                  </h3>
                  <p className="text-white/70 text-xl leading-relaxed" style={{ fontFamily: "'Caveat', cursive" }}>
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 text-center">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-44 h-44 mx-auto mb-8">
            <TransparentMoza src="/moza-graduate-inverted.png" alt="Moza graduate" className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(255,61,127,0.3)]" />
          </motion.div>
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            zuup = <span className="text-primary underline decoration-wavy underline-offset-[10px]">zuup.dev</span>
          </h2>
          <p className="text-3xl text-white/60 mb-10" style={{ fontFamily: "'Caveat', cursive" }}>
            nothing else. ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="px-12 py-5 bg-primary text-white rounded-[3rem] text-3xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] transition-all"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              go to zuup.dev →
            </Link>
            <Link
              to="/careers"
              className="px-12 py-5 border-2 border-white/20 text-white rounded-[3rem] text-3xl font-bold hover:border-primary transition-all"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              see open roles
            </Link>
          </div>
        </section>

        <div className="bg-[#050505] relative z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ZuupStore;
