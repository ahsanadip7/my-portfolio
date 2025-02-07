import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
            >
              <li>
                <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:text-blue-500">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="/path/to/your-portfolio.pdf" // Replace with your actual file path
            download="MyPortfolio" // File name when downloading
            className="btn bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600"
          >
            <FaDownload />
            Download Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
