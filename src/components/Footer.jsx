import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">☕</span>
              <div>
                <h3 className="text-xl font-bold">Pioni Coffee</h3>
                <p className="text-amber-200 text-sm">Premium Coffee Experience</p>
              </div>
            </div>
            <p className="text-amber-100">
              Experience the finest third-wave coffee in Istanbul. Our cozy atmosphere and premium coffee beans create the perfect environment for coffee lovers.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="mr-3 text-amber-300" />
                <span>+90 534 693 6133</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="mr-3 text-amber-300" />
                <span>info@pionicoffee.com</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMapPin} className="mr-3 text-amber-300" />
                <span>Nişantaşı, Istanbul, Turkey</span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-amber-100">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; {currentYear} Pioni Coffee. All rights reserved.</p>
          <p className="mt-2">
            Domain + Hosting + Design = 
            <a 
              href="https://www.account4web.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white ml-1 underline"
            >
              Account4Web Inc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;