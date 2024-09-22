import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { techStack } from "../data/data";

const Services = () => {
  return (
    <section name='services' className='section '>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='w-full py-8 md:py-10 mx-auto px-2 md:px-4 flex flex-col justify-center'
      >
        <div>
          <p className='text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline'>
            Skills
          </p>
          <p className='py-6'>Languages | Databases | Frameworks</p>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className='w-full bg-gradient-to-b from-gray-800 to-black grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center mt-14 xl:mt-20 py-8 px-8 sm:px-10'
        >
          {techStack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt='' className='w-10 md:w-14 mx-auto' />
              <p className='mt-4 hidden sm:block'>{title}</p>
              {/* <p className="text-[0.625rem] md:text-[0.75rem] hidden sm:block">{desc}</p> */}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
