import PostCards from "./PostCards";

const Posts = () => {
  return (
    <>
      <div className="bg-[#EDF7FA] px-2.5 md:px-36 pb-10">
        <div className="text-center py-5 lg:flex lg:justify-between">
          <p className="text-lg md:text-[1.375rem]">Recent Posts</p>
          <span className="hidden lg:block text-bas text-[#00A8CC] cursor-pointer">
            View all
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <PostCards />
          <PostCards />
        </div>
      </div>
    </>
  );
};

export default Posts;
