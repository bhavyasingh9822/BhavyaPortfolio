import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa'
import Typewriter from 'react-typewriter-effect'

const Home = () => {
    return (
        <section id="home" className='w-full min-h-screen pt-16 md:pt-0 flex flex-col md:flex-row items-center justify-center bg-[#2E2B2B] text-white px-6 md:px-16'>
            <div className='flex-1 flex flex-col justify-center items-start space-y-6'>
                <motion.p
                    className='text-lg md:text-xl text-gray-300'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi,I'm Bhavya Singh
                </motion.p>
                <motion.h1
                    className='text-5xl md:text-7xl font-extrabold text-[#D97706] '
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Welcome To My Portfiolio
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-2xl font-semibold text-gray-300 flex flex-col sm:flex-row items-center gap-2"
                >
                    <span>I am a&nbsp;</span>
                    <Typewriter
                        textStyle={{
                            fontFamily: 'Arial',
                            color: '#D97706', // amber-600
                            fontWeight: 600,
                            fontSize: '1.5rem', // text-2xl
                        }}
                        startDelay={100}
                        cursorColor="#D97706"
                        multiText={[
                            "Future-Ready Software Engineer ⚙️",
                            "Full Stack Dev by Day, AI Explorer by Night 🌙",
                            "Passionate Problem Solver 🧠",
                            "A curious mind constantly chasing code, creativity, and the next big breakthrough.",
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={50}
                        deleteSpeed={10}
                        multiTextLoop
                    />
                </motion.div>



                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='flex space-x-6'
                >
                    <a href="https://github.com/bhavyasingh9822/">
                        <FaGithub className='text-3xl hover:text-[#d97706]' />
                    </a>
                    <a href="https://www.linkedin.com/in/11-bhavya-singh/">
                        <FaLinkedin className='text-3xl hover:text-[#d97706]' />
                    </a>
                    <a href="https://leetcode.com/u/bhavya_511/">
                        <FaCode className='text-3xl hover:text-[#d97706]' />
                    </a>
                    <a href="mailto:bhavyacreates11@gmail.com">
                        <FaEnvelope className='text-3xl hover:text-[#d97706]' />
                    </a>

                </motion.div>
            </div>

            <div className='flex-1 flex items-center justify-center w-full relative'>
                <div className='absolute w-96 h-96 bg-[#d97706] rounded-full blur-3xl z-0 opacity-50'></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    className="z-10 flex items-center justify-center w-full"
                >
                    <img src="image2.png"></img>
                </motion.div>
            </div>
        </section>
    )
}

export default Home
