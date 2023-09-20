export default () => {
  return (
    <div className="bg-[url(/Home/herobg.png)] px-16 grid grid-cols-6 grid-rows-6 text-white bg-[#2F6A7F] bg-blend-overlay bg-cover bg-no-repeat h-[calc(90vh-90px)]">
      <div className=" flex flex-col gap-8 row-start-2 row-span-3 col-start-2 col-span-3">
        <h1 className="font-bold text-6xl">
          Explore the world <br /> like never before!
        </h1>
        <p className="font-medium w-3/4 text-2xl">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <form
          className="bg-white items-center justify-center px-4 flex rounded-full"
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
