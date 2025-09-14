import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPWAPrompt, setShowPWAPrompt] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    }

    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // PWA install prompt after 10 seconds
    const pwaTimer = setTimeout(() => {
      setShowPWAPrompt(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(pwaTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        {showPWAPrompt && (
          <PWAInstallPrompt onClose={() => setShowPWAPrompt(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;