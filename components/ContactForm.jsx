import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default ({setFormSubmitted}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tripName, setTripName] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getUrlParameter = (name) => {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get(name) || "";
    };

    const urlFirstName = getUrlParameter("firstName");
    const urlLastName = getUrlParameter("lastName");
    const urlEmail = getUrlParameter("email");
    const urlTripName = getUrlParameter("tripName");

    if (urlFirstName) {
      setFirstName(urlFirstName);
    }

    if (urlLastName) {
      setLastName(urlLastName);
    }

    if (urlEmail) {
      setEmail(urlEmail);
    }

    if (urlTripName) {
      setTripName(urlTripName);
    }
  }, []);

  useEffect(() => {
    const queryString = `?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&tripName=${encodeURIComponent(tripName)}`;
    window.history.replaceState({}, "", queryString);

  }, [firstName, lastName, email, tripName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("ContactFormSubmitted", true);
    setFormSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-6 text-lg font-medium">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-lg font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-lg font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-lg font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-lg font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-lg font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-lg font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="TripName"
          id="TripName"
          className="block py-2.5 px-0 w-full text-lg font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        />
        <label
          htmlFor="TripName"
          className="peer-focus:font-medium absolute text-lg font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Trip Name
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
