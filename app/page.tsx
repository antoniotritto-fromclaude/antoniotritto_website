import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Testimonials from '@/components/Testimonials';
import PrivateBankingServices from '@/components/PrivateBankingServices';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Mission />
      <Testimonials />
      <PrivateBankingServices />
      <About />
      <Footer />
    </main>
  );
}
