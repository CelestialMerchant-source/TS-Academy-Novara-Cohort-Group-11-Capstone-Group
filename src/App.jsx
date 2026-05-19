import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import PlanetsSection from './components/PlanetsSection';
import DataTable from './components/DataTable';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <PlanetsSection />
        <DataTable />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
