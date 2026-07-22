import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FounderStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="py-32 px-6 lg:px-20 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 items-center">
        
        {/* Left: Image with Parallax */}
        <motion.div style={{ y: y1 }} className="w-full md:w-1/2 h-[70vh] relative rounded-t-[100px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200" 
            alt="Founder" 
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Right: Typography with opposite parallax */}
        <motion.div style={{ y: y2 }} className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-6 font-semibold">Our Vision</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-royale text-primary mb-8 leading-tight">
            Crafting <br/><span className="italic font-light">Elegance.</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-primary/70 font-sans max-w-md">
            Lumière was founded on a singular principle: that true luxury is whisper-quiet. We orchestrate events that flow effortlessly, where every detail is meticulously curated yet feels entirely organic. 
            <br/><br/>
            From royal weddings to intimate executive summits, our approach marries timeless aesthetics with modern precision.
          </p>
          
          <div className="mt-12">
            <button className="relative overflow-hidden group pb-2 border-b border-primary/20 hover:border-accent transition-colors">
              <span className="text-xs uppercase tracking-widest text-primary group-hover:text-accent transition-colors font-semibold">
                Read the Full Story
              </span>
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
