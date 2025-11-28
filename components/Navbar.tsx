import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: '小乐机器人', id: 'xiaole' },
    { name: 'Another Me', id: 'anotherme' },
    { name: '桌宠机器人', id: 'desktopbot' },
    { name: '沐心大模型', id: 'muxin' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-slate-200/50 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand */}
        <button 
          className="flex items-center gap-3 group cursor-pointer focus:outline-none" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden ${
            isScrolled ? 'bg-brand-600 text-white shadow-md' : 'bg-white/10 text-white backdrop-blur-sm'
          }`}>
             {/* Consistent Logo: Leaf + CPU */}
            <Leaf size={20} className="absolute -translate-x-1 -translate-y-1 z-10" strokeWidth={2.5} />
            <Cpu size={20} className="absolute translate-x-1 translate-y-1 opacity-80" strokeWidth={2.5} />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}>
            创嘉智木
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                isScrolled ? 'text-slate-600 hover:text-brand-600' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          <button 
            onClick={() => scrollToSection('contact')}
            className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
              isScrolled 
                ? 'bg-slate-900 text-white hover:bg-brand-600' 
                : 'bg-white text-slate-900 hover:bg-brand-50'
            }`}
          >
            联系我们
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-xl transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};