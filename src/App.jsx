import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import CelebrationVideo from './components/CelebrationVideo';
import StackedCatalog from './components/StackedCatalog';
import VenueTabs from './components/VenueTabs';
import LogoBar from './components/LogoBar';
import FounderStory from './components/FounderStory';
import ServiceGrid from './components/ServiceGrid';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    
    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <CelebrationVideo />
      <CustomCursor />
      <Header />
      <main className="relative z-10">
        <StackedCatalog />
        <VenueTabs />
        <LogoBar />
        <FounderStory />
        <ServiceGrid />
        <TestimonialSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
