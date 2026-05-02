import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Our Story</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">More than just a coffee shop, we are a community built around a shared love for the perfect brew.</p>
        </motion.div>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-[var(--color-cafe-accent)]/30 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800" alt="Barista working" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-cafe-accent)] uppercase">The Beginning</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Born from a passion for perfection</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Brew Haven started in 2018 as a small cart with a big dream: to redefine how people experience coffee. We believed that coffee shouldn't just be a quick jolt of caffeine, but an experience to be savored.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              We traveled across origins, identifying farms that share our dedication to ethical sourcing and sustainable agricultural practices. 
            </p>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-[var(--color-cafe-brown)]/40 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
              <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800" alt="Coffee beans" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-cafe-accent)] uppercase">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">Crafting moments of comfort</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Every bean is roasted locally and brewed with absolute precision. We want Brew Haven to be your second home—a place to work, gather, and relax.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-[#111] p-6 rounded-2xl border border-[#2e303a]">
                <h4 className="text-white font-bold text-xl mb-2">Ethical</h4>
                <p className="text-sm text-gray-400">Direct trade and fair wages for all farmers.</p>
              </div>
              <div className="bg-[#111] p-6 rounded-2xl border border-[#2e303a]">
                <h4 className="text-white font-bold text-xl mb-2">Quality</h4>
                <p className="text-sm text-gray-400">Never settling for anything less than perfection.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
