import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section id="about" className=' w-full py-20 bg-[#2E2B2B] px-6 md:px-16'>
      <div className='container mx-auto flex flex-col md:flex-row-reverse items-center justify-between  space-y-12 md:space-y-0'>
        <div className='flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-8'>
          <motion.h2
            className='text-4xl md:text-5xl font-extrabold text-[#d97706]'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl text-gray-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Detail-oriented and innovative Computer Science undergraduate at NIT Arunachal Pradesh with a strong foundation in full-stack development, machine learning, and computer vision. Demonstrated expertise through impactful internships at Indian Oil Corporation, Times of India, and IIT Guwahati, where real-time systems, predictive models, and ML-driven solutions significantly enhanced operational efficiency.

          </motion.p>
          <motion.p
            className='text-lg md:text-xl text-gray-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Proficient in Python, Java, JavaScript, React, Node.js, and MongoDB, with experience deploying deep learning models (CNN, YOLOv8) and building scalable applications. Passionate about solving real-world problems through technology, with a track record of high-impact projects and active participation in hackathons and research initiatives.
          </motion.p>

          <motion.a
            href="https://drive.google.com/file/d/1HbGIJBr0hrhDty2OPZwKFXLdu-ZnWyYe/view?usp=sharing"
            className='inline-block mt-6 px-8 py-3 bg-[#d97706] text-lg font-semibold '
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Download My Resume
          </motion.a>
        </div>

        <div className='flex-1'>
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            src="img3.png"
            className='w-[450px] h-auto transform hover:scale-105 transition duration-300 mx-auto'
          />
        </div>
      </div>
    </section>
  )
}

export default About
