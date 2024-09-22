import linkedinIcon from "../assets/images/linkedin.png";
import githubIcon from "../assets/images/github.png";
import emailIcon from "../assets/images/email.png";

const SocialIcons = () => {
  return (
    <div className='w-full h-5 xl:h-6 flex justify-center lg:justify-start gap-1 sm:gap-3'>
      <a
        href='https://www.linkedin.com/in/dragana-popov-b2059646/'
        target='_blank'
        rel='noreferrer'
        className='block h-full'
      >
        <img src={linkedinIcon} alt='' className='h-full' />
      </a>
      <a
        href='https://github.com/dragana1611'
        target='_blank'
        rel='noreferrer'
        className='block h-full'
      >
        <img src={githubIcon} alt='' className='h-full object-fill' />
      </a>
      <a href='#contact' className='block h-full'>
        <img src={emailIcon} alt='' className='h-full' />
      </a>
    </div>
  );
};

export default SocialIcons;
