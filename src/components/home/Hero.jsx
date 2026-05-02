import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Coffee Fill Animation
  const fillHeight = useTransform(scrollYProgress, [0, 0.6], ['0%', '100%']);
  
  // Text Fade & Move
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  // CTA Smooth Appearance
  const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.3, 0.7], [30, 0]);

  // Background Parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-[var(--color-cafe-bg)]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-32">
        
        {/* Parallax Background using an abstract coffee texture/photo */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-[0.15]"
          style={{ 
            y: bgY,
            backgroundImage: 'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Hero Text */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="z-10 text-center px-4 mb-8 pt-16"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-b from-[#ffffff] to-[#c89b6d] bg-clip-text text-transparent tracking-tight">
            Fresh Coffee,<br/>Cozy Vibes
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the art of perfect brewing in an atmosphere designed for your comfort and inspiration.
          </p>
        </motion.div>

        {/* Coffee Cup with Scroll Animation */}
        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center mt-4">
          
          {/* subtle glow behind cup */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-[var(--color-cafe-accent)]/20 blur-3xl rounded-full" />

          {/* Steam */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 0.4, 0], 
                  y: [-10, -50, -80],
                  x: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
                  scale: [0.8, 1.2, 1.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.6,
                  ease: "easeInOut"
                }}
                className="w-3 h-12 bg-white/30 blur-xl rounded-full"
              />
            ))}
          </div>

          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl overflow-visible">
            {/* Cup Handle */}
            <path d="M75 35 C 98 35, 98 70, 75 70" fill="none" stroke="#2e303a" strokeWidth="7" strokeLinecap="round" />
            
            {/* Cup Body Outline */}
            <path d="M20,20 L80,20 C80,80 70,90 50,90 C30,90 20,80 20,20 Z" fill="#151515" stroke="#2e303a" strokeWidth="4" strokeLinejoin="round" />
            
            {/* Inside Rim Dark */}
            <ellipse cx="50" cy="20" rx="30" ry="6" fill="#0A0A0A" />

            {/* Mask for liquid inside the cup */}
            <clipPath id="cup-clip">
              <path d="M22,22 L78,22 C78,78 68,88 50,88 C32,88 22,78 22,22 Z" />
            </clipPath>

            <g clipPath="url(#cup-clip)">
               {/* Base Dark Coffee */}
              <motion.rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="var(--color-cafe-brown)"
                style={{ y: useTransform(fillHeight, (val) => `calc(100% - ${val})`) }}
              />
              {/* Crema / Highlight on top of liquid */}
              <motion.ellipse
                cx="50"
                rx="28"
                ry="5"
                fill="#8b5a2b"
                style={{ 
                  y: useTransform(fillHeight, (val) => `calc(100% - ${val} + 20px)`) 
                }}
              />
            </g>
            
            {/* Outside Cup Highlight */}
            <path d="M24,25 L32,25 C32,75 28,75 24,25 Z" fill="#ffffff" opacity="0.04" />
          </svg>
        </div>

        {/* CTA Button Appears on Scroll */}
        <motion.div 
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="z-10 mt-12 pointer-events-auto"
        >
          <p className="text-gray-400 mb-6 font-medium text-sm tracking-widest uppercase">Scroll Down</p>
          <Link 
            to="/menu" 
            className="group relative inline-flex items-center gap-3 bg-[var(--color-cafe-accent)] hover:bg-[var(--color-cafe-brown)] text-[#0f0f0f] hover:text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(200,155,109,0.3)] hover:shadow-[0_0_30px_rgba(111,78,55,0.6)]"
          >
            Explore Menu
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
