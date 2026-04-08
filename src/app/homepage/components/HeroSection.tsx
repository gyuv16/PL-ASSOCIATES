'use client';

import { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const badgeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Cursor parallax on hero elements
    const hero = document.getElementById('hero-section');
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const floatingCard = document.getElementById('hero-floating-card');
      const archImg = document.getElementById('hero-arch-img');
      if (floatingCard) {
        floatingCard.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
      }
      if (archImg) {
        archImg.style.transform = `translate(${x * -6}px, ${y * -4}px) scale(1.02)`;
      }
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen pt-28 pb-16 px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
      
      {/* Background atmospheric blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[80px] animate-blob animation-delay-2000" />
        <div className="grid-bg absolute inset-0 opacity-60" />
      </div>

      {/* Rotating Badge */}
      <div className="absolute top-28 right-6 md:right-12 lg:right-16 z-20 hidden md:block pointer-events-none">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg ref={badgeRef} className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
            <path
              id="heroCirclePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent" />
            
            <text
              fontSize="10.5"
              fontFamily="DM Sans"
              fontWeight="600"
              letterSpacing="2.2px"
              fill="#003366">
              
              <textPath href="#heroCirclePath" startOffset="0%">
                ICAI REGISTERED • PEER REVIEWED •
              </textPath>
            </text>
          </svg>
          {/* Center icon: balance scale */}
          <svg className="absolute w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18" /><path d="M3 7l9-4 9 4" /><path d="M3 17l3-10 3 10" /><path d="M15 17l3-10 3 10" /><path d="M3 17h6" /><path d="M15 17h6" />
          </svg>
        </div>
      </div>

      {/* Left Content */}
      <div className="lg:col-span-6 flex flex-col justify-center relative z-10 order-2 lg:order-1">
        {/* Eyebrow */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1.5 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            Established 1995 · Chennai
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-primary mb-6 animate-fade-up-delay-1">
          Trusted<br />
          <span className="italic text-primary/50 font-light">advisors</span>
          <br />for every
          <br />
          <span className="gold-shimmer font-semibold not-italic">
            financial need.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-brand-muted text-base font-light leading-relaxed max-w-md border-l-2 border-accent/40 pl-5 mb-8 animate-fade-up-delay-2">
          P.L. & Associates — ICAI Peer Reviewed Chartered Accountants with 30+ years of expertise in Audit, Tax, Company Law, FEMA, and Systems Audit across Chennai and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-delay-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 group">
            
            Request a Consultation
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 text-primary text-sm font-semibold px-7 py-3.5 rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
            
            Explore Services
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center gap-4 mt-8 animate-fade-up-delay-3">
          <div className="flex flex-col items-center px-4 py-2.5 bg-white border border-brand-border rounded-xl shadow-sm">
            <span className="font-display text-2xl font-semibold text-primary leading-none">30+</span>
            <span className="text-[10px] text-brand-muted uppercase tracking-wider mt-0.5">Years</span>
          </div>
          <div className="flex flex-col items-center px-4 py-2.5 bg-white border border-brand-border rounded-xl shadow-sm">
            <span className="font-display text-2xl font-semibold text-accent leading-none">2×</span>
            <span className="text-[10px] text-brand-muted uppercase tracking-wider mt-0.5">Peer Reviewed</span>
          </div>
          <div className="flex flex-col items-center px-4 py-2.5 bg-white border border-brand-border rounded-xl shadow-sm">
            <span className="font-display text-2xl font-semibold text-primary leading-none">8+</span>
            <span className="text-[10px] text-brand-muted uppercase tracking-wider mt-0.5">Service Areas</span>
          </div>
        </div>
      </div>

      {/* Right: Arch Image */}
      <div className="lg:col-span-6 h-[60vh] lg:h-[88vh] relative order-1 lg:order-2 z-10">
        <div
          id="hero-arch-img"
          className="absolute inset-0 arch-shape overflow-hidden shadow-2xl transition-transform duration-700 ease-out"
          style={{ willChange: 'transform' }}>
          
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1438a9742-1772301683415.png"
            alt="Professional chartered accountant in formal attire at a well-lit modern office, warm neutral tones, confident posture, documents on desk, bright airy atmosphere"
            fill
            priority
            className="object-cover object-center ken-burns"
            sizes="(max-width: 1024px) 100vw, 50vw" />
          
          {/* Gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />

          {/* Floating credential overlay */}
          <div
            id="hero-floating-card"
            className="absolute bottom-8 left-6 right-6 md:bottom-10 md:left-8 md:right-auto md:w-64 bg-white/15 backdrop-blur-md border border-white/25 p-4 rounded-2xl text-white transition-transform duration-500 ease-out animate-float"
            style={{ willChange: 'transform' }}>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-accent/90 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-wide">ICAI Peer Reviewed</span>
            </div>
            <p className="text-[11px] leading-relaxed text-white/80">
              Peer Review Audit completed in 2008 & 2013 — assuring quality and compliance to ICAI standards.
            </p>
          </div>
        </div>

        {/* Decorative offset border */}
        <div className="absolute top-5 -right-3 w-full h-full arch-shape border border-primary/15 -z-10 pointer-events-none" />
      </div>
    </section>);

}
