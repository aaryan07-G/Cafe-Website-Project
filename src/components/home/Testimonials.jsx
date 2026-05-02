import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Local Writer',
    text: 'Brew Haven is my creative sanctuary. The caramel macchiato is unmatched, and the atmosphere is simply magical.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Software Engineer',
    text: 'Fast Wi-Fi, perfect cold brews, and incredible staff. I spend most of my afternoons working from here.',
    rating: 5,
  },
  {
    name: 'Emma Roberts',
    role: 'Coffee Enthusiast',
    text: 'You can taste the quality in every sip. Easily the best specialty coffee I have found in the entire city.',
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#111] border-y border-[#2e303a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-cafe-accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-cafe-accent)] uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">What Our Guests Say</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#0f0f0f] p-10 rounded-2xl border border-[#2e303a]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-cafe-accent)] text-[var(--color-cafe-accent)]" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <span className="text-sm text-[var(--color-cafe-accent)]">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
