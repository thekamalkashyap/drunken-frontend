import Card from "./Card";
import Heading from "../Heading";

export default ({ upcomingTrips }) => {
  return (
    <div className=" px-8 md:px-16 " id="upcomingTrips">
      <Heading>Upcoming Trips</Heading>
      <div className="flex justify-center sm:justify-start flex-wrap gap-4 items-center my-12">
        {upcomingTrips?.length === 0 ? (
          <div className="font-bold text-2xl ml-16 text-blue-400">
            Trips Not Available
          </div>
        ) : (
          <>
            {upcomingTrips &&
              upcomingTrips.map((item) => {
                return <Card key={item._id} trip={item} id={item._id} />;
              })}
          </>
        )}
      </div>
    </div>
  );
};
