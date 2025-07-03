import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaNewspaper, FaUniversity, FaLaptopCode, FaProjectDiagram, FaBrain } from 'react-icons/fa';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Celebal Technologies',
    location: 'Remote',
    duration: 'June 2025 – Aug 2025',
    description: [
      'Collaborated on building data pipelines and machine learning models for business analytics use cases.',
      'Performed data wrangling, exploratory analysis, and predictive modeling using Python, Pandas, and Scikit-learn.',
      'Visualized insights using tools like Power BI and Matplotlib to assist clients in data-driven decision-making.',
      'Contributed to optimizing model performance, improving accuracy by 15% through hyperparameter tuning and feature engineering.'

    ],
    skills: ['Matplotlib', 'PowerBI', 'Scikit-learn', 'Data Visualization'],
    icon: <FaLaptopCode className="text-[#D97706] text-2xl" />
  },
  {
    role: 'Software Developer Intern',
    company: 'Indian Oil Corporation Limited',
    location: 'Guwahati, Assam',
    duration: 'Dec 2024 – Jan 2025',
    description: [
      'Engineered a real - time PPE kit detection system to enhance worker safety in high - risk industrial environments, includingIndian Oil refineries, reducing manual compliance checks by over 80 %.',
      ' Deployed deep learning models(CNN, YOLOv8) to enable high - precision real - time PPE recognition in live video feeds,achieving over 95 % detection accuracy.',
      'Optimized system performance through model tuning '
    ],
    skills: ['YOLOv8', 'OpenCV', 'CNN', 'Real-time Detection'],
    icon: <FaIndustry className="text-[#D97706] text-2xl" />
  },
  {
    role: 'Software Developer Intern',
    company: 'Times of India',
    location: 'Delhi, India',
    duration: 'June 2024',
   description: [
  'Automated editorial workflows using ML, reducing processing time by 30% and boosting editorial efficiency.',
  'Built a gamified web platform, increasing user engagement by 40% and social media shares by 25%.',
  'Trained an OpenCV-based ML model to mimic AJIT NINAN’s art style on 1,000+ cartoon images.',
  'Developed an OpenAI-powered system to rank news headlines with 90% relevance, streamlining prioritization.',
],

    skills: ['OpenAI API', 'Web Development', 'ML Automation', 'OpenCV', 'Gamification'],
    icon: <FaNewspaper className="text-[#D97706] text-2xl" />
  },
  {
    role: 'Research Intern',
    company: 'IIT Guwahati – NERERL',
    location: 'Guwahati, Assam',
    duration: 'June – July 2024',
    description: [
      'Forecasted solar output with ML models (85% accuracy).',
      'Managed backend and designed frontend using HTML, CSS, and JavaScript, for 500+ users.',
      'Developed machine learning models using CNN and SVM  to forecast solar plant performance with 85% accuracy.',
      'Built predictive systems to detect and flag potential faults before system failure.',
      'Managed backend databases to ensure reliable data storage and efficient queries.'
        ],
    skills: ['Python', 'CNN/SVM', 'Data Prediction','HTML/CSS','JavaScript'],
    icon: <FaUniversity className="text-[#D97706] text-2xl" />
  },
  {
    role: 'Winter Research Intern',
    company: 'Indian Institute of Technology Patna',
    location: 'Patna,Bihar',
    duration: 'Jan  – Feb 2024',
   description: [
  'Researched trust management systems for Unmanned Aerial Vehicles (UAVs) to improve operational security.',
  'Developed algorithmic solutions to enhance the reliability of UAV communications and decision-making.',
  'Collaborated on research initiatives focused on secure UAV network design and data integrity.',
],

    skills: ['Overleaf', 'UAVs', 'MATLAB', 'CNN'],
    icon: <FaLaptopCode className="text-[#D97706] text-2xl" />
  },
  {
    role: ' JAVA Developer Intern',
    company: 'Oasis Infobyte',
    location: 'Remote',
    duration: 'Nov – Dec 2023',
   description: [
  'Built a secure Java-based ATM interface with features like balance inquiry, fund transfer, and mini statements.',
  'Implemented encryption and session management for secure transactions and user data protection.',
  'Developed a number guessing game in Java with adaptive difficulty, hints, scoring, and leaderboard features.',
],

    skills: ['GitHub', 'Java', 'OOPS'],
    icon: <FaProjectDiagram className="text-[#D97706] text-2xl" />
  }
  // {
  //   role: 'Machine Learning Researcher',
  //   company: 'Academic Project',
  //   location: 'NIT Arunachal Pradesh',
  //   duration: 'Jan – Feb 2024',
  //   description: [
  //     'Developed a drowsiness detection system.',
  //     'Achieved 95% detection accuracy in real-time testing.'
  //   ],
  //   skills: ['Python', 'OpenCV', 'ML'],
  //   icon: <FaBrain className="text-[#D97706] text-2xl" />
  // }
];


const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-[#2E2B2B] text-white px-6 md:px-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-[#D97706]"
        >
          Experience
        </motion.h2>
        <p className="text-gray-400 mt-2 text-lg">My work experience as a software engineer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-stretch">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(217, 119, 6, 0.7)",
            }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.4 }}
            className="bg-[#2e2b2b] rounded-xl p-6 w-full max-w-md mx-auto"
          >
            <div className="flex items-center gap-4 mb-4">
              {exp.icon}
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-400">
                  {exp.company} — <span>{exp.location}</span>
                </p>
                <p className="text-xs text-gray-500">{exp.duration}</p>
              </div>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-3">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 text-sm text-[#D97706] font-semibold">
              {exp.skills.map((skill, i) => (
                <span key={i} className="bg-[#1f1d1d] px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
