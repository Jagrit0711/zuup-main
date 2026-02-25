import { motion } from "framer-motion";

const photos = [
  { src: "/images/zuup-session-1.jpeg", alt: "Zuup training session with youth" },
  { src: "/images/zuup-session-2.jpeg", alt: "Zuup workshop with underprivileged children" },
  { src: "/images/zuup-session-3.JPG", alt: "Zuup digital skills class" },
];

const PhotoScroller = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          On The Ground
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Our Sessions in Action
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real moments from our training sessions with underprivileged youth across India.
        </p>
      </motion.div>

      <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-[340px] md:w-[420px] snap-center"
          >
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoScroller;
