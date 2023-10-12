import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  // HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

const Sidenav = () => {
  return (
    <nav className="w-[90vw] flex xl:flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] p-20 xl:px-2 ">
      <div className='w-full flex xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-80  xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:rounded-full'>
        <a href='#main' className=''>
          <HiHome size={24} />
        </a>
        <a href='#work' className=''>
          <HiRectangleGroup size={24} />
        </a>
        <a href='#projects' className=''>
          <HiViewColumns size={24} />
        </a>
        <a href='#main' className=''>
          <HiUser size={24} />
        </a>
        <a href='#contact' className=''>
          <HiEnvelope size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Sidenav;
