/* eslint-disable react/prop-types */

const AboutSkillsCard = ({
  number,
  title,
  text,
  blockColor,
  blockPosition,
}) => {
  console.log(number, title, text, blockColor, blockPosition);
  const bgClass = `bg-${blockColor}`;
  const justifyClass = `justify-${blockPosition}`;

  return (
    <div className={`${justifyClass} w-full flex flex-col`}>
      <div className="w-5/6">
        <div className="relative h-20">
          <div className="w-full z-10">
            <p className="font-secondary font-semibold text-3xl tracking-wider">
              {number}
            </p>
            <p className="font-primary font-semibold text-2xl mt-[5px] tracking-[0.3rem]">
              {title}
            </p>
          </div>
          <div
            className={`${bgClass} w-1/2 md:w-3/4 h-20 absolute right-0 top-0 z-[-1]`}
          />
        </div>
        <p className="font-primary mt-3 lg:text-[13px] lg:text-justify">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutSkillsCard;
