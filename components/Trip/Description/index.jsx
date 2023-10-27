import Heading from "../../Heading";

export default () => {
  return (
    <div className="flex gap-6 flex-col px-8 md:px-16">
      <Heading>About the Tour</Heading>
      <div className="text-2xl">
        <p>
          Goa is a small coastal state and home to alluring beaches, buzzing
          nightlife, and delicious foods. Every year, thousands of tourists
          visit Goa to keep their minds completely relaxed, content, and
          jubilant. Located on the West Coast of India, Goa offers endless
          stretches of white sand, palm bordered beaches, brightly painted
          houses, and Portuguese Heritage.
        </p>
        <p>
          Vacation in Goa is a mesmerizing experience and our Goa itinerary for
          4 nights and 5 days will take you through North Goa and South Goa. Be
          it sightseeing tours, adventure activities, luxury accommodations,
          temples, or shopping, this itinerary covers it all and thus this tour
          is an excuse to make countless memories with your friends and family.
        </p>
      </div>
      <div className="join join-vertical my-12 w-full">
        <div className="collapse py-2 collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <Heading className=" mt-0">
              Click to open this one and close others
            </Heading>
          </div>
          <div className="collapse-content mt-2 text-2xl">
            <p>
              hello Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio explicabo omnis placeat. Dolor rem repudiandae saepe,
              totam dignissimos similique commodi assumenda magnam architecto,
              non numquam rerum ex quia eum odit.
            </p>
          </div>
        </div>
        <div className="collapse py-2 collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            <Heading className=" mt-0">
              Click to open this one and close others
            </Heading>
          </div>
          <div className="collapse-content mt-2 text-2xl">
            <p>
              hello Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio explicabo omnis placeat. Dolor rem repudiandae saepe,
              totam dignissimos similique commodi assumenda magnam architecto,
              non numquam rerum ex quia eum odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
