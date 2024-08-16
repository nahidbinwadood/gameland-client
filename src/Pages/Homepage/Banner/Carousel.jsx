import PropTypes from "prop-types";
const Carousel = ({ image, text, paragraph }) => {
  return (
    <div
      className="w-full font-qs bg-center bg-cover h-[95vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            {text}
          </h1>
          <br />
          <h2 className=" text-gray-200 lg:text-xl mx-auto px-4 md:w-2/3">
            {paragraph}
          </h2>
          <br />
        </div>
      </div>
    </div>
  );
};
Carousel.propTypes = {
  image: PropTypes.object.isRequired,
};
Carousel.propTypes = {
  text: PropTypes.object.isRequired,
};
Carousel.propTypes = {
  paragraph: PropTypes.object.isRequired,
};
export default Carousel;
