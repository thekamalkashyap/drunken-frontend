import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function UploadTrips({ currentTrip }) {
  // State to manage form values
  const [input, setInput] = useState("");
  const [files, setFiles] = useState([]);
  const router = useRouter();
  const Tripid = router.query.id;
  const [tripUpdated, setTripUpdated] = useState(false);
  const [tripFailed, setTripFailed] = useState(false);
  const [accordion, setAccordion] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    aboutTour: "",
    inclusions: "",
    exclusions: "",
    price: "",
    duration: "",
    startsAt: "",
    category: "",
    destination: "",
    roadmap: [],
    images: [],
    itinerary: "",
  });

  const handleDeleteAccordion = (index) => {
    const updatedAccordion = [...accordion];
    updatedAccordion.splice(index, 1);
    setAccordion(updatedAccordion);
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
  }

  useEffect(() => {
    setFormValues((prevValues) => ({ ...prevValues, roadmap: accordion }));
  }, [accordion]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    if (files.length != 0) {
      for (const file of files) {
        formData.append("files", file);
      }
    }

    try {
      const fileResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (fileResponse.ok) {
        const { imagePaths } = await fileResponse.json();
        const imageUrls = [...formValues.images, ...imagePaths];

        const jsonData = {
          title: formValues.title,
          aboutTour: formValues.aboutTour,
          inclusions: formValues.inclusions,
          exclusions: formValues.exclusions,
          price: formValues.price,
          duration: formValues.duration,
          startsAt: formValues.startsAt,
          category: formValues.category,
          destination: formValues.destination,
          roadmap: formValues.roadmap,
          images: imageUrls,
          itinerary: formValues.itinerary,
        };

        // Make a request to the server for authentication
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/api/trips/updateTrip/${Tripid}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authToken: localStorage.getItem("authToken"),
            },
            body: stringify(jsonData),
          }
        );
        if (response.ok) {
          router.push("/admin_portal/dashboard?activeTab=2");
        } else {
          const errorMessage = await response.text();
          throw new Error(`Failed to delete trip: ${errorMessage}`);
        }
      }
    } catch (error) {
      setTripFailed(true);
      console.error("Error during authentication", error);
    }
  };

  useEffect(() => {
    setFormValues({
      title: currentTrip?.title,
      aboutTour: currentTrip?.aboutTour,
      inclusions: currentTrip?.inclusions,
      exclusions: currentTrip?.exclusions,
      price: currentTrip?.price,
      duration: currentTrip?.duration,
      startsAt: currentTrip?.startsAt,
      category: currentTrip?.category,
      destination: currentTrip?.destination,
      roadmap: currentTrip?.roadmap,
      images: currentTrip?.images,
      itinerary: currentTrip?.itinerary,
    });
    setAccordion(currentTrip?.roadmap);
  }, [currentTrip]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1
          className={`text-green-600 text-4xl mb-8 ${
            tripUpdated ? "block" : "hidden"
          }`}
        >
          Trip Updated
        </h1>
        <h1
          className={`text-red-600 text-4xl mb-8 ${
            tripFailed ? "block" : "hidden"
          }`}
        >
          Something went wrong
        </h1>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formValues.title || ""}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            type="text"
            name="aboutTour"
            id="aboutTour"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formValues.aboutTour || ""}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="aboutTour"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            About Tour
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            type="text"
            name="inclusions"
            id="inclusions"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formValues.inclusions || ""}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="inclusions"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Inclusions
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            type="text"
            name="exclusions"
            id="exclusions"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={formValues.exclusions || ""}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="exclusions"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Exclusion
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formValues.price || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="destination"
              id="destination"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formValues.destination || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="destination"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              destination
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="duration"
              id="duration"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formValues.duration || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="duration"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Duration
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="startsAt"
              id="startsAt"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formValues.startsAt || ""}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="startsAt"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Starts At
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 mb-4">
          <div className="relative z-0 w-full mb-6 group bg-white top-4">
            <label htmlFor="category">Category :</label>
            <select
              id="category"
              name="category"
              className="bg-white ml-4 "
              value={formValues.category || ""}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="upcomingTrip">Upcoming Trips</option>
              <option value="internationalTrip">International Trips</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="file"
              name="images"
              id="images"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setFiles([...e.target.files])}
              multiple
            />
            <label
              htmlFor="images"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Upload Images
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6 mb-4">
          {formValues?.images?.map((imagePath, index) => (
            <div
              className="relative  p-2 w-auto flex items-center justify-center"
              key={index}
            >
              <div
                className="absolute top-0 right-0 text-black text-lg cursor-pointer rounded-full border-black"
                onClick={() => {
                  const updatedFiles = formValues?.images.filter(
                    (_, i) => i !== index
                  );
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    images: updatedFiles,
                  }));
                }}
              >
                &#10060;
              </div>
              <img
                className="h-72  rounded-3xl"
                src={`${process.env.NEXT_PUBLIC_API_HOST}${imagePath}`}
                alt="test"
              />
            </div>
          ))}
          {files.map((file, index) => (
            <div
              className="relative  p-2 w-auto flex items-center justify-center"
              key={index}
            >
              <div
                className="absolute top-0 right-0 text-black text-lg cursor-pointer rounded-full border-black"
                onClick={() => {
                  const updatedFiles = files.filter((_, i) => i !== index);
                  setFiles(updatedFiles);
                }}
              >
                &#10060;
              </div>
              <img
                className="h-72 object-contain rounded-3xl"
                src={URL.createObjectURL(file)}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {accordion?.map((ele, ind) => (
          <div
            className="collapse collapse-plus text-black border-2 mb-4"
            key={ind}
          >
            <input type="radio" name="my-accordion-3" defaultChecked />

            <div className="collapse-title text-xl font-medium">
              Day {ind + 1}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDeleteAccordion(ind);
              }}
              className=" text-sm border-2 px-2 ml-4 mb-4 rounded-lg border-red-800 text-red-700 w-16 "
            >
              Delete
            </button>
            <div className="collapse-content">
              <p>{ele}</p>
            </div>
          </div>
        ))}

        <div className="relative flex gap-8 z-0 w-full mb-6 group">
          <textarea
            type="text"
            name="dayInfo"
            id="dayInfo"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={input}
            placeholder=" "
            onChange={(e) => setInput(e.target.value)}
          />
          <label
            htmlFor="dayInfo"
            className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Day {accordion?.length + 1}
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setAccordion([...accordion, input]);
              setInput("");
            }}
            className=" text-xl px-2 my-4 border-2 rounded-lg border-black "
          >
            +
          </button>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update Trip
        </button>
      </form>
    </div>
  );
}
