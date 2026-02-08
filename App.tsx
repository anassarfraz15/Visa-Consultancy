
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
          </Routes>
        </main>
        <Footer />
        <GeminiChat />
      </div>
    </Router>
  );
};

export default App;
