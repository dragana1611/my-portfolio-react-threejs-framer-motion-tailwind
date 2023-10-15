import logo from "../assets/images/dplogo_circle.png";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className='w-full h-16 xl:h-28 flex justify-between items-center'>
      <div className='h-full'>
        <img className='w-full h-full' src={logo} alt='' />
      </div>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
