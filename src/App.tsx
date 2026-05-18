import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import Problems from './sections/Problems';
import CinematicVision from './sections/CinematicVision';
import AiDemo from './sections/AiDemo';
import AlumniArchives from './sections/AlumniArchives';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';

function HomePage() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navigation />
      <CustomCursor />
      <div className="scanline-overlay" />

      <main>
        <Hero />
        <Problems />
        <Curriculum />
        <CinematicVision />
        <AiDemo />
        <AlumniArchives />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
