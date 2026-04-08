'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: 1995,
    suffix: '',
    label: 'Established',
    sublabel: 'Partnership firm registered in Chennai',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    value: 30,
    suffix: '+',
    label: 'Years of Experience',
    sublabel: 'In audit, tax & financial advisory',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: 2,
    suffix: '×',
    label: 'ICAI Peer Reviews',
    sublabel: 'Completed in 2008 and 2013',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    value: 4,
    suffix: '+',
    label: 'Outstation CA Network',
    sublabel: 'Bangalore, Hyderabad, Tirunelveli, Coimbatore',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: 7,
    suffix: '+',
    label: 'Years Systems Audit',
    sublabel: 'IOB branches & ICAI SIRC',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="font-display text-4xl md:text-5xl font-semibold text-primary leading-none">
      {count}{suffix}
    </span>
  );
}

export default function CredentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-primary overflow-hidden"
      id="credentials"
    >
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      {/* Atmospheric glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-bold uppercase tracking-widest">
            Our Credentials
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-primary/80 p-6 lg:p-8 flex flex-col gap-3 group hover:bg-primary-light/30 transition-colors duration-300 relative overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div className="text-accent/70 group-hover:text-accent transition-colors duration-300">
                {stat.icon}
              </div>
              {/* Count */}
              <CountUp target={stat.value} suffix={stat.suffix} active={active} />
              {/* Label */}
              <div>
                <p className="text-white text-sm font-semibold leading-snug mb-0.5">{stat.label}</p>
                <p className="text-white/50 text-xs font-light leading-snug">{stat.sublabel}</p>
              </div>
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
