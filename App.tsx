
import React, { useEffect, useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';
import { useDocumentHead } from './hooks/useDocumentHead';
import {
  PAGE_META,
  organizationSchema,
  webSiteSchema,
  siteNavSchema,
  homePageSchema,
  studioPageSchema,
  studioBreadcrumb,
  servicesSchema,
  academyPageSchema,
  academyBreadcrumb,
  academyOrgSchema,
  courseSchemas,
  blogPageSchema,
  blogBreadcrumb,
  faqPageSchema,
  faqBreadcrumb,
  approachPageSchema,
  approachBreadcrumb,
  howToBuildSchema,
  aboutPageSchema,
  aboutBreadcrumb,
  startProjectPageSchema,
  startBreadcrumb,
} from './lib/schemas';
import Home from './pages/Home';
import StudioPage from './pages/StudioPage';
import AcademyPage from './pages/AcademyPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ApproachPage from './pages/ApproachPage';
import AboutPage from './pages/AboutPage';
import StartAProjectPage from './pages/StartAProjectPage';
import DiscoveryFormPage from './pages/DiscoveryFormPage';
import ProductsPage from './pages/ProductsPage';

/** Map each route to its JSON-LD schemas */
function getSchemasForPage(page: string): object[] {
  // Organization + WebSite + Navigation go on every page
  const shared = [organizationSchema, webSiteSchema, siteNavSchema];

  switch (page) {
    case 'home':
      return [...shared, homePageSchema];
    case 'studio':
      return [...shared, studioPageSchema, studioBreadcrumb, servicesSchema];
    case 'academy':
      return [...shared, academyPageSchema, academyBreadcrumb, academyOrgSchema, ...courseSchemas];
    case 'blog':
      return [...shared, blogPageSchema, blogBreadcrumb];
    case 'faq':
      return [...shared, faqPageSchema, faqBreadcrumb];
    case 'approach':
      return [...shared, approachPageSchema, approachBreadcrumb, howToBuildSchema];
    case 'about':
      return [...shared, aboutPageSchema, aboutBreadcrumb];
    case 'start':
      return [...shared, startProjectPageSchema, startBreadcrumb];
    default:
      return shared;
  }
}

const App: React.FC = () => {
  // Read initial path from URL hash, default to 'home'
  const getPathFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  };

  const [currentPath, setCurrentPath] = useState(getPathFromHash);

  // Sync URL hash with current path
  useEffect(() => {
    window.scrollTo(0, 0);
    const newHash = currentPath === 'home' ? '' : `#${currentPath}`;
    if (window.location.hash !== newHash && window.location.hash !== `#${currentPath}`) {
      window.history.pushState(null, '', newHash || window.location.pathname);
    }
  }, [currentPath]);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPathFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Per-page document head (title + meta description)
  const pageMeta = PAGE_META[currentPath] || PAGE_META.home;
  useDocumentHead(pageMeta);

  // Per-page JSON-LD schemas
  const schemas = useMemo(() => getSchemasForPage(currentPath), [currentPath]);

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
      case 'faq':
        return <FAQPage onNavigate={navigateTo} />;
      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;
      case 'approach':
        return <ApproachPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'start':
        return <StartAProjectPage onNavigate={navigateTo} />;
      case 'discovery':
        return <DiscoveryFormPage onNavigate={navigateTo} />;
      case 'products':
        return <ProductsPage onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-honey/30">
      <JsonLd schemas={schemas} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-charcoal focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar onNavigate={navigateTo} currentPath={currentPath} />
      <main id="main-content" role="main">
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
