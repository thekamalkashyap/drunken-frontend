import cn from "@/utils/cn";
export default function Card({ trip, className }) {
  return (
    <div>
      <div
        className={cn(
          " flex text-white flex-col justify-end p-8 w-[300px] md:w-[450px] h-[300px] md:h-[400px] rounded-2xl bg-no-repeat bg-cover bg-[linear-gradient(to_bottom,rgba(00,00,00,0),rgba(0,0,0,0.8)),url('/Home/kashmir.png')] ",
          className
        )}
      >
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
            <span>{trip?.title}</span>
          </div>
        </div>
        <h2>{trip?.description}</h2>
        <div className="flex">
          <span>Starts at</span>
          <span>₹{trip?.price}/-</span>
        </div>
        <div className="flex gap-2">
          <figure>
            <img src="/Home/calendarw.png" alt="" />
          </figure>
          <span>{trip?.startsAt} Jun</span>
        </div>
      </div>
    </div>
  );
}
