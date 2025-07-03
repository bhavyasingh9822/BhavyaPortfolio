import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "April 2024",
    description: "Completed the advanced course on Supervised Machine Learning: Regression and Classification.",
    link: "https://coursera.org/share/246ce859648d6d61beb5d5372df365c2"
  },
  {
    title: "Java Training Complete Course",
    issuer: "Udemy",
    date: "Jan 2024",
    description: "Learned Java programming fundamentals, OOP concepts, and advanced topics.",
    link: "https://www.udemy.com/certificate/UC-06138971-422e-4fb1-a992-e365faf99ab6/"
  },
  {
    title: "Python And Flask Framework Complete Course For Beginners",
    issuer: "Udemy",
    date: "Jan 2024",
    description: "Mastered Python and Flask for web development, including REST APIs and database integration.",
    link: "https://www.udemy.com/certificate/UC-669847c8-4ac1-4f73-aa73-9e01ddbc5f29/"
  }
];

const Achive = () => {
  return (
    <section className="py-16 bg-[#2E2B2B] text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-[#D97706]"
        >
          Achievements & Certifications
        </motion.h2>

        <motion.div
          className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-[#1f1d1d] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 25px rgba(255,215,0,0.8)",
                textShadow: "2px 2px 10px rgba(255,215,0,1)"
              }}
            >
              <motion.div
                className="text-lg font-bold text-gray-100 mb-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {cert.title}
              </motion.div>

              <motion.div
                className="text-sm text-gray-400 mb-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {cert.issuer}
              </motion.div>

              <motion.div
                className="text-xs text-gray-500 mb-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {cert.date}
              </motion.div>

              <motion.p
                className="text-sm text-gray-300 text-center mt-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {cert.description}
              </motion.p>

              {cert.link && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-[#d97706] flex items-center gap-1 hover:underline"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  View Certificate <FaExternalLinkAlt className="text-xs" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achive;
