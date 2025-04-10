import { Link, Navigate } from "react-router-dom";
import themeContext from '../../components/Themes/themeContext';
import { useContext } from "react";


function Header() {
    const theme = useContext(themeContext);
    return(
        <>
        <div className="h-full flex items-center justify-center w-10 font-bold">
            <div className={`rotate-[-90deg] flex items-center justify-center space-x-10 text-tBase theme-${theme}`}>
                <div><Link to="/contact" title="Contact"> Contact</Link></div>
                <div><Link to="/experience" title="Work Experience"> Experience</Link></div>
                <div><Link to="/about" title="Work Experience"> About</Link></div>
                <div><Link to="/skills" title="Skills"> Skills</Link></div>
                <div><Link to="/" title="Home"> Home</Link></div>
            </div>   
        </div>
        </>
    );
}

export default Header;