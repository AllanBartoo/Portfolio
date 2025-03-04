import PropTypes from "prop-types";

const WorksCards = ({ date, title, subtTitle, image }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row border-b border-[#E0E0E0] pb-4 mb-[1.875rem]">
      <img
        src={image}
        alt={title}
        className="h-[14.375rem] md:h-[11.25rem] md:max-w-[246px]"
      />
      {/* content */}
      <div>
        <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
        <div className="flex gap-5 pt-4">
          <button className="text-base font-black text-white bg-[#142850] rounded-full px-3">
            {date}
          </button>
          <span className="text-base text-[#8695A4] font-normal">
            {subtTitle}
          </span>
        </div>
        <p className="pt-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

WorksCards.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default WorksCards;
