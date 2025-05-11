import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt, FaFigma
} from "react-icons/fa";
import {
  SiTailwindcss, SiFirebase, SiExpress, SiMongodb
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" />, level: "90%" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "85%" },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "100%" },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "100%" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "100%" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "75%" },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: "70%" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "95%" },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: "90%" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" />, level: "100%" },
      { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: "100%" },
      { name: "Databases", icon: <FaDatabase className="text-indigo-400" />, level: "80%" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-white rounded-2xl shadow-2xl p-6 md:p-12">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h1>

        <div className="space-y-8">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              className="bg-[#1f2937] border border-gray-700 rounded-2xl shadow-md p-6 md:p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-secondary mb-6 text-center">
                {group.category}
              </h2>

              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col gap-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-lg font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 h-3 rounded-full">
                      <motion.div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: skill.level }}
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
