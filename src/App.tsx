import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Raparigas from './pages/Raparigas';
import Formations from './pages/Formations';
import ConseilRH from './pages/ConseilRH';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import CGV from './pages/CGV';
import NotFound from './pages/NotFound';
import BlogArticle from './pages/BlogArticle';
import CookieConsent from './components/CookieConsent';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Add viewport meta tag for proper mobile scaling
  React.useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <Blog setCurrentPage={setCurrentPage} />;
      case 'raparigas':
        return <Raparigas />;
      case 'formations':
        return <Formations />;
      case 'conseil':
        return <ConseilRH />;
      case 'coaching':
        return <Coaching />;
      case 'contact':
        return <Contact />;
      case 'mentions-legales':
        return <MentionsLegales />;
      case 'politique-confidentialite':
        return <PolitiqueConfidentialite />;
      case 'cgv':
        return <CGV />;
      case 'blog-article':
      case 'conduite-changement':
      case 'accompagner-managers':
      case 'gestion-crise':
      case 'mediation-entreprise':
      case 'coaching-professionnel':
        return <BlogArticle setCurrentPage={setCurrentPage} articleId={currentPage} />;
      default:
        return <NotFound setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <CookieConsent 
        onAccept={() => console.log('Cookies accepted')}
        onReject={() => console.log('Cookies rejected')}
        onCustomize={() => console.log('Cookies customized')}
      />
    </div>
  );
}

export default App;