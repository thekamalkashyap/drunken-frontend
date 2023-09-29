import { useDisclosure } from "@mantine/hooks";

export default () => {
  const [opened, handlers] = useDisclosure(false);
  return (
    <header
      className={`uppercase px-10 md:px-16 h-16 flex items-center justify-evenly
       gap-4 text-black text-xs lg:text-sm xl:text-base`}
    >
      <figure className="flex-[1] flex">
        <img src="/logo.png" alt="Drunken Roads" />
      </figure>
      {/* desktop view  */}
      <nav className="hidden lg:block flex-[2]">
        <ul className="flex font-medium justify-center gap-8">
          <li className="flex justify-center gap-2">
            <img src="/call.png" alt="" />
            <span>+91-836-067-5025</span>
          </li>
          <li className="flex justify-center gap-2">
            <img src="/call.png" alt="" />
            <span>+91-884-732-0823</span>
          </li>
        </ul>
      </nav>
      <nav className="hidden lg:block flex-[3]">
        <ul className="flex justify-end gap-8">
          <li>Upcoming Trips</li>
          <li>Internatinal Trips</li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>
      </nav>
      {/* mobile view  */}
      <button className="lg:hidden " onClick={() => handlers.open()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-black h-10 w-10 "
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div
        className={`lg:hidden transition-all text-center fixed z-50 font-medium top-0 left-0 backdrop-blur-sm bg-[#ffffffdf] h-screen w-screen
          ${!opened && "translate-x-[-100vw]"}`}
      >
        <div className="h-16 px-8 md:px-14 flex justify-end">
          <button onClick={() => handlers.close()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-black h-14 w-14 rotate-90 "
              viewBox="0 0 16 16"
            >
              <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z" />
            </svg>
          </button>
        </div>
        <div className="h-[calc(100vh-4rem)] flex py-20 items-center flex-col">
          <nav>
            <ul className=" flex flex-col justify-center items-center gap-4">
              <li>Upcoming Trips</li>
              <li>Internatinal Trips</li>
              <li>Blogs</li>
              <li>About Us</li>
            </ul>
          </nav>
          <nav className=" my-4 ">
            <ul className="flex flex-col font-medium justify-center gap-4">
              <li className="flex justify-center gap-2">
                <img src="/call.png" alt="" />
                <span>+91-836-067-5025</span>
              </li>
              <li className="flex justify-center gap-2">
                <img src="/call.png" alt="" />
                <span>+91-884-732-0823</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
