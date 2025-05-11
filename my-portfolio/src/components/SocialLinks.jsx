import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  return (
    <div className="py-8 md:py-12 shadow-lg w-11/12 mx-auto rounded-2xl">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-40">
        {/* Left Side - Social Links */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl text-center md:text-4xl font-extrabold text-white">
            Connect with Me:
          </h1>

          {/* Button Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              {
                href: "https://github.com/ahsanadip7",
                icon: <FaGithub className="text-2xl" />,
                label: "GitHub",
                bgClass: "bg-gray-800 hover:bg-gray-700",
              },
              {
                href: "https://www.linkedin.com/in/yourusername",
                icon: <FaLinkedin className="text-2xl" />,
                label: "LinkedIn",
                bgClass: "bg-blue-700 hover:bg-blue-600",
              },
              {
                href: "https://x.com/ahsanadip4",
                icon: <FaTwitter className="text-2xl" />,
                label: "Twitter",
                bgClass: "bg-blue-400 hover:bg-blue-500",
              },
              {
                href: "https://www.facebook.com/ahsan.adip.54",
                icon: <FaFacebook className="text-2xl" />,
                label: "Facebook",
                bgClass: "bg-blue-800 hover:bg-blue-700",
              },
              {
                href: "mailto:ahsanadip7@gmail.com",
                icon: <FaEnvelope className="text-2xl" />,
                label: "Email",
                bgClass: "bg-blue-500 hover:bg-blue-400",
              },
              {
                href: "tel:+8801780924406",
                icon: <FaPhoneAlt className="text-2xl" />,
                label: "Phone",
                bgClass: "bg-green-500 hover:bg-green-400",
              },
              {
                href: "https://wa.me/1234567890",
                icon: <FaWhatsapp className="text-2xl" />,
                label: "WhatsApp",
                bgClass: "bg-green-600 hover:bg-green-500",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-3 text-white ${social.bgClass} rounded-2xl p-4 shadow-xl transform transition-all duration-300 hover:scale-105`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
                <span className="text-lg font-semibold">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialLinks;
