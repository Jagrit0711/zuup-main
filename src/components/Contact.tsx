import { Phone, Mail, Linkedin } from 'lucide-react';
const Contact = () => {
  console.log('Rendering Contact section');
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#4299e1]">
            Get in Touch
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="bg-[#ea384c]/10 p-4 rounded-lg">
              <Phone className="h-6 w-6 text-[#ea384c]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
              <p className="text-gray-400">+91 113-550-4576</p>
              <p className="text-gray-400">+91 885-184-4602</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#4299e1]/10 p-4 rounded-lg">
              <Mail className="h-6 w-6 text-[#4299e1]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-400">ag​</p>
              <p className="text-gray-400">jagrit0711@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#ea384c]/10 p-4 rounded-lg">
              <Linkedin className="h-6 w-6 text-[#ea384c]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/jagritsachdev" target="_blank" rel="noopener noreferrer" className="text-[#4299e1] hover:text-[#ea384c] transition-colors">
                Connect with Jagrit
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#ea384c]/10 to-[#4299e1]/5 p-8 rounded-lg border border-[#4299e1]/20">
          <h3 className="text-2xl font-bold mb-6 text-[#4299e1]">Send us a Message</h3>
          <form className="space-y-6">
            <div>
              <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-[#4299e1]/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4299e1]" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" className="w-full bg-black/50 border border-[#4299e1]/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4299e1]" />
            </div>
            <div>
              <textarea placeholder="Your Message" rows={4} className="w-full bg-black/50 border border-[#4299e1]/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4299e1]"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#ea384c] to-[#4299e1] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>;
};
export default Contact;