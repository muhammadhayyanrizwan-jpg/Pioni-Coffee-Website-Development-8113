import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiX } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const PWAInstallPrompt = ({ onClose }) => {
  const handleInstall = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        window.deferredPrompt = null;
      });
    }
    onClose();
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-amber-900 text-white p-4 rounded-lg shadow-lg max-w-sm z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white hover:text-amber-200"
      >
        <SafeIcon icon={FiX} size={20} />
      </button>
      <div className="flex items-center mb-2">
        <div className="text-2xl mr-3">☕</div>
        <div>
          <h3 className="font-bold">Install Pioni Coffee App</h3>
          <p className="text-sm text-amber-100">Get quick access to our menu and updates!</p>
        </div>
      </div>
      <button
        onClick={handleInstall}
        className="w-full bg-white text-amber-900 py-2 px-4 rounded font-semibold hover:bg-amber-50 transition-colors flex items-center justify-center"
      >
        <SafeIcon icon={FiDownload} className="mr-2" />
        Install App
      </button>
    </motion.div>
  );
};

export default PWAInstallPrompt;