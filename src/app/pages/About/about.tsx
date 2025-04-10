import { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import profileGIF from '../../images/profileEmoji.gif'
import profilePNG from '../../images/profile.png'
import themeContext from '../../components/Themes/themeContext';
import jobExp from '../../data/jobExpData';


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

     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

       useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

    return(
        <>
      <div className="flex items-center h-full justify-center md:px-[200px]">
        <div className="">
        <motion.h2
            className={`text-3xl font-semibold text-center mt-10 mb-2 md:mt-0 theme-${theme}`}
            initial={{ y: -20, scale:1.5 }}
            animate={{ y: 0, scale: 1 }}   
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
              duration: 2,  // Total duration of the animation
            }}
          >
            About
          </motion.h2>
          <motion.div
            className="border-b-2 border-gray-300 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ originX: 0.5 }}  // This sets the animation to grow from the center
          ></motion.div>

          <div className=" flex">
                <motion.div className="flex-1">
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

                <motion.div className="flex-1 text-md justify-center items-center h-full">
                    <div className="text-justify">
                        I’m a Fullstack Developer with 6 years of experience working on various types of applications, mainly using .NET technologies. Over the years, I’ve been part of different companies and industries.
                        I’ve worked on a variety of projects, including production tools, internal systems, and support applications. I make sure to write clean, maintainable code and provide proper documentation to help teams and users understand and use the systems effectively. I also handle support tasks when needed and assist users with technical concerns related to the applications.
                        Right now, I’m continuing to learn and grow as a developer, and I’m always open to opportunities where I can contribute and improve.
                    </div>
                </motion.div>
          </div>
        
        <motion.div className="text-center text-2xl rounded-lg bg-primary text-white font-medium mb-5  mt-20">
            Client
        </motion.div>
        {
          <motion.div className="flex items-center justify-center space-x-10 w-full">
            
            <motion.div className="shadow-lg">
                <motion.img 
                initial={{ scale: 0, rotate: 0 }}
                animate={{scale: [0,1.2,1], transition:{ duration: .5} }}
                    whileHover={{
                        scale: 1.2,
                        transition: { 
                        type: 'spring',
                        stiffness: 400,
                        damping: 10 
                        }
                    }}               
                src={jobExp[0].client[0].logo} alt={jobExp[0].client[0].alt} className="rounded-lg h-20"/>
            </motion.div>

            <motion.div className="shadow-lg">
            <motion.img
                initial={{ scale: 0, rotate: 0 }}
                animate={{scale: [0,1.2,1], transition:{duration: .5} }}
                whileHover={{
                    scale: 1.2,
                    transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 10 
                    }
                }} 
                src={jobExp[1].client[0].logo} alt={jobExp[1].client[0].alt} className="rounded-lg h-20"/>
            </motion.div>

            <motion.div className="shadow-lg">
                <motion.img 
                initial={{ scale: 0, rotate: 0 }}
                animate={{scale: [0,1.2,1], transition:{duration: .5} }}
                whileHover={{
                    scale: 1.2,
                    transition: { 
                    type: 'spring',
                    stiffness: 400,
                    damping: 10 
                    }
                }}                 
                src={jobExp[2].client[0].logo} alt={jobExp[2].client[0].alt} className="rounded-lg h-20"/>
            </motion.div>

                
            

          </motion.div>
        }
        </div>

                <div className="absolute top-0 left-2  z-1 h-full w-full pointer-events-none overflow-hidden">
                    <motion.div 
                    className={`absolute top-0 left-[-300px] text-[300px] h-[90%] font-bold whitespace-nowrap text-movingText  z-1 theme-${theme}`}                    
                        variants={sliderVariants}  initial="initial" animate="animate">
                            <span className="opacity-10">ABOUT</span> 
                    </motion.div>
                </div>
      </div>


        </>
    );
}


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
        duration: 10,
      },
    },
  };

export default About;
