import { useState } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const ThemeToggleButton = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <button className='text-3xl text-yellow relative z-[100]' onClick={toggleTheme}>
      {isLightTheme ? <BsSunFill /> : <BsMoonStarsFill />}
    </button>
  );
};

export default ThemeToggleButton;
