export default () => {

  return (
    <div className="flex-[4] mr-6">
      <div className=" ml-3 flex gap-6">
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-6" src={`/Home/clock.png`} alt="" />
          </figure>
          <h3>Duration</h3>
          <p className="font-semibold">7N-8D</p>
        </div>
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-4" src="/Home/rupee.png" alt="" />
          </figure>
          <h3>Starting Prize</h3>
          <p className=" font-semibold">₹89,999/-</p>
        </div>
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-5" src="/Home/location.png" alt="" />
          </figure>
          <h3>Pick up & Drop</h3>
          <p className=" font-semibold">Srinagar</p>
        </div>
      </div>
      <div className="mt-10 bg-gray-400 font-semibold rounded-3xl p-6 h-[35rem]">
        Description <br /> Inclusion <br /> Exclusion <br /> Dates+Book
      </div>
      <div className="mt-8 bg-gray-400 font-semibold rounded-3xl p-6 h-[18rem]">
        Photos/ Videos
      </div>
      <div className="flex mt-16 justify-evenly items-center">
        <div className="flex items-center flex-col">
          <figure>
            <img className="h-10" src={`/Home/google.png`} alt="" />
          </figure>
          <h3>⭐ 4.9</h3>
          <p>(xxxx reviews)</p>
        </div>
        <div className="flex items-center flex-col">
          <figure>
            <img className="h-10" src={`/Home/tripadvisor.png`} alt="" />
          </figure>
          <h3>⭐ 4.9</h3>
          <p>(xxxx reviews)</p>
        </div>
        <div className="flex items-center flex-col">
          <figure>
            <img className="h-10" src={`/Home/facebook.png`} alt="" />
          </figure>
          <h3>⭐ 4.9</h3>
          <p>(xxxx reviews)</p>
        </div>
      </div>
    </div>
  );
};
