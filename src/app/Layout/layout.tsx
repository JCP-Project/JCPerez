import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Header from './Header/header';
import themeContext from '../components/Themes/themeContext';
import { motion } from 'framer-motion';

let tabs = [
  { id: 0, label: "#17C0CC" },
  { id: 1, label: "#090731" },
  { id: 2, label: "#4B70F5" },
  { id: 3, label: "#4B70F5" },
];

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {

const [theme, setTheme] = useState<any>(0);
const [isScaled, setIsScaled] = useState(false);
const [switchTheme, setSwitchTheme] = useState<number>(0);

const ref = useRef<HTMLDivElement | null>(null);
const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });


useEffect(() => {
  const localtheme = localStorage.getItem("theme") ?? "dark";
  setTheme(localtheme);

      const element = ref.current;
    if (element) {
      const handlePointerMove = (event: PointerEvent) => {
        const { clientX, clientY } = event;
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setCoordinates({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
},[])

const selectThemes = (theme: number) => {
  setIsScaled(!isScaled);
  setSwitchTheme(theme);

  console.log(theme);

  setTimeout(() => {
    setTheme(theme);
    localStorage.setItem("theme", theme.toString());
  }, 500);

  setTimeout(() => {
    setIsScaled(false);
  }, 800);
};

  return (
    <>

    <motion.div
      ref={ref}
      className="hidden md:absolute circle h-20 w-20 bg-primary opacity-10 rounded-full z-40"
      animate={{ x: coordinates.x, y: coordinates.y + 5}}
      transition={{
          type: "spring",
      }}
     >      
     </motion.div>

    <div className="flex overflow-hidden">

      {isScaled ? (
        <motion.div
          className={`absolute top-0 left-1/2 h-10 w-10 bg-bgPrimary rounded-full z-10 theme-${switchTheme}`}
          animate={{ scale: 80 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          style={{ translateX: "-50%", translateY: "-50%" }}
        />
      ) : null}


          <div className="absolute flex space-x-5 top-5 md:top-10 right-10 text-white z-50">
             <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => selectThemes(tab.id)}
                    className={`relative rounded-full transition `}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    {theme === tab.id && (
                      <motion.span
                        layoutId="bubble"
                        className={`absolute inset-0 z-10 bg-secondary mix-blend-difference rounded-full theme-${theme}`}                     
                        transition={{ type: "spring", bounce: .2, duration: .8 }}
                      />
                    )}
                    <div className={`h-5 w-5 rounded-full border-2 ${tab.id == 1 ? "border-[#090731]" : tab.id == 2 ? "border-[#4B70F5]" : tab.id == 3 ? "border-[#B82132]":"border-[#17C0CC]"  } `}></div>
                  </button>
                ))}
              </div>

          </div>



            <div className={`fixed bottom-0 left-0 md:relative md:flex md:h-screen bg-primary text-tBase theme-${theme} z-50`}><Header/></div>

            <div className={`relative h-screen w-[100%] overflow-y-auto bg-bgPrimary overflow-x-hidden theme-${theme}`}>
                <themeContext.Provider value={theme.toString()}>
                  {children}
                </themeContext.Provider>
            </div>
            

    </div>
    </>
  );
};

export default Layout;
