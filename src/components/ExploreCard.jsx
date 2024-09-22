/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import githubImg from "../assets/images/githubw.png";

const ExploreCard = ({
  id,
  imgUrl,
  url,
  githubUrl,
  title,
  tools,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] lg:h-[80vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer mix-blend-screen`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={`project${index + 1}`}
      className='absolute w-full h-full object-cover rounded-[24px]'
    />
    {active !== id ? (
      <h3 className='font-semibold sm:text-[26px] text-[18px] text-primary leading-8 absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] drop-shadow-basisShadow'>
        {title}
      </h3>
    ) : (
      <div className='absolute bottom-0 p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.8)] rounded-b-[24px]'>
        <div className='flex justify-start gap-5 mb-3'>
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
            className={
              "w-[60px] h-[60px] rounded-[24px] glassmorphism flex justify-center items-center hover:bg-amber-500"
            }
          >
            <img
              src={githubImg}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
            />
          </a>
          <div
            className={`w-[60px] h-[60px] rounded-[24px] glassmorphism flex justify-center items-center`}
          >
            <a
              href={url}
              target='_blank'
              rel='noreferrer'
              className='inline-block text-primary text-bold'
            >
              Live
            </a>
          </div>
        </div>
        <p className='font-normal text-[16px] leading-[20.16px] text-primary uppercase'>
          {tools}
        </p>
        <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-primary drop-shadow-[1px_1px_0_rgba(0,0,0,1)]'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
