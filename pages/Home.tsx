
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Projects from '../components/Projects';
import Approach from '../components/Approach';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import Philosophy from '../components/Philosophy';
import Invitation from '../components/Invitation';
import ServiceModal from '../components/ServiceModal';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleLearnMore = (serviceId: string) => {
    setActiveService(serviceId);
  };

  const handleCloseModal = () => {
    setActiveService(null);
  };

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services onLearnMore={handleLearnMore} />
      <WhyUs />
      <Projects />
      <Approach />
      <WhoWeWorkWith onNavigate={onNavigate} />
      <Philosophy />
      <Invitation onNavigate={onNavigate} />
      
      {activeService && (
        <ServiceModal 
          serviceId={activeService} 
          onClose={handleCloseModal} 
          onNavigate={onNavigate}
        />
      )}
    </>
  );
};

export default Home;
