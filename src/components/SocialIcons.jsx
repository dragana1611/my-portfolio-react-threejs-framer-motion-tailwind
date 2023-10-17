import React from "react";
import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import emailIcon from "../assets/images/email.png";

const SocialIcons = () => {
  return (
    <div className='w-full h-4 xl:h-6 flex justify-center gap-3 mt-3 md:mt-4'>
      <a
        href='https://www.linkedin.com/in/dragana-petrovic-b2059646/'
        target='_blank'
        rel='noreferrer'
        className='block h-full'
      >
        <img
          src={linkedinIcon}
          alt=''
          className='h-full'
        />
      </a>
      <a
        href='https://github.com/dragana1611'
        target='_blank'
        rel='noreferrer'
        className='block h-full'
      >
        <img src={githubIcon} alt='' className='h-full object-fill' />
      </a>
      <a
        href='#contact'
        target='_blank'
        rel='noreferrer'
        className='block h-full'
      >
        <img src={emailIcon} alt='' className='h-full' />
      </a>
    </div>
  );
};

export default SocialIcons;
