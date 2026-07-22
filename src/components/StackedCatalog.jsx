import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CARDS = [
  { id: '1', title: 'The Grand Gala', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600' },
  { id: '2', title: 'Royal Wedding', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600' },
  { id: '3', title: 'Exclusive Soirée', url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1600' },
  { id: '4', title: 'Corporate Summit', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600' },
];

export default function StackedCatalog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    // Only auto-scroll if nothing is expanded
    if (expandedId) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARDS.length);
    }, 4000); // 4 seconds for smoother reading

    return () => clearInterval(timer);
  }, [expandedId]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Text Overlay to emphasize it's a Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full text-center z-0">
        <h1 className="text-[15vw] font-royale font-bold text-primary/5 tracking-tighter leading-none whitespace-nowrap">
          EXPERIENCE
        </h1>
      </div>

      <div className="relative w-[90vw] h-[70vh] md:w-[95vw] md:h-[85vh] z-10 flex items-center justify-center perspective-1000">
        <AnimatePresence>
          {CARDS.map((card, index) => {
            if (expandedId === card.id) return null;

            // Calculate position in the stack
            // relativeIndex 0 is top card, 1 is behind it, etc.
            const relativeIndex = (index - currentIndex + CARDS.length) % CARDS.length;
            const isTop = relativeIndex === 0;

            const yOffset = relativeIndex * -40; // Push cards behind UP
            const scale = 1 - (relativeIndex * 0.05); // Shrink cards behind
            const zIndex = CARDS.length - relativeIndex; // Top card gets highest zIndex
            
            // Fade out cards that are too far back
            const opacity = relativeIndex >= CARDS.length - 1 ? 0 : 1 - (relativeIndex * 0.15);

            return (
              <motion.div
                key={card.id}
                layoutId={`card-container-${card.id}`}
                className="absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                style={{ zIndex }}
                initial={false}
                animate={{ opacity, y: yOffset, scale }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => isTop && setExpandedId(card.id)}
              >
                <motion.img
                  layoutId={`card-image-${card.id}`}
                  src={card.url}
                  className="w-full h-full object-cover"
                  alt={card.title}
                />
                <motion.div 
                  layoutId={`card-title-container-${card.id}`}
                  className="absolute bottom-0 left-0 right-0 p-12 md:p-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                >
                  <motion.h2 
                    layoutId={`card-title-${card.id}`}
                    className="text-white text-5xl md:text-7xl font-royale drop-shadow-2xl"
                  >
                    {card.title}
                  </motion.h2>
                </motion.div>
                
                {/* Highlight overlay for top card */}
                {isTop && (
                  <motion.div
                    className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors duration-300"
                  />
                )}
                {/* Dark overlay for cards behind */}
                {!isTop && (
                  <motion.div
                    className="absolute inset-0 bg-black/30 transition-colors duration-300 pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Expanded View */}
      <AnimatePresence>
        {expandedId && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {CARDS.map((card) => {
              if (card.id !== expandedId) return null;
              return (
                <motion.div
                  key={card.id}
                  layoutId={`card-container-${card.id}`}
                  className="relative w-full max-w-7xl h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-surface"
                >
                  <motion.img
                    layoutId={`card-image-${card.id}`}
                    src={card.url}
                    className="w-full h-full object-cover"
                    alt={card.title}
                  />
                  <motion.div 
                    layoutId={`card-title-container-${card.id}`}
                    className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  >
                    <motion.h2 
                      layoutId={`card-title-${card.id}`}
                      className="text-white text-5xl md:text-7xl font-royale mb-4"
                    >
                      {card.title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/80 font-sans tracking-widest uppercase text-sm"
                    >
                      Explore the details of this magnificent event.
                    </motion.p>
                  </motion.div>
                  
                  <button
                    onClick={() => setExpandedId(null)}
                    className="absolute top-6 right-6 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-colors"
                  >
                    <X size={24} />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
