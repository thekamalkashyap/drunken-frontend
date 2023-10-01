import Heading from "../Heading";

const Card = () => {
  return (
    <div className="shadow-lg md:w-[35rem] lg:w-[25rem] xl:w-[35rem] p-4 rounded-lg bg-white flex flex-col sm:flex-row gap-2">
      <div className="flex-1 flex justify-center">
        <div className=" border-2 h-fit w-fit p-1 rounded-full border-[#10B5CB]">
          <figure className="bg-gray-300 h-14 w-14 rounded-full"></figure>
        </div>
      </div>
      <div className="flex-[4] flex flex-col gap-2">
        <div>
          <h4 className=" font-semibold">Lorem ipsum Lorem</h4>
          <h6 className="text-sm text-gray-600 font-medium">Lorem ipsum Lorem</h6>
        </div>
        <div className="flex gap-4">
          <figure>
            <img className="h-10 w-10 -mt-2 " src="/quote.svg" alt="" />
          </figure>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
        <div>
          <button className=" py-2 w-full text-right text-[#10B5CB] ">
            Continue Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className="px-8 md:px-16">
      <Heading>Hear from travelers like you</Heading>
      <div className="my-10 md:px-16 gap-4 xl:gap-8 flex-wrap flex justify-evenly items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
