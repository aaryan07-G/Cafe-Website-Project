import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507133750070-42f254e4c29c?q=80&w=600&auto=format&fit=crop',
];

const GalleryCTA = () => {
  return (
    <section className="bg-[#0f0f0f]">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {images.map((src, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="aspect-square overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-transparent transition-colors z-10 duration-500"/>
            <img 
              src={src} 
              alt="Cafe interior" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.05]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Experience the <span className="text-[var(--color-cafe-accent)] italic">Magic</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            Join us today and discover why we're the city's favorite destination for artisan coffee and cozy moments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <Link to="/contact" className="bg-white text-[#0f0f0f] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
              Visit Us Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
