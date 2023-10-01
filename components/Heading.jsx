export default ({ children }) => {
  return (
    <h2 className=" text-xl md:text-3xl mt-12 flex rounded-xl font-semibold">
      <span className="from-[#10B5CB] mt-1 to-[#0073A8] bg-gradient-to-b rounded-l-full absolute h-8 w-2 " />
      <span className="ml-4 mt-2 md:mt-0">{children}</span>
    </h2>
  );
};
