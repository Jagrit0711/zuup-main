import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  console.log('Rendering Contact section');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Get in Touch
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-muted-foreground">+91 113-550-4576</p>
              <p className="text-muted-foreground">+91 885-184-4602</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-secondary/10 p-4 rounded-lg">
              <Mail className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground">jag@techygram.onmicrosoft.com</p>
              <p className="text-muted-foreground">jagrit0711@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/jagritsachdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                Connect with Jagrit
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-lg border border-secondary/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-secondary">Send us a Message</h3>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-background/50 border border-secondary/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-background/50 border border-secondary/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-background/50 border border-secondary/20 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;