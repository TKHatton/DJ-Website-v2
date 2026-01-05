
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
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
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services />
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
