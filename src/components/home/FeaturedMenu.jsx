import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  { 
    name: 'Caramel Macchiato', 
    desc: 'Rich espresso with vanilla syrup and caramel drizzle.',
    price: '$5.50', 
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    name: 'Almond Croissant', 
    desc: 'Flaky pastry filled with sweet almond frangipane.',
    price: '$4.50', 
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    name: 'Vanilla Cold Brew', 
    desc: 'Slow-steeped cold brew with a splash of sweet vanilla cream.',
    price: '$4.80', 
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop' 
  },
];

const FeaturedMenu = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-cafe-accent)] uppercase">Our Favorites</h2>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Menu
            </h3>
          </motion.div>
          
          <Link to="/menu" className="flex items-center gap-2 text-[var(--color-cafe-accent)] hover:text-white transition-colors group">
            <span className="font-medium uppercase tracking-wider text-sm">View Full Menu</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-[#111] rounded-2xl overflow-hidden border border-[#2e303a] hover:border-[var(--color-cafe-accent)]/50 transition-colors"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white">{item.name}</h4>
                  <span className="text-[var(--color-cafe-accent)] font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="w-full py-3 rounded-full border border-[#2e303a] text-gray-300 hover:bg-[var(--color-cafe-accent)] hover:text-[#0f0f0f] hover:border-[var(--color-cafe-accent)] transition-all uppercase tracking-wider text-xs font-bold">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
