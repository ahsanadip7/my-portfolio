import { useState } from "react";
import { FaReact, FaJs, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import img1 from "../assets/Screenshot 2025-04-10 160033.png"; // GadgetSwap
import img2 from "../assets/blood.png";
import img3 from "../assets/online.png";
import img4 from "../assets/crwd.png";

const projects = [
  {
    name: "GadgetSwap - Rental Marketplace",
    image: img1,
    liveDemo: "https://agadgetswap.netlify.app",
    github: "https://github.com/omarFaruk99/GadgetSwap-Rental-Marketplace-ClineSide-TeamCollaboration",
    description: "A platform for renting gadgets, where users can list and rent gadgets, and the platform handles secure payments and logistics.",
    technologies: [FaReact, SiTailwindcss, SiFirebase, FaJs],
    challenges: "Implementing secure payment integration and managing user interactions with rental items was a challenge.",
    improvements: "Plans to add better inventory management, improve user reviews, and include real-time chat functionality.",
    detailsPage: "https://github.com/ahsanadip7/gadgetswap",
    teamCollaboration: "This project was developed as a team collaboration, where various members worked on different aspects such as front-end development, back-end services, payment systems, and security implementation, ensuring a seamless experience for users and secure transactions.",
  },
  {
    name: "Blood Donation Platform",
    image: img2,
    liveDemo: "https://assignment-12-db862.web.app/",
    github: "https://github.com/ahsanadip7/blood-donation-web-page",
    description: "An online platform where users can register as donors, manage donation requests, and track blood availability in real-time.",
    technologies: [FaReact, SiTailwindcss, SiFirebase, FaJs],
    challenges: "Challenges included managing real-time blood availability and optimizing the registration process for a better user experience.",
    improvements: "Future plans include adding a mobile app version, incorporating more features for blood donors, and improving the admin panel.",
    detailsPage: "https://github.com/ahsanadip7/blood-donation-web-page",
  },
  {
    name: "Online Group Study Platform",
    image: img3,
    liveDemo: "https://assignment-no-10-17056.web.app/",
    github: "https://github.com/ahsanadip7/online-group-study-website",
    description: "A collaborative online platform where users can join group study sessions, create tasks, and track progress.",
    technologies: [FaReact, SiTailwindcss, SiFirebase, FaJs],
    challenges: "One of the challenges was implementing real-time synchronization for group study tasks and session progress.",
    improvements: "In the future, I plan to integrate video chat functionality and improve task management with more advanced features.",
    detailsPage: "https://github.com/ahsanadip7/online-group-study-website",
  },
  {
    name: "Crowd Cube - Crowdfunding Platform",
    image: img4,
    liveDemo: "https://assignment-11-57128.web.app/",
    github: "https://github.com/ahsanadip7/crowd-funding",
    description: "A crowdfunding platform for users to create and support projects with donations, featuring real-time progress tracking.",
    technologies: [FaReact, SiTailwindcss, SiFirebase, FaJs],
    challenges: "The main challenge was ensuring secure and accurate donation processing, along with managing project updates in real-time.",
    improvements: "I plan to integrate more payment gateways and provide advanced analytics for project creators.",
    detailsPage: "https://github.com/ahsanadip7/crowd-funding",
  },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="">
      <div className="bg-gray-900 text-white p-8 md:p-12 w-11/12 mx-auto rounded-2xl shadow-lg">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>

        {/* Flexbox Layout for Projects */}
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`${project.name === "GadgetSwap - Rental Marketplace"
                  ? "bg-cyan-600 text-indigo-900 border-2 border-indigo-300"
                  : "bg-gray-800 text-blue-300"

                } p-6 rounded-lg shadow-lg w-80 h-[450px] flex flex-col`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h2 className="text-2xl font-semibold  mb-3">
                {project.name}
              </h2>
              <p className="text-blue-100 mb-4 h-20">{project.description}</p>

              <div className="mt-auto">
                <button
                  onClick={() => handleViewDetails(project)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg block text-center w-full"
                >
                  View More / Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Section */}
        {selectedProject && (
          <motion.div
            className="mt-10 p-8 bg-gray-800 rounded-lg shadow-lg text-white mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-blue-400 mb-4">
              {selectedProject.name}
            </h2>
            <div className="flex justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-64 h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <p className="text-gray-300 text-center mb-6">{selectedProject.description}</p>
            <div className="flex justify-center gap-6 text-3xl mb-6">
              <p className="text-gray-300 text-xl">Technologies used :</p>
              {selectedProject.technologies.map((TechIcon, i) => (
                <TechIcon key={i} className="text-blue-400 hover:text-blue-300" />
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-1"
              >
                <FaGithub />
                GitHub Repo
              </a>
            </div>

            <div className="mt-6">
              {/* Team Collaboration Section */}
              {selectedProject.teamCollaboration && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-blue-400">Team Collaboration</h3>
                  <p className="text-gray-300">{selectedProject.teamCollaboration}</p>
                </div>
              )}

              <h3 className="text-xl mt-4 font-semibold text-blue-400">Challenges Faced</h3>
              <p className="text-gray-300">{selectedProject.challenges}</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-blue-400">Potential Improvements and Future Plans</h3>
              <p className="text-gray-300">{selectedProject.improvements}</p>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg block mx-auto"
            >
              Close Details
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;

