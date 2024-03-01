"use client"
import { motion } from "framer-motion";
import { NavItems } from "@/config/navigation";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbars() {
    return (
        <nav>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Navbar items={NavItems} className='hidden lg:flex' />
                <MobileNavbar items={NavItems} className='flex lg:hidden' />
            </motion.div>
        </nav>
    )
}