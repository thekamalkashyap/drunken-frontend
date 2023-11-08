import cn from "@/utils/cn";
import Link from "next/link";
export default function Card({ trip, className, id }) {
  return (
    <Link href={`/trip/${id}`} className="cursor-pointer">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(00, 00, 00, 0), rgba(0, 0, 0, 0.8)), url(${"/Home/kashmir.png"})`,
        }}
        className={cn(
          " flex text-white flex-col justify-end p-8 w-[300px] md:w-[450px] h-[300px] md:h-[400px] rounded-2xl bg-no-repeat bg-cover",
          className
        )}
      >
        <div className="flex gap-4 flex-col">
          <div className="flex items-center gap-2">
            <figure>
              <img src="/Home/clockw.png" alt="clock" />
            </figure>
            <span>7N-8D</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <figure>
              <img src="/Home/locationw.png" alt="clock" />
            </figure>
            <span>{trip?.title}</span>
          </div>
        </div>
        <div className="flex mb-1">
          <span className="mr-2">Starts at</span>
          <span>₹{trip?.price}/-</span>
        </div>
        <div className="flex gap-2">
          <figure>
            <img src="/Home/calendarw.png" alt="" />
          </figure>
          <span>{trip?.startsAt}</span>
        </div>
      </div>
    </Link>
  );
}
