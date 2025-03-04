import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WorkCards from "../Components/WorkCards";
import { Link } from "react-router-dom";

import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";

const worksData = [
  {
    id: 1,
    date: "2020",
    title: "Designing Landing Pages",
    subTitle: "Website",
    image: image6,
  },
  {
    id: 2,
    date: "2020",
    title: "Designing Dashboards",
    subTitle: "Dashboard",
    image: image3,
  },
  {
    id: 3,
    date: "2018",
    title: "Vibrant Portraits of 2020",
    subTitle: "Illustration",
    image: image4,
  },
  {
    id: 4,
    date: "2018",
    title: "36 Days of Malayalam type",
    subTitle: "Typography",
    image: image5,
  },
  {
    id: 5,
    date: "2018",
    title: "Components",
    subTitle: "Components, Design",
    image: image7,
  },
];

const Works = () => {
  return (
    <section>
      <Navbar />
      <div className="section-margin">
        <h1 className="font-bold text-3xl mb-[1.125rem] md:mt-10 md:mb-[3.125rem] md:text-[2.75rem]">
          Works
        </h1>
        {worksData.map((work, index) => (
          <Link to={`/works/${work.id}`} key={index} state={work}>
            <WorkCards
              key={index}
              date={work.date}
              title={work.title}
              subtTitle={work.subTitle}
              image={work.image}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Works;
