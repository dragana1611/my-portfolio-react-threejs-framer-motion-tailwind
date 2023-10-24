import {techStack} from "../data/data";

const { name, icon, desc } = techStack;

const ServiceCard = () => {
  // Container Div
  return (
    <div className='group w-full h-fit flex justify-center items-start bg-grey dark:bg-light-black rounded-lg p-6 gap-8 border-[1px] border-grey dark:border-light-black hover:border-[1px] hover:border-main-dark dark:hover:border-main-dark ease-in-out duration-300 cursor-pointer hover:scale-105 shadow-md'>
      {/* Text */}
      <div className='w-full flex justify-center items-start flex-col gap-2'>
        <h1 className='text-[1rem] sm:text-[1.2rem] font-semibold tracking-wide font-Titillium text-dark-black dark:text-white-two group-hover:text-main-dark ease-in-out duration-300'>
          {name}
        </h1>
        <p className='text-[0.8rem] sm:text-[0.9rem] text-dark-black dark:text-light-grey'>
          {desc}
        </p>
      </div>
      {/* Icon */}
      <div className='text-[2rem] text-main-dark group-hover:text-main ease duration-300'>
        {icon}
      </div>
    </div>
  );
};

export default ServiceCard;
