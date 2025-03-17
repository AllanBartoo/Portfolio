import WorkCards from "./WorkCards";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";

const worksData = [
  {
    date: "2020",
    title: "Designing Dashboards",
    subtTitle: "Dashboard",
    image: image3,
  },
  {
    date: "2018",
    title: "Vibrant Portraits of 2020",
    subtTitle: "Illustration",
    image: image4,
  },
  {
    date: "2018",
    title: "36 Days of Malayalam type",
    subtTitle: "Typography",
    image: image5,
  },
];

const Works = () => {
  return (
    <section className="min-h-dvh mx-6 md:mx-40">
      <p className="text-center md:text-left py-5 text-lg md:text-[1.375rem]">
        Featured Works
      </p>
      {worksData.map((work, index) => (
        <WorkCards
          key={index}
          date={work.date}
          title={work.title}
          subtTitle={work.subtTitle}
          image={work.image}
        />
      ))}
    </section>
  );
};

export default Works;
