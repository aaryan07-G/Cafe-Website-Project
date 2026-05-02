import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import avocadoToastImg from '../assets/avocado-toast.jpg';
import lemonPoundCakeImg from '../assets/lemon-pound-cake.jpg';

const menuData = [
  { id: 1, name: 'Espresso', category: 'Coffee', price: '$3.00', desc: 'A perfectly pulled shot of rich and intense coffee.', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600' },
  { id: 2, name: 'Caramel Macchiato', category: 'Coffee', price: '$5.50', desc: 'Espresso topped with vanilla, milk, and caramel drizzle.', img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600' },
  { id: 3, name: 'Pour Over', category: 'Coffee', price: '$4.50', desc: 'Hand-poured single origin filter coffee.', img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600' },
  { id: 4, name: 'Matcha Latte', category: 'Coffee', price: '$5.00', desc: 'Premium ceremonial grade matcha with steamed milk.', img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=600' },
  { id: 5, name: 'Almond Croissant', category: 'Snacks', price: '$4.50', desc: 'Flaky pastry filled with sweet almond frangipane.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600' },
  { id: 6, name: 'Avocado Toast', category: 'Snacks', price: '$8.00', desc: 'Sourdough toast with smashed avocado, chili flakes and lemon.', img: avocadoToastImg },
  { id: 7, name: 'Blueberry Muffin', category: 'Snacks', price: '$3.50', desc: 'Freshly baked muffin bursting with blueberries.', img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600' },
  { id: 8, name: 'Lemon Pound Cake', category: 'Snacks', price: '$4.00', desc: 'Moist pound cake topped with zesty lemon icing.', img: lemonPoundCakeImg },
];

const Menu = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? menuData : menuData.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-cafe-bg)] relative">
      {/* Decorative Blur */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-[var(--color-cafe-accent)]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">Our Menu</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">Carefully curated beans, expert brewing methods, and fresh locally sourced pastries.</p>
          
          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-4">
            {['All', 'Coffee', 'Snacks'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-[var(--color-cafe-accent)] text-[#0f0f0f] shadow-[0_0_15px_rgba(200,155,109,0.4)]' 
                  : 'bg-[#111] text-gray-400 hover:text-white border border-[#2e303a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group flex flex-col bg-[#0f0f0f] rounded-2xl overflow-hidden border border-[#2e303a] hover:border-[var(--color-cafe-accent)]/50 transition-colors shadow-xl"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#000]/20 z-10 group-hover:bg-transparent transition-colors duration-500"/>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute top-4 right-4 z-20 bg-[#0f0f0f]/90 backdrop-blur-md px-3 py-1 rounded-full text-[var(--color-cafe-accent)] font-bold text-sm border border-[#2e303a]">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[var(--color-cafe-brown)] uppercase tracking-wider mb-2 block">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
