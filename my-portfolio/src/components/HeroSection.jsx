import { FaDownload } from 'react-icons/fa';
import proPic from '../assets/Picsart_24-02-13_18-45-20-105.jpg';

const HeroSection = () => {
    return (
        <div className='bg-gradient-to-r from-black via-gray-900 to-black shadow-lg'>
            <section className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-12">
                {/* Left Side - Text Content */}
                <div className="text-center md:text-left space-y-4 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">
                        Hello, I am <span className="text-secondary">Ahsan Adip</span>
                    </h1>
                    <p className="text-lg md:text-xl text-accent font-medium">
                        Frontend Developer | Web Developer
                    </p>

                    {/* Resume Download Button */}
                    <a
                        href="/portfolio.pdf" // Path to your resume file
                        download="MyPortfolio"
                        className="btn btn-primary flex w-[200px] items-center gap-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-300"
                    >
                        <FaDownload />
                        Download Resume
                    </a>
                </div>

                {/* Right Side - Image */}
                <div className="mt-6 md:mt-0">
                    <img
                        src={proPic}
                        alt="Ahsan Adip"
                        className="w-40 md:w-56 h-40 md:h-56 object-cover rounded-full shadow-xl border-4 border-secondary"
                    />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
