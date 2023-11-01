/* eslint-disable react/prop-types */
const Buttons = ({ type, name }) => {
  return (
    <div className="">
      <button type={type} className='btn'>
        {name}
      </button>
    </div>
  );
};

export default Buttons;
