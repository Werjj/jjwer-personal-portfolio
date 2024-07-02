"use client";

import Image from "next/image";
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className='flex items-center justify-center'>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/jjwer.png"
                            alt="Ricardo portrait"
                            width="250"
                            height="250"
                            quality="100"
                            priority={true}
                            className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl cursor-default"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.25, rotate: 15 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="text-lg">Hello, I&apos;m</span>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-center text-4xl font-bold tracking-tight  sm:text-5xl">
                        Jjwer
                    </h1>
                    <h2
                        id="name"
                        className=" text-center  text-2xl  sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"
                    >
                        <TypeAnimation
                            sequence={[
                                "A Web <Developer /> .",
                                1000,
                                "一名前端开发工程师 。",
                                1000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className="text-center">I enjoy building things for the web.</p>
                    <p className="text-center">My focus is
                        <span className="italic font-bold text-[#00d8ff] mr-4 ml-4">React</span>
                        <span className="italic font-bold text-[#42b983] mr-4">Vue</span>
                        {/* <span className="italic font-bold text-[#007acc] mr-4">Js</span> */}
                    </p>
                </motion.div>
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.05] hover:scale-[1.05] hover:bg-gray-950 active:scale-[1.05] transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.05] hover:scale-[1.05] active:scale-[1.05] transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/CV.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.05] hover:scale-[1.05] active:scale-[1.05] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://linkedin.com"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.05] hover:scale-[1.05] hover:text-gray-950 active:scale-[1.05] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/Werjj"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
