/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, text, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="w-full flex"
  >
    <div className="w-full flex md:flex-row flex-col gap-2 justify-between items-start">
      <img
        src={imgUrl}
        alt="check"
        className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] object-cover"
      />
      <div className="flex-1 w-full">
        <p className="font-normal xl:text-[1.25rem] lg:text-[1rem] text-base xl:leading-8">
          {text}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
