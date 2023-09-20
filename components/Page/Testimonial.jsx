export default () => {
  return (
    <div className="my-10 px-16 gap-8 flex-wrap flex justify-evenly items-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className="shadow-lg h-40 w-[35rem] p-4 rounded-lg bg-white flex">
      <div className="flex-1 flex justify-center">
        <div className=" border-2 h-fit w-fit p-1 rounded-full border-[#10B5CB]">
          <figure className="bg-gray-300 h-14 w-14 rounded-full"></figure>
        </div>
      </div>
      <div className="flex-[4]">
        <div>
          <h4>Lorem ipsum Lorem</h4>
          <p>Lorem ipsum Lorem</p>
        </div>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <div>
          <button>Continue Reading</button>
        </div>
      </div>
    </div>
  );
};
