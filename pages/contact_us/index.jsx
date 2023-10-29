import { ContactForm } from "@/components";
import { useState, useEffect } from "react";

export default () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("ContactFormSubmitted")) {
      setFormSubmitted(true);
    }
  }, []);
  return (
    <div className="w-full h-[70vh] flex items-center justify-center flex-col mx-16">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full">
          <div className="text-6xl font-medium h-full w-full my-16 text-black">
            {!formSubmitted && " Get Your Booking Done."}
          </div>
          <div className="h-full w-full">
            {formSubmitted ? (
              <div className="text-5xl text-green-500 font-semibold flex items-center flex-col">
                <span>✓ Response Submitted</span>
                <p className="text-xl">Our team will contact you soon.</p>
                <button onClick={()=>{
                  localStorage.removeItem("ContactFormSubmitted");
                  setFormSubmitted(false);
                }} className="text-xl mt-4 text-black rounded-xl border-2 px-4 py-1 cursor-pointer hover:text-white hover:border-white hover:bg-black transition-all duration-200 border-black">Refill Form</button>
              </div>
            ) : (
              <ContactForm setFormSubmitted={setFormSubmitted} />
            )}
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
