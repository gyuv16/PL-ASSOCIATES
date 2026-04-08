'use client';

import { useState } from 'react';

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Address',
    value: 'Vijay Vishnu Apartments, No.169, F2, 15th Sector, 94th Street, K K Nagar, Chennai — 600 078',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone & Mobile',
    value: 'Phone: 2481 0081 · Mobile: +91 90032 54592',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'govindprabhaca@yahoo.co.in · govindprabhaca@gmail.com · plassociateschennai78@gmail.com',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/email service here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg-secondary relative overflow-hidden">
      {/* Atmospheric */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/8 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"/><path d="M22 2L11 13"/>
                </svg>
                Get in Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-primary tracking-tight leading-[1.05] mb-4">
                Let&apos;s work<br />
                <span className="italic text-primary/50">together.</span>
              </h2>
              <p className="text-brand-muted text-base font-light leading-relaxed">
                Whether you need audit services, tax planning, company law compliance, or FEMA advisory — reach out for a no-obligation initial consultation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 p-4 bg-white border border-brand-border rounded-xl hover:border-primary/20 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center text-primary/60 group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-300 shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary/50 uppercase tracking-wider mb-1">{detail.label}</p>
                    <p className="text-sm text-primary font-light leading-relaxed">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision snippet */}
            <div className="bg-primary/6 border border-primary/10 rounded-2xl p-5">
              <svg className="w-8 h-8 text-primary/20 mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-primary/70 text-sm font-light leading-relaxed italic">
                "To deliver services that enhance client organizational performance and assure all stakeholders a true and fair reflection of financial statements with utmost integrity."
              </p>
              <p className="text-primary/40 text-xs mt-2 font-semibold uppercase tracking-wider">— Vision Statement</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white border border-brand-border rounded-3xl p-7 lg:p-9 shadow-xl shadow-primary/5 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-7">
                  <h3 className="font-display text-2xl font-medium text-primary mb-1">Request a Consultation</h3>
                  <p className="text-brand-muted text-sm font-light">Fill in the details below — we respond within 24 hours.</p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                      <svg className="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="text-primary font-semibold text-lg text-center">Thank you! We&apos;ll be in touch shortly.</p>
                    <p className="text-brand-muted text-sm text-center font-light">Your inquiry has been received. We typically respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Rajesh Kumar"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-brand-muted/50 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-wider mb-1.5">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rajesh@company.com"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-brand-muted/50 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Service */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-brand-muted/50 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-wider mb-1.5">
                          Service Required <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full appearance-none bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-primary outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200 cursor-pointer"
                          >
                            <option value="" disabled>Select a service</option>
                            <option value="income-tax">Income Tax</option>
                            <option value="company-law">Company Law</option>
                            <option value="statutory-audit">Statutory / Internal Audit</option>
                            <option value="fema">Foreign Exchange (FEMA)</option>
                            <option value="accounting">Accounting Services</option>
                            <option value="financial">Financial Services</option>
                            <option value="systems-audit">Systems Audit</option>
                            <option value="forensic">Forensic Audit / Due Diligence</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-wider mb-1.5">
                        Message / Query
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your requirement or query..."
                        className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-brand-muted/50 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 group"
                    >
                      Send Inquiry
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2l-7 20-4-9-9-4 20-7z"/><path d="M22 2L11 13"/>
                      </svg>
                    </button>

                    <p className="text-center text-[11px] text-brand-muted mt-2 leading-relaxed">
                      By submitting, you agree to our{' '}
                      <a href="#" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
                      {' '}No spam — we only respond to your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Decorative offset border */}
            <div className="absolute top-4 -right-3 w-full h-full rounded-3xl border border-primary/8 -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
