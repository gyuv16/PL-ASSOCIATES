'use client';

import { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const teamHighlights = [
{
  icon:
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
      </svg>,

  label: 'Proprietrix',
  value: 'Prabha. G',
  sub: 'B.Com, FCA, DISA(ICAI)'
},
{
  icon:
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>,

  label: 'Audit Assistants',
  value: '4 Members',
  sub: 'Semi-qualified & Article assistants'
},
{
  icon:
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>,

  label: 'Outstation Network',
  value: '4 CA Partners',
  sub: 'Bangalore · Hyderabad · Tirunelveli · Coimbatore'
},
{
  icon:
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>,

  label: 'Forensic Audit',
  value: 'ICAI Certified',
  sub: 'Certificate Course on Forensic Audit'
}];


const expertise = [
'Internal Audit of Big Group Companies',
'Statutory Audit of Banks & Corporates',
'Systems Audit (Banking IT)',
'Registrar of Companies — Formation & Search',
'Non-Banking Financial Institutions',
'Forensic Audit Investigations'];


export default function AboutSection() {
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
    sectionRef?.current?.querySelectorAll('.reveal-on-scroll')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-brand-bg-secondary relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary tracking-tight leading-[1.05]">
            People who make<br />
            <span className="italic text-primary/50">the difference.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image + floating badge */}
          <div className="lg:col-span-5 relative reveal-on-scroll">
            {/* Arch image */}
            <div className="relative w-4/5 mx-auto lg:mx-0">
              <div className="arch-shape overflow-hidden shadow-2xl border border-brand-border">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_107bcec45-1773085527984.png"
                  alt="Professional accountant at a bright Chennai office, warm natural light, neat desk with documents, confident and approachable expression, formal business attire"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover" />
                
              </div>
              {/* Decorative offset */}
              <div className="absolute top-5 -right-4 w-full h-full arch-shape border border-primary/10 -z-10" />
            </div>

            {/* Floating credential card */}
            <div className="absolute bottom-8 -right-2 md:right-4 bg-white border border-brand-border rounded-2xl p-4 shadow-xl max-w-[200px] animate-float-delayed">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
                  <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wide">DISA Certified</span>
              </div>
              <p className="text-[10px] text-brand-muted leading-relaxed">
                Diploma in Information Systems Audit — ICAI
              </p>
            </div>
          </div>

          {/* Right: Bio + Team */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Proprietrix Bio */}
            <div className="reveal-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Prabha. G</p>
                  <p className="text-xs text-brand-muted">Proprietrix · B.Com, FCA, DISA(ICAI)</p>
                </div>
              </div>
              <div className="border-l-2 border-accent/40 pl-5 space-y-3">
                <p className="text-brand-muted text-sm font-light leading-relaxed">
                  With over <strong className="font-semibold text-primary">21 years of experience</strong> in auditing large group companies across Chennai, Prabha. G brings deep expertise in Internal Audit, Statutory Audit, and Systems Audit. She holds an ICAI Certificate in Forensic Audit and is well-versed in all Registrar of Companies formalities.
                </p>
                <p className="text-brand-muted text-sm font-light leading-relaxed">
                  Associated with many Non-Banking Financial Institutions and has carried out Systems Audit in multiple bank branches. Mobile: <a href="tel:+919003254592" className="text-primary font-medium hover:text-accent transition-colors">+91 90032 54592</a>
                </p>
              </div>
            </div>

            {/* Expertise List */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="font-display text-lg font-medium text-primary mb-3">Areas of Deep Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {expertise?.map((item) =>
                <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-brand-muted font-light">{item}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Team Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              {teamHighlights?.map((item, i) =>
              <div
                key={item?.label}
                className="bg-white border border-brand-border rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                style={{ transitionDelay: `${i * 50}ms` }}>
                
                  <div className="text-primary/40 group-hover:text-accent transition-colors duration-300 mb-2">
                    {item?.icon}
                  </div>
                  <p className="text-[10px] text-brand-muted uppercase tracking-wider font-semibold mb-0.5">{item?.label}</p>
                  <p className="text-sm font-semibold text-primary">{item?.value}</p>
                  <p className="text-[10px] text-brand-muted font-light leading-snug mt-0.5">{item?.sub}</p>
                </div>
              )}
            </div>

            {/* Firm Associations */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <p className="text-xs text-brand-muted font-light leading-relaxed bg-primary/4 border border-primary/10 rounded-xl p-4">
                <strong className="text-primary font-semibold">Professional Network:</strong> P.L. & Associates has ties with Chartered Accountants firms, Management Consultants, Cost Accountants, Company Secretaries, Lawyers, Engineers and Architects — enabling comprehensive, multi-disciplinary advisory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
