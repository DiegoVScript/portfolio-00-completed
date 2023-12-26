import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Anyone
                </motion.span>
                <div className="social">
                    <a href="https://github.com/DiegoVScript" target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" alt="Github" />
                    </a>

                    <a href="https://www.linkedin.com/in/diegovscript/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin1.png" alt="LinkedIn" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
