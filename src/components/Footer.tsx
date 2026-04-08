import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-display text-sm font-medium text-primary tracking-tight">
              P.L. & Associates
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-brand-muted">
            <a href="#services" className="hover:text-primary transition-colors duration-200">Services</a>
            <a href="#about" className="hover:text-primary transition-colors duration-200">About</a>
            <a href="#clients" className="hover:text-primary transition-colors duration-200">Clients</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-4 text-xs text-brand-muted">
            <span>© 2025 P.L. & Associates</span>
            <span className="text-brand-border">·</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <span className="text-brand-border">·</span>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
