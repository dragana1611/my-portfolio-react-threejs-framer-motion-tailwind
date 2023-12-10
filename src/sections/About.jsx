// import AboutSkillsCard from "../components/AboutSkillsCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
// import { aboutBlock } from "../data/data";
import aboutImg from "../assets/images/artificial-intelligence.jpg";

const About = () => {
  return (
    <section name="about" className="section">
      <div className="">
        <p className="text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline">
          About
        </p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full lg:h-screen flex flex-col lg:flex-row justify-around items-center gap-6 py-10 md:py-16 mx-auto mt-14 xl:mt-20 px-2 md:px-4"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="relative w-full
          flex-[0.5] lg:max-w-[400px]
          flex
          justify-center
          items-center"
        >
          <img
            src={aboutImg}
            alt="about"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="w-full lg:h-[610px] h-auto flex-1 flex flex-col lg:justify-between gap-3 lg:gap-4 sm:p-8 xl:p-12 p-4 rounded-[32px] relative border-[1px] border-dark-grey"
        >
          {/* {aboutBlock.map((block) => (
            <AboutSkillsCard key={block.id} {...block} />
          ))} */}
          <div className="flex justify-start">
            <div className="xs:w-full sm:w-5/6">
              <div className="relative h-16">
                <div className="w-full z-10">
                  <p className="font-secondary font-semibold text-3xl tracking-wider">
                    {"01"}
                  </p>
                  <p className="font-primary font-semibold text-2xl mt-[5px] tracking-[0.3rem]">
                    {"Experience"}
                  </p>
                </div>
                <div
                  className={`bg-blue w-1/2 md:w-3/4 h-16 absolute right-0 top-0 z-[-1]`}
                />
              </div>
              <p className="font-primary mt-3 lg:text-[13px] text-justify">
                {
                  "My expertise lies in creating dynamic, engaging interfaces through writing clean code and utilizing new-age development tools and techniques. I am a developer with a curious mind that is passionate about making an impact. I love building solutions and solving problems and focused on both large picture and details with whatever technology I work in."
                }
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="xs:w-full sm:w-5/6">
              <div className="relative h-16">
                <div className="w-full z-10">
                  <p className="font-secondary font-semibold text-3xl tracking-wider">
                    {"02"}
                  </p>
                  <p className="font-primary font-semibold text-2xl mt-[5px] tracking-[0.3rem]">
                    {"Innovative"}
                  </p>
                </div>
                <div
                  className={`bg-red w-1/2 md:w-3/4 h-16 absolute right-0 top-0 z-[-1]`}
                />
              </div>
              <p className="font-primary mt-3 lg:text-[13px] text-justify">
                {
                  "Innovative frontend developer with expertise in HTML, CSS, Javascript, React, Tailwind CSS, and many other modern libraries and frameworks. I design and maintain websites that offer a smooth user experience."
                }
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="xs:w-full sm:w-5/6">
              <div className="relative h-16">
                <div className="w-full z-10">
                  <p className="font-secondary font-semibold text-3xl tracking-wider">
                    {"03"}
                  </p>
                  <p className="font-primary font-semibold text-2xl mt-[5px] tracking-[0.3rem]">
                    {"Imaginative"}
                  </p>
                </div>
                <div
                  className={`bg-yellow w-1/2 md:w-3/4 h-16 absolute right-0 top-0 z-[-1]`}
                />
              </div>
              <p className="font-primary mt-3 lg:text-[13px] text-justify">
                {
                  "In the future, I hope to use my programming skills to make a difference and help solve important problems, so the world of modern technologies is just my cup of tea."
                }
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
