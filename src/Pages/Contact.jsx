import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-xl bg-white -mb-8 px-4">
        <h1 className="font-bold text-3xl md:text-4xl text-center">
          Contact me
        </h1>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"
          ></textarea>
          <button
            type="button"
            className="text-white bg-[#FF6464] hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
