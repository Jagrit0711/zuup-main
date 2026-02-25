import { useState } from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:jagrit@zuup.dev?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          Reach Out
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactItem
            icon={<Phone className="h-5 w-5 text-primary" />}
            title="Phone"
            lines={["+91 113-550-4576", "+91 885-184-4602"]}
          />
          <ContactItem
            icon={<Mail className="h-5 w-5 text-primary" />}
            title="Email"
            lines={["jagrit@zuup.dev", "jagrit0711@gmail.com"]}
          />
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-0.5">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/jagritsachdev" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 text-sm">
                Connect with Jagrit
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl p-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full bg-accent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full bg-accent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full bg-accent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-primary/15"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-base font-semibold text-foreground mb-0.5">{title}</h3>
      {lines.map((line) => (
        <p key={line} className="text-muted-foreground text-sm">{line}</p>
      ))}
    </div>
  </div>
);

export default Contact;
