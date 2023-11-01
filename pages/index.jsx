import {
  Hero,
  UpcomingTrips,
  InternationalTrips,
  Testimonials,
} from "@/components/Home";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => {
  const [upcomingTrips, setupcomingTrips] = useState(null);
  const [internationalTrips, setInternationalTrips] = useState([]);

  // Fetching trips from backend
  const fetchTrip = async () => {
    try {
      const response = await fetch(
        `http://13.200.33.190/api/trips/getAllTrips`
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
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Hero />
      <UpcomingTrips upcomingTrips={upcomingTrips} />
      <InternationalTrips internationalTrips={internationalTrips} />
      <Testimonials />
    </div>
  );
};
