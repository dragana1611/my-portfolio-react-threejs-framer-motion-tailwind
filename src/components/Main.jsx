// import React from 'react'
import Header from "./Header";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile_pic.jpg";
import { TypeAnimation } from "react-type-animation";
import SpinningBtn from "./SpinningBtn";
import SocialIcons from "./SocialIcons";

const Main = () => {
  return (
    <section id='main' className='section flex flex-col gap-y-6 h-screen'>
      <Header />
      {/* HERO SECTION */}
      <div className='w-full lg:h-screen flex flex-col lg:flex-row justify-around items-center gap-14 '>
        <div className="md:w-[80%] lg:basis-2/5  flex flex-col justify-center md:order-2">
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
          <SocialIcons />
        </div>

        {/* MAIN TEXT */}
        <div className='z-30 lg:basis-3/5 xl:mt-3'>
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
            <p className='text-2xl md:text-4xl xl:text-6xl font-semibold z-10 text-center md:text-start mb-5'>
              Dragana &nbsp;
              <span
                className='relative  font-semibold z-20 before:content-brush
                before:absolute before:-left-[100px] before:-top-[150px] lg:before:-left-[70px] lg:before:-top-[150px] xl:before:left-8 xl:before:-top-[130px] before:scale-[0.3] md:before:scale-[0.5] before:z-[-1]'
              >
                Petrovic
              </span>
            </p>
          </motion.div>

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
            <div className='flex text-center md:text-start  text-xl lg:text-3xl xl:text-4xl font-bold pt-4 mb-5 md:mb-20'>
              <h2 className='w-full'>
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
                    color:'#FDCC49'
                  }}
                />
              </h2>
            </div>
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
            <SpinningBtn />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
