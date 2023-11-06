import Heading from "../../Heading";

export default ({ currentTrip }) => {
  console.log(currentTrip);
  console.log(currentTrip?.roadmap);
  console.log(currentTrip?.roadmap.length);
  return (
    <div className="flex gap-6 flex-col px-8 md:px-16">
      <Heading>About the Tour</Heading>
      <div className="text-2xl flex flex-col gap-8">
        <p className="whitespace-pre-wrap">{currentTrip?.aboutTour}</p>
      </div>
      <div
        className={`join join-vertical ${
          currentTrip?.roadmap.length != 0 ? "my-12" : ""
        } w-full`}
      >
        {currentTrip?.roadmap.map((section, index) => {
          return (
            <div
              className="collapse py-2 collapse-arrow join-item border border-base-300"
              key={index}
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-sm font-medium">
                <Heading className="mt-0">Day {index + 1}</Heading>
              </div>
              <div className="collapse-content mt-2 text-xl">
                <p>{section}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <div className="collapse-title text-xl font-medium w-full">
          <Heading className="mb-10">Inclusions</Heading>
          <p className="whitespace-pre-wrap mt-4 w-full">
            {currentTrip?.inclusions}
          </p>
        </div>
        <div className="collapse-title mb-10 text-xl font-medium w-full">
          <Heading className="my-8">Exclusions</Heading>
          <p className="whitespace-pre-wrap mt-4 w-full">
            {currentTrip?.exclusions}
          </p>
        </div>
      </div>
    </div>
  );
};
