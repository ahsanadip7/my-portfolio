const AboutMe = () => {
    return (
    <div className="bg-black">
          <div className=" text-white rounded-2xl shadow-lg ">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mt-5">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium text-center">
              Hi, I am Ahsan, a passionate Front-End Developer based in Rangpur, Bangladesh.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-xl text-lg mb-4 w-10/12  mx-auto md:text-xl">
                <h2 className="font-semibold text-primary text-center">My Programming Journey:</h2>
                <p>
                  My journey in programming started in [Year] when I first encountered HTML and CSS. I was captivated by how
                  websites come to life with just a few lines of code. From there, I moved on to learning JavaScript, which
                  opened up a whole new world of dynamic, interactive web development. Over time, I dived into React, Tailwind CSS,
                  and other modern front-end tools, which I now use to build responsive, user-friendly web applications.
                  My passion for coding continues to grow as I solve new challenges and build meaningful projects.
                </p>
              </div>
  
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-xl text-lg mb-4 w-10/12 mx-auto md:text-xl">
                <h2 className="font-semibold text-primary text-center">The Type of Work I Enjoy:</h2>
                <p>
                  I thrive on building clean, efficient, and visually appealing websites. Whether it is creating interactive
                  components with React, styling websites using Tailwind CSS, or ensuring a smooth user experience, I enjoy every
                  step of the development process. My goal is always to create websites that are not only functional but also
                  enjoyable to use. I love turning ideas into reality and collaborating with others to bring their visions to life.
                </p>
              </div>
  
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-xl mb-4 w-10/12 mx-auto text-lg md:text-xl">
                <h2 className="font-semibold text-primary text-center">Hobbies and Interests Outside Programming:</h2>
                <p>
                  When I am not coding, I enjoy spending time outdoors. I am a huge fan of sports like cricket and football, where
                  I can engage in friendly competition and stay active. Additionally, I have always had a passion for photography,
                  capturing moments and exploring the beauty in everyday life. I also enjoy reading, particularly books on personal
                  development and technology. These activities help me relax, unwind, and stay inspired to bring fresh ideas to my
                  work.
                </p>
              </div>
  
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-xl mb-10 w-10/12 mx-auto text-lg md:text-xl">
                <h2 className="font-semibold text-primary text-center">A Bit About My Personality:</h2>
                <p>
                  I am a detail-oriented and driven individual who thrives in collaborative environments. I value continuous
                  learning and always strive to improve my skills. I enjoy problem-solving, which is why I find programming so
                  fulfilling. I am also a good listener and enjoy connecting with others who share similar interests. Whether it is
                  working on a team project or sharing knowledge with fellow developers, I believe that great things come from
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    );
  };
  
  export default AboutMe;
  