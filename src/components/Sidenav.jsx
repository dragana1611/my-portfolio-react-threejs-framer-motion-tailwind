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
    <nav className='w-[90vw] xl:w-14 flex xl:flex-col items-center xl:justify-center fixed h-max xl:h-screen bottom-0 mt-auto xl:right-[2%] z-100 top-0 p-2'>
      <div className='w-full xl:w-16 flex xl:flex-col items-center justify-between xl:justify-center gap-y-10 md:px-28 xl:px-0 h-10  xl:h-max py-8 bg-white/10 backdrop-blur-sm px-10 rounded-full'>
        <a href='#main'>
          <HiHome size={36} />
        </a>
        <a href='#work'>
          <HiRectangleGroup size={36} />
        </a>
        <a href='#projects'>
          <HiViewColumns size={36} />
        </a>
        <a href='#main'>
          <HiUser size={36} />
        </a>
        <a href='#contact'>
          <HiEnvelope size={36} />
        </a>
      </div>
    </nav>
  );
};

export default Sidenav;
