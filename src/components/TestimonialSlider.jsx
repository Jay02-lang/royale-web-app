import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { quote: "Every detail was a masterclass in elegance.", author: "Vogue Magazine" },
  { quote: "The most spectacular evening of the decade.", author: "The Royal Trust" },
  { quote: "An absolute triumph in bespoke luxury.", author: "Global Executive" }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 bg-transparent relative z-10 overflow-hidden flex items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <span className="text-[400px] font-royale text-primary leading-none">"</span>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h3 className="text-4xl md:text-6xl font-royale text-primary italic mb-10 leading-snug">
              "{testimonials[index].quote}"
            </h3>
            <p className="text-sm tracking-[0.3em] uppercase font-semibold text-accent">
              — {testimonials[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
