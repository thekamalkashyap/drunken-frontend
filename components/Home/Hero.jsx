export default () => {
  return (
    <div className="bg-[url(/Home/herobg.png)] px-4 sm:px-10 md:px-16 flex justify-center items-center lg:grid grid-cols-6 grid-rows-6 text-white bg-[#2F6A7F] bg-blend-overlay bg-cover bg-no-repeat h-[50vh] md:h-[calc(100vh-4rem)]">
      <div className=" flex flex-col gap-4 sm:gap-6 lg:gap-8 row-start-2 row-span-3 xl:col-start-2 col-start-1 col-span-4 xl:col-span-3">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
          Explore the world <br /> like never before!
        </h1>
        <p className="font-medium sm:w-1/2 md:w-3/4 text-sm sm:text-xl md:text-2xl">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <form
          className="bg-white w-full sm:w-2/3 xl:w-full items-center justify-center px-4 flex rounded-full"
          action=""
        >
          <input
            className="rounded-full focus:outline-none text-black w-full py-2"
            type="text"
            placeholder="Search Destination"
          />
          <img className="h-6 w-6" src="/search.png" alt="" />
        </form>
      </div>
    </div>
  );
};
