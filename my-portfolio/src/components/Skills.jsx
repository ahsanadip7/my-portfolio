import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiExpress, SiMongodb } from "react-icons/si";

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
       <div className="bg-black">
         <div className="bg-gray-900 text-white p-8 md:p-12 w-11/12 mx-auto rounded-2xl shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">Skills & Expertise</h1>

      <div className="space-y-8">
        {skills.map((group, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-secondary mb-4">{group.category}</h2>
            <div className="space-y-4">
              {group.skills.map((skill, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
       </div>
    );
};

export default Skills;