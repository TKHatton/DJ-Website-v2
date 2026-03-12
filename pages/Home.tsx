import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SystemArchitecture from '../components/SystemArchitecture';
import WhyUs from '../components/WhyUs';
import Projects from '../components/Projects';
import Approach from '../components/Approach';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import Philosophy from '../components/Philosophy';
import Invitation from '../components/Invitation';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleLearnMore = (_serviceId: string) => {
    onNavigate('studio');
  };

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services onLearnMore={handleLearnMore} />
      <SystemArchitecture onNavigate={onNavigate} />
      <WhyUs />
      <Projects />
      <Approach />
      <WhoWeWorkWith onNavigate={onNavigate} />
      <Philosophy />
      <Invitation onNavigate={onNavigate} />
    </>
  );
};

export default Home;
