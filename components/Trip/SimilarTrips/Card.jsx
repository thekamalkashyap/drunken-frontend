import Link from "next/link";
export default function Card({ trip, id }) {
  return (
    <Link href={`/trip/${id}`}>
      <div className="flex text-white max-w-sm">
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
              <span>{trip.title}</span>
            </div>
          </div>
          <h2>{trip.description}</h2>
          <div className="flex">
            <span className="mr-2">Starts at</span>
            <span>₹{trip.price}/-</span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <figure>
              <img src="/Home/calendarw.png" alt="" />
            </figure>
            <span>
              {trip.startsAt} - {trip.endAt}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}