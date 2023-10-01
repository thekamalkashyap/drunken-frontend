export default () => {
  return (
    <div className="bg-[url(/Home/herobg.png)] flex gap-3 md:gap-8 flex-col px-8 md:px-16 justify-center text-white bg-[#2F6A7F] bg-blend-overlay bg-cover bg-no-repeat h-[calc(90vh-90px)]">
      <h1 className="font-bold text-3xl md:text-5xl">
        Experience the Best of Kashmir: <br /> 8 Days Tour Package
      </h1>
      <p className="font-medium text-xl md:text-2xl">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
      <div className="flex flex-col md:mt-12 justify-end gap-4 md:gap-8">
        <button className="bg-white py-2 px-8 rounded-full  text-[#0073A8]">
          Get Itinerary
        </button>
        <button className=" from-[#10B5CB] bg-[#0073A8] bg-gradient-to-r py-2 px-10 text-white rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
};
