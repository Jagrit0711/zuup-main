import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TransparentMoza from "../components/TransparentMoza";

// ─────────────────────────────────────────────
// LOCATION DATABASE
// ─────────────────────────────────────────────

type LocationEntry = {
  slug: string;
  name: string;
  region: string;         // state / country / territory
  country: string;
  hasChapter: boolean;    // true = Empower chapter exists
};

export const ZUUP_LOCATIONS: LocationEntry[] = [
  // ── INDIA — Chapter confirmed ──────────────────────────────────────
  { slug: "delhi",               name: "Delhi",               region: "Delhi",           country: "India", hasChapter: true },
  { slug: "new-delhi",           name: "New Delhi",           region: "Delhi",           country: "India", hasChapter: true },

  // ── INDIA — All major cities (no confirmed chapter yet) ───────────
  { slug: "mumbai",              name: "Mumbai",              region: "Maharashtra",      country: "India", hasChapter: false },
  { slug: "bangalore",           name: "Bangalore",           region: "Karnataka",        country: "India", hasChapter: false },
  { slug: "bengaluru",           name: "Bengaluru",           region: "Karnataka",        country: "India", hasChapter: false },
  { slug: "hyderabad",           name: "Hyderabad",           region: "Telangana",        country: "India", hasChapter: false },
  { slug: "chennai",             name: "Chennai",             region: "Tamil Nadu",       country: "India", hasChapter: false },
  { slug: "kolkata",             name: "Kolkata",             region: "West Bengal",      country: "India", hasChapter: false },
  { slug: "pune",                name: "Pune",                region: "Maharashtra",      country: "India", hasChapter: false },
  { slug: "ahmedabad",           name: "Ahmedabad",           region: "Gujarat",          country: "India", hasChapter: false },
  { slug: "jaipur",              name: "Jaipur",              region: "Rajasthan",        country: "India", hasChapter: false },
  { slug: "surat",               name: "Surat",               region: "Gujarat",          country: "India", hasChapter: false },
  { slug: "lucknow",             name: "Lucknow",             region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "kanpur",              name: "Kanpur",              region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "nagpur",              name: "Nagpur",              region: "Maharashtra",      country: "India", hasChapter: false },
  { slug: "indore",              name: "Indore",              region: "Madhya Pradesh",   country: "India", hasChapter: false },
  { slug: "bhopal",              name: "Bhopal",              region: "Madhya Pradesh",   country: "India", hasChapter: false },
  { slug: "patna",               name: "Patna",               region: "Bihar",            country: "India", hasChapter: false },
  { slug: "gorakhpur",           name: "Gorakhpur",           region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "noida",               name: "Noida",               region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "gurgaon",             name: "Gurgaon",             region: "Haryana",          country: "India", hasChapter: false },
  { slug: "gurugram",            name: "Gurugram",            region: "Haryana",          country: "India", hasChapter: false },
  { slug: "faridabad",           name: "Faridabad",           region: "Haryana",          country: "India", hasChapter: false },
  { slug: "ghaziabad",           name: "Ghaziabad",           region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "agra",                name: "Agra",                region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "varanasi",            name: "Varanasi",            region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "allahabad",           name: "Allahabad",           region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "meerut",              name: "Meerut",              region: "Uttar Pradesh",    country: "India", hasChapter: false },
  { slug: "nashik",              name: "Nashik",              region: "Maharashtra",      country: "India", hasChapter: false },
  { slug: "aurangabad",          name: "Aurangabad",          region: "Maharashtra",      country: "India", hasChapter: false },
  { slug: "coimbatore",          name: "Coimbatore",          region: "Tamil Nadu",       country: "India", hasChapter: false },
  { slug: "madurai",             name: "Madurai",             region: "Tamil Nadu",       country: "India", hasChapter: false },
  { slug: "vijayawada",          name: "Vijayawada",          region: "Andhra Pradesh",   country: "India", hasChapter: false },
  { slug: "visakhapatnam",       name: "Visakhapatnam",       region: "Andhra Pradesh",   country: "India", hasChapter: false },
  { slug: "vizag",               name: "Vizag",               region: "Andhra Pradesh",   country: "India", hasChapter: false },
  { slug: "kochi",               name: "Kochi",               region: "Kerala",           country: "India", hasChapter: false },
  { slug: "thiruvananthapuram",  name: "Thiruvananthapuram",  region: "Kerala",           country: "India", hasChapter: false },
  { slug: "kozhikode",           name: "Kozhikode",           region: "Kerala",           country: "India", hasChapter: false },
  { slug: "chandigarh",          name: "Chandigarh",          region: "Punjab",           country: "India", hasChapter: false },
  { slug: "amritsar",            name: "Amritsar",            region: "Punjab",           country: "India", hasChapter: false },
  { slug: "ludhiana",            name: "Ludhiana",            region: "Punjab",           country: "India", hasChapter: false },
  { slug: "jalandhar",           name: "Jalandhar",           region: "Punjab",           country: "India", hasChapter: false },
  { slug: "dehradun",            name: "Dehradun",            region: "Uttarakhand",      country: "India", hasChapter: false },
  { slug: "haridwar",            name: "Haridwar",            region: "Uttarakhand",      country: "India", hasChapter: false },
  { slug: "ranchi",              name: "Ranchi",              region: "Jharkhand",        country: "India", hasChapter: false },
  { slug: "raipur",              name: "Raipur",              region: "Chhattisgarh",     country: "India", hasChapter: false },
  { slug: "bhubaneswar",         name: "Bhubaneswar",         region: "Odisha",           country: "India", hasChapter: false },
  { slug: "guwahati",            name: "Guwahati",            region: "Assam",            country: "India", hasChapter: false },
  { slug: "shimla",              name: "Shimla",              region: "Himachal Pradesh", country: "India", hasChapter: false },
  { slug: "srinagar",            name: "Srinagar",            region: "J&K",              country: "India", hasChapter: false },
  { slug: "jammu",               name: "Jammu",               region: "J&K",              country: "India", hasChapter: false },
  { slug: "jodhpur",             name: "Jodhpur",             region: "Rajasthan",        country: "India", hasChapter: false },
  { slug: "udaipur",             name: "Udaipur",             region: "Rajasthan",        country: "India", hasChapter: false },
  { slug: "kota",                name: "Kota",                region: "Rajasthan",        country: "India", hasChapter: false },
  { slug: "vadodara",            name: "Vadodara",            region: "Gujarat",          country: "India", hasChapter: false },
  { slug: "rajkot",              name: "Rajkot",              region: "Gujarat",          country: "India", hasChapter: false },
  { slug: "mysuru",              name: "Mysuru",              region: "Karnataka",        country: "India", hasChapter: false },
  { slug: "mysore",              name: "Mysore",              region: "Karnataka",        country: "India", hasChapter: false },
  { slug: "mangalore",           name: "Mangalore",           region: "Karnataka",        country: "India", hasChapter: false },
  { slug: "hubli",               name: "Hubli",               region: "Karnataka",        country: "India", hasChapter: false },
  { slug: "belgaum",             name: "Belgaum",             region: "Karnataka",        country: "India", hasChapter: false },
  { slug: "siliguri",            name: "Siliguri",            region: "West Bengal",      country: "India", hasChapter: false },
  { slug: "durgapur",            name: "Durgapur",            region: "West Bengal",      country: "India", hasChapter: false },
  { slug: "bhopal",              name: "Bhopal",              region: "Madhya Pradesh",   country: "India", hasChapter: false },
  { slug: "jabalpur",            name: "Jabalpur",            region: "Madhya Pradesh",   country: "India", hasChapter: false },
  { slug: "gwalior",             name: "Gwalior",             region: "Madhya Pradesh",   country: "India", hasChapter: false },
  { slug: "solan",               name: "Solan",               region: "Himachal Pradesh", country: "India", hasChapter: false },
  { slug: "dharamsala",          name: "Dharamsala",          region: "Himachal Pradesh", country: "India", hasChapter: false },

  // ── INTERNATIONAL — Chapter confirmed ─────────────────────────────
  { slug: "dubai",               name: "Dubai",               region: "UAE",              country: "United Arab Emirates", hasChapter: true },
  { slug: "giza",                name: "Giza",                region: "Giza Governorate", country: "Egypt",                hasChapter: true },
  { slug: "cairo",               name: "Cairo",               region: "Cairo Governorate",country: "Egypt",                hasChapter: true },

  // ── INTERNATIONAL — Major world cities (building presence) ─────────
  { slug: "abu-dhabi",           name: "Abu Dhabi",           region: "UAE",              country: "United Arab Emirates", hasChapter: false },
  { slug: "sharjah",             name: "Sharjah",             region: "UAE",              country: "United Arab Emirates", hasChapter: false },
  { slug: "riyadh",              name: "Riyadh",              region: "Riyadh Province",  country: "Saudi Arabia",         hasChapter: false },
  { slug: "jeddah",              name: "Jeddah",              region: "Makkah Province",  country: "Saudi Arabia",         hasChapter: false },
  { slug: "doha",                name: "Doha",                region: "Ad Dawhah",        country: "Qatar",                hasChapter: false },
  { slug: "kuwait-city",         name: "Kuwait City",         region: "Al Asimah",        country: "Kuwait",               hasChapter: false },
  { slug: "manama",              name: "Manama",              region: "Capital",           country: "Bahrain",              hasChapter: false },
  { slug: "muscat",              name: "Muscat",              region: "Muscat",            country: "Oman",                 hasChapter: false },
  { slug: "london",              name: "London",              region: "England",           country: "United Kingdom",       hasChapter: false },
  { slug: "manchester",          name: "Manchester",          region: "England",           country: "United Kingdom",       hasChapter: false },
  { slug: "new-york",            name: "New York",            region: "New York",          country: "United States",        hasChapter: false },
  { slug: "san-francisco",       name: "San Francisco",       region: "California",        country: "United States",        hasChapter: false },
  { slug: "seattle",             name: "Seattle",             region: "Washington",        country: "United States",        hasChapter: false },
  { slug: "toronto",             name: "Toronto",             region: "Ontario",           country: "Canada",               hasChapter: false },
  { slug: "vancouver",           name: "Vancouver",           region: "British Columbia",  country: "Canada",               hasChapter: false },
  { slug: "sydney",              name: "Sydney",              region: "New South Wales",   country: "Australia",            hasChapter: false },
  { slug: "melbourne",           name: "Melbourne",           region: "Victoria",          country: "Australia",            hasChapter: false },
  { slug: "singapore",           name: "Singapore",           region: "Singapore",         country: "Singapore",            hasChapter: false },
  { slug: "kuala-lumpur",        name: "Kuala Lumpur",        region: "Federal Territory", country: "Malaysia",             hasChapter: false },
  { slug: "jakarta",             name: "Jakarta",             region: "DKI Jakarta",       country: "Indonesia",            hasChapter: false },
  { slug: "bangkok",             name: "Bangkok",             region: "Bangkok",           country: "Thailand",             hasChapter: false },
  { slug: "nairobi",             name: "Nairobi",             region: "Nairobi County",    country: "Kenya",                hasChapter: false },
  { slug: "lagos",               name: "Lagos",               region: "Lagos State",       country: "Nigeria",              hasChapter: false },
  { slug: "accra",               name: "Accra",               region: "Greater Accra",     country: "Ghana",                hasChapter: false },
  { slug: "johannesburg",        name: "Johannesburg",        region: "Gauteng",           country: "South Africa",         hasChapter: false },
  { slug: "cape-town",           name: "Cape Town",           region: "Western Cape",      country: "South Africa",         hasChapter: false },
  { slug: "dhaka",               name: "Dhaka",               region: "Dhaka Division",    country: "Bangladesh",           hasChapter: false },
  { slug: "islamabad",           name: "Islamabad",           region: "Federal Territory", country: "Pakistan",             hasChapter: false },
  { slug: "karachi",             name: "Karachi",             region: "Sindh",             country: "Pakistan",             hasChapter: false },
  { slug: "lahore",              name: "Lahore",              region: "Punjab",            country: "Pakistan",             hasChapter: false },
  { slug: "kathmandu",           name: "Kathmandu",           region: "Bagmati Province",  country: "Nepal",                hasChapter: false },
  { slug: "colombo",             name: "Colombo",             region: "Western Province",  country: "Sri Lanka",            hasChapter: false },
  { slug: "berlin",              name: "Berlin",              region: "Berlin",            country: "Germany",              hasChapter: false },
  { slug: "amsterdam",           name: "Amsterdam",           region: "North Holland",     country: "Netherlands",          hasChapter: false },
  { slug: "paris",               name: "Paris",               region: "Île-de-France",     country: "France",               hasChapter: false },
  { slug: "stockholm",           name: "Stockholm",           region: "Stockholm County",  country: "Sweden",               hasChapter: false },
  { slug: "tokyo",               name: "Tokyo",               region: "Tokyo",             country: "Japan",                hasChapter: false },
  { slug: "seoul",               name: "Seoul",               region: "Seoul",             country: "South Korea",          hasChapter: false },
  { slug: "beijing",             name: "Beijing",             region: "Beijing",           country: "China",                hasChapter: false },
  { slug: "shanghai",            name: "Shanghai",            region: "Shanghai",          country: "China",                hasChapter: false },
  { slug: "mumbai-diaspora",     name: "Mumbai Diaspora",     region: "Global",            country: "Global",               hasChapter: false },
];

