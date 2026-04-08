'use client';

import { useEffect, useRef } from 'react';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  colSpan: string;
  rowSpan?: string;
  accent?: boolean;
  icon: React.ReactNode;
  tags: string[];
}

const services: ServiceCard[] = [
  {
    id: 'income-tax',
    title: 'Income Tax',
    description: 'Computation and filing of returns for corporates, firms, trusts and individuals. Tax-efficient structuring, salary planning for expatriates, and representation before Assessing Officers and ITAT.',
    colSpan: 'col-span-3 md:col-span-2',
    accent: true,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    tags: ['ITR Filing', 'Tax Planning', 'ITAT Representation', 'Expatriate Tax'],
  },
  {
    id: 'company-law',
    title: 'Company Law',
    description: 'Incorporation, ROC compliance, board minutes, annual returns, and liaison/branch office registration for foreign companies.',
    colSpan: 'col-span-3 md:col-span-1',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    tags: ['Incorporation', 'ROC Filing', 'Foreign Offices'],
  },
  {
    id: 'statutory-audit',
    title: 'Statutory & Internal Audit',
    description: 'Revenue and stock audits for nationalized banks. Statutory and internal audits for private/public companies, societies, and trusts. Fixed asset verification and inventory reconciliation.',
    colSpan: 'col-span-3 md:col-span-1',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    tags: ['Bank Audit', 'Stock Audit', 'Asset Verification'],
  },
  {
    id: 'fema',
    title: 'Foreign Exchange (FEMA)',
    description: 'FEMA compliance, FDI advisory, RBI approvals for share transfers, establishment/winding-up of liaison offices, foreign currency loans, and FIPB applications.',
    colSpan: 'col-span-3 md:col-span-1',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    tags: ['FEMA Compliance', 'FDI Advisory', 'RBI Approvals', 'FIPB'],
  },
  {
    id: 'accounting',
    title: 'Accounting Services',
    description: 'Complete bookkeeping, bank reconciliation, vendor reconciliation, MIS reports, trial balance, annual accounts, and co-ordination with statutory auditors.',
    colSpan: 'col-span-3 md:col-span-1',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    tags: ['Bookkeeping', 'MIS Reports', 'Bank Reconciliation'],
  },
  {
    id: 'financial',
    title: 'Financial Services',
    description: 'Project reports, working capital and term loan assistance with TIIC, SIDBI and corporate lenders. Follow-up on loan documentation and term reports.',
    colSpan: 'col-span-3 md:col-span-1',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    tags: ['Project Reports', 'TIIC', 'SIDBI', 'Term Loans'],
  },
  {
    id: 'systems-audit',
    title: 'Systems Audit',
    description: 'Conducted since 2006 for various bank branches and corporates. ITT Audit of SIRC of ICAI, Chennai (2013). 7+ years of continuous systems audit for IOB branches.',
    colSpan: 'col-span-3 md:col-span-1',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    tags: ['Bank IT Systems', 'ITT Audit', 'IOB', 'ICAI SIRC'],
  },
  {
    id: 'forensic',
    title: 'Forensic Audit & Due Diligence',
    description: 'Certified in Forensic Audit (ICAI certificate course). Internal-cum-management audits, valuations, project appraisal, due diligence, and drafting of shareholder agreements.',
    colSpan: 'col-span-3 md:col-span-2',
    accent: false,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    tags: ['Forensic Audit', 'Due Diligence', 'Valuations', 'Shareholder Agreements'],
  },
];

