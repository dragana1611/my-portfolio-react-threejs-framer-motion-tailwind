const Footer = () => {
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });

  return (
    <footer className='w-screen flex flex-col justify-start p-10'>
      <div className='w-full flex flex-col sm:flex-row sm:flex-wrap  items-center'>
        <div className='footerCol'>
          <h3 className='text-xl pb-2'>Dragana Petrovic</h3>
          <p>A freelance web designer and developer</p>
        </div>
        <div className='footerCol'>
          <h3 className='text-xl pb-2'>Important Links</h3>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Services</a>
            </li>
            <li></li>
            <li>
              <a href=''>Projects</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footerCol'>
          <h3 className='text-xl pb-2'>Contact Info</h3>
          <ul>
            <li>phone</li>
            <li>e-mail</li>
          </ul>
        </div>
        <div className='footerCol'>
          <h3 className='text-xl pb-2'>Social Links</h3>
          <ul>
            <li>
              <a href=''>linkedin</a>
            </li>
            <li>
              <a href=''>githib</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full pt-10 pb-20 text-center'>
        <p>
          © 2023 - &nbsp; Made with ♥ &nbsp; | &nbsp; Have a nice{" "}
          {dayOfWeekName}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
