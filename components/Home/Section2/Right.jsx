export default () => {
  return (
    <div className="ml-6 flex-[2]">
      <h2 className="font-semibold text-2xl mt-4">
        Travelers eager to share their memorable experiences 🥰
      </h2>
      <div className="h-[15rem] mt-6 font-semibold flex justify-center items-center rounded-3xl bg-gray-400">
        Youtube Video
      </div>
      <div className="">
        <h2 className="my-4">Get in touch</h2>
        <form className="flex flex-col gap-4" action="">
          <input
            className="border-2 rounded-md border-[#10B5CB] h-10 w-full pl-2"
            placeholder="Full Name*"
            type="text"
          />
          <input
            className="border-2 rounded-md border-[#10B5CB] h-10 w-full pl-2"
            placeholder="Contact*"
            type="text"
          />
          <input
            className="border-2 rounded-md border-[#10B5CB] h-10 w-full pl-2"
            placeholder="Email Id*"
            type="text"
          />
          <input
            className="border-2 rounded-md border-[#10B5CB] h-10 w-full pl-2"
            placeholder="Destination"
            type="text"
          />
          <button className="w-full h-10 rounded-md bg-gradient-to-r from-[#10B5CB] to-[#0073A8]">
            Submit
          </button>
        </form>
      </div>

      <div className="flex items-start gap-4 justify-center flex-col mt-4">
        <h2 className="">Why Drunken Roads?</h2>
        <div className=" text-white h-full rounded-3xl p-4 from-[#57286B] to-[#AB7FBB] bg-gradient-to-r">
          <div className="relative mb-2 flex justify-center items-center border-dashed rounded-full h-10 w-10 border-2">
            <span className=" h-6 w-6 absolute flex justify-center items-center text-white rounded-full border-2 border-white">
              1
            </span>
          </div>
          <p>Community of more than x,xx,xxx+ happy travellers on instagram</p>
        </div>
        <div className=" text-white h-full rounded-3xl p-4 from-[#D2542C] to-[#F2A794] bg-gradient-to-r">
          <div className="mb-2 relative flex justify-center items-center border-dashed rounded-full h-10 w-10 border-2">
            <span className=" h-6 w-6 absolute flex justify-center items-center text-white rounded-full border-2 border-white">
              2
            </span>
          </div>
          <p>
            A company led by young people that has created an open and safe
            space for young travellers
          </p>
        </div>
        <div className=" text-white h-full rounded-3xl p-4 from-[#10838A] to-[#91DAEB] bg-gradient-to-r">
          <div className="relative mb-2 flex justify-center items-center border-dashed rounded-full h-10 w-10 border-2">
            <span className=" h-6 w-6 absolute flex justify-center items-center text-white rounded-full border-2 border-white">
              3
            </span>
          </div>
          <p>
            Experienced travel experts to create best itineraries for your
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};
