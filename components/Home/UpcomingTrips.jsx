import Card from "./Card";
import Heading from "../Heading";

export default ({upcomingTrips}) => {
  return (
    <div className=" px-8 md:px-16 " id="upcomingTrips">
      <Heading>Upcoming Trips</Heading>
      <div className="flex flex-wrap gap-4 items-center my-12">
      {upcomingTrips && upcomingTrips.map((item) => {
          return <Card key={item._id} trip={item} id={item._id} />;
        })}
      </div>
    </div>
  );
};
