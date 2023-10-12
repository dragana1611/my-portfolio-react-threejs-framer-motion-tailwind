import { useState } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const ThemeToggleButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <button className='text-5xl text-yellow-400' onClick={toggleTheme}>
      {isDarkTheme ? <BsSunFill /> : <BsMoonStarsFill />}
    </button>
  );
};

export default ThemeToggleButton;
