import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import CredentialsSection from './components/CredentialsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main className="bg-brand-bg overflow-x-hidden">
      <Header />
      <HeroSection />
      <CredentialsSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
