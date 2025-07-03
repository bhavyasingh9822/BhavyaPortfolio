import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaJs, FaNodeJs, FaReact, FaGit, FaGithub, FaLinux,FaCode ,FaDatabase ,
  FaHtml5, FaCss3Alt, FaBootstrap
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiExpress , SiIntellijidea,
  SiTailwindcss, SiRedux, SiNextdotjs, SiFlutter, SiNumpy, SiPandas,
  SiOpencv, SiArduino
} from 'react-icons/si';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
      className='relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.9)] flex items-center justify-center text-white text-xl font-bold cursor-pointer group transition-all duration-300'
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360, borderColor: skill.color }}
        style={{ borderColor: skill.color }}
        className='w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative border-4'
      >
        <div className='absolute top-1/4 text-4xl md:text-5xl' style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <span className='absolute bottom-4 text-2xl md:text-3xl font-bold'>{skill.level}%</span>
      </motion.div>
      <motion.h3
        className='absolute bottom-0 left-0 right-0 text-center text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300'
      >
        {skill.name}
      </motion.h3>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95, icon: <FaHtml5 />, color: '#E34F26' },
    { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: '#1572B6' },
    { name: "JavaScript", level: 85, icon: <FaJs />, color: '#F7DF1E' },
    { name: "Python", level: 80, icon: <FaPython />, color: '#3776AB' },
    { name: "Java", level: 80, icon: <FaJava />, color: '#007396' },
    { name: "C", level: 70, icon: <SiC />, color: '#A8B9CC' },
    { name: "C++", level: 75, icon: <SiCplusplus />, color: '#00599C' },
    { name: "ReactJS", level: 80, icon: <FaReact />, color: '#61DAFB' },
    { name: "Redux", level: 75, icon: <SiRedux />, color: '#764ABC' },
    { name: "Node.js", level: 75, icon: <FaNodeJs />, color: '#339933' },
    { name: "ExpressJS", level: 70, icon: <SiExpress />, color: '#888888' },
    { name: "MongoDB", level: 70, icon: <SiMongodb />, color: '#47A248' },
    { name: "SQL", level: 70, icon: <FaDatabase />, color: '#003B57' },
    { name: "Bootstrap", level: 70, icon: <FaBootstrap />, color: '#7952B3' },
    { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss />, color: '#38B2AC' },
    { name: "Next.js", level: 65, icon: <SiNextdotjs />, color: '#000000' },
    { name: "Flutter", level: 60, icon: <SiFlutter />, color: '#02569B' },
    { name: "NumPy", level: 65, icon: <SiNumpy />, color: '#013243' },
    { name: "Pandas", level: 60, icon: <SiPandas />, color: '#150458' },
    { name: "OpenCV", level: 60, icon: <SiOpencv />, color: '#5C3EE8' },
    { name: "Arduino", level: 55, icon: <SiArduino />, color: '#00979D' },
    { name: "VS Code", level: 90, icon: <FaCode/>, color: '#007ACC' },
    { name: "Thonny", level: 60, icon: <FaPython />, color: '#5A9FD4' }, // Reusing Python icon
    { name: "IntelliJ IDEA", level: 80, icon: <SiIntellijidea />, color: '#000000' },
    { name: "Git", level: 85, icon: <FaGit />, color: '#F05032' },
    { name: "GitHub", level: 85, icon: <FaGithub />, color: '#181717' },
    { name: "Linux", level: 80, icon: <FaLinux />, color: '#FCC624' },
  ];

  return (
    <section id="skills" className='w-full py-20 bg-[#2E2B2B] text-white px-6 md:px-16'>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='text-4xl md:text-5xl font-extrabold text-[#D97706] text-center mb-12'
      >
        My Skills
      </motion.h2>

      <div className='flex flex-wrap justify-center gap-8'>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
