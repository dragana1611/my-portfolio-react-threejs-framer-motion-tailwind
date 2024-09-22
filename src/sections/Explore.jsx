import { useState } from "react";
import { motion } from "framer-motion";
import ExploreCard from "../components/ExploreCard";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../data/data";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section name='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={'mx-auto flex flex-col'}
      >
        <h2
          title={
            <>
              Choose the world you want <br className='md:block hidden' /> to
              explore
            </>
          }
        />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
