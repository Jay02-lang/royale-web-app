import { motion } from 'framer-motion';

export default function LogoBar() {
  const logos = [
    'CARTIER', 'CHANEL', 'VOGUE', 'ROLEX', 'BVLGARI', 'DIOR', 'HERMÈS', 'PRADA', 'GUCCI', 'YSL'
  ];

  return (
    <div className="py-24 overflow-hidden bg-surface relative z-10 border-y border-accent/20 shadow-xl">
      <div className="flex w-[200%]">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="mx-12 text-3xl md:text-5xl font-royale text-primary dark:text-accent/80 tracking-widest italic hover:text-accent transition-colors duration-300">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
