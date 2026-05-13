import React, { useRef } from 'react';
import Header from './components/Headers/Header';
import PlanetCard from './components/PlanetCard';
import PlanetsSection from './components/PlanetsSection';
import DataTable from './components/DataTable';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css';


function App() {
  const planetRef = useRef(null);
  const formRef = useRef(null);

  const scrollToPlanets = () => {
    planetRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <Header/>
    <div className='container'>
      
      <PlanetCard />
      <PlanetsSection />
      <DataTable />
      <ContactForm />
      <Footer />
      </div>

    </>
  )
}
export default App