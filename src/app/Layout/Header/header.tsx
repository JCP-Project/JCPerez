import { NavLink } from "react-router-dom";
import themeContext from '../../components/Themes/themeContext';
import { useContext } from "react";
import { motion } from "framer-motion";

function Header() {
    const theme = useContext(themeContext);

    const activeClassName = "text-gray-100 text-2xl rotate-[360deg] transition-transform duration-300";
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
        <div className={`rotate-[-90deg] h-full flex items-center justify-center w-10 font-bold z-50`}>
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
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        Contact
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/experience" 
                        title="Work Experience" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        Experience
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/about" 
                        title="About" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        About
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/skills" 
                        title="Skills" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        Skills
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/" 
                        title="Home" 
                        className={({ isActive }) => (isActive ? `${activeClassName} block` : "block")}
                    >
                        Home
                    </NavLink>
                </div>
            </motion.div>
        </div>
    );
}

export default Header;
