import React from 'react';
import {motion} from 'framer-motion';
import {FiPhone,FiMail,FiMapPin,FiClock} from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Contact=()=> {
  const containerVariants={
    hidden: {opacity: 0},
    visible: {opacity: 1,transition: {delayChildren: 0.3,staggerChildren: 0.2}}
  };

  const itemVariants={
    hidden: {y: 20,opacity: 0},
    visible: {y: 0,opacity: 1,transition: {duration: 0.5}}
  };

  return (
    <motion.div 
      className="py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Visit us, call us, or drop us a message. We're here to serve you the best coffee experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
            whileInView="visible"
            viewport={{once: true}}
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <SafeIcon icon={FiMapPin} className="text-amber-900 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    Nişantaşı District<br />
                    Istanbul, Turkey<br />
                    Near Teşvikiye Metro Station
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <SafeIcon icon={FiPhone} className="text-amber-900 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+90 534 693 6133</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <SafeIcon icon={FiMail} className="text-amber-900 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">info@pionicoffee.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <SafeIcon icon={FiClock} className="text-amber-900 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                    <p>Saturday: 8:00 AM - 10:00 PM</p>
                    <p>Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            whileInView="visible"
            viewport={{once: true}}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+90 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-16"
          variants={itemVariants}
          whileInView="visible"
          viewport={{once: true}}
        >
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">Find Us</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8965873858006!2d28.995529299999994!3d41.0493905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7b591d1fbb9%3A0x4db584bf79035761!2sPioni%20Coffee!5e0!3m2!1sen!2s!4v1757864695288!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          whileInView="visible"
          viewport={{once: true}}
        >
          {[
            {
              icon: '🚗',
              title: 'Parking',
              description: 'Street parking available nearby. Public transportation recommended.'
            },
            {
              icon: '🐾',
              title: 'Pet Friendly',
              description: 'Bring your furry friends! We welcome well-behaved pets in our cafe.'
            },
            {
              icon: '📶',
              title: 'Free WiFi',
              description: 'Stay connected with our complimentary high-speed internet access.'
            }
          ].map((info, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-amber-50 rounded-lg"
              variants={itemVariants}
              whileHover={{y: -5, transition: {duration: 0.2}}}
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{info.title}</h3>
              <p className="text-gray-600">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;