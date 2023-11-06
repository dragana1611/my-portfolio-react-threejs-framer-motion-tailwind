/* eslint-disable react/jsx-no-comment-textnodes */

import AboutSkillsCard from "../components/aboutSkillsCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { aboutBlock } from "../data/data";
import aboutImg from "../assets/images/artificial-intelligence.jpg";

const About = () => {
  return (
    <section name='about' className='section'>
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
          className='w-full lg:h-[610px] h-auto flex-1 flex flex-col lg:justify-between gap-3 lg:gap-6 sm:p-8 xl:p-12 p-4 rounded-[32px] relative border-[1px] border-dark-grey'
        >
          {aboutBlock.map((block) => (
            <AboutSkillsCard key={block.title} {...block} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
