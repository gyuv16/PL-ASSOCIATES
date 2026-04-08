'use client';

import { useEffect, useRef } from 'react';

interface ClientSector {
  sector: string;
  clients: string[];
  icon: React.ReactNode;
  highlight?: string;
}

const sectors: ClientSector[] = [
  {
    sector: 'Banking & Financial',
    highlight: '12+ years of bank audits',
    clients: [
      'Andhra Bank (Statutory Audit — 5 years)',
      'Central Bank of India (3 years)',
      'Indian Overseas Bank (IOB) — 4 years',
      'Indian Overseas Bank — Systems Audit (7+ years)',
      'Indian Overseas Bank — Stock Audit',
      'ABN-Amro Bank — Search work',
      'Bharat Overseas Bank — Search work',
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    sector: 'Large Corporates',
    highlight: 'Internal & statutory audits',
    clients: [
      'TTK Health Care Ltd (Internal Audit)',
      'TTK — Stock Audit (Madras, Bangalore, Cochin)',
      'Velvette International Pharma Products',
      'Paint Manufacturing Company',
      'Fibre Door Manufacturing Company',
      'Web Page & Web Designing Company',
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    sector: 'NBFC & Institutions',
    highlight: 'Statutory & compliance work',
    clients: [
      'Non-Banking Financial Companies (Statutory Audit)',
      'Nationalized Banks (Statutory Audit)',
      'Scheduled Banks (Statutory Audit)',
      'Trusts & Societies',
      'Charitable & Educational Institutions',
      'Government Companies',
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    sector: 'ICAI & Regulators',
    highlight: 'ITT & Systems Audit',
    clients: [
      'SIRC of ICAI Chennai — ITT Audit (Dec 2013)',
      'Indian Overseas Bank — Search work (ROC coordination)',
      'Large & Medium Indian Companies',
      'Multinational Companies',
      'Non-Public / Regimental Funds',
      'Foreign Company Liaison Offices',
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" className="py-24 bg-primary relative overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      {/* Atmospheric */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Our Clientele
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.05] mb-4">
            Trusted by banks,<br />
            <span className="italic text-white/50">corporates & institutions.</span>
          </h2>
          <p className="text-white/60 text-base font-light leading-relaxed">
            Our clientele spans large and medium Indian and multinational companies, government entities, banks, trusts, and educational institutions across India.
          </p>
        </div>

        {/* Client Sectors Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {sectors.map((sector, i) => (
            <div
              key={sector.sector}
              className="reveal-on-scroll group relative bg-white/[0.05] border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="text-accent/70 group-hover:text-accent transition-colors duration-300 mb-2">
                    {sector.icon}
                  </div>
                  <h3 className="font-display text-xl font-medium text-white">{sector.sector}</h3>
                  {sector.highlight && (
                    <p className="text-accent/80 text-xs font-semibold uppercase tracking-wider mt-1">{sector.highlight}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                {sector.clients.map((client) => (
                  <div key={client} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-accent/60 shrink-0 mt-2" />
                    <span className="text-white/65 text-sm font-light leading-snug">{client}</span>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal-on-scroll flex flex-col md:flex-row items-center justify-between gap-6 bg-white/[0.05] border border-white/10 rounded-2xl p-6 lg:p-8">
          <div>
            <p className="text-white font-semibold text-lg mb-1">Ready to join our client list?</p>
            <p className="text-white/55 text-sm font-light">Get in touch for a free initial consultation. Response within 24 hours.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/30 hover:-translate-y-0.5 group"
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
