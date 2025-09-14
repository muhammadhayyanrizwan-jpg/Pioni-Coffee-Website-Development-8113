import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  const reviews = [
    {
      author: "Jashan T",
      rating: 5,
      date: "4 months ago",
      review: "Amazing cafe with great selection of drinks and food! The sitting area is so cozy and they even have heaters if you want to sit outside. The owners are really friendly! I would recommend everyone to come here and enjoy their atmosphere."
    },
    {
      author: "Yılmaz GÖKTUĞ AKAN",
      rating: 5,
      date: "a year ago",
      review: "This new third-wave coffee spot in the neighborhood is a must-visit! Not only do they serve excellent coffee, but they also offer a fun selection of drinks, delicious desserts, and savory bites. The menu includes healthy and fit options."
    },
    {
      author: "Altynay Muratkyzy",
      rating: 5,
      date: "2 months ago",
      review: "Happy to have found this place. There are plenty of coffee shops around, but most serve burnt lattes or are ridiculously overpriced. At Pioni, everything was on point – the latte and cheesecake were great, the baristas were friendly, and the atmosphere is perfect for a small group of friends."
    },
    {
      author: "عفان السوري",
      rating: 5,
      date: "3 months ago",
      review: "Ersin and the staff were very polite and welcoming. The food and the atmosphere is very nice. I highly recommend. The place is small but their heart and hospitality is very big. Love their vibe 🤍💯🥇"
    },
    {
      author: "عمر الشريف",
      rating: 5,
      date: "10 months ago",
      review: "The atmosphere is perfect, delicious dessert and coffee, warm and quite cafe. Very respectful staff, highly recommended 🤍🤍"
    },
    {
      author: "Rachit Kejariwal",
      rating: 5,
      date: "3 weeks ago",
      review: "The coffee here is amazing and the service is kind and friendly. Highly recommended!"
    },
    {
      author: "Keyboord",
      rating: 5,
      date: "5 months ago",
      review: "One of the best coffee places in Istanbul, They speak very good English made everything easier. Would recommend"
    },
    {
      author: "Thomas Lynch",
      rating: 5,
      date: "3 months ago",
      review: "Perfectly made coffee! And lots of good vibes. Loved the place 👍"
    },
    {
      author: "E P",
      rating: 5,
      date: "2 months ago",
      review: "Kind staff & delicious coffee!"
    },
    {
      author: "Ivan Liashenko",
      rating: 5,
      date: "9 months ago",
      review: "Great lactose free milk cappuccino & San Sebastián cheesecake 🫶 heavenly experience 👌"
    },
    {
      author: "T M",
      rating: 5,
      date: "3 months ago",
      review: "The coffee was great we took iced V60. Highly recommend 🙏🏻"
    },
    {
      author: "Alice Kozlyakova",
      rating: 3,
      date: "11 months ago",
      review: "My visit here was questionable at least. I was overcharged for 210 TRL, which the staff gave me back in cash after I realised that. Tuna salad had whole olives with pits, I found out about that after biting into one. It hurt! Espresso tonic was good though."
    },
    {
      author: "Cem Kullukcu",
      rating: 5,
      date: "5 months ago",
      review: "Great atmosphere. Fantastic service. Carrot cake was to die for."
    },
    {
      author: "HuiWei Chin",
      rating: 5,
      date: "5 months ago",
      review: "The barista is so lovely and service is good. Bonus points for the cute sleeping cat"
    },
    {
      author: "Özge YILDIRIM",
      rating: 5,
      date: "a year ago",
      review: "If you are in Nişantaşı and you want to drink a really good and high quality coffee and get a proper service at prices that are not over-priced due to the location, then I highly recommend that you stop by. In addition to their coffee, their lemonade is a must."
    },
    {
      author: "ella chuprin",
      rating: 5,
      date: "a year ago",
      review: "We are visiting from USA and this food and coffee was so delicious! Love the atmosphere, and the owner is very kind and hospitable. Would recommend to anyone looking for good coffee."
    },
    {
      author: "Bin A",
      rating: 4,
      date: "3 months ago",
      review: "Cool vibes"
    },
    {
      author: "Samuel Vella",
      rating: 5,
      date: "11 months ago",
      review: "Brilliant coffee and even better Tuna salad"
    },
    {
      author: "Sandra Palceva",
      rating: 5,
      date: "a year ago",
      review: "Welcoming young people, nice, youthful atmosphere, cheesecake tasted fresh, good cold drinks, the bar boy is pretty cute too :-) Good luck with your new business guys!"
    },
    {
      author: "max milion",
      rating: 5,
      date: "a year ago",
      review: "best coffee ever!! wonderful staff that makes your day! delicious drinks and so many choices! and such beautiful decor!!"
    },
    {
      author: "4 Koru",
      rating: 5,
      date: "a year ago",
      review: "Coffee shop vibes was amazing and the service so friendly 🤍👏🏾I tried the ice cortado and ice latte it was fabulous sooo good if you didn't try it yet you have to grab some 10/10"
    },
    {
      author: "Hanan alHammad",
      rating: 5,
      date: "a year ago",
      review: "They are the best coffee shop with the MOST friendliest staff. Great speciality coffee and matcha too!"
    },
    {
      author: "Юлия Кофман",
      rating: 5,
      date: "2 months ago",
      review: "Very tasty coffee"
    },
    {
      author: "Sas Meijs",
      rating: 5,
      date: "9 months ago",
      review: "Such a relaxed atmosphere with a lovely kitten and friendly people, and I had a nice flat white!"
    },
    {
      author: "C C",
      rating: 3,
      date: "2 weeks ago",
      review: "Pioni Coffee in Istanbul has a cozy atmosphere, but overall the experience was fairly average. The coffee itself tasted quite regular – nothing particularly special or memorable about the flavor. As for the service, it was just okay. Staff were polite but not particularly attentive."
    }
  ];

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <SafeIcon
        key={index}
        icon={FiStar}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Customer Reviews</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our customers are saying about their experience at Pioni Coffee.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          {currentReviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-amber-900">{review.author}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.review}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center space-x-2"
            variants={itemVariants}
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? 'bg-amber-900 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Review Summary */}
        <motion.div 
          className="mt-16 bg-amber-50 p-8 rounded-lg text-center"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Join Our Happy Customers</h2>
          <p className="text-gray-700 text-lg mb-6">
            With hundreds of 5-star reviews, Pioni Coffee has become a beloved destination for coffee lovers in Istanbul. 
            Experience the warmth, quality, and hospitality that our customers rave about.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">4.8</div>
              <div className="flex justify-center mb-1">
                {renderStars(5)}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-900">150+</div>
              <div className="text-sm text-gray-600">Happy Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;