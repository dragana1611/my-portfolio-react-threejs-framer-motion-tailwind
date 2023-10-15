// import React from 'react'
import Header from "./Header";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile_pic.jpg";

const Main = () => {
  return (
    <section
      id='main'
      className='section flex flex-col gap-y-6 h-screen  relative z-[-1]'
    >
      <Header />
      {/* IMAGE SECTION */}
      <div className='w-full lg:h-screen flex flex-col lg:flex-row justify-around items-center gap-14'>
        <div className='md:w-[80%] xl:basis-2/5 z-10 mt-10 md:mt-14 flex justify-center md:order-2'>
          <div
            className='relative z-0 ml-20 rounded-t-[400px] before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
              before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
          >
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] rounded-t-[400px]  md:max-w-[600px]'
              src={profileImg}
            />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className='z-30 lg:basis-3/5 mt-1'>
          {/* HEADINGS */}
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
            <p className='text-2xl md:text-4xl xl:text-6xl font-semibold z-10 text-center md:text-start'>
              Dragana &nbsp;
              <span
                className='relative  font-semibold z-20 before:content-brush
                before:absolute before:-left-[90px] before:-top-[150px] lg:before:-left-[70px] lg:before:-top-[150px] xl:before:left-8 xl:before:-top-[130px] before:scale-[0.3] before:z-[-1]'
              >
                Petrovic
              </span>
            </p>

            <p className='mt-5 mb-7 xl:mt-20 xl:mb-16 text-base md:text-xl xl:text-2xl text-center md:text-start'>
              Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
              viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className='flex mt-5 justify-center md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className='bg-gradient-rainblue text-tertiary rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500'
              id='#contact'
            >
              Contact Me
            </div>
            <div
              className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
              id='#contact'
            >
              <div className='bg-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair'>
                Let's talk.
              </div>
            </div>
          </motion.div>

          <motion.div
            className='flex mt-5 justify-center md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
