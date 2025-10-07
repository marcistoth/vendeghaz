import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;