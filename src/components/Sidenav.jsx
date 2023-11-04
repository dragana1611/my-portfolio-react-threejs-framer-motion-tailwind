import { Link } from "react-scroll";
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
    <nav className='w-[90vw] md:w-12 lg:w-14 flex md:flex-col items-center md:justify-center fixed h-max md:h-screen bottom-0 right-[3%] mt-auto md:right-[2%] top-0 p-2 z-[100] '>
      <div className='w-full md:w-16 flex md:flex-col items-center justify-between md:justify-center gap-y-10 md:px-0 h-10 md:h-max py-8 bg-white/10 backdrop-blur-sm px-10 rounded-full'>
        <Link
          to='main'
          activeClass='active'
          smooth={true}
          spy={true}
          duration={500}
          className='icons link'
        >
          <HiHome />
        </Link>
        <Link
          to='about'
          activeClass='active'
          smooth={true}
          spy={true}
          duration={500}
          className='icons link'
        >
          <HiUser />
        </Link>
        <Link
          to='services'
          activeClass='active'
          smooth={true}
          spy={true}
          duration={500}
          className='icons link'
        >
          <HiViewColumns />
        </Link>
        <Link
          to='projects'
          activeClass='active'
          smooth={true}
          spy={true}
          duration={500}
          className='icons link'
        >
          <HiRectangleGroup />
        </Link>
        <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          duration={500}
          className='icons link'
        >
          <HiEnvelope />
        </Link>
      </div>
    </nav>
  );
};

export default Sidenav;
