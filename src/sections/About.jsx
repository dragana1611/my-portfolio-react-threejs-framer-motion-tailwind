/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import aboutImg from "../assets/images/artificial-intelligence.jpg";

const About = () => {
  return (
    <section id='about' className='section'>
      <div className=''>
        <p className='text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline'>
          About
        </p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='w-full lg:h-screen flex flex-col lg:flex-row justify-around items-center gap-6 py-10 md:py-16 mx-auto mt-14 xl:mt-20 px-2 md:px-4'
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='relative w-full
          flex-[0.5] lg:max-w-[400px]
          flex
          justify-center
          items-center'
        >
          <img
            src={aboutImg}
            alt='about'
            className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='w-full  lg:h-[610px] h-auto flex-1 flex justify-start flex-col sm:p-8 xl:p-12 p-4 rounded-[32px] relative border-[1px] border-[#6A6A6A]'
        >
          <p className='text-base  xl:text-xl z-10 text-justify mb-5 leading-8 md:leading-[36px] xl:leading-[40px] tracking-wide'>
            Innovative frontend developer with expertise in HTML, CSS,
            Javascript, React, Tailwind CSS, and many other modern libraries and
            frameworks. I design and maintain websites that offer a smooth user
            experience. My expertise lies in creating dynamic, engaging
            interfaces through writing clean code and utilizing new-age
            development tools and techniques. I am a developer with a curious mind that is passionate about making an impact. I love building
            solutions and solving problems and focused on both large picture and
            details with whatever technology I work in. As a programmer, I am
            driven by a desire to create and innovate. In the future, I hope to
            use my programming skills to make a difference and help solve
            important problems, so the world of modern technologies is just my
            cup of tea.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

/**
 'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder Metaversus
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/metaverse-virtual.png"
          alt="metaverse-virtual"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
 */
