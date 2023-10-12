import logo from "../assets/images/dplogo_circle.png";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className='w-full h-28 flex justify-between items-center border-2 border-lime-400'>
      <div className='h-full'>
        <img className='w-full h-full' src={logo} alt='' />
      </div>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
