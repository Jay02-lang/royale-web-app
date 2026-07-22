export default function Footer() {
  return (
    <footer className="bg-primary text-surface relative z-10 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Mega Typography */}
        <h2 className="text-[12vw] font-royale font-bold tracking-tight leading-none text-surface/90 text-center mb-12">
          LUMIÈRE
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-t border-surface/10 pt-10 gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">Headquarters</span>
            <p className="text-sm font-sans text-surface/60 max-w-xs">
              123 Avenue des Champs-Élysées<br/>
              75008 Paris, France
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm uppercase tracking-widest text-surface/80 hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-sm uppercase tracking-widest text-surface/80 hover:text-accent transition-colors">Journal</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm uppercase tracking-widest text-surface/80 hover:text-accent transition-colors">Inquire</a>
              <a href="#" className="text-sm uppercase tracking-widest text-surface/80 hover:text-accent transition-colors">Privacy</a>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-20 text-xs text-surface/40 font-sans tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Lumière Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
