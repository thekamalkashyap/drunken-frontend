export default () => {
  return (
    <div className="flex text-white">
      <div className=" flex flex-col justify-end p-8 w-[450px] h-[400px] rounded-2xl bg-no-repeat bg-cover bg-[linear-gradient(to_bottom,rgba(00,00,00,0),rgba(0,0,0,0.8)),url('/Home/kashmir.png')] ">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <figure>
              <img src="/Home/clockw.png" alt="clock" />
            </figure>
            <span>7N-8D</span>
          </div>
          <div className="flex items-center gap-2">
            <figure>
              <img src="/Home/locationw.png" alt="clock" />
            </figure>
            <span>Srinagar</span>
          </div>
        </div>
        <h2>Experience the Best of Kashmir: 8 Days Tour Package</h2>
        <div className="flex">
          <span>Starts at</span>
          <span>₹58,999/-</span>
        </div>
        <div className="flex gap-2">
          <figure>
            <img src="/Home/calendarw.png" alt="" />
          </figure>
          <span>18 Jun</span>
        </div>
      </div>
    </div>
  );
};