/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, text, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-4'
  >
    <img
      src={imgUrl}
      alt='check'
      className='w-[24px] h-[24px] md:w-[42px] md:h-[42px] object-cover'
    />
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 md:ml-[62px] flex flex-col w-full'>
        <h4 className='font-normal lg:text-lg text-base'>{text}</h4>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
