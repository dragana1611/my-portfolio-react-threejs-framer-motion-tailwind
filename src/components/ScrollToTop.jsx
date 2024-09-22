import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiChevronUp } from "react-icons/hi2";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-12 md:bottom-10 right-[2%] flex justify-center items-center z-[1000]'>
      {!isVisible && (
        <button className='opacity-0'>
          <HiChevronUp className='h-6 w-6 text-secondary' />
        </button>
      )}
      {isVisible && (
        <Link to='main' smooth={true} duration={300}>
          <button
            type='button'
            // onClick={scrollToTop}
            className={
              "opacity-100 inline-flex items-center p-3 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full shadow-sm  bg-yellow transition-opacity hover:bg-yellow/80 cursor-pointer"
            }
          >
            <HiChevronUp
              className='h-6 w-6 text-secondary'
              aria-hidden='true'
            />
          </button>
        </Link>
      )}
    </div>
  );
};

export default ScrollToTop;
