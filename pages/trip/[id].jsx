import { Hero, Description } from "@/components/Trip";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const id = router.query.id;
  const [currentTrip, setCurrentTrip] = useState();

  const fetchTrip = async () => {
    const response = await fetch(`http://localhost:5000/api/trips/getTrip/${id}`);
    const data = await response.json();
    setCurrentTrip(data);
  };

  useEffect(() => {
    if (id && !currentTrip) {
      fetchTrip();
    }
  }, [id, currentTrip]);

  return (
    <>
      <Hero currentTrip={currentTrip}/>
      <Description currentTrip={currentTrip} />
    </>
  );
};

export default Page;
