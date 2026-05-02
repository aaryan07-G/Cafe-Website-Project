import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-cafe-bg)] min-h-screen relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-[var(--color-cafe-brown)]/10 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">Let's Connect</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Whether you have a question, feedback, or just want to say hi, we'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Our Location</h3>
              <div className="flex items-start gap-4">
                <div className="bg-[#111] p-4 rounded-xl border border-[#2e303a]">
                  <MapPin className="text-[var(--color-cafe-accent)] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Address</h4>
                  <p className="text-gray-400">123 Espresso Lane,<br/>Coffeeville, WA 98000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#111] p-4 rounded-xl border border-[#2e303a]">
                  <Phone className="text-[var(--color-cafe-accent)] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#111] p-4 rounded-xl border border-[#2e303a]">
                  <Mail className="text-[var(--color-cafe-accent)] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-400">hello@brewhaven.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#2e303a]">
              <h3 className="text-2xl font-bold text-white mb-6">Opening Hours</h3>
              <ul className="space-y-4 max-w-sm">
                <li className="flex justify-between text-gray-400 font-medium"><span>Mon - Fri</span> <span className="text-white">7:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between text-gray-400 font-medium"><span>Saturday</span> <span className="text-white">8:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between text-gray-400 font-medium"><span>Sunday</span> <span className="text-white">8:00 AM - 6:00 PM</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#111] p-8 md:p-10 rounded-3xl border border-[#2e303a]">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cafe-accent)] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cafe-accent)] transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                  <textarea id="message" rows="5" className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cafe-accent)] transition-colors max-h-64" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[var(--color-cafe-accent)] hover:bg-[var(--color-cafe-brown)] text-[#0f0f0f] hover:text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-[#111] h-64 rounded-3xl border border-[#2e303a] flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800" alt="Map generic" className="w-full h-full object-cover blur-sm"/>
              <div className="absolute z-20 flex flex-col items-center">
                 <MapPin className="w-10 h-10 text-[var(--color-cafe-accent)] mb-2" />
                 <span className="text-white font-bold tracking-wider uppercase text-sm">Find us on map</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
