import { FaDownload } from 'react-icons/fa';
import proPic from '../assets/Picsart_24-02-13_18-45-20-105.jpg';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-12">
        
        {/* Left Side - Text Content */}
        <div 
          className="text-center md:text-left space-y-6 text-white"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hello, I am <span className="text-blue-500">Abu Said Ratul</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Frontend Developer | Web Developer
          </p>

          {/* Resume Download Button */}
          <a
            href="/portfolio.pdf"
            download="MyPortfolio"
            className="btn flex w-[220px] items-center gap-3 text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Right Side - Image */}
        <div 
          className="mt-6 md:mt-0"
          data-aos="zoom-in"
        >
          <img
            src={proPic}
            alt="Abu Said Ratul"
            className="w-40 md:w-56 h-40 md:h-56 object-cover rounded-full shadow-xl border-4 border-blue-500"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
