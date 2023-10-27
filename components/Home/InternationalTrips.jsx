import Card from "./Card";
import Heading from "../Heading";
import {useEffect} from "react";

export default ({internationalTrips}) => {
  useEffect(() => {
    console.log(internationalTrips)
  }, [internationalTrips])
  
  
  return (
    <div className=" px-8 md:px-16">
      <Heading>International Trips</Heading>
      <div className="flex flex-wrap gap-4 my-12">
      {internationalTrips && internationalTrips.map((item) => {
          return <Card key={item._id} trip={item} id={item._id} />;
        })}
      </div>
    </div>
  );
};
