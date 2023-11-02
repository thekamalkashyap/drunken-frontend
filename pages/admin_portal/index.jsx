import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      router.push("/admin_portal/dashboard");
    }
    // Function to parse URL parameters
    const getUrlParameter = (name) => {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get(name) || "";
    };

    // Get email from URL and set state
    const urlEmail = getUrlParameter("email");
    if (urlEmail) {
      setEmail(urlEmail);
    }

    // Get password from URL and set state
    const urlPassword = getUrlParameter("password");
    if (urlPassword) {
      setPassword(urlPassword);
    }
  }, []);

  useEffect(() => {
    // Update the URL with the email value
    const queryString = email ? `?email=${encodeURIComponent(email)}` : "";
    window.history.replaceState({}, "", queryString);

  }, [email]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a request to the server for authentication
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
  
        const data = await response.json();
        if(data.success){
            localStorage.setItem("authToken", data.authToken);
            router.push('/admin_portal/dashboard');
        }
        else{
            setLoginFailed(true);
        }
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };
  

  return (
    <div className="h-full w-[100vw] flex items-center flex-col gap-12 justify-start px-16 my-24">
        <div className="text-6xl">Admin Portal</div>
      <form className="w-1/2" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group text-black">
        <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={email}
            onChange={handleEmailChange}
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 font-medium border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
        <input
            type="password"
            name="floating_password"
            id="floating_password"
            value={password}
            onChange={handlePasswordChange}
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className={`text-red-600 mb-4 ${loginFailed ? "block":"hidden"}`}>
            &#9888; Invalid Details
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
