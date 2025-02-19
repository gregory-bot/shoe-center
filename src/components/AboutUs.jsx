import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://m.media-amazon.com/images/I/61QIPDZm+QL._AC_SX300_SY300_.jpg",
  "https://m.media-amazon.com/images/I/61YqLa6M-xL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  "https://m.media-amazon.com/images/I/718sO7OZO1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  "https://images.pexels.com/photos/3550484/pexels-photo-3550484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function AboutUs() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image Carousel */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Jengi Laptops Workshop"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          </div>

          {/* About Us Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About crystalchip computers and network services</h2>
            <p className="text-gray-600 mb-6">
            At crystalchip computers and network services, we’re your trusted partner for all things tech. With years of experience, our expert team offers top-notch repairs, high-quality new and refurbished computers, and reliable network services to keep you connected and productive.
            </p>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[200px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.30104864432104!2d36.8250994!3d-1.2838218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129fc5ce763%3A0x777d4b970984a739!2sJENGI%20HOUSE!5e0!3m2!1sen!2ske!4v1738734442412!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
