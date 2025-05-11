import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AboutMe = () => {
  const sections = [
    {
      title: "My Programming Journey",
      content:
        "My journey began in 2022 with HTML and CSS. The thrill of creating visual web elements led me to JavaScript and then React. I’ve since explored Tailwind CSS and other modern front-end tools to craft user-friendly, interactive applications that solve real-world problems.",
    },
    {
      title: "The Type of Work I Enjoy",
      content:
        "I enjoy building elegant and accessible web experiences using React and Tailwind CSS. From planning to deployment, every part of the process excites me. My focus lies in creating seamless interfaces and collaborating with teams to transform ideas into real, usable products.",
    },
    {
      title: "Hobbies and Interests",
      content:
        "Outside programming, I enjoy sports like cricket and football. Photography helps me observe beauty in small details, while reading keeps my curiosity alive. These hobbies refresh my mind and inspire my creativity in development work.",
    },
    {
      title: "A Bit About My Personality",
      content:
        "I’m a curious, collaborative learner who thrives on problem-solving. Detail-oriented, flexible, and always open to feedback—I love working with others and believe growth comes through constant learning and communication.",
    },
  ];

  return (
    <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-white rounded-2xl shadow-2xl p-6 md:p-12 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary drop-shadow-md">
            About Me
          </h1>
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Hi, I am Ratul, a passionate Front-End Developer based in Rangpur, Bangladesh.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Cards with Snap */}
        <div className="mt-12 overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-6 md:gap-8 px-1 min-w-max">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                className="w-80 min-w-[20rem] flex-shrink-0 snap-center bg-[#1e293b]/80 border border-gray-700 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <h2 className="text-2xl font-semibold text-white text-center mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-300 text-justify leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
