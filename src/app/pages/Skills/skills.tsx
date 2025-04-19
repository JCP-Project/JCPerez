import { useContext, useEffect, useState } from 'react';
import techList from '../../data/skills';
import { motion } from 'framer-motion';
import themeContext from '../../components/Themes/themeContext';

interface techStack {
  id: number;
  logo: string;
  alt: string;
  path: string;
  exp: number;
}

function Skills() {
  const theme = useContext(themeContext);
  const [tech, setTech] = useState<techStack[]>([]);
  useEffect(() => {
    setTech(techList);
  }, []);

  const totalExperience = 7;
  

  return (
    <>
      <div className="my-5">
        <div className="flex items-center h-full justify-center md:px-[200px]">
          <div className="mt-10 z-10">
            {/* Title Section */}
            <motion.h2
              className={`text-3xl font-semibold text-center mt-10 mb-2 mb-2 theme-${theme}`}
              initial={{ y: -20, scale:1.5 }}
              animate={{ y: 0, scale: 1 }}   
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
                duration: 2,  // Total duration of the animation
              }}
            >
              Technologies I Work With
            </motion.h2>

            <motion.div
              className="border-b-2 border-gray-300 mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{ originX: 0.5 }}  // This sets the animation to grow from the center
            ></motion.div>
            
            {/* Skills Section */}
            <div className="flex flex-wrap">
              {
                tech.map((techdata) => (
                  <div
                    key={techdata.id}
                    className={`flex items-center justify-center my-3 w-full md:w-1/2 px-2 theme-${theme}`}
                  >
                    <div className="flex items-center justify-center">
                  <motion.div
                      className="flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={techdata.path} alt={techdata.alt} className="h-10 w-10" />
                    </motion.div>
                    </div>
                    <div className="w-full ml-5">
                      <div>{techdata.alt}</div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <motion.div
                          className="bg-blue-600 text-xs text-white font-medium h-full text-center leading-none rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: `${(techdata.exp / totalExperience) * 100}%` }}
                          transition={{ duration: 2, ease: 'easeInOut' }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className="block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                          >
                            {techdata.exp} years
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

                  <div className="absolute top-0 left-2  z-1 h-full w-full pointer-events-none overflow-hidden">
                      <motion.div 
                      className={`absolute top-0 left-[-200px] text-[300px] h-[90%] font-bold whitespace-nowrap text-movingText  z-10 theme-${theme}`}                    
                          variants={sliderVariants}  initial="initial" animate="animate">
                              <span className="opacity-10">SKILLS</span> 
                      </motion.div>
                  </div>
        </div>
      </div>
    </>
  );
}

  const sliderVariants: any = {
      initial: {
        y: "-40%",
        rotate: -90,
      },
      animate: {
        y: "20%",
        opacity: 1,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
        },
      },
    };

export default Skills;
