import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: '01', title: 'Galas & Balls', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1600' },
  { id: '02', title: 'Royal Weddings', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600' },
  { id: '03', title: 'Corporate Summits', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600' },
  { id: '04', title: 'Private Soirées', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1600' },
];

export default function ServiceGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="py-32 bg-transparent relative z-10 min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image that changes on hover */}
      <AnimatePresence>
        <motion.img
          key={hoveredIndex}
          src={services[hoveredIndex].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.2, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 font-semibold">Excellence</p>
          <h2 className="text-5xl font-royale text-primary">Our Curated Services</h2>
        </div>

        <div className="flex flex-col border-t border-primary/10">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group flex flex-col md:flex-row items-baseline md:items-center justify-between py-10 border-b border-primary/10 cursor-none"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="flex items-baseline gap-8">
                <span className="text-sm font-sans tracking-widest text-primary/40 group-hover:text-accent transition-colors">
                  {service.id}
                </span>
                <h3 className="text-5xl md:text-7xl font-royale text-primary/60 group-hover:text-primary transition-colors duration-500 italic group-hover:not-italic">
                  {service.title}
                </h3>
              </div>
              <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-widest uppercase text-accent font-semibold">
                Explore &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
