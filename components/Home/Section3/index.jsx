"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
export default () => {
  const [allTrips, setAllTrips] = useState([]);

  // Fetching trips from backend
  const fetchTrips = async () => {
    const response = await fetch("http://localhost:5000/api/trips/getAllTrips");
    const data = await response.json();
    setAllTrips(data);
  };

  useEffect(() => {
    if (allTrips.length === 0) {
      fetchTrips();
    }
  }, []);

  return (
    <div className=" px-16">
      <h2 className="text-3xl flex rounded-xl font-semibold">
        <span className="from-[#10B5CB] mt-1 to-[#0073A8] bg-gradient-to-b rounded-l-full absolute h-8 w-2 " />
        <span className="ml-4">Similar Trips</span>
      </h2>
      <div className="flex mt-10 gap-8 justify-center">
        {allTrips.map((item) => {
          return <Card key={item._id} trip={item} />;
        })}
      </div>
    </div>
  );
};
