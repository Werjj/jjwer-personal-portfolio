"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
        <motion.div className="my-24 h-16 rounded-full hidden sm:block "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}>
            <Link href="#about">

                <div className="relative grid h-[30px] w-[20px] justify-center rounded-full border-2 border-gray-300 pt-2 md:h-[38px] md:w-[26px]">
                    <div className="h-[5px] w-[2px] animate-intro-scroll rounded-full bg-gray-300 md:h-[7px]"></div>
                </div>
            </Link>

        </motion.div >
    );
}