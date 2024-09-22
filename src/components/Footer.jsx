import {Link} from "react-scroll"
import SpinningBtn from "../components/SpinningBtn";
import SocialIcons from "./SocialIcons";
import { HiPhone } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";

const Footer = () => {
  const dayOfWeekName = new Date().toLocaleString("en-US", {
    weekday: "long",
  });

  return (
    <footer className='section flex flex-col justify-start p-10'>
      <div className='w-full flex flex-col sm:flex-row sm:flex-wrap  items-center'>
        <div className='footerCol'>
          <h3 className='text-xl pb-3'>Dragana Popov</h3>
          <p className='text-center'>A web designer and developer</p>
          <div className='scale-75 md:scale-50 sm:-mt-8 lg:-mt-2'>
            <SpinningBtn />
          </div>
        </div>
        <div className='footerCol'>
          <h3 className='text-xl pb-3'>Quick Links</h3>
          <ul className='flex flex-col gap-1'>
            <li>
              <Link className="link" to="main" smooth={true}  duration={300}>Home</Link>
            </li>
            <li>
              <Link className="link" to="about" smooth={true}  duration={300}>About</Link>
            </li>
            <li>
              <Link className="link" to="services" smooth={true}  duration={300}>Services</Link>
            </li>
            <li>
              <Link className="link" to="projects" smooth={true}  duration={300}>Projects</Link>
            </li>
            <li>
              <Link className="link" to="contact" smooth={true}  duration={300}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='footerCol md:max-w-[25%]'>
          <h3 className='text-xl pb-3'>Contact Info</h3>
          <ul className='flex flex-col gap-3'>
            <li className='flex md:flex-col lg:flex-row gap-2 justify-center items-center hover:text-yellow cursor-pointer'>
              <HiPhone />
              <span className='block'> +381641522984</span>
            </li>
            <li className='flex md:flex-col lg:flex-row gap-2 justify-center items-center hover:text-yellow cursor-pointer'>
              <HiEnvelope />
              <span className='block'>draganapopovpetrovic@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className='footerCol'>
          <h3 className='text-xl pb-3'>Social Links</h3>
          <div className='scale-110'>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className='w-full pt-10 pb-20 text-center'>
        <p>
          © 2023 - &nbsp; Made with &nbsp; <span className="text-[#ff014f] text-xl lg:text-2xl">♥</span> &nbsp; | &nbsp; Have a
          nice {dayOfWeekName}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
