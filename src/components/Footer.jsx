import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2e303a] pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <Coffee className="w-7 h-7 text-[var(--color-cafe-accent)]" />
              <span className="text-xl font-bold tracking-tight text-white">
                Brew <span className="text-[var(--color-cafe-accent)]">Haven</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Serving the finest artisan coffee, crafted with passion. Join us for cozy vibes and unforgettable flavors.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="#" className="text-xs font-bold tracking-widest hover:text-[var(--color-cafe-accent)] transition-colors">INSTAGRAM</a>
              <a href="#" className="text-xs font-bold tracking-widest hover:text-[var(--color-cafe-accent)] transition-colors">TWITTER</a>
              <a href="#" className="text-xs font-bold tracking-widest hover:text-[var(--color-cafe-accent)] transition-colors">FACEBOOK</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/menu" className="hover:text-[var(--color-cafe-accent)] transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-cafe-accent)] transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-cafe-accent)] transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-[var(--color-cafe-accent)] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[var(--color-cafe-accent)] flex-shrink-0" />
                <span>123 Espresso Lane,<br />Coffeeville, WA 98000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-cafe-accent)] flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-cafe-accent)] flex-shrink-0" />
                <span>hello@brewhaven.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-[#2e303a] pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#2e303a] pb-2">
                <span>Saturday</span>
                <span className="text-white">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#2e303a] pb-2">
                <span>Sunday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2e303a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
