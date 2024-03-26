import { useState } from "react";
import { useForm } from "react-hook-form";
import jwt from "jsonwebtoken";
import "./App.css";

function App() {
  const post_url =
    "https://script.google.com/macros/s/AKfycbyF09O6KzK-iWxT7s7C45Q5YzRqhMPRz-HGhfi5DB0YOYQSyPlqt5_rjLNyn06EvgMn2Q/exec";

  const [jwtToken, setJwtToken] = useState("gola");

  function createToken(payload) {
    // Check if payload is provided
    if (!payload || typeof payload !== "object") {
      throw new Error("Payload must be a non-empty object");
    }
    console.log(payload)
    // Convert payload to JSON string
    const payloadString = JSON.stringify(payload);

    // Encode payload to base64
    const encodedPayload = Buffer.from(payloadString).toString("base64");

    // Create a timestamp for expiration (1 hour from now)
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);

    // Create token object
    const token = {
      payload: encodedPayload,
      expiration: expiration.toISOString(),
    };

    return encodedPayload;
  }

  const onSubmit = (e) => {
    const form = document.getElementById("post_form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const scriptURL = post_url;
      const formData = new FormData(form);

      let token = createToken(formData);
      setJwtToken(token);
      // Add JWT token field
      formData.append("token", token);
      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });
  };

  return (
    <>
      <div className="h-[600px] flex">
        <div
          className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
        >
          <div
            className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-4xl font-sans">
              Card App
            </h1>
            <p className="text-white mt-1">The simplest app to use</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href="#"
                className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form id="post_form" className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Send Your Card Seggesions
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8">
                Type Correct Details
              </p>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <input
                  id="name"
                  className=" pl-2 w-full outline-none border-none"
                  type="name"
                  name="name"
                  placeholder="name"
                />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                />
              </div>
              <button
                onClick={onSubmit}
                type="submit"
                className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Login
              </button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Forgot Password ?
                </span>

                <a
                  href="#"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  Don't have an account yet?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
