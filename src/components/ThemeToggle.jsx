import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-500 ease-in-out border border-accent/20 shadow-md",
        "bg-surface"
      )}
      aria-label="Toggle Theme"
    >
      <span
        className={cn(
          "inline-block h-6 w-6 transform rounded-full bg-accent transition duration-500 ease-in-out shadow-sm flex items-center justify-center",
          isDark ? "translate-x-9" : "translate-x-1"
        )}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-surface" />
        ) : (
          <Sun className="w-3 h-3 text-surface" />
        )}
      </span>
    </button>
  );
}
