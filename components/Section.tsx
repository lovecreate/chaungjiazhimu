import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc: string;
  reverse?: boolean;
  bgColor: string;
  accentColor: string;
  icon: React.ReactNode;
  imageStyle?: 'default' | 'clean';
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  description,
  features,
  imageSrc,
  reverse = false,
  bgColor,
  accentColor,
  icon,
  imageStyle = 'default',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`min-h-screen flex items-center py-24 ${bgColor} overflow-hidden relative transition-colors duration-700 scroll-mt-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
          
          {/* Text Content */}
          <div className={`flex-1 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : reverse ? 'translate-x-20 opacity-0' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-5">
              <div className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-sm font-bold tracking-wider uppercase text-slate-500`}>
                <span className={accentColor}>{icon}</span>
                <span>{subtitle}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                {title}
              </h2>
              
              <div className={`h-1.5 w-24 rounded-full ${accentColor.replace('text-', 'bg-')}`}></div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${accentColor} bg-opacity-10 shrink-0 group-hover:scale-110 transition-transform`}>
                     <div className={`w-2 h-2 rounded-full bg-current`} />
                  </div>
                  <span className="text-slate-700 font-medium text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className={`px-10 py-4 rounded-full font-bold text-white shadow-xl shadow-slate-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 ${accentColor.replace('text-', 'bg-')}`}>
                了解更多 <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className={`flex-1 w-full relative flex justify-center items-center transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${accentColor} opacity-20 blur-[80px] rounded-full`} />
            
            <div className={`relative w-full rounded-3xl overflow-hidden group shadow-2xl
              ${imageStyle === 'clean' ? 'border-0 ring-1 ring-slate-900/5' : 'border-8 border-white'}
            `}>
              <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] w-full relative overflow-hidden bg-slate-200">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};