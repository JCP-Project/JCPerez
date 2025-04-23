import { motion } from 'framer-motion';
import { useContext } from 'react';
import themeContext from './Themes/themeContext';

interface pageheaderProps {
    title: string
}

const PageHeader: React.FC<pageheaderProps> = ({title}) =>{
    const theme = useContext(themeContext);
    
    return(
        <>
              <motion.h2
                  className={`text-2xl md:text-3xl font-semibold text-center mt-10 mb-2 md:mt-0 theme-${theme}`}
                  initial={{ y: -20, scale:1.5 }}
                  animate={{ y: 0, scale: 1 }}   
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                    duration: 2,
                  }}
                >
                  {title}
                </motion.h2>
                <motion.div
                  className="border-b-2 border-gray-300 mb-8 mx-5 md:mx-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  style={{ originX: 0.5 }}
                ></motion.div>            
        </>
    );
}

export default PageHeader;