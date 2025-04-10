import { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import DevImg  from './../../images/Programmer.svg'
import TypingAnimation from "./typingAnimation";
import themeContext from '../../components/Themes/themeContext';
import { MdOutlineDownload } from "react-icons/md";



function Home () {
    const theme = useContext(themeContext);
     

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
            <div className="relative h-full flex md:items-center md:justify-center flex-col md:flex-row overflow-hidden">
                <div className="flex-1 h-full pl-5 md:pl-5 lg:pl-20  order-2 md:order-1 z-10">
                    <div className="flex md:items-center md:justify-start md:justify-center h-full text-xl md:text-3xl font-semibold">
                        <div className="md:w-[80%]">
                            <div className="pointer-events-none">
                                <TypingAnimation messages={["HI, I AM CARLO", "WELCOME TO MY PORTFOLIO"]} />
                            </div>
                            <div className="pointer-events-none">
                                <span className={`inline-block theme-${theme}`}>Fullstack Developer</span>
                            </div> 
                            <div>
                               <button className={`text-sm bg-primary
                                                    my-3 py-3 px-8 flex justify-center items-center 
                                                    transition-transform transform hover:scale-110 hover:rotate-[-10deg]
                                                    hover:ease-out hover:duration-300
                                                     theme-${theme}`}>
                                <span className="text-tBase">Download CV</span> <span><MdOutlineDownload className="ml-3 text-tBase" size={20}/></span> 
                                </button>
                            </div>             
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center order-1 md:order-2 z-10">
                <motion.img
                        src={DevImg}
                        alt="Programmer"
                        className="object-cover w-full h-full"
                        initial={{ x: '100%' }}
                        animate={{
                            x: [200,-100,0],
                            y: 0, 
                          }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        drag
                        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        dragElastic={0.5}
                        dragSnapToOrigin
                    />
                </div>

                <div className="z-1 pointer-events-none">
                    <motion.div 
                    className={`absolute bottom-[-60px] left-[-10px] text-[200px] font-bold whitespace-nowrap text-movingText z-1 theme-${theme}`}                    
                    variants={sliderVariants}  initial="initial" animate="animate">
                       <span className="opacity-20">FullStack Developer</span> 
                    </motion.div>
                </div>

                <div className="absolute w-full h-screen hidden md:block opacity-10">
                    {/* Custom mouse pointer */}
                    <motion.div
                        className="absolute rounded-full bg-blue-700"
                        style={{
                        left: mousePosition.x - 80,
                        top: mousePosition.y - 20,
                        }}
                        animate={{
                        scale: 1.5,  // Grow the cursor slightly when moving
                        }}
                        transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        }}
                        initial={{ opacity: 0.7 }}
                    >
                        <div className="w-10 h-10 bg-red-500 rounded-full opacity-5"></div>
                    </motion.div>

                    {/* Optional: Show a trailing circle effect */}
                    <motion.div
                        className="absolute rounded-full bg-blue-300 opacity-5"
                        style={{
                        left: mousePosition.x - 50, // Trailing circle position (offset)
                        top: mousePosition.y - 50,  // Trailing circle position (offset)
                        }}
                        animate={{
                        scale: 2,  // Larger trailing circle
                        opacity: 0,  // Fade out over time
                        }}
                        transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        duration: 1,  // Duration of fade-out
                        }}
                    >
                        <div className="w-20 h-20 bg-blue-300 rounded-full opacity"></div>
                    </motion.div>
                    </div>

            </div>


        </>
    );
}

  const bubbleVariants = {
    initial: {
      y: "100%",          // Start at the bottom
      scale: 0.3,         // Start small
      opacity: 1,         // Fully visible at the start
    },
    animate: {
      y: "-100%",        // Move upward to the top
      scale: 3,           // Grow larger
      opacity: 0,         // Fade out when reaching the top
      transition: {
        type: "spring",   // Use a spring-based animation for more natural movement
        stiffness: 100,   // Control the bounciness of the spring
        damping: 20,      // Control the "settling" effect of the spring
        duration: 5,      // Animation duration
      },
    },
  };

const sliderVariants2 = {
  initial: {
    x: '-100%',  // Start off to the left of the screen
    y: '200%',   // Start off below the screen (bottom)
    opacity: 1,  // Start invisible
    rotate: -90,
  },
  animate: {
    x: '100%',   // Move to the right (off-screen right)
    y: '-100%',  // Move to the top (off-screen top)
    opacity: 1,  // Fade in
    transition: {
        repeat: Infinity,
        repeatType: "mirror",
      duration: 5,   // Duration of the animation
      ease: "easeOut",  // Easing function for smooth animation
    },
  },
};

const sliderVariants = {
    initial: {
      x: "-50%",
    },
    animate: {
      x: "30%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 8,
      },
    },
  };

export default Home;
