import Card from "./Card";
import Heading from "../Heading";

export default () => {
  return (
    <div className=" px-8 md:px-16">
      <Heading>International Trips</Heading>
      <div className="flex flex-wrap gap-4 justify-around lg:justify-between items-center my-12">
        <Card trip={null} />
        <Card trip={null} />
        <Card trip={null} />
      </div>
    </div>
  );
};
