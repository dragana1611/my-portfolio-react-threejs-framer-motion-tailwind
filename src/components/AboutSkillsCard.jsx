/* eslint-disable react/prop-types */

const AboutSkillsCard = ({ number, title, text, bgColor, position }) => {
  return (
    <div className={`flex flex-row justify-${position} border-2 border-blue`}>
      <div className={"w-5/6 border-2 border-lime-400"}>
        <div className='relative h-20'>
          <div className='w-full z-10 border-2 border-violet-400'>
            <p className='font-primary font-semibold text-3xl tracking-wide'>{number}</p>
            <p className='font-primary font-semibold text-2xl mt-[5px] tracking-wider'>{title}</p>
          </div>
          <div
            className={`w-1/2 md:w-3/4 h-20 bg-${bgColor} absolute right-0 top-0 z-[-1]`}
          />
        </div>
        <p className='font-primary mt-5 text-justify'>{text}</p>
      </div>
    </div>
  );
};

export default AboutSkillsCard;
//
