export default () => {
  return (
    <header
      className={`uppercase py-2 px-16 flex items-center justify-evenly
       gap-4 text-black`}
    >
      <figure className="flex-1 flex">
        <img src="/logo.png" alt="Drunken Roads" />
      </figure>
      <nav className="flex-[2]">
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
      <nav className="flex-[3]">
        <ul className="flex justify-end gap-8">
          <li>Upcoming Trips</li>
          <li>Internatinal Trips</li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
};
