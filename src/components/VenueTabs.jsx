import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VENUES = [
  {
    id: 'grand-ballroom',
    name: 'The Grand Ballroom',
    description: 'A masterpiece of 19th-century architecture, featuring crystal chandeliers and gold-leaf details. Perfect for royal galas.',
    capacity: 'Up to 500 Guests',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'royal-gardens',
    name: 'The Royal Gardens',
    description: 'Acres of manicured greenery, sculpted hedges, and a serene lake. An idyllic setting for summer weddings and twilight soirées.',
    capacity: 'Up to 800 Guests',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'crystal-pavilion',
    name: 'The Crystal Pavilion',
    description: 'A modern glass structure offering panoramic views of the city skyline. Ideal for high-profile corporate summits.',
    capacity: 'Up to 300 Guests',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600'
  }
];

export default function VenueTabs() {
  const [activeTab, setActiveTab] = useState(VENUES[0].id);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = VENUES.findIndex(v => v.id === currentTab);
        const nextIndex = (currentIndex + 1) % VENUES.length;
        return VENUES[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeVenue = VENUES.find(v => v.id === activeTab);

  return (
    <section className="py-32 px-6 lg:px-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4 font-semibold">Destinations</p>
          <h2 className="text-4xl md:text-5xl font-royale text-primary">Exclusive Venues</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16 border-b border-primary/10 pb-4">
          {VENUES.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setActiveTab(venue.id)}
              className={`relative pb-4 px-2 text-sm md:text-base tracking-widest uppercase transition-colors duration-300 font-sans ${
                activeTab === venue.id ? 'text-primary font-semibold' : 'text-primary/40 hover:text-primary/70'
              }`}
            >
              {venue.name}
              {activeTab === venue.id && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-surface shadow-2xl border border-primary/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVenue.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden">
                <img 
                  src={activeVenue.image} 
                  alt={activeVenue.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Details Side */}
              <div className="w-full md:w-2/5 h-1/2 md:h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-surface">
                <h3 className="text-3xl lg:text-4xl font-royale text-primary mb-6">
                  {activeVenue.name}
                </h3>
                <p className="text-primary/70 font-sans leading-relaxed mb-8">
                  {activeVenue.description}
                </p>
                <div className="mt-auto md:mt-0 pt-6 border-t border-primary/10">
                  <p className="text-xs tracking-widest uppercase text-accent font-semibold mb-2">Capacity</p>
                  <p className="text-primary font-royale text-xl">{activeVenue.capacity}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
