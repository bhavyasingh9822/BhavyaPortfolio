import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { FaEnvelope , FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('')

    if (!formData || !formData.email || !formData.message) {

      setStatus('Please fill in all fields.')
      return
    }

    const form = new FormData();
    form.append('name', formData.name)
    form.append('email', formData.email)
    form.append('message', formData.message)

    try {
      const response = await fetch('https://formsubmit.co/bhavyacreates11@gmail.com', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('There was an error, please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong.')
    }

  }
  return (
    <section id="contact" className='w-full h-screen bg-[#2E2B2B] text-white px-6 xl:pt-30 md:px-16'>
      <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0'>
        <div className='flex-1 text-center md:text-left'>
          <h2 className='text-3xl md:text-5xl font-extrabold'>Get In Touch</h2>
          <motion.p
            className='mt-4 text-lg md:text-xl text-gray-100'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            I'd love to hear from you. Whether you have a question or just want to chat, feel free to send me a message!

          </motion.p>
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
              <FaEnvelope  className='text-3xl hover:text-[#d97706]' />
            </a>
          </motion.div>
        </div>

        <div className='flex-1 mt-6 md:mt-0'>
          <form className='bg-[#1E1C1C] p-8  shadow-lg' onSubmit={handleSubmit}
          >
            <input className='w-full p-4 mb-4 bg-[#333] text-white '
              value={formData.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Your Name"
            ></input>
            <input className='w-full p-4 mb-4 bg-[#333] text-white '
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Your Email"
            ></input>

            <textarea className='w-full p-4 mb-4 bg-[#333] text-white'
              value={formData.message}
              onChange={handleInputChange}
              name="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button className='w-full py-3 bg-[#D97706] rounded-full' type="submit">Send Message</button>
            {status && (
              <p className='mt-4 text-center text-lg'>{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
