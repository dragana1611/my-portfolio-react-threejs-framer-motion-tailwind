import { Link } from "react-scroll";
import { HiArrowRight } from "react-icons/hi2";
import textImg from "../assets/images/rounded-text.png";
const SpinningBtn = () => {
  return (
    <div className='mx-auto scale-[0.7] md:scale-[1]'>
      <Link
        to='projects'
        smooth={true}
        duration={300}
        className='icons link relative w-[150px] h-[150px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group p-5'
      >
        <img
          src={textImg}
          alt='textImg'
          className='animate-spin-slow w-full h-full max-w-[140px]'
        />
        <HiArrowRight className='absolute text-4xl' />
      </Link>
    </div>
  );
};

export default SpinningBtn;
