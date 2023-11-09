import logo from "../assets/images/dplogo_circle.png";
// import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className='w-screen h-14 xl:h-16 flex justify-between items-center'>
      <div className='h-full'>
        <img className='w-full h-full object-cover' src={logo} alt='' />
      </div>
      {/* <ThemeToggleButton /> */}
    </header>
  );
};

export default Header;
