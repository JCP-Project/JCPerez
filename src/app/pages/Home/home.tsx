import { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';

import DevImgDark from './../../images/Programmer-Dark.svg'
import DevImg from './../../images/Programmer.svg'
import DevImg2 from './../../images/Programmer2.svg'
import DevImg3 from './../../images/Programmer3.svg'

import TypingAnimation from "./typingAnimation";
import themeContext from '../../components/Themes/themeContext';
import { MdOutlineDownload } from "react-icons/md";
import CV from '../../data/John Carlo M. Perez - CV.pdf';

function Home() {
    const theme = useContext(themeContext);
    const [isMobile, setIsMobile] = useState(false);
    const [img, setIMG] = useState(DevImg);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
                            <div className="md:w-[80%] absolute bottom-40 md:bottom-auto md:block">
                                <div className="pointer-events-none">
                                    <TypingAnimation messages={["HI, I AM CARLO", "WELCOME TO MY PORTFOLIO"]} />
                                </div>
                                <div className="pointer-events-none">
                                    <span className={`inline-block theme-${theme}`}>Fullstack Developer</span>
                                </div> 
                                <div>
                                    <motion.button className={`bg-primary text-white text-sm font-bold flex px-8 py-3 mt-5 rounded-sm theme-${theme}`}
                                    onClick={() => {window.open(CV, "_blank");}} 
                                        initial={{ scaleX: 1 }}
                                        whileHover={{
                                        scaleX: 1.2, 
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
                    <div className=" flex-1 md:flex justify-center items-center order-1 md:order-2 z-10 scale-[2.5] md:scale-100">
                        <motion.img
                            src={img}
                            alt="Programmer"
                            className=""
                            initial={{ x: '100%'}}
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

                <svg className="flex md:hidden absolute opacity-20 top-0 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,224L60,218.7C120,213,240,203,360,170.7C480,139,600,85,720,69.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>


                <svg  className="hidden lg:flex absolute opacity-20 top-[-1400px] rotate-[200deg] left-[-1200px] fill-primary transform scale-x-[-1]" id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(475.2507715971615 267.32308327306754)"><path d="M92.6 -125.8C111.1 -94.9 110.9 -57.2 154.9 1C198.9 59.1 286.9 137.8 285.2 187C283.4 236.1 191.8 255.7 120.6 243.4C49.5 231.2 -1.3 187 -82.9 178.6C-164.6 170.2 -277.1 197.6 -317.4 165.2C-357.6 132.8 -325.6 40.5 -279.8 -19.9C-234 -80.2 -174.5 -108.7 -125.6 -134.2C-76.7 -159.7 -38.4 -182.4 -0.6 -181.6C37.1 -180.8 74.1 -156.7 92.6 -125.8"></path></g></svg>


                {/* <svg className="absolute opacity-20 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#17C0CC" fill-opacity="1" d="M0,192L80,170.7C160,149,320,107,480,122.7C640,139,800,213,960,218.7C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}

                <svg className="hidden lg:flex absolute opacity-20 bottom-0 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,74.7C672,85,768,139,864,181.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
               
                {/* <svg className="hidden md:hidden lg:flex  absolute opacity-20 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#17C0CC" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,224C672,235,768,245,864,261.3C960,277,1056,299,1152,261.3C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
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
