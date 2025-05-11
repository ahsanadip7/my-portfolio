const Footer = () => {
    return (
    <div className=" bg-black">
          <footer className="bg-gray-900 text-white py-6 ">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-semibold">
            <span className="text-primary">Ahsan Adip</span> | Web Developer
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/ahsanadip7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ahsanadip/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ahsanadip@example.com"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ahsan Adip. All rights reserved.
        </div>
      </footer>
    </div>
    );
  };
  
  export default Footer;
  