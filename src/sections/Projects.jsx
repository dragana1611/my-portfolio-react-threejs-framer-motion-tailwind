/* eslint-disable react/jsx-no-comment-textnodes */
// import { data } from "../data/data";
import { useState } from "react";
import { motion } from "framer-motion";
import ExploreCard from "../components/ExploreCard";
import { staggerContainer } from "../utils/motion";
import { exploreProjects } from "../data/data";
import Buttons from "../components/Buttons";

const Projects = () => {
  const [active, setActive] = useState("project-3");
  const project = exploreProjects;
  console.log(project);
  return (
    <section name='work' id='projects' className='section'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col`}
      >
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreProjects.map((project, index) => (
            <ExploreCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col`}
      >
        <a href="https://github.com/dragana1611" target="_blank" rel="noreferrer"  className="mt-5 flex justify-center items-center ">
          <Buttons  name={'View More'} />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
