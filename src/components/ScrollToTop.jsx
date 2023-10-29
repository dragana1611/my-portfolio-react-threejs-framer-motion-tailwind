import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi2";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const heightToHidden = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    }
  };

  const scrollToTop = () => {
    console.log("click click scroll");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-10 right-[2%] flex justify-center items-center z-[1000]'>
      {!isVisible && (
        <button className='opacity-0'>
          <HiChevronUp className='h-6 w-6 text-secondary' />
        </button>
      )}
      {isVisible && (
        <button
          type='button'
          onClick={scrollToTop}
          className={
            "opacity-100 inline-flex items-center p-3 rounded-full shadow-sm  bg-yellow transition-opacity hover:bg-yellow/50 cursor-pointer relative z-50"
          }
        >
          <HiChevronUp className='h-6 w-6 text-secondary' aria-hidden='true' />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
