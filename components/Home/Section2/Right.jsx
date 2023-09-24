export default () => {
  const whyDrunken = [
    {
      desc: "Community of more than x,xx,xxx+ happy travellers on instagram",
      bg: "from-[#57286B] to-[#AB7FBB]",
    },
    {
      desc: "A company led by young people that has created an open and safe space for young travellers",
      bg: "from-[#D2542C] to-[#F2A794]",
    },
    {
      desc: "Experienced travel experts to create best itineraries for your needs.",
      bg: "from-[#10838A] to-[#91DAEB]",
    },
  ];

  return (
    <div className="ml-6 my-10 flex flex-col gap-8 flex-[2]">
      <h2 className="font-semibold text-2xl ">
        Travelers eager to share their memorable experiences 🥰
      </h2>
      <div className="h-[15rem] mt-6 font-semibold flex justify-center items-center rounded-3xl bg-gray-400">
        Youtube Video
      </div>
      <h2 className="font-semibold text-2xl ">Get in touch</h2>
      <form className="flex flex-col gap-4" action="">
        <input
          className="border-2 focus:outline-none px-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Full Name*"
          type="text"
        />
        <input
          className="border-2 focus:outline-none px-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Contact*"
          type="number"
        />
        <input
          className="border-2 focus:outline-none px-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Email Id*"
          type="email"
        />
        <input
          className="border-2 focus:outline-none px-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Destination"
          type="text"
        />
        <button className="w-full h-10 rounded-md bg-gradient-to-r from-[#10B5CB] to-[#0073A8]">
          Submit
        </button>
      </form>
      <h2 className="font-semibold text-2xl ">Why Drunken Roads?</h2>
      {whyDrunken.map((why, index) => (
        <div
          key={index}
          className={`text-white h-[11rem] rounded-3xl p-6 ${why.bg} bg-gradient-to-r`}
        >
          <div className="relative mb-3 flex justify-center items-center border-dashed rounded-full h-14 w-14 border-2">
            <span className=" h-10 w-10 absolute flex justify-center items-center text-white rounded-full border-2 border-white">
              {index + 1}
            </span>
          </div>
          <p className="text-lg">{why.desc}</p>
        </div>
      ))}
    </div>
  );
};
