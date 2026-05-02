import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Coffee, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Leaf className="w-8 h-8 text-[var(--color-cafe-accent)]" />,
    title: 'Fresh Ingredients',
    desc: 'Locally sourced, organic coffee beans roasted to perfection daily.'
  },
  {
    icon: <Coffee className="w-8 h-8 text-[var(--color-cafe-accent)]" />,
    title: 'Cozy Ambiance',
    desc: 'A warm, inviting space designed for deep conversations and focus.'
  },
  {
    icon: <Clock className="w-8 h-8 text-[var(--color-cafe-accent)]" />,
    title: 'Fast Service',
    desc: 'Artisan quality without the long wait, perfectly timed for you.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#0f0f0f] border-t border-[#2e303a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-cafe-accent)] uppercase mb-4">Our Promise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Why Choose Us</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-b from-[#16171d] to-[#0f0f0f] border border-[#2e303a] hover:border-[var(--color-cafe-accent)]/30 transition-colors"
            >
              <div className="w-20 h-20 mx-auto bg-[#0a0a0a] rounded-2xl flex items-center justify-center mb-8 border border-[#2e303a] shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
