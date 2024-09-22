/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Header from "../components/Header";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import profileImg from "../assets/images/picpfl.jpg";
import { TypeAnimation } from "react-type-animation";
import SpinningBtn from "../components/SpinningBtn";
import SocialIcons from "../components/SocialIcons";

const Main = () => {
  return (
    <section name='main' className='section flex flex-col gap-y-6 h-full'>
      <Header />
      {/* HERO SECTION */}
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='w-full lg:h-screen flex flex-col lg:flex-row justify-around items-center gap-14 '
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='md:w-[80%] lg:basis-2/5  flex flex-col justify-center md:order-2 relative'
        >
          <div className='md:w-[80%] lg:basis-2/5 z-10 mt-5 md:mt-14 flex justify-center scale-[0.7] lg:scale-[1]'>
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
        </motion.div>

        {/* MAIN TEXT */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='z-30 lg:basis-3/5 xl:mt-3 relative'
        >
          {/* HEADINGS */}
          <div>
            <p className='text-2xl md:text-4xl xl:text-6xl font-semibold z-10 text-center md:text-start mb-5'>
              Dragana &nbsp;
              <span
                className='relative font-semibold z-20 before:content-brush
                before:absolute before:-left-[100px] before:-top-[150px] lg:before:-left-[70px] lg:before:-top-[150px] xl:before:left-8 xl:before:-top-[130px] before:scale-[0.3] md:before:scale-[0.5] before:z-[-1]'
              >
                Petrovic
              </span>
            </p>
          </div>

          <div>
            <div className='flex text-center md:text-start  text-xl lg:text-3xl xl:text-4xl font-bold pt-4 mb-5 md:mb-20'>
              <h1 className='w-full'>
                I'm a
                <TypeAnimation
                  sequence={[
                    "Developer",
                    2000,
                    "Coder",
                    2000,
                    "Tech Enthusiast",
                    2000,
                  ]}
                  wrapper='span'
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "1em",
                    display: "inline-block",
                    paddingLeft: "10px",
                    color: "#FDCC49",
                  }}
                />
              </h1>
            </div>
          </div>

          {/* CALL TO ACTIONS */}
          <div className='flex mt-5 justify-center md:justify-start'>
            <div className='w-full flex justify-between'>
              <div className='lg:basis-1/2 flex flex-col justify-center items-center lg:items-start gap-7 p-5'>
                <p className='w-auto lg:text-xl text-yellow'>Get in Touch</p>
                <SocialIcons />
              </div>
              <div className='lg:basis-1/2'>
                <SpinningBtn />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Main;
