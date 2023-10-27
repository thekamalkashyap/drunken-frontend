export default () => {
  return (
    <footer className=" xl:h-[90vh] bg-[url(/Home/herobg.png)] flex gap-8 flex-col items-center py-6 md:py-12 px-6 md:px-16 justify-center text-white bg-[#2F6A7F] bg-blend-overlay bg-cover bg-no-repeat">
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="font-bold text-center md:text-left text-4xl md:text-5xl lg:text-6xl">Looking for something else?</h2>
        <div className="flex gap-2 flex-col md:flex-row justify-between items-center">
          <p className="flex-1 text-center md:text-left text-xl md:text-2xl">
            Connect with our experts! Get the best itineraries and offers!
          </p>
          <div className="flex-1 flex justify-end">
            <button className="from-[#10B5CB] bg-[#0073A8] bg-gradient-to-r py-2 px-10 text-white rounded-full">
              Connect Us
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col md:flex-row p-5 text-black xl:h-[20rem] lg:w-[60vw] rounded-t-2xl">
        <div className="flex-[3] p-0 md:p-4">
          <h4 className="mb-2 text-black font-bold text-lg">
            About Drunken Roads
          </h4>
          <p className="text-sm md:text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex-1 p-2 pl-0 md:p-4">
          <h4 className=" text-lg mb-2 font-semibold">QUICK LINKS</h4>
          <ul className="text-sm md:text-base ">
            <li>
              <span className="font-bold text-gray-600">&gt;</span> Privacy
              Policy
            </li>
            <li>
              <span className="font-bold text-gray-600">&gt;</span> Cancellation
              Policy
            </li>
            <li>
              <span className="font-bold text-gray-600">&gt;</span> Terms &
              Conditions
            </li>
            <li>
              <span className="font-bold text-gray-600">&gt;</span> Disclaimer
            </li>
          </ul>
        </div>
      </div>
      <div className=" lg:h-12 w-full lg:w-[60vw] text-sm md:text-base py-2 text-center flex flex-col md:flex-row gap-4 justify-between items-center px-6 -mt-8 rounded-b-2xl bg-[#10B5CB]">
        <span>Crafted with ❤️ in Punjab, India</span>
        <span>© Copyright 2022 by Drunken Roads. All Rights Reserved</span>
      </div>
    </footer>
  );
};
