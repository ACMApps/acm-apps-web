
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Consultoria from './components/Consultoria';
import Sistemas from './components/Sistemas';
import Institutional from './components/Institutional';
import Process from './components/Process';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ConsultoriaDialog from './components/ConsultoriaDialog';

const App: React.FC = () => {
  const [isConsultoriaOpen, setIsConsultoriaOpen] = useState(false);

  return (
    <div className="min-h-screen pb-16 md:pb-0 transition-colors duration-300">
      <Header />
      <main>
        <Hero onOpenConsultoria={() => setIsConsultoriaOpen(true)} />
        <Consultoria />
        <Sistemas />
        <Institutional />
        <Process />
      </main>
      <Footer />
      <MobileNav />
      
      {/* ConsultorIA AI Feature Dialog */}
      <ConsultoriaDialog 
        isOpen={isConsultoriaOpen} 
        onClose={() => setIsConsultoriaOpen(false)} 
      />
    </div>
  );
};

export default App;
