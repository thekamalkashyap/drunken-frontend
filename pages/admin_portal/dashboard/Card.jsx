import cn from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ trip, className, id }) {
  const router = useRouter();
  const confirmDelete = () => {
    return window.confirm("Are you sure you want to delete this trip?");
  };

  const handleDeleteTrip = async (event) => {
    event.preventDefault();

    if (!confirmDelete()) {
      return;
    }

    try {
      // Make a request to the server for authentication
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/trips/deleteTrip/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authToken: localStorage.getItem("authToken"),
          },
        }
      );

      if (response.ok) {
        router.reload();
      } else {
        const errorMessage = await response.text();
        throw new Error(`Failed to delete trip: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };

  return (
    <div>
      <div
        style={{
          "backgroundImage": `linear-gradient(to bottom, rgba(00, 00, 00, 0), rgba(0, 0, 0, 0.8)), url(${
            "n"
              ? "/Home/kashmir.png"
              : "http://13.200.33.190/uploads/1698587547296_manalicPic.png"
          })`,
        }}
        className={cn(
          `flex text-white flex-col justify-end p-8 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl bg-no-repeat bg-cover`,
          className
        )}
      >
        <div className="text-xl mb-4 flex gap-4">
          <Link href={`/trip/${id}`}>
            <img
              src="https://static.thenounproject.com/png/5102783-200.png"
              alt="Not Found"
              className="h-8 w-8 invert hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link href={`/trip/update/${id}`}>
            <img
              src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png"
              alt="Not Found"
              className="h-8 w-8 invert hover:scale-110 transition-all duration-300"
            />
          </Link>
          <button onClick={handleDeleteTrip}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
              alt="Not Found"
              className="h-8 w-8 invert hover:scale-110 transition-all duration-300"
            />
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex items-center gap-2">
            <figure>
              <img src="/Home/clockw.png" alt="clock" />
            </figure>
            <span>{trip?.duration}</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <figure>
              <img src="/Home/locationw.png" alt="clock" />
            </figure>
            <span>{trip?.title}</span>
          </div>
        </div>
        <div className="flex mb-1">
          <span className="mr-2">Starts at</span>
          <span>₹{trip?.price}/-</span>
        </div>
        <div className="flex gap-2">
          <figure>
            <img src="/Home/calendarw.png" alt="" />
          </figure>
          <span>{trip?.startsAt}</span>
        </div>
      </div>
    </div>
  );
}