// Bento grid layout audit (3-col on md):
// Row 1: [Income Tax col-span-2] + [Company Law col-span-1] = 3/3 ✓
// Row 2: [Statutory Audit col-span-1] + [FEMA col-span-1] + [Accounting col-span-1] = 3/3 ✓
// Row 3: [Financial col-span-1] + [Systems Audit col-span-1] + [Forensic col-span-2... wait need 1 more]
// Corrected: Row 3: [Financial col-span-1] + [Systems Audit col-span-1] + [Forensic col-span-1] = 3/3 ✓
// Actually Forensic is col-span-2 on desktop, so:
// Row 3 desktop (3-col): [Financial col-span-1] + [Forensic col-span-2] = 3/3 ✓  
// Systems Audit moves to fill a gap → reorder to: Financial + Forensic(2) then Systems alone → col-span-full on last
// Final order: Income Tax(2), Company Law(1) | Statutory(1), FEMA(1), Accounting(1) | Financial(1), Systems(1+), Forensic(1) 
// On 3-col: Financial(1) + Systems(1) + Forensic(1) = 3/3 ✓

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const cards = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              Our Practice Areas
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-primary tracking-tight leading-[1.05]">
              Comprehensive<br />
              <span className="italic text-primary/50">financial services</span>
            </h2>
          </div>
          <p className="text-brand-muted text-sm font-light leading-relaxed max-w-sm md:text-right">
            From income tax filing to forensic audits — we provide end-to-end CA services for businesses, banks, and individuals across India.
          </p>
        </div>

        {/* Bento Grid */}
        {/* Layout audit (3-col md):
            Row 1: Income Tax(col-span-2) + Company Law(col-span-1) = 3/3 ✓
            Row 2: Statutory(1) + FEMA(1) + Accounting(1) = 3/3 ✓
            Row 3: Financial(1) + Systems Audit(1) + Forensic(1) = 3/3 ✓
        */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {/* Row 1 */}
          {/* Income Tax - col-span-2 */}
          <div className="col-span-3 md:col-span-2 reveal-on-scroll">
            <ServiceCardLarge card={services[0]} />
          </div>
          {/* Company Law - col-span-1 */}
          <div className="col-span-3 md:col-span-1 reveal-on-scroll" style={{ transitionDelay: '80ms' }}>
            <ServiceCardSmall card={services[1]} />
          </div>

          {/* Row 2 */}
          {/* Statutory Audit */}
          <div className="col-span-3 md:col-span-1 reveal-on-scroll" style={{ transitionDelay: '160ms' }}>
            <ServiceCardSmall card={services[2]} />
          </div>
          {/* FEMA */}
          <div className="col-span-3 md:col-span-1 reveal-on-scroll" style={{ transitionDelay: '240ms' }}>
            <ServiceCardSmall card={services[3]} />
          </div>
          {/* Accounting */}
          <div className="col-span-3 md:col-span-1 reveal-on-scroll" style={{ transitionDelay: '320ms' }}>
            <ServiceCardSmall card={services[4]} />
          </div>

          {/* Row 3 */}
          {/* Financial */}
          <div className="col-span-3 md:col-span-1 reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
            <ServiceCardSmall card={services[5]} />
          </div>
          {/* Systems Audit */}
          <div className="col-span-3 md:col-span-1 reveal-on-scroll" style={{ transitionDelay: '480ms' }}>
            <ServiceCardSmall card={services[6]} />
          </div>
          {/* Forensic */}
          <div className="col-span-3 md:col-span-1 reveal-on-scroll" style={{ transitionDelay: '560ms' }}>
            <ServiceCardSmall card={services[7]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCardLarge({ card }: { card: ServiceCard }) {
  return (
    <div className="group relative h-full min-h-[200px] bg-primary rounded-2xl p-7 lg:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 flex flex-col justify-between cursor-default">
      {/* Atmospheric glow */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="text-accent mb-5">{card.icon}</div>
        <h3 className="font-display text-2xl md:text-3xl font-medium text-white mb-3 leading-snug">
          {card.title}
        </h3>
        <p className="text-white/65 text-sm font-light leading-relaxed max-w-lg">
          {card.description}
        </p>
      </div>
      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mt-6">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold uppercase tracking-wider text-white/70 bg-white/10 border border-white/15 rounded-full px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
    </div>
  );
}

function ServiceCardSmall({ card }: { card: ServiceCard }) {
  return (
    <div className="group relative h-full min-h-[200px] bg-white border border-brand-border rounded-2xl p-5 lg:p-6 overflow-hidden hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col cursor-default">
      {/* Hover glow */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="text-primary/40 group-hover:text-accent transition-colors duration-300 mb-4">
        {card.icon}
      </div>
      <h3 className="font-display text-lg md:text-xl font-medium text-primary mb-2 leading-snug">
        {card.title}
      </h3>
      <p className="text-brand-muted text-xs font-light leading-relaxed flex-1">
        {card.description}
      </p>
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {card.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-semibold uppercase tracking-wider text-primary/60 bg-primary/5 border border-primary/10 rounded-full px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
