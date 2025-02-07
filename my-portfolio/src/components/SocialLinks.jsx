import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className='bg-gray-900 shadow-lg p-6 md:p-12'>
      <section className="flex flex-col md:flex-row items-center justify-center gap-40">
        {/* Left Side - Social Links */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Social Contact:
          </h1>

          <div className="flex flex-col gap-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-white bg-gray-800 hover:bg-gray-700 rounded-2xl p-2 shadow-lg"
            >
              <FaGithub className="text-2xl" />
              <span className="text-lg">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-white bg-blue-700 hover:bg-blue-600 rounded-2xl p-2 shadow-lg"
            >
              <FaLinkedin className="text-2xl" />
              <span className="text-lg">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-white bg-blue-400 hover:bg-blue-500 rounded-2xl p-2 shadow-lg"
            >
              <FaTwitter className="text-2xl" />
              <span className="text-lg">Twitter</span>
            </a>
            <a 
              href="https://www.facebook.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-white bg-blue-800 hover:bg-blue-700 rounded-2xl p-2 shadow-lg"
            >
              <FaFacebook className="text-2xl" />
              <span className="text-lg">Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialLinks;
