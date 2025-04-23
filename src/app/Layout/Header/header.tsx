import { NavLink, useLocation } from "react-router-dom";
import themeContext from '../../components/Themes/themeContext';
import { useContext } from "react";
import { motion } from "framer-motion";

import { ImHome } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

function Header() {
    const theme = useContext(themeContext);
    const location = useLocation();
    
    const activeClassName = "text-gray-100 text-2xl rotate-[360deg] md:rotate-[13deg] mb-10 md:mb-0  transition-transform duration-500 ease-in-out bg-primary p-4 rounded-full md:rounded-md";
    const linkVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const transition = {
        duration: 0.5,
        ease: "easeInOut",
    };

    return (
        <>
        <div className="hidden md:block">
            <div className={`hidden rotate-[-90deg] h-full md:flex items-center justify-center w-10 font-bold z-50 `}>
                <motion.div
                    className={`relative flex items-center justify-center space-x-10 text-tBase theme-${theme} overflow-visible`}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                >
                    <div>
                        <NavLink 
                            to="/contact" 
                            title="Contact" 
                            className={({ isActive }) => (isActive ? `${activeClassName} block rounded-full` : "block rounded-full")}
                        >
                            Contact
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/experience" 
                            title="Work Experience" 
                            className={({ isActive }) => (isActive ? `${activeClassName} block rounded-full` : "rounded-full block")}
                        >
                            Experience
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/about" 
                            title="About" 
                            className={({ isActive }) => (isActive ? `${activeClassName} block rounded-full` : "rounded-full block")}
                        >
                            About
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/skills" 
                            title="Skills" 
                            className={({ isActive }) => (isActive ? `${activeClassName} block rounded-full` : "rounded-full block")}
                        >
                            Skills
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/" 
                            title="Home" 
                            className={({ isActive }) => (isActive ? `${activeClassName} block rounded-full` : "rounded-full block")}
                        >
                            Home
                        </NavLink>
                    </div>
                </motion.div>
            </div>
        </div>

        <div className="w-screen md:hidden">
            <div className={`md:hidden flex items-center justify-center h-10 w-full text-3xl font-bold z-50 `}>
                <motion.div
                    className={`relative flex items-center justify-center space-x-10 text-tBase theme-${theme} overflow-visible`}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                >

                <div>
                    <NavLink 
                        to="/skills" 
                        title="Skills" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        <FaComputer />
                    </NavLink>
                </div>
                <div className="">
                    <NavLink 
                        to="/about" 
                        title="About" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        <MdPermContactCalendar />
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/" 
                        title="Home" 
                        className={`block ${location.pathname === "/" ? activeClassName : ""}`}
                    >
                        <ImHome />
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/experience" 
                        title="Work Experience" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        <FaBuilding />
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/contact" 
                        title="Contact" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        <MdEmail />
                    </NavLink>
                </div>

                </motion.div>
            </div>
        </div>
        </>
    );
}

export default Header;
