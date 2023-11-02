import Link from "next/link";
import { ImageResponse } from "next/server";

export default ({ currentTrip }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row text-black">
      <div className="flex-1 p-16 flex flex-col justify-center gap-6 md:gap-8">
        <div className="flex gap-6 items-center">
          <div className="flex gap-3 justify-center items-center">
            <img className="h-6 w-6" src={`/Home/clock.png`} alt="" />
            <h3 className="text-xl text-black font-bold sm:text-base text-center">
              {currentTrip?.duration}
            </h3>
          </div>
          <div className="flex gap-3 items-center">
            <img className="h-6 w-5" src="/Home/location.png" alt="" />
            <h3 className="text-sm text-black font-semibold sm:text-base text-center">
              {currentTrip?.destination}
            </h3>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-black ">{currentTrip?.title}</h3>
        <div>
          <span>Starts at</span>
          <span className=" font-semibold ml-2">₹{currentTrip?.price}</span>
        </div>
        <div className="flex gap-3 items-center">
          <img className="h-6 w-5" src="/Home/calendar.png" alt="" />
          <h3 className="text-sm text-black font-semibold sm:text-base text-center">
            {currentTrip?.startsAt}
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          <button className=" flex text-xl justify-center gap-2 rounded-lg py-4 w-full bg-[#489CB0]">
            <span>
              <Link
                href={`/contact_us?firstName=&lastName=&email=&tripName=${currentTrip?.title}`}
              >
                Book Now
              </Link>
            </span>
            <img className=" h-6 w-6 " src="/Home/calendarw.png" alt="" />
          </button>
          <button className=" flex text-xl w-full justify-center gap-2 py-4 rounded-lg border-2 border-[#489CB0]">
            Download full itenary
          </button>
        </div>
      </div>
      <div className="flex-1 p-8 flex justify-center items-center">
        {currentTrip?.images.map((imagePath, index) => (
          <img
            key={index}
            className="h-[calc(85vh-4rem)] rounded-3xl"
            src={`${process.env.NEXT_PUBLIC_API_HOST}${imagePath}`}
            alt="test"
          />
        ))}
        {currentTrip?.images.length === 0 && (
          <ImageResponse
            className="h-[calc(85vh-4rem)] rounded-3xl"
            src={`/test.png`}
            alt="test"
          />
        )}
      </div>
    </div>
  );
};