const programs = [
  { moza: "/moza-circuit.png",                   title: "Web Development",    desc: "HTML, CSS, React, Node.js — full stack from scratch." },
  { moza: "/moza-software.png",                  title: "Graphic Design",     desc: "Figma, Canva, brand design, social media assets." },
  { moza: "/moza-teaching-inverted.png",         title: "Video Editing",      desc: "Premiere Pro, CapCut, content creation for YouTube & Reels." },
  { moza: "/moza-laptop-inverted.png",           title: "Freelancing",        desc: "How to find clients, set rates, and earn independently." },
  { moza: "/moza-hacker-inverted.png",           title: "AI & Tools",         desc: "Practical AI tools every modern professional needs." },
  { moza: "/moza-rocket-skateboard-inverted.png",title: "Building Products",  desc: "From idea to shipped product — real-world project experience." },
];

const ZuupCity = () => {
  const { city } = useParams<{ city: string }>();
  const loc = ZUUP_LOCATIONS.find(c => c.slug === city?.toLowerCase());

  if (!loc) return <Navigate to="/zuup-cities" replace />;

  const { name, region, country, hasChapter } = loc;
  const isIndia = country === "India";
  const locationLabel = isIndia ? `${name}, ${region}` : `${name}, ${country}`;

  const title = hasChapter
    ? `Zuup Empower Chapter in ${name} — Free Tech Education | ${region}`
    : `Zuup in ${name} — Tech NPO | Free Coding & Design | ${region}, ${country}`;

  const description = hasChapter
    ? `Zuup has an active Empower chapter in ${name}, ${region}! Free coding, graphic design, video editing & freelancing training for youth. Join the Zuup Empower chapter in ${locationLabel}. Apply at zuup.dev/join.`
    : `Zuup is expanding to ${name}, ${country}! No Empower chapter yet — but you can still join Zuup globally, attend events, learn tech & design for free. Start a chapter in ${name} at zuup.dev/city.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`Zuup ${name}, Zuup ${country}, Zuup ${region}, tech NPO ${name}, free coding ${name}, youth empowerment ${name}, zuup.dev ${name}, digital skills ${name}, coding education ${name}, ${isIndia ? "NGO India" : "youth tech nonprofit"} ${name}`} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={`https://zuup.dev/zuup-in/${city}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://zuup.dev/zuup-in/${city}`} />
        <meta property="og:image" content="https://zuup.dev/og-image.png" />
        {!isIndia && <meta name="geo.country" content={country} />}
        <meta name="geo.placename" content={locationLabel} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "@id": "https://zuup.dev/#organization",
          "name": "Zuup",
          "url": "https://zuup.dev",
          "description": `Zuup is a teen-led tech NPO${hasChapter ? ` with an active Empower chapter` : " building presence"} in ${locationLabel}. Free coding, design, video editing and freelancing education for youth.`,
          "areaServed": [{ "@type": "City", "name": name, "containedInPlace": { "@type": country === "India" ? "State" : "Country", "name": region } }],
          "contactPoint": { "@type": "ContactPoint", "email": "jagrit@zuup.dev", "contactType": "General Enquiry", "availableLanguage": ["English"] }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `https://zuup.dev/zuup-in/${city}`,
          "name": title,
          "description": description,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zuup.dev/" },
              { "@type": "ListItem", "position": 2, "name": "Zuup Cities", "item": "https://zuup.dev/zuup-cities" },
              { "@type": "ListItem", "position": 3, "name": `Zuup in ${name}`, "item": `https://zuup.dev/zuup-in/${city}` }
            ]
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#050505] text-foreground font-sans flex flex-col">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,61,127,0.08)_0%,transparent_60%)] pointer-events-none" />

          {/* Real Moza floating in corner */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-8 w-40 h-40 md:w-56 md:h-56 opacity-90 pointer-events-none hidden md:block"
          >
            <TransparentMoza src="/moza-cool-jumping-inverted.png" alt="Moza jumping" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-primary text-xl font-bold mb-3 uppercase tracking-widest" style={{ fontFamily: "'Caveat', cursive" }}>
              {isIndia ? `${region}, India` : `${region}, ${country}`}
            </p>

            {hasChapter && (
              <span className="inline-block mb-4 px-5 py-2 bg-primary/20 border border-primary rounded-full text-primary font-bold text-lg" style={{ fontFamily: "'Caveat', cursive" }}>
                Active Empower Chapter
              </span>
            )}

            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}>
              Zuup is in{" "}
              <span className="text-primary underline decoration-wavy underline-offset-[10px]">{name}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto mb-10" style={{ fontFamily: "'Caveat', cursive" }}>
              {hasChapter
                ? `Free coding, design, video editing & freelancing — live in ${name}. Apply now and join the movement.`
                : `No Empower chapter in ${name} yet. But Zuup is here — globally. You can still learn, build, and grow with us. And hey — start the chapter yourself.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a href="https://zuup.dev/join" target="_blank" rel="noopener noreferrer"
                className="px-10 py-4 bg-primary text-white rounded-[3rem] text-2xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] transition-all"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                join zuup from {name} →
              </a>
              {!hasChapter && (
                <a href="https://zuup.dev/city" target="_blank" rel="noopener noreferrer"
                  className="px-10 py-4 border-2 border-primary text-primary rounded-[3rem] text-2xl font-bold hover:bg-primary/10 transition-all"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  start a chapter in {name}
                </a>
              )}
              {hasChapter && (
                <Link to="/schools"
                  className="px-10 py-4 border-2 border-white/20 text-white rounded-[3rem] text-2xl font-bold hover:border-primary transition-all"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  partner your school
                </Link>
              )}
            </div>
          </motion.div>
        </section>

        {/* ── CHAPTER STATUS SECTION ───────────────────────────────────── */}
        {hasChapter ? (
          /* ── ACTIVE CHAPTER CONTENT ─────────────────────────────────── */
          <section className="py-16 px-4 bg-[#080808]">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-48 h-48 flex-shrink-0">
                  <TransparentMoza src="/moza-job-megaphone.png" alt="Moza with megaphone" className="w-full h-full object-contain" />
                </motion.div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
                    the {name} empower chapter is live
                  </h2>
                  <p className="text-white/70 text-xl leading-relaxed" style={{ fontFamily: "'Caveat', cursive" }}>
                    Real workshops. Real skills. Real community. The Zuup Empower chapter in {name} runs free sessions in coding, design, video editing, and freelancing — built for teens, run by teens.
                  </p>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Caveat', cursive" }}>
                what we teach in {name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((p, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                    className="p-6 bg-[#0B0E14] border-2 border-white/10 rounded-2xl hover:border-primary/50 transition-colors flex gap-4 items-start"
                  >
                    <TransparentMoza src={p.moza} alt={p.title} className="w-16 h-16 object-contain flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Caveat', cursive" }}>{p.title}</h4>
                      <p className="text-white/60 text-lg" style={{ fontFamily: "'Caveat', cursive" }}>{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* India School Programme Promotion */}
              {isIndia && (
                <div className="mt-16 p-8 bg-[#0B0E14] border-2 border-primary/40 rounded-3xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-40 h-40 flex-shrink-0">
                      <TransparentMoza src="/moza-teaching-inverted.png" alt="Moza teaching" className="w-full h-full object-contain" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Caveat', cursive" }}>
                        bring zuup to schools in <span className="text-primary">{name}</span>
                      </h3>
                      <p className="text-white/70 text-xl mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
                        Zuup partners directly with schools in {region} to deliver hands-on coding, design, and digital skills workshops to students — completely free. If you run or know a school in {name}, let's work together.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link to="/schools"
                          className="px-8 py-3 bg-primary text-white rounded-[2rem] text-xl font-bold shadow-[0_4px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_8px_0_0_#96163e] transition-all"
                          style={{ fontFamily: "'Caveat', cursive" }}
                        >
                          partner your school →
                        </Link>
                        <a href="https://zuup.dev/join" target="_blank" rel="noopener noreferrer"
                          className="px-8 py-3 border-2 border-white/20 text-white rounded-[2rem] text-xl font-bold hover:border-primary transition-all"
                          style={{ fontFamily: "'Caveat', cursive" }}
                        >
                          student? apply here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : (
          /* ── NO CHAPTER YET — PITCH SECTION ─────────────────────────── */
          <section className="py-16 px-4 bg-[#080808]">
            <div className="max-w-5xl mx-auto">
              {/* No chapter notice with Moza */}
              <div className="flex flex-col md:flex-row items-center gap-10 p-8 bg-[#0B0E14] border-2 border-primary/30 rounded-3xl mb-12">
                <motion.div animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-44 h-44 flex-shrink-0">
                  <img src="/moza-chapter.png" alt="Moza with chapter flag" className="w-full h-full object-contain" style={{ mixBlendMode: "screen" }} />
                </motion.div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3" style={{ fontFamily: "'Caveat', cursive" }}>
                    no empower chapter in {name} yet.
                  </h2>
                  <p className="text-white/70 text-xl mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
                    We haven't officially launched an Empower chapter in {name} yet — but that doesn't stop you. The real Zuup is already here: global community, free resources, live events, tech mentorship, and a mission to empower every young builder on the planet.
                  </p>
                  <p className="text-white text-2xl font-bold" style={{ fontFamily: "'Caveat', cursive" }}>
                    You can be the one to change that.
                  </p>
                </div>
              </div>

              {/* What you can do without a chapter */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Caveat', cursive" }}>
                what you can still do from {name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  { img: "/moza-circuit.png",              title: "Join Zuup globally",        desc: `Apply at zuup.dev/join and become part of the worldwide Zuup community from ${name}. No chapter needed.` },
                  { img: "/moza-job-celebrating.png",      title: "Attend Zuup events",        desc: "Zuup runs online and in-person events across the world. Hackathons, design jams, speaker sessions — all free." },
                  { img: "/moza-hacker-inverted.png",      title: "Learn tech for free",       desc: "Use ZuupCode, ZuupTime, and all our free tools and resources — from anywhere in the world." },
                  { img: "/moza-teaching-inverted.png",    title: "Build your personal brand", desc: "Learn freelancing, design, coding, and video editing through Zuup's free content and mentors." },
                ].map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                    className="p-6 bg-[#0B0E14] border-2 border-white/10 rounded-2xl hover:border-primary/40 transition-colors flex gap-4 items-start"
                  >
                    <TransparentMoza src={item.img} alt={item.title} className="w-16 h-16 object-contain flex-shrink-0" />
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Caveat', cursive" }}>{item.title}</h4>
                      <p className="text-white/60 text-lg" style={{ fontFamily: "'Caveat', cursive" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Start a chapter CTA */}
              <div className="text-center bg-[#0B0E14] border-[3px] border-primary rounded-3xl p-10 shadow-[0_0_40px_rgba(255,61,127,0.15)]">
                <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="w-48 h-48 mx-auto mb-6">
                  <TransparentMoza src="/moza-job-megaphone.png" alt="Moza megaphone" className="w-full h-full object-contain" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
                  start the{" "}
                  <span className="text-primary underline decoration-wavy underline-offset-[8px]">{name} chapter.</span>
                </h2>
                <p className="text-2xl text-white/60 max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Caveat', cursive" }}>
                  Be the person who brings Zuup Empower to {name}. No experience needed. Just the drive to empower youth in your city. We'll back you up with resources, mentorship, and the whole Zuup community.
                </p>
                <a href="https://zuup.dev/city" target="_blank" rel="noopener noreferrer"
                  className="inline-block px-14 py-5 bg-primary text-white rounded-[3rem] text-3xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] transition-all"
                  style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
                >
                  start a chapter in {name} →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ── STATS ────────────────────────────────────────────────────── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: "100%", label: "Free, always" },
              { n: "2024",  label: "Founded" },
              { n: "100+",  label: "Cities worldwide" },
              { n: "Emp.",  label: `Active chapters` },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-[#0B0E14] border-2 border-white/10 rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Caveat', cursive" }}>{s.n}</div>
                <div className="text-white/60 text-lg" style={{ fontFamily: "'Caveat', cursive" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY [CITY] ───────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#080808]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-52 h-52 flex-shrink-0">
              <TransparentMoza src="/moza-building-inverted.png" alt="Moza building" className="w-full h-full object-contain" />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
                why {name} is on zuup's map
              </h2>
              <div className="space-y-4 text-white/70 text-xl" style={{ fontFamily: "'Caveat', cursive" }}>
                <p>
                  Every city with ambitious young people deserves access to the same quality tech education — for free. {name} is on our radar because talent doesn't care about geography.
                </p>
                <p>
                  Zuup builds free tools, runs free programs, and partners with schools across {isIndia ? "India and the world" : `the world, including in ${country}`} — and {name} is part of that story.
                </p>
                <p>
                  Whether you code in {name} or design in {name}, Zuup is the community that ships with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="py-24 px-4 text-center">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-44 h-44 mx-auto mb-6">
            <TransparentMoza src="/moza-rocket-skateboard-inverted.png" alt="Moza rocket" className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(255,61,127,0.3)]" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
            ready to build from <span className="text-primary">{name}?</span>
          </h2>
          <p className="text-2xl text-white/60 mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'Caveat', cursive" }}>
            {hasChapter
              ? `The ${name} Empower chapter is active. Apply now and become part of it.`
              : `No chapter yet — but you can join Zuup globally, or be the one who starts the ${name} chapter.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://zuup.dev/join" target="_blank" rel="noopener noreferrer"
              className="inline-block px-16 py-5 bg-primary text-white rounded-[3rem] text-3xl font-bold shadow-[0_6px_0_0_#96163e] hover:-translate-y-1 hover:shadow-[0_10px_0_0_#96163e] transition-all"
              style={{ fontFamily: "'Caveat', cursive", letterSpacing: "2px" }}
            >
              join zuup →
            </a>
            {!hasChapter && (
              <a href="https://zuup.dev/city" target="_blank" rel="noopener noreferrer"
                className="inline-block px-16 py-5 border-2 border-primary text-primary rounded-[3rem] text-3xl font-bold hover:bg-primary/10 transition-all"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                start the {name} chapter
              </a>
            )}
          </div>
          <div className="mt-8">
            <Link to="/zuup-cities" className="text-primary text-xl underline decoration-wavy underline-offset-4" style={{ fontFamily: "'Caveat', cursive" }}>
              ← all cities where zuup is present
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

export default ZuupCity;
