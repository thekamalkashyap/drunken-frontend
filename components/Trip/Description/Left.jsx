import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'

export default () => {
  const reviews = [
    {
      logo: "google",
      stars: "⭐ 4.9",
      reviews: "(xxxx reviews)",
    },
    {
      logo: "tripadvisor",
      stars: "⭐ 4.9",
      reviews: "(xxxx reviews)",
    },
    {
      logo: "facebook",
      stars: "⭐ 4.9",
      reviews: "(xxxx reviews)",
    },
  ];

  const params = useParams();
  const [currentTrip, setCurrentTrip] = useState({});

  // Fetching trips from backend
  const fetchTrip = async () => {
    const response = await fetch(
      `http://localhost:5000/api/trips/getTrip/653ab602f89c59aabd01da79`
    );
    const data = await response.json();
    setCurrentTrip(data);
  };

  useEffect(() => {
      fetchTrip();
      console.log(params)
  }, []);

  return (
    <div className="flex-[4] md:mr-6">
      <div className=" md:ml-3 flex gap-6">
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-6" src={`/Home/clock.png`} alt="" />
          </figure>
          <h3 className="text-sm sm:text-base text-center">Duration</h3>
          <p className="text-sm sm:text-base font-semibold">{currentTrip.price}</p>
        </div>
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex  justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-4" src="/Home/rupee.png" alt="" />
          </figure>
          <h3 className="text-sm sm:text-base text-center">Starting Prize</h3>
          <p className="text-sm sm:text-base font-semibold">{currentTrip.price}</p>
        </div>
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-5" src="/Home/location.png" alt="" />
          </figure>
          <h3 className="text-sm sm:text-base text-center">Pick up & Drop</h3>
          <p className="text-sm sm:text-base font-semibold">{currentTrip.title}</p>
        </div>
      </div>
      <div className=" mt-6 md:mt-12 bg-gray-400 font-semibold rounded-3xl p-6 h-[18rem] md:h-[40rem]">
        {currentTrip.description} <br /> Inclusion <br /> Exclusion <br /> Dates+Book
      </div>
      <div className="mt-12 bg-gray-400 font-semibold rounded-3xl p-6 h-[9rem] md:h-[20rem]">
        Photos/ Videos
      </div>
      <div className="flex flex-wrap gap-4 mt-16 justify-evenly items-center">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-3 items-center flex-col">
            <figure>
              <img className="h-14" src={`/Home/${review.logo}.png`} alt="" />
            </figure>
            <h3 className="text-lg font-semibold">{review.stars}</h3>
            <p>{review.reviews}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
