import Card from "./Card";
import Heading from "../Heading";

export default () => {
  return (
    <div className="px-16">
      <Heading>Upcoming Trips</Heading>
      <div className="flex justify-between items-center my-12">
        <Card trip={null} />
        <Card trip={null} />
        <Card trip={null} />
      </div>
    </div>
  );
};
