import {
  Hero,
  UpcomingTrips,
  InternationalTrips,
  Testimonials,
} from "@/components/Home";
import { useEffect, useState } from "react";

export default () => {
  const [upcomingTrips, setupcomingTrips] = useState(null);
  const [internationalTrips, setInternationalTrips] = useState([]);

  // Fetching trips from backend
  const fetchTrip = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/trips/getAllTrips`
      );
      const data = await response.json();
      const upcoming = [];
      const international = [];

      data.forEach((trip) => {
        if (trip.category === "upcomingTrip") {
          upcoming.push(trip);
        } else if (trip.category === "internationalTrip") {
          international.push(trip);
        }
      });
      setupcomingTrips(upcoming);
      setInternationalTrips(international);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  useEffect(() => {
    if (upcomingTrips === null) {
      fetchTrip();
    }
  }, [upcomingTrips]);

  return (
    <div >
      <Hero />
      <UpcomingTrips upcomingTrips={upcomingTrips} />
      <InternationalTrips internationalTrips={internationalTrips} />
      <Testimonials />
    </div>
  );
};
