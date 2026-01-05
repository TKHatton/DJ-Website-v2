
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurWorkPage from './pages/OurWorkPage';
import ApproachPage from './pages/ApproachPage';
import StartAProjectPage from './pages/StartAProjectPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'work':
        return <OurWorkPage onNavigate={navigateTo} />;
      case 'approach':
        return <ApproachPage onNavigate={navigateTo} />;
      case 'start':
        return <StartAProjectPage onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-honey/30">
      <Navbar onNavigate={navigateTo} currentPath={currentPath} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
