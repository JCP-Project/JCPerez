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
let [activeTab, setActiveTab] = useState(tabs[0].id);

useEffect(() => {
  const localtheme = localStorage.getItem("theme") ?? "dark";
  setTheme(localtheme);
},[])

const selectThemes = (theme: string) => {
 setTheme(theme);
 localStorage.setItem("theme", theme);
}


  const borderClass = (label: string) => {
    // Direct handling of common colors
    if (label === 'dark') {
      return 'border-black';
    }
    if (label === 'orange') {
      return 'border-orange-500';
    }
    if (label === 'purple') {
      return 'border-purple-500';
    }
    // Handle arbitrary hex color values
    return `border-[${label}]`; // For hex colors like #57B4BA, #7D0A0A, etc.
  };

  return (
    <>
    <div className="flex overflow-hidden">
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

            {/* <div className={`bg-primary text-tBase theme-${theme}`}><Header/></div>
            <div className={`absolute bg-bgPrimary w-full z-10 relative overflow-y-auto theme-${theme}`}>
              <themeContext.Provider value={theme}>
                {children}
              </themeContext.Provider>
            </div> */}


            {/* <div className={`bg-primary text-tBase theme-${theme}`}><Header/> </div>
              <div className="flex-grow items-center justify-center">
                <div className={`absolute bg-bgPrimary w-screen h-screen z-10 min-h-full overflow-y-auto theme-${theme}`}>
                  <themeContext.Provider value={theme}>
                    {children}
                  </themeContext.Provider>
                </div>
            </div> */}


            {/* <div className="flex overflow-hidden">
              <div className={`bg-primary text-tBase theme-${theme}`}><Header/> </div>
              <div className="flex-grow items-center justify-center overflow-hidden">
                <div className={`absolute bg-bgPrimary w-full minh-full z-10 h-full overflow-y-auto overflow-x-hidden theme-${theme}`}>
                <themeContext.Provider value={theme}>
                  {children}
                </themeContext.Provider>
                </div>
              </div>
            </div> */}

            <div className={`h-screen bg-primary text-tBase theme-${theme}`}><Header/></div>
            <div className={`h-screen w-[100%] bg-bgPrimary overflow-y-auto px-5 theme-${theme}`}>
                <themeContext.Provider value={theme}>
                  {children}
                </themeContext.Provider>
            </div>
            

    </div>
    </>
  );
};

export default Layout;
