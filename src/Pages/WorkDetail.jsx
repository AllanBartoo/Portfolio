import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import car from "../assets/images/car.png";

const WorkDetail = () => {
  const location = useLocation();
  const work = location.state;

  if (!work) {
    return <p>Work not found.</p>;
  }

  return (
    <section>
      <Navbar />
      <div className="section-margin">
        <h1 className="font-bold text-3xl leading-10">{work.title}</h1>
        <div className="flex gap-5 py-5">
          <button className="text-base font-black text-white bg-[#FF7C7C] rounded-full px-3">
            {work.date}
          </button>
          <p className="text-[#21243D]">{work.subTitle}</p>
        </div>
        <p className="font-normal text-base">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img
          src={work.image}
          alt={work.title}
          className="mt-4 w-full max-w-md"
        />

        <h2 className="font-medium text-3xl leading-10 pt-6 pb-1">Heading 1</h2>
        <h3 className="font-medium leading-10">Heading 2</h3>
        <p className="font-normal text-base">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <img src={car} alt="car" className="py-2.5 w-full max-w-lg"/>
      </div>

      <Footer />
    </section>
  );
};

export default WorkDetail;
