"use client"

import { motion } from "framer-motion";
import { NavItems } from "@/config/navigation";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

export default function Navbars() {
    const path = usePathname()
    return (
        <nav>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Navbar items={NavItems} path={path} className='hidden lg:flex' />
                <MobileNavbar items={NavItems} path={path} className='flex lg:hidden' />
            </motion.div>
        </nav>
    )
}