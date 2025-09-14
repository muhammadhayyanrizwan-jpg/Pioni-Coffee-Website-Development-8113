import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://i.ibb.co/Y7ygg4D8/img-001.jpg',
    'https://i.ibb.co/x8rWZQfR/img-002.jpg',
    'https://i.ibb.co/7JPrdfFY/img-003.jpg',
    'https://i.ibb.co/gbMPTzKd/img-004.jpg',
    'https://i.ibb.co/8nhg3G2n/img-006.jpg',
    'https://i.ibb.co/cS1GS63Y/img-007.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key="home" // Add key for page identification
    >
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1.05 : 1
              }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={image}
                alt={`Coffee ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <motion.div
            className="max-w-4xl px-4"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              Welcome to Pioni Coffee
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              variants={itemVariants}
            >
              Experience the finest third-wave coffee in the heart of Istanbul
            </motion.p>
            <motion.div
              className="space-x-4"
              variants={itemVariants}
            >
              <Link
                to="/menu"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 inline-block"
              >
                View Our Menu
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 inline-block"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Why Choose Pioni Coffee?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing the best coffee experience with premium beans, expert brewing, and warm hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '☕',
                title: 'Premium Coffee',
                description: 'We source the finest beans and roast them to perfection for an exceptional coffee experience.'
              },
              {
                icon: '🏠',
                title: 'Cozy Atmosphere',
                description: 'Our warm and welcoming space is perfect for relaxation, work, or meeting with friends.'
              },
              {
                icon: '🐾',
                title: 'Pet Friendly',
                description: 'Bring your furry friends along! We love having pets in our cafe and provide a welcoming environment for all.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Experience the perfect blend of quality coffee, delicious food, and warm hospitality at Pioni Coffee.
            </p>
            <Link
              to="/contact"
              className="bg-white text-amber-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;