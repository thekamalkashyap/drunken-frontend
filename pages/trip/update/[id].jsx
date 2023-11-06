import { UpdateTrips } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const id = router.query.id;
  const [currentTrip, setCurrentTrip] = useState();

  const fetchTrip = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/trips/getTrip/${id}`
    );
    const data = await response.json();
    setCurrentTrip(data);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
    }
  }, []);

  useEffect(() => {
    if (id && !currentTrip) {
      fetchTrip();
    }
  }, [id, currentTrip]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      router.push("/invalid_access");
    }
  }, []);

  return (
    <div className={`h-full w-full p-8`}>
      <UpdateTrips currentTrip={currentTrip} />
    </div>
  );
};

export default Page;
