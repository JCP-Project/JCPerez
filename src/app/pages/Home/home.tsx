import { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import DevImg from './../../images/Programmer.svg'
import TypingAnimation from "./typingAnimation";
import themeContext from '../../components/Themes/themeContext';
import { MdOutlineDownload } from "react-icons/md";
import CV from '../../data/John Carlo M. Perez - CV.pdf';

function Home() {
    const theme = useContext(themeContext);
    const [isMobile, setIsMobile] = useState(false);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        handleResize(); 

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
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
                               <button 
                            //    onClick={() => {window.open(CV, "_blank");}} 
                               className={`text-sm bg-primary
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
                            x: [200, -100, 0],
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

                <div className="z-1 pointer-events-none ">
                    <motion.div 
                        className={`absolute bottom-0 left-[200px] md:bottom-[-60px] md:left-[-10px] text-[150px] md:text-[200px] font-bold whitespace-nowrap text-movingText z-10 theme-${theme}`}                    
                        variants={sliderVariants}  
                        initial="initial" 
                        animate={isMobile ? "mobile" : "animate"}
                    >
                        <div className="opacity-20 rotate-90 md:rotate-0">FullStack Developer</div> 
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
                            scale: 1.5,
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

                    <motion.div
                        className="absolute rounded-full bg-blue-300 opacity-5"
                        style={{
                            left: mousePosition.x - 50,
                            top: mousePosition.y - 50,
                        }}
                        animate={{
                            scale: 2,
                            opacity: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                            duration: 1, 
                        }}
                    >
                        <div className="w-20 h-20 bg-blue-300 rounded-full opacity"></div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

const sliderVariants: any = {
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
    mobile: {
        y: ["30%","-200%"],
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
        },
    },
};

export default Home;
