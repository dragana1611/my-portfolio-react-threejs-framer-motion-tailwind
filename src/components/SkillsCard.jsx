/* eslint-disable react/prop-types */

const SkillsCard = ({ img, title, text }) => {
  return (
    <div>
      <div className='relative h-32'>
        <div className='z-10'>
          <p className='font-playfair font-semibold text-5xl'>{img}</p>
          <p className='font-playfair font-semibold text-3xl mt-3'>{title}</p>
        </div>
        <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
      </div>
      <p className='mt-5'>{text}</p>
    </div>
  );
};

export default SkillsCard;
