export default () => {
  return (
    <div className="ml-6 flex-[2]">
      <h2 className="font-semibold text-2xl ">
        Travelers eager to share their memorable experiences 🥰
      </h2>
      <div className="h-[20rem] mt-6 font-semibold flex justify-center items-center rounded-3xl bg-gray-400">
        Youtube Video
      </div>
      <h2>Get in touch</h2>
      <form className="flex flex-col gap-4" action="">
        <input
          className="border-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Full Name*"
          type="text"
        />
        <input
          className="border-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Contact*"
          type="text"
        />
        <input
          className="border-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Email Id*"
          type="text"
        />
        <input
          className="border-2 rounded-md border-[#10B5CB] h-10 w-full"
          placeholder="Destination"
          type="text"
        />
        <button className="w-full h-10 rounded-md bg-gradient-to-r from-[#10B5CB] to-[#0073A8]">
          Submit
        </button>
      </form>
      <h2>Why Drunken Roads?</h2>
      <div className=" text-white h-[10rem] rounded-3xl p-6 from-[#57286B] to-[#AB7FBB] bg-gradient-to-r">
        <div className="relative flex justify-center items-center border-dashed rounded-full h-14 w-14 border-2">
          <span className=" h-10 w-10 absolute flex justify-center items-center text-white rounded-full border-2 border-white">
            1
          </span>
        </div>
        <p>Community of more than x,xx,xxx+ happy travellers on instagram</p>
      </div>
      <div className=" text-white h-[10rem] rounded-3xl p-6 from-[#D2542C] to-[#F2A794] bg-gradient-to-r">
        <div className="relative flex justify-center items-center border-dashed rounded-full h-14 w-14 border-2">
          <span className=" h-10 w-10 absolute flex justify-center items-center text-white rounded-full border-2 border-white">
            2
          </span>
        </div>
        <p>
          A company led by young people that has created an open and safe space
          for young travellers
        </p>
      </div>
      <div className=" text-white h-[10rem] rounded-3xl p-6 from-[#10838A] to-[#91DAEB] bg-gradient-to-r">
        <div className="relative flex justify-center items-center border-dashed rounded-full h-14 w-14 border-2">
          <span className=" h-10 w-10 absolute flex justify-center items-center text-white rounded-full border-2 border-white">
            3
          </span>
        </div>
        <p>
          Experienced travel experts to create best itineraries for your needs.
        </p>
      </div>
    </div>
  );
};
