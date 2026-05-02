import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedMenu from '../components/home/FeaturedMenu';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import GalleryCTA from '../components/home/GalleryCTA';

const Home = () => {
  return (
    <div className="w-full bg-[var(--color-cafe-bg)]">
      <Hero />
      <FeaturedMenu />
      <WhyChooseUs />
      <Testimonials />
      <GalleryCTA />
    </div>
  );
};

export default Home;
