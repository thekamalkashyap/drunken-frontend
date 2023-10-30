import { ContactForm } from "@/components";

export default () => {
  return (
    <div className="flex items-center justify-center flex-col p-6 md:p-10 lg:p-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="flex-[3]">
          <div className="text-6xl font-medium h-full w-full my-8 md:my-16 text-black">
            Get Your Booking Done.
          </div>
          <div className="h-full w-full">
            <ContactForm />
          </div>
        </div>
        <div className="w-full flex-[2] flex items-center justify-center h-full">
          <figure className="">
            <img src="/logo.png" alt="Drunken Roads" className=" w-[45vw]" />
          </figure>
        </div>
      </div>
      <div className="md:text-3xl text-2xl text-center my-8 text-gray-600">
        Note: A Confirmation Ticket with Itinerary will be send to your Email
        ID.
      </div>
    </div>
  );
};
