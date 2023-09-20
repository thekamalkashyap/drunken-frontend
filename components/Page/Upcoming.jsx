import Card from "./Card";
export default () => {
  return (
    <div className="px-16">
      <h2 className="text-3xl mt-12 flex rounded-xl font-semibold">
        <span className="from-[#10B5CB] mt-1 to-[#0073A8] bg-gradient-to-b rounded-l-full absolute h-8 w-2 " />
        <span className="ml-4">Similar Trips</span>
      </h2>
      <div className="flex justify-around items-center my-12">
        <Card trip={null} />
        <Card trip={null} />
        <Card trip={null} />
      </div>
    </div>
  );
};
