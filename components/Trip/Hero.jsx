import Link from "next/link";
import { ImageResponse } from "next/server";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  all: {
    breakpoint: { max: 1664, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default ({ currentTrip }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row text-black">
      <div className="flex-[3] p-6 md:p-16 flex flex-col justify-center gap-6 md:gap-8">
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
      <div className="flex-[2] p-6 flex relative justify-center items-center">
        <Carousel
          responsive={responsive}
          draggable
          arrows={false}
          className="h-full w-full md:w-[40vw]"
          autoPlaySpeed={2000}
          focusOnSelect
          infinite={currentTrip?.images.length != 1}
          autoPlay
        >
          {currentTrip?.images.map((imagePath, index) => (
            <div
              className=" flex justify-center bg-gray-50 items-center h-full w-full"
              key={index}
            >
              <img
                className="rounded-3xl max-h-[17rem] md:max-h-[calc(85vh-4rem)] object-contain"
                src={`${process.env.NEXT_PUBLIC_API_HOST}${imagePath}`}
                alt="test"
              />
            </div>
          ))}
          {currentTrip?.images.length === 0 && (
            <div>
              <ImageResponse
                className="h-[calc(85vh-4rem)] rounded-3xl"
                src={`/test.png`}
                alt="test"
              />
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
};
