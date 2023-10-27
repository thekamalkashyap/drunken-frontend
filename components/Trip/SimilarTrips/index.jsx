import { useEffect, useState } from "react";
import Card from "./Card";
import Heading from "../../Heading";

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
    <div className=" px-8 md:px-20 my-6 md:my-12">
      <Heading>Similar Trips</Heading>
      <div className="flex items-center mt-10 gap-12 justify-evenly">
        {allTrips && allTrips.map((item) => {
          return <Card key={item._id} trip={item} id={item._id} />;
        })}
      </div>
    </div>
  );
};
