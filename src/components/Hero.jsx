import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const videos = [
  "https://videos.pexels.com/video-files/4884242/4884242-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/4974884/4974884-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/7253660/7253660-uhd_2732_1440_30fps.mp4"
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000); // Changes video every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      {videos.map((video, index) => (
        <video
          key={index}
          ref={index === activeIndex ? videoRef : null}
          autoPlay
          loop
          muted
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-4xl md:text-6xl mb-8" style={{ fontFamily: 'Courier New, monospace' }}>
          <Typewriter
            options={{
              strings: [
                'your trusted laptop partner',
                'quality repairs and services',
                'get new or refurbished laptops'
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 60,
            }}
          />
        </div>

        <button
          onClick={scrollToServices}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          view our services
        </button>
      </div>
    </div>
  );
}

export default Hero;
