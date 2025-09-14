import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      {
        name: 'Espresso',
        price: '₺25',
        description: 'Rich, bold espresso shot',
        image: 'https://i.ibb.co/MkZYdQjv/img-008.jpg'
      },
      {
        name: 'Americano',
        price: '₺30',
        description: 'Smooth espresso with hot water',
        image: 'https://i.ibb.co/ybxJHnQ/img-009.jpg'
      },
      {
        name: 'Latte',
        price: '₺35',
        description: 'Creamy steamed milk with espresso',
        image: 'https://i.ibb.co/Q7gY8nFW/img-010.jpg'
      },
      {
        name: 'Cappuccino',
        price: '₺35',
        description: 'Perfect balance of espresso, steamed milk, and foam',
        image: 'https://i.ibb.co/DfyvF9t6/img-011.jpg'
      },
      {
        name: 'Flat White',
        price: '₺38',
        description: 'Rich espresso with velvety microfoam',
        image: 'https://i.ibb.co/RTKKf5sW/img-012.jpg'
      },
      {
        name: 'V60 Pour Over',
        price: '₺45',
        description: 'Single origin coffee brewed to perfection',
        image: 'https://i.ibb.co/B243JqKc/img-013.jpg'
      }
    ],
    desserts: [
      {
        name: 'San Sebastian Cheesecake',
        price: '₺45',
        description: 'Creamy burnt Basque cheesecake',
        image: 'https://i.ibb.co/5hpzMLm4/img-014.jpg'
      },
      {
        name: 'Carrot Cake',
        price: '₺40',
        description: 'Moist carrot cake with cream cheese frosting',
        image: 'https://i.ibb.co/LXQN9ZjZ/img-015.jpg'
      },
      {
        name: 'Snickers Bar',
        price: '₺35',
        description: 'Homemade snickers with chocolate and nuts',
        image: 'https://i.ibb.co/vCt9kwS5/img-016.jpg'
      },
      {
        name: 'Croissant',
        price: '₺25',
        description: 'Buttery, flaky French pastry',
        image: 'https://i.ibb.co/b9TBJ1G/img-017.jpg'
      }
    ],
    breakfast: [
      {
        name: 'Avocado Toast',
        price: '₺55',
        description: 'Fresh avocado on sourdough with poached egg',
        image: 'https://i.ibb.co/xK5yKFvc/img-018.jpg'
      },
      {
        name: 'Breakfast Platter',
        price: '₺65',
        description: 'Eggs, cheese, olives, tomatoes, and fresh bread',
        image: 'https://i.ibb.co/F4L0L6bK/img-020.jpg'
      },
      {
        name: 'Omelet',
        price: '₺45',
        description: 'Fluffy omelet with cheese and herbs',
        image: 'https://i.ibb.co/n80p5Y1F/img-022.jpg'
      },
      {
        name: 'Tuna Salad',
        price: '₺50',
        description: 'Fresh tuna salad with mixed greens',
        image: 'https://i.ibb.co/vCHDTH3S/img-023.jpg'
      }
    ],
    drinks: [
      {
        name: 'Matcha Latte',
        price: '₺40',
        description: 'Premium matcha with steamed milk',
        image: 'https://i.ibb.co/4wf9Jsbh/img-024.jpg'
      },
      {
        name: 'Fresh Lemonade',
        price: '₺25',
        description: 'Refreshing homemade lemonade',
        image: 'https://i.ibb.co/rGN0FHYY/img-025.jpg'
      },
      {
        name: 'Iced Coffee',
        price: '₺32',
        description: 'Cold brew coffee over ice',
        image: 'https://i.ibb.co/ynJ4wFp0/img-026.jpg'
      },
      {
        name: 'Hot Chocolate',
        price: '₺35',
        description: 'Rich chocolate with whipped cream',
        image: 'https://i.ibb.co/77W2Lvv/img-027.jpg'
      }
    ]
  };

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'desserts', name: 'Desserts', icon: '🧁' },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
      key="menu" // Add key for page identification
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Our Menu</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee, delicious desserts, and fresh breakfast options.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`m-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          key={activeCategory}
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-700">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Note */}
        <motion.div 
          className="mt-16 text-center bg-amber-50 p-8 rounded-lg"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Loyalty Program</h3>
          <p className="text-gray-700 text-lg">
            Buy 10 coffees and get 1 free! Ask our friendly staff about our loyalty card program.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Menu;