import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
      className="py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key="about" // Add key for page identification
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">About Pioni Coffee</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are more than just a coffee shop. We're a community hub where coffee lovers gather to experience the finest third-wave coffee culture in Istanbul.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://i.ibb.co/Y7ygg4D8/img-001.jpg"
              alt="Pioni Coffee Interior"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </motion.div>
          
          <motion.div
            className="flex items-center"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in the heart of Nişantaşı, Pioni Coffee began as a dream to bring authentic third-wave coffee culture to Istanbul. Our passion for quality coffee and warm hospitality has made us a beloved neighborhood gathering place.
              </p>
              <p className="text-gray-600 mb-4">
                We carefully source our beans from the finest coffee farms around the world and roast them to perfection. Every cup is crafted with precision and love, ensuring that each sip delivers an exceptional experience.
              </p>
              <p className="text-gray-600">
                Our cozy atmosphere, friendly staff, and commitment to quality have earned us a loyal community of coffee enthusiasts who consider Pioni Coffee their second home.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Sustainability',
                description: 'We source our coffee beans ethically and support sustainable farming practices that benefit both farmers and the environment.'
              },
              {
                icon: '👥',
                title: 'Community',
                description: 'We believe in building strong relationships with our customers and creating a welcoming space for everyone in our neighborhood.'
              },
              {
                icon: '⭐',
                title: 'Quality',
                description: 'We never compromise on quality. From bean selection to brewing techniques, we maintain the highest standards in everything we do.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ersin',
                role: 'Co-Founder & Head Barista',
                image: 'https://i.ibb.co/x8rWZQfR/img-002.jpg',
                description: 'Passionate about coffee since 2015, Ersin brings expertise in coffee roasting and brewing techniques.'
              },
              {
                name: 'Mert',
                role: 'Co-Founder & Manager',
                image: 'https://i.ibb.co/7JPrdfFY/img-003.jpg',
                description: 'With a background in hospitality, Mert ensures every customer feels welcome and valued.'
              },
              {
                name: 'Ali',
                role: 'Senior Barista',
                image: 'https://i.ibb.co/gbMPTzKd/img-004.jpg',
                description: 'Known for his friendly demeanor and exceptional latte art skills, Ali is a customer favorite.'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-1">{member.name}</h3>
                  <p className="text-amber-700 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Section */}
        <motion.div 
          className="mt-16 bg-amber-50 p-8 rounded-lg"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Visit Our Cozy Cafe</h2>
            <p className="text-gray-700 text-lg mb-6">
              Located in the vibrant Nişantaşı district, our cafe offers a perfect escape from the bustling city life. Whether you're looking to work, relax, or catch up with friends, Pioni Coffee provides the ideal atmosphere.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Why Customers Love Us:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pet-friendly environment</li>
                  <li>• Free Wi-Fi for remote work</li>
                  <li>• Outdoor seating with heaters</li>
                  <li>• Specialty coffee from around the world</li>
                  <li>• Fresh, homemade desserts daily</li>
                  <li>• Friendly and knowledgeable staff</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Special Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lactose-free milk options available</li>
                  <li>• Fresh coffee beans roasted weekly</li>
                  <li>• Healthy and fit menu options</li>
                  <li>• Cozy reading corner with books</li>
                  <li>• Regular community events</li>
                  <li>• Loyalty program for regular customers</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;