import Navbar from "./Navbar";
import image1 from "../assets/images/Ellipse1.png";
import image2 from "../assets/images/Ellipse2.png";

const Hero = () => {
  return (
    <section className="md:min-h-dvh mb-10">
      <Navbar />
      <div className="mx-6 flex flex-col-reverse items-center md:flex-row md:gap-2 md:justify-between md:mx-40 md:mt-25">
        {/* left */}
        <div className="text-center md:flex-1 md:max-w-[500px] md:text-left">
          <h1 className="font-bold text-3xl leading-10 mt-8 md:text-[2.75rem] md:leading-14">
            Hi, I am John,
            <br /> Creative Technologist
          </h1>
          <p className="mt-5 md:mt-[2.375rem]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-[#FF6464] px-5 py-2.5 text-white my-6 cursor-pointer hover:opacity-90 md:my-8">
            Download Resume
          </button>
        </div>

        {/* right */}
        <div className="relative">
          <img src={image1} alt="person" className="h-44  md:h-60 lg:h-80" />
          <img
            src={image2}
            alt="person"
            className="h-44  md:h-60 lg:h-80 absolute left-0 -z-10 top-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
