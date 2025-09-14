import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-8xl mb-4"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ☕
        </motion.div>
        <motion.h1
          className="text-4xl font-bold text-amber-900 mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Pioni Coffee
        </motion.h1>
        <motion.p
          className="text-amber-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Brewing the perfect experience...
        </motion.p>
        <motion.div
          className="mt-6 w-32 h-1 bg-amber-200 rounded mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-amber-900 rounded"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;