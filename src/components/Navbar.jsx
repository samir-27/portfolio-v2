import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
const Navbar = () => {
    return (
        <div className="">
            <div className=" ">

                <Sidebar />

                {/* <div className="wrapper flex items-center justify-between h-full">

                    <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="font-bold">Samir</motion.span>
                    <div className=" flex gap-2">

                        <a href="#projects" className="mx-4">Projects</a>
                        <a href="#services" className="mx-4">Services</a>
                        <a href="#about" className="mx-4">About</a>
                        <a href="#contact" className="mx-4">Contact</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
};

export default Navbar;
