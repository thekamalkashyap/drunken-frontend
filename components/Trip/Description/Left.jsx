import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const searchParams = router.query;
  console.log(searchParams);
  const [currentTrip, setCurrentTrip] = useState();

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

  // Fetching trips from backend
  const fetchTrip = async () => {
    const response = await fetch(
      `http://localhost:5000/api/trips/getTrip/${searchParams.id}`
    );
    const data = await response.json();
    console.log(data);
    setCurrentTrip(data);
  };

  useEffect(() => {
    if (!currentTrip) {
      fetchTrip();
    }
  }, []);

  return (
    <div className="flex-[4] mr-6">
      <div className=" ml-3 flex gap-6">
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-6" src={`/Home/clock.png`} alt="" />
          </figure>
          <h3>Duration</h3>
          <p className="font-semibold">7N-8D</p>
        </div>
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-4" src="/Home/rupee.png" alt="" />
          </figure>
          <h3>Starting Prize</h3>
          <p className=" font-semibold">₹89,999/-</p>
        </div>
        <div className="flex items-center flex-col">
          <figure className="bg-white shadow-lg -mt-6 flex justify-center items-center h-10 w-10 rounded-full">
            <img className="h-6 w-5" src="/Home/location.png" alt="" />
          </figure>
          <h3>Pick up & Drop</h3>
          <p className=" font-semibold">Srinagar</p>
        </div>
      </div>
      <div className="mt-12 bg-gray-400 font-semibold rounded-3xl p-6 h-[40rem]">
        Description <br /> Inclusion <br /> Exclusion <br /> Dates+Book
      </div>
      <div className="mt-12 bg-gray-400 font-semibold rounded-3xl p-6 h-[20rem]">
        Photos/ Videos
      </div>
      <div className="flex mt-16 justify-evenly items-center">
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
