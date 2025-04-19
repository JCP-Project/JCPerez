import React, { ReactNode, useEffect, useState } from 'react';
import Header from './Header/header';
import themeContext from '../components/Themes/themeContext';
import { motion } from 'framer-motion';

const themes = ['black','orange','purple'];

let tabs = [
  { id: "light", label: "#FDFBEE" },
  { id: "dark", label: "#57B4BA" },
  { id: "orange", label: "#7D0A0A" },
  { id: "purple", label: "#FF2DF1" },
];


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {

const [theme, setTheme] = useState<string>(themes[0]);
//let [activeTab, setActiveTab] = useState(tabs[0].id);

const [isScaled, setIsScaled] = useState(false);
const [switchTheme, setSwitchTheme] = useState<string>(themes[0]);

useEffect(() => {
  const localtheme = localStorage.getItem("theme") ?? "dark";
  setTheme(localtheme);
},[])

const selectThemes = (theme: string) => {
  setIsScaled(!isScaled);
  setSwitchTheme(theme);

  setTimeout(() => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }, 500);


  setTimeout(() => {
    setIsScaled(false);
  }, 800);
};


  const borderClass = (label: string) => {
    if (label === 'dark') {
      return 'border-black';
    }
    if (label === 'orange') {
      return 'border-orange-500';
    }
    if (label === 'purple') {
      return 'border-purple-500';
    }
    return `border-[${label}]`;
  };

  return (
    <>
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
                        transition={{ type: "spring", bounce: .9, duration: .8 }}
                      />
                    )}
                    <div className={`h-5 w-5 rounded-full border-2 ${borderClass(tab.id)}`}></div>
                  </button>
                ))}
              </div>

          </div>



            <div className={`h-screen bg-primary text-tBase theme-${theme} z-50`}><Header/></div>
            <div className={`relative h-screen w-[100%] overflow-y-auto bg-bgPrimary overflow-x-hidden md:px-5 theme-${theme}`}>
                <themeContext.Provider value={theme}>
                  {children}
                </themeContext.Provider>
            </div>
            

    </div>
    </>
  );
};

export default Layout;
