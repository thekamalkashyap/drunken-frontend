import Heading from "../Heading";

const Card = () => {
  return (
    <div className="shadow-lg h-44 w-[35rem] p-4 rounded-lg bg-white flex">
      <div className="flex-1 flex justify-center">
        <div className=" border-2 h-fit w-fit p-1 rounded-full border-[#10B5CB]">
          <figure className="bg-gray-300 h-14 w-14 rounded-full"></figure>
        </div>
      </div>
      <div className="flex-[4]">
        <div>
          <h4 className=" font-semibold">Lorem ipsum Lorem</h4>
          <p className="text-sm text-gray-600 font-medium">Lorem ipsum Lorem</p>
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
          <button className="  w-full text-right text-[#10B5CB] ">
            Continue Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className=" px-16">
      <Heading>Hear from travelers like you</Heading>
      <div className="my-10 px-16 gap-8 flex-wrap flex justify-evenly items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
