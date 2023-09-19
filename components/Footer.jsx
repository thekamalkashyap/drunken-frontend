export default () => {
  return (
    <footer className=" h-[90vh] bg-[url(/Home/herobg.png)] flex gap-8 flex-col items-center px-16 justify-center text-white bg-[#2F6A7F] bg-blend-overlay bg-cover bg-no-repeat ">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-6xl">Looking for something else?</h2>
        <div className="flex justify-between items-center">
          <p className="flex-1 text-2xl">
            Connect with our experts! Get the best itineraries and offers!
          </p>
          <div className="flex-1 flex justify-end">
            <button className="from-[#10B5CB] bg-[#0073A8] bg-gradient-to-r py-2 px-10 text-white rounded-full">
              Connect Us
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex p-5 text-black h-[15rem] w-[60vw] rounded-t-2xl">
        <div className="flex-[3] p-4">
          <h4>About Drunken Roads</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex-1 p-4">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
      <div className=" h-12 w-[60vw] flex justify-between items-center px-6 -mt-8 rounded-b-2xl bg-[#10B5CB]">
        <span>Crafted with ❤️ in Punjab, India</span>
        <span>© Copyright 2022 by Drunken Roads. All Rights Reserved</span>
      </div>
    </footer>
  );
};
