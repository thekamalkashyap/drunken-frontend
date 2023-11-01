import Card from "./Card";
import Heading from "../Heading";

export default ({ internationalTrips }) => {
  return (
    <div className=" px-8 md:px-16" id="internationalTrips">
      <Heading>International Trips</Heading>
      <div className="flex flex-wrap gap-4 my-12">
        {internationalTrips?.length === 0 ? (
          <div className="font-bold text-2xl ml-16 text-blue-400">
            Trips Not Available
          </div>
        ) : (
          <>
            {internationalTrips &&
              internationalTrips.map((item) => {
                return <Card key={item._id} trip={item} id={item._id} />;
              })}
          </>
        )}
      </div>
    </div>
  );
};
