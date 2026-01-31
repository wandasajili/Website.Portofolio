import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAVBAR_HEIGHT = 80;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (scrolled ? 70 : NAVBAR_HEIGHT);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 shadow-sm' 
        : 'py-6 lg:py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, 'hero')}
              className="font-outfit font-black tracking-tighter text-2xl text-slate-900 dark:text-white group"
            >
              WS<span className="text-blue-600">.</span>
            </a>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:flex items-center space-x-10 mr-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 relative group ${
                    activeSection === item.id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full px-8 py-3.5 text-[10px] uppercase tracking-[0.15em] font-black hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-lg active:scale-95"
              >
                Hire Me
              </a>
            </div>

            <button 
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group bg-slate-100 dark:bg-slate-800 rounded-full"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full group-hover:bg-blue-600 transition-colors"></span>
              <span className="w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full group-hover:bg-blue-600 transition-colors"></span>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-slate-950/20 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div 
          className={`absolute top-0 right-0 w-full sm:w-[450px] h-full bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } p-8 sm:p-12 flex flex-col`}
        >
          <div className="flex items-center justify-between mb-20">
            <span className="font-outfit font-black tracking-tighter text-2xl text-slate-900 dark:text-white">
              WS<span className="text-blue-600">.</span>
            </span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-8 flex-grow">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-4xl sm:text-5xl font-outfit font-bold tracking-tight transition-all duration-700 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                } ${
                  activeSection === item.id ? 'text-blue-600' : 'text-slate-900 dark:text-white hover:text-blue-600 transition-colors'
                }`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className={`mt-auto space-y-12 transition-all duration-700 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block w-full py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl text-center font-bold uppercase tracking-[0.25em] text-sm shadow-2xl active:scale-95 transition-all"
              >
                Hire Me
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Available for projects</p>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping delay-200"></div>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;