import {techStack} from "../data/data";

const { name, icon, desc } = techStack;

const StackCard = () => {
  return (
    <div className='group w-full h-fit flex justify-center items-start bg-grey dark:bg-light-black rounded-lg p-6 sm:px-8 gap-8 border-[1px] border-grey dark:border-light-black hover:border-[1px] hover:border-main-dark dark:hover:border-main-dark ease-in-out duration-300 cursor-pointer hover:-translate-y-2 shadow-md'>
      {/* Text */}
      <div className='w-full flex justify-start items-center gap-4'>
        <img src={icon} width={32} height={32} className='shadow-md' />
        <div className='text-dark-black dark:text-white-one'>
          <p className='font-bold group-hover:text-main-dark duration-300 ease-in-out tracking-wide'>
            {name}
          </p>
          <p className='text-xs tracking-wider font-medium text-light-grey'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
