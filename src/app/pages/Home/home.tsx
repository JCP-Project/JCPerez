import { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';

import DevImgDark from './../../images/Programmer-Dark.svg'
import DevImg from './../../images/Programmer.svg'
import DevImg2 from './../../images/Programmer2.svg'
import DevImg3 from './../../images/Programmer3.svg'

import TypingAnimation from "./typingAnimation";
import themeContext from '../../components/Themes/themeContext';
import { MdOutlineDownload } from "react-icons/md";
//import CV from '../../data/John Carlo M. Perez - CV.pdf';

function Home() {
    const theme = useContext(themeContext);
    const [isMobile, setIsMobile] = useState(false);
    const [img, setIMG] = useState(DevImg);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); 
    }, []);

    const selectedTheme = localStorage.getItem("theme");

    useEffect(() =>{
        if (selectedTheme == "1") {
          return setIMG(DevImgDark);
        }

        if (selectedTheme == "2") {
          return setIMG(DevImg2);
        }

        if (selectedTheme == "3") {
          return setIMG(DevImg3);
        }

        return setIMG(DevImg);
    },[selectedTheme])


    return (
        <>
            <div className="relative h-full flex md:items-center md:justify-center flex-col md:flex-row overflow-hidden">
                <div className="flex-1 h-full pl-5 md:pl-5 lg:pl-20  order-2 md:order-1 z-10">
                    <div className="flex md:items-center md:justify-start h-full text-xl md:text-3xl font-semibold">
                        <div className="md:w-[80%]">
                            <div className="pointer-events-none">
                                <TypingAnimation messages={["HI, I AM CARLO", "WELCOME TO MY PORTFOLIO"]} />
                            </div>
                            <div className="pointer-events-none">
                                <span className={`inline-block theme-${theme}`}>Fullstack Developer</span>
                            </div> 
                            <div>
                                <motion.button className={`bg-primary text-white text-sm font-bold flex px-8 py-3 mt-5 rounded-sm theme-${theme}`}
                                // onClick={() => {window.open(CV, "_blank");}} 
                                    initial={{ scaleX: 1 }}
                                    whileHover={{
                                    scaleX: 1.2, // Stretch the text horizontally like a "string"
                                    }}
                                    transition={{
                                    type: "spring", 
                                    stiffness: 500, 
                                    damping: 10,
                                    duration: 0.3
                                    }}
                                >
                                    <span className="text-white">Download CV</span> <MdOutlineDownload className="ml-3 text-tBase" size={20} />
                                </motion.button>
                            </div>             
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center order-1 md:order-2 z-10">
                    <motion.img
                        src={img}
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
                        className={`absolute bottom-0 left-[270px] md:bottom-[-60px] md:left-[-10px] text-[250px] md:text-[200px] font-bold whitespace-nowrap text-movingText z-10 theme-${theme}`}                    
                        variants={sliderVariants}  
                        initial="initial" 
                        animate={isMobile ? "mobile" : "animate"}
                    >
                        <div className="opacity-20 rotate-90 md:rotate-0">FullStack Developer</div> 
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
            duration: 10,
        },
    },
    mobile: {
        y: ["30%","-200%"],
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 7,
        },
    },
};

export default Home;
