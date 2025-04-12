import React, { useRef, useState, FormEvent, useContext, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import themeContext from "../../components/Themes/themeContext";
import Swal from "sweetalert2";


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact: React.FC = () => {
  const theme = useContext(themeContext);
  const [success, setSuccess] = useState(false);

  const formref = useRef<HTMLFormElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInview = useInView(ref, { margin: "100px" });
  const [error, setError] = useState<string | undefined>();

  // State management for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formref.current) {
      emailjs
        .sendForm("service_tw150qj", "template_hccwzo8", formref.current, {
          publicKey: "tFH9pbRw92WDUIhrT",
        })
        .then(
          () => {
            Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for reaching out — I’ll get back to you soon.",
            showConfirmButton: false,
            timer: 3000, 
            timerProgressBar: true, 
            });

            setFormData({ name: "", email: "", message: "" }); 
          },
          (error) => {
            console.log("FAILED...", error.text);
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            });

          }
        );
    }
  };

    useEffect(() => {
    if (success) {
        const timer = setTimeout(() => setSuccess(false), 5000);
        return () => clearTimeout(timer);
    }
    }, [success]);

  return (
    <>
        <motion.div
        className="flex flex-col md:flex-row items-center justify-center min-h-full my-5"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        >
        <motion.div className={`contact-info mx-10 text-left theme-${theme}`} variants={variants}>
            <motion.h1 variants={variants} className="text-3xl font-bold mb-6">
            Let's work together
            </motion.h1>
            <motion.div className="item mb-3" variants={variants}>
            <motion.h2 className="flex items-center text-xl ">
                <FiMail className={`mr-2 theme-${theme}`} />
                Email
            </motion.h2>
            <span>Johncarloperez100@gmail.com</span>
            </motion.div>
            <motion.div className="item mb-3" variants={variants}>
            <h2 className="flex items-center text-xl ">
                <FiMapPin className={`mr-2 theme-${theme}`}  />
                Address
            </h2>
            <span>Santa Rosa, Laguna</span>
            </motion.div>
            <motion.div className="item mb-3" variants={variants}>
            <h2 className="flex items-center text-xl ">
                <FiPhone className={`mr-2 theme-${theme}`}  />
                Mobile Number
            </h2>
            <span>+639764178948</span>
            </motion.div>
        </motion.div>

        <motion.div className="formContainer w-[90%] md:w-auto mt-10 md:mt-0 md:mx-10 md:flex md:items-center md:justify-center">
            
          <motion.div className="emailSvg absolute pointer-events-none z-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{delay: 1, duration: 3 }}
            
            >
            <svg width="300px" height="300px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInview && { pathLength: 1 }}
                transition={{ delay: 0, duration: 1 }}
                d="M44 24V9H24H4V24V39H24"
                stroke="#DBDBDB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                />

                <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInview && { pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                d="M4 9L24 24L44 9"
                stroke="#DBDBDB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                />

                <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInview && { pathLength: 1 }}
                transition={{ delay: 0, duration: 1 }}
                d="M39 29L44 34L39 39"
                stroke="#DBDBDB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                />

                <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInview && { pathLength: 1 }}
                transition={{ delay: 0, duration: 1 }}
                d="M30 34L44 34"
                stroke="#DBDBDB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                />
            </svg>
            </motion.div>


            <motion.form
            ref={formref}
            className={`md:p-6 rounded-lg shadow-lg space-y-3  md:min-w-[500px] md:mx-10 z-10 theme-${theme}`}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
            >
                <label htmlFor="name" className="block text-lg font-medium">
                Name
                </label>
                <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-2 bg-transparent border-b-2 border-[#DBDBDB] focus:outline-none focus:border-[#DBDBDB]"
                />

                <label htmlFor="email" className="block text-lg font-medium">
                Email
                </label>
                <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-2 bg-transparent border-b-2 border-[#DBDBDB] focus:outline-none focus:border-[#DBDBDB]"
                />

                <label htmlFor="message" className="block text-lg font-medium">
                Message
                </label>
                <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-2 bg-transparent border-2 border-[#DBDBDB] focus:outline-none focus:border-[#DBDBDB]"
                ></textarea>

            <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg flex justify-center items-center space-x-2 hover:bg-secondary transition duration-200"
            >
                <span>Send</span>
            </button>
            </motion.form>
        </motion.div>


                        <div className="absolute top-0 left-2  z-1 h-full w-full pointer-events-none overflow-hidden">
                            <motion.div 
                            className={`absolute top-0 left-[-200px] text-[250px] h-[90%] font-bold whitespace-nowrap text-movingText  z-1 theme-${theme}`}                    
                                variants={sliderVariants}  initial="initial" animate="animate">
                                    <span className="opacity-10">CONTACT</span> 
                            </motion.div>
                        </div>

        </motion.div>
    </>
  );
};


const sliderVariants = {
    initial: {
      y: "-40%",
      rotate: -90,
    },
    animate: {
      y: "30%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
      },
    },
  };

export default Contact;
