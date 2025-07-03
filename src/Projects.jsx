import { motion } from 'framer-motion'
import React from 'react'


const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      className='relative w-full md:w-[320px] lg:w-[350px] h-[400px] shadow-xl overflow-hidden cursor-pointer transition-transform duration-300 group'
    >
      <motion.div
        style={{ backgroundImage: `url(${project.image})` }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='w-full h-full absolute top-0 left-0 bg-cover bg-center'
      >
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-between'>

          {/* Smaller Project Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='text-lg md:text-xl font-semibold text-black mb-4'
          >
            {project.title}
          </motion.h3>

          {/* Description - hidden until hover */}
          <motion.p
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='text-sm md:text-base text-black bg-amber-200 mb-6 opacity-0 group-hover:opacity-100 transition duration-300'
          >
            {project.decsription}
          </motion.p>

          <motion.a
            href={project.link}
            target="_blank"
            className='inline-block text-sm text-[#D97706] underline font-bold'
          >
            View Project
          </motion.a>

        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
    const projects=[
        {
            // title:"Atulyam 25 Website",
            decsription:"Developed a responsive React.js, Tailwind CSS and Three.js website for NIT Arunachal Pradesh’s cultural fest with event listings, registration, schedules, and galleries, supporting 5,000+ users.",
            image:"atulyam.png",
            link:"https://nitap.ac.in/atulyam2025/"
        },
        {
            // title:"Driver Drowsiness Detection System",
            decsription:"A real-time drowsiness detection system using OpenCV and computer vision techniques to help prevent accidents caused by driver fatigue. The system monitors eye behavior, detects signs of drowsiness, and triggers alerts to regain driver attention.",
            image:"images1.jpeg",
            link:"https://github.com/bhavyasingh9822/Driver-Drowsiness"
        },
        {
            title:"Object Detection in Self-Driving Cars Using Computer Vision",
            decsription:"Developed a computer vision system for self-driving cars to detect and classify objects in real-time, enhancing safety and navigation capabilities.",
            image:"self.png",
            link:"https://github.com/bhavyasingh9822/SelfDriving"
        },
        {
            // title:"Google Gemini Clone",
            decsription:"Clone website of Google Gemini using React.js, Tailwind CSS, and Gemini API. It features a responsive design, dynamic content generation, and a user-friendly interface.",
            image:"gemini.jpeg",
            link:"https://gemini-bhavya.netlify.app/"
        },
        {
            // title:"Times of India Website",
            decsription:"Developed an interactive web-based game portal — Times Trivia Challenge — to boost reader engagement through quiz-based content, designed during Times of India internship.",
            image:"times.jpeg",
            link:"https://website-6-lovat.vercel.app/"
        },
        {
            // title:"AI Powered Tic Tac Toe",
            decsription:"A Description of project 1",
            image:"tik.png",
            link:"https://minimax-tic-tak-toe.netlify.app/"
        },
        

    ]
  return (
    <section id="projects" className='w-full py-20 bg-[#2E2B2B] text-white px-6 md:px-16 '>
    <motion.h2
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.8}}
      className='text-4xl md:text-5xl font-extrabold text-[#D97706] text-center mb-12 '>
        My Projects
     </motion.h2>

     <motion.div className='
     
      flex flex-wrap justify-center gap-8'>
        {projects.map((project,index) =>(
            <ProjectCard  key={index} project={project} index={index}/>
        ))}
     </motion.div>
    </section>
  )
}

export default Projects
