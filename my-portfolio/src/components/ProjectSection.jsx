import { useState } from "react";
import { FaReact, FaJs, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import img1 from "../assets/blood.png";
import img2 from "../assets/online.png";
import img3 from "../assets/crwd.png";

const projects = [
  {
    name: "Blood Donation Platform",
    image: img1,
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
    image: img2,
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
    image: img3,
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
    <div className="bg-black pt-10">
      <div className="bg-gray-900 text-white p-8 md:p-12 w-11/12 mx-auto rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h2 className="text-2xl font-semibold text-secondary mb-3">
                {project.name}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mt-4">
                <button
                  onClick={() => handleViewDetails(project)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg block text-center w-full"
                >
                  View More / Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Details Section */}
        {selectedProject && (
          <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg text-white">
            <h2 className="text-3xl font-bold text-center text-blue-400">
              {selectedProject.name}
            </h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-60 object-cover rounded-lg my-4"
            />
            <p className="text-gray-300 text-center">{selectedProject.description}</p>
            <div className="flex justify-evenly gap-3 mt-4 pb-4 text-3xl">
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

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-400">Challenges Faced</h3>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
