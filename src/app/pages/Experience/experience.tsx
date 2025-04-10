
import React, { useContext, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import jobExp from '../../data/jobExpData';
import themeContext from '../../components/Themes/themeContext';


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


const Experience = () => {
    const theme = useContext(themeContext);
    const [JExp, setJExp] = useState<JobExperience[]>([]);
    useEffect(() =>{
        setJExp(jobExp);
    },[])

  return (
    <>
    <div className="relative w-full ">
        <div className="max-w-full md-max-full lg:max-w-4xl mx-auto py-10 z-50">
        <motion.h2
            className={`text-3xl font-semibold text-center mt-10 mb-2 md:mt-10 mb-2 theme-${theme} z-50`}
            initial={{ y: -20, scale:1.5 }}
            animate={{ y: 0, scale: 1 }}   
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
              duration: 2,
            }}
          >
            <span className="z-50 pointer-events-none">Companies I Have Worked With</span>
          </motion.h2>

          <motion.div
            className="border-b-2 border-gray-300 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ originX: 0.5 }}  // This sets the animation to grow from the center
          ></motion.div>
        {/* Timeline container */}
        <div className="relative z-20">
            {/* Vertical line (stick line design) */}
            <div className="absolute inset-0 flex items-center justify-left md:justify-center">
                <div className="relative h-full border-l-4 border-gray-300">
                </div>
            </div>

            {/* Timeline items */}
            <div className="space-y-10">
            {JExp.map((exp, index) => (
                <div
                    key={index}
                    className={`group flex items-start space-x-4 w-full relative ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    >

                    <motion.div
                        className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-gray-300"
                        whileInView={{ opacity: 1 }}  // Animate to scale 1 when in view
                        initial={{ opacity: 0, y: 30, x:-10}}  // Start from scale 0 (invisible and small)
                        viewport={{ once: true }}
                        animate={{y:0, x:-10}}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        >                   
                    </motion.div>


                    {/* Timeline content with animation */}
                    <motion.div
                        className={`relative md:space-y-2 p-5 rounded-sm shadow-2xl ${index % 2 === 0 ? "md:ml-10" : "md:mr-10"} w-full md:w-[400px] border border-1 border-white-500 overflow-hidden  ${theme}`}
                        whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Initial state (off-screen)
                        viewport={{ once: true }} // Only animate once when in view
                        transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: index * 0.2 }}
                    >
                        {/* Background image with opacity */}
                        <div
                            className="absolute z-10 top-[-15px] left-[-20px] scale-130 inset-0 bg-cover bg-center bg-opacity-50 h-[300px] rotate-[-10deg] group-hover:rotate-[-20deg] group-hover:scale-150 transition-transform duration-700" // Fixed height and background styling
                            style={{  backgroundImage: `url(${exp.company[0].logo})` }} // Correct URL syntax
                        >
                        {/* Overlay for opacity effect */}
                        <div className="absolute z-1  top-[-15px] left-[-20px] inset-0 bg-bgPrimary h-[500px] w-[500px]"
                            style={{
                                opacity: 0.80, // 10% opacity for the overlay
                               // zIndex: 1
                            }}
                        ></div>
                        </div>





                        <div className="group relative z-50">
                            {/* Company logo */}
                            <motion.img
                                src={exp.company[0].logo}
                                alt={exp.company[0].alt}
                                className="h-10 group relative"
                                initial={{ scale: 1, y: 0, rotate: 0 }}
                                whileHover={{
                                    scale: 1.2,  // Scale it up
                                    y: -10,      // Move it up (like jumping)
                                    rotate: -5,  // Slight rotation
                                    transition: { 
                                        type: 'spring', // This will make it bounce
                                        stiffness: 400, // Controls the "springiness"
                                        damping: 10     // Controls how smooth the bounce is
                                    }
                                }}
                            />
                        </div>
                        <motion.h2 className={`group relative z-50 text-2xl font-semibold theme-${theme}`}>{exp.company[0]?.name}</motion.h2>
                        <motion.p className={`group relative z-50  text-sm font-semibold theme-${theme}`}>{exp.from} - {exp.to}</motion.p>
                        <motion.p className={`group relative z-50  text-sm font-semibold theme-${theme}`}>{exp.role}</motion.p>
                        <motion.p className={`group relative z-50  text-sm font-semibold theme-${theme}`}>{exp.responsibilities}</motion.p>
                    </motion.div>
                </div>
            ))}
            </div>


            
        </div>
        </div>


        <div className="absolute top-0 left-2  z-1 h-full w-full pointer-events-none overflow-hidden">
            <motion.div 
            className={`absolute top-0 left-10 text-[200px] h-[90%] font-bold whitespace-nowrap text-movingText  z-1 theme-${theme}`}                    
                variants={sliderVariants}  initial="initial" animate="animate">
                    <span className="opacity-10">EXPERIENCE</span> 
            </motion.div>
        </div>


    </div>

    </>
  );
};


const sliderVariants = {
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
        duration: 40,
      },
    },
  };

export default Experience;
