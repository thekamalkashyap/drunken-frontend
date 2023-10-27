import { ContactForm } from "@/components";

export default () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col mx-16">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full">
          <div className="text-6xl font-medium h-full w-full my-16 text-black">
            Get Your Booking Done.
          </div>
          <div className="h-full w-full">
            <ContactForm />
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-full">
          <figure className="">
            <img src="/logo.png" alt="Drunken Roads" className=" " />
          </figure>
        </div>
      </div>
      <div className="text-3xl my-8 text-gray-600">
        Note: A Confirmation Ticket with Itinerary will be send to your Email
        ID.
      </div>
    </div>
  );
};
