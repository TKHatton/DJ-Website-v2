
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StudioPage from './pages/StudioPage';
import AcademyPage from './pages/AcademyPage';
import BlogPage from './pages/BlogPage';
import ApproachPage from './pages/ApproachPage';
import AboutPage from './pages/AboutPage';
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
      case 'studio':
        return <StudioPage onNavigate={navigateTo} />;
      case 'academy':
        return <AcademyPage onNavigate={navigateTo} />;
      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;
      case 'approach':
        return <ApproachPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'start':
        return <StartAProjectPage onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-honey/30">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-charcoal focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none">
        Skip to main content
      </a>
      <Navbar onNavigate={navigateTo} currentPath={currentPath} />
      <main id="main-content">
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
