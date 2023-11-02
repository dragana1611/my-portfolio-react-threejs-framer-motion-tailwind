/* eslint-disable react/prop-types */
const Buttons = ({ type, name }) => {
  return (
    <div>
      <button type={type} className='btn'>
        {name}
      </button>
    </div>
  );
};

export default Buttons;
