import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BlogCards from "../Components/BlogCards";

const Blogs = () => {
  return (
    <section>
      <Navbar />
      <div className="section-margin">
        <h1 className="font-bold text-3xl mb-[1.125rem] md:mt-10 md:mb-[3.125rem] md:text-[2.75rem]">
          Blog
        </h1>
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
      </div>
      <Footer />
    </section>
  );
};

export default Blogs;
