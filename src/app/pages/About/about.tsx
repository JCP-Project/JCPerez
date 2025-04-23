import { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import profileGIF from '../../images/profileEmoji.gif'
import profilePNG from '../../images/profile.png'
import themeContext from '../../components/Themes/themeContext';
import jobExp from '../../data/jobExpData';
import PageHeader from "../../components/pageHeader";

import SERDAL from '../../data/logo.png'
import UPLB from '../../data/UPLB_VIGHRColor_1.png'

interface CompanyClient {
    name: string;
    logo: string;
    alt: string;
}


interface JobExperience {
    id: number;
    role: string;
    company: CompanyClient[];
    client: CompanyClient[];
    from: string;
    to: string;
    responsibilities: string[];
}


function About () {
    const theme = useContext(themeContext);
    const [JExp, setJExp] = useState<JobExperience[]>([]);
      const [isHovered, setIsHovered] = useState(false);
      
      useEffect(() =>{
        setJExp(jobExp);
    },[])

    return(
        <>
        <div className="absolute my-5">
          <div className="flex items-center h-full justify-center md:px-[200px]">
            <div className="mt-10 z-10">
            <PageHeader title="About" />

                <div className=" flex flex-col md:flex-row items-center justify-center">
                      <motion.div className="flex-1 flex text-center items-center justify-center">
                          <motion.img src={isHovered ? profileGIF : profilePNG} className="rounded-lg h-[300px]"
                                      onMouseEnter={() => setIsHovered(true)}
                                      onMouseLeave={() => setIsHovered(false)}
                                      whileHover={{
                                          scale: 1.1,
                                          transition: { 
                                          type: 'spring',
                                          stiffness: 400,
                                          damping: 10 
                                          }
                                      }} 
                          />
                      </motion.div>

                      <motion.div className={`flex-1 text-sm md:text-md lg:text-lg font-semibold flex justify-center items-center h-full theme-${theme}`}>
                          <div className="text-justify relative py-5 px-5">
                              I’m a Fullstack Developer with 6 years of experience working on various types of applications, mainly using .NET technologies. Over the years, I’ve been part of different companies and industries.
                              I’ve worked on a variety of projects, including production tools, internal systems, and support applications. I make sure to write clean, maintainable code and provide proper documentation to help teams and users understand and use the systems effectively. I also handle support tasks when needed and assist users with technical concerns related to the applications.
                              Right now, I’m continuing to learn and grow as a developer, and I’m always open to opportunities where I can contribute and improve.
                          </div>
                      </motion.div>
                </div>
              
              <motion.div className="text-center text-2xl rounded-lg bg-primary text-white font-medium mt-20">
                  Clients
              </motion.div>
              
                <motion.div className="flex flex-col md:flex-row items-center justify-center py-10 space-y-5 md:space-y-0 md:space-x-10">
                

                  <motion.div className="shadow-lg">
                  <motion.img 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { 
                          type: 'spring',
                          stiffness: 600,
                          damping: 10
                        }
                      }}             
                    src={UPLB} alt="UPLB"  className="rounded-sm h-20 bg-white px-2"/>
                  </motion.div>

                  <motion.div className="shadow-lg">
                  <motion.img 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { 
                          type: 'spring',
                          stiffness: 600,
                          damping: 10
                        }
                      }}             
                    src={SERDAL} alt="SERDAL" className="rounded-lg h-20"/>
                  </motion.div>  

                {
                  JExp.filter((_, index) => [0,1,2].includes(index)).map((exp) => (
                  <motion.div key={`k${exp.id}`} id={`id${exp.id}`} className="shadow-lg">
                      <motion.img 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                          }}
                          whileHover={{
                            scale: 1.1,
                            transition: { 
                              type: 'spring',
                              stiffness: 600,
                              damping: 10
                            }
                          }}             
                        src={exp?.client[0].logo} alt={exp?.client[0].alt} className="rounded-lg h-20"/>
                  </motion.div>                  
                  ))
                }
                </motion.div>
              
            </div>

            <div className="absolute top-0 left-2  z-1 h-full w-full pointer-events-none overflow-hidden">
                        <motion.div 
                        className={`absolute top-0 left-[-200px] text-[300px] h-[90%] font-bold whitespace-nowrap text-movingText  z-10 theme-${theme}`}                    
                            variants={sliderVariants}  initial="initial" animate="animate">
                                <span className="opacity-10">ABOUT</span> 
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

export default About;
