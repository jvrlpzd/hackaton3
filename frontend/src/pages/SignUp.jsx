import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../context/userContext";

function SignUp() {
  const { setUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    license: "",
  });

  const onChange = (e) => {
    // Je reprends le "credentials" soit l'ancien état du state et je vais lui demander de fusionner [e.target.name] qui va désormais contenir e.target.value.
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(credentials);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    // Je vérifie que les champs ci-dessous contiennent au moins un caractère afin de passer au fetch
    if (
      credentials.firstname &&
      credentials.lastname &&
      credentials.email &&
      credentials.password &&
      credentials.license
    ) {
      console.warn(setUser);
      // On appelle le back. Si tous les middleware placé sur la route ci-dessous, je pourrais être renvoyé à la route login
      fetch("http://localhost:5000/api/register", requestOptions)
        .then((response) => response.text())
        .then(() => {
          navigate("/login");
        })

        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl ring-2 ring-[#15133C] lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center underline uppercase">
          SIGN UP
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Firstname
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={credentials.firstname}
              // En passant dans le onChange, je vais déclencher la mutation : fusionner l'ancien état avec le nouveau.
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#15133C] focus:ring-[#15133C] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Lastname
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={credentials.lastname}
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#15133C] focus:ring-[#15133C] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#15133C] focus:ring-[#15133C] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#15133C] focus:ring-[#15133C] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={credentials.phone}
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#15133C] focus:ring-[#15133C] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              License Number
            </label>
            <input
              type="text"
              name="license"
              placeholder="License Number"
              value={credentials.license}
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#15133C] focus:ring-[#15133C] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#15133C] rounded-md hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
            >
              Register
            </button>
          </div>
        </form>
        <div>{errorMessage}</div>

        <Link to="/login" className="">
          <p className="flex justify-center italic text-gray-400 underline text-base mt-6">
            Already have an account ? Sign in here !
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
