/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { motion } from "framer-motion";
import aboutImg from "../assets/images/artificial-intelligence.jpg";

const About = () => {
  return (
    <section id='about' className='section'>
      <div>
        <p className='text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline'>
          About
        </p>
      </div>
      <div className='w-full lg:h-screen flex flex-col lg:flex-row justify-around items-center gap-14 py-10 md:py-16 mx-auto px-2 md:px-4'>
        <div className='md:w-[80%] lg:basis-2/5  flex flex-col justify-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='md:w-[80%] lg:basis-2/5 z-10 mt-5 md:mt-14 flex justify-center scale-[0.7] lg:scale-[1]'>
              <div
                className='relative z-0 ml-20 rounded-t-[400px] before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
              >
                <img
                  alt='about'
                  className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] rounded-t-[400px]  md:max-w-[600px]'
                  src={aboutImg}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className='z-30 lg:basis-3/5 xl:mt-3'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className='text-xl  xl:text-2xl z-10 text-justify md:text-start mb-5'>
              Innovative frontend developer with expertise in HTML, CSS,
              Javascript, React, Tailwind CSS, and many other modern libraries
              and frameworks. I design and maintain websites that offer a smooth
              user experience. My expertise lies in creating dynamic, engaging
              interfaces through writing clean code and utilizing new-age
              development tools and techniques. I am a developer with a curious
              a mind that is passionate about making an impact. I love building
              solutions and solving problems and focused on both large picture
              and details with whatever technology I work in. As a programmer, I
              am driven by a desire to create and innovate. In the future, I
              hope to use my programming skills to make a difference and help
              solve important problems, so the world of modern technologies is
              just my cup of tea.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
