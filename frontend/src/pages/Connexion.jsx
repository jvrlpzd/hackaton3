import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cadenas from "../assets/AuthentificationPage/cadenas.png";
import mail from "../assets/AuthentificationPage/email.png";
import { useCurrentUserContext } from "../context/userContext";

function Connexion() {
  const { setUser, setToken } = useCurrentUserContext();
  /* set email and password */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    /* submit mail and password, post to back and get the result
  if ok -> navigate to the home page
  */
    if (email && password) {
      console.warn(setUser);
      // on appelle le back
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((response) => {
          // Si la réponse est un statut 401 : ça déclenche une erreur sinon ça renvoit la réponse au format JSON
          if (response.status === 401) {
            throw new Error("User incorrect");
          } else return response.json();
        })
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
          navigate(
            result.user.role === "admin" || result.user.role === "mecano"
              ? "/adminhome"
              : "/"
          );
        })

        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center  "
      >
        <h1 className=" items-center content-center justify-center text-3xl mb-16 md:mb-24 mt-44">
          SIGN IN
        </h1>
        <div className=" flex md:w-3/5 justify-center ">
          <label htmlFor="email" name="email">
            <img src={mail} alt="arobase" className="w-14 h-14 mr-2" />
          </label>
          <input
            type="email"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            className="bg-gray-200 text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <p className="italic text-gray-400 underline mb-4 ml-28 md:ml-80 text-xs md:text-sm md:mb-16">
          Forget your email ?
        </p>
        <div className="flex  justify-center md:w-3/5">
          <label htmlFor="password" name="password">
            <img src={cadenas} alt="locker" className="w-14 h-14 ml-1" />{" "}
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Enter your password"
            className="bg-gray-200  text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <p className="italic text-gray-400 underline mb-4 ml-28 md:ml-80 text-xs md:text-sm md:mb-16">
          Forget your password ?
        </p>
        <button
          type="submit"
          className="bg-[#15133C] mt-10 md:mt-2 text-white m-3 py-1 px-4 rounded-lg shadow-lg h-10 w-32 md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
        >
          Connexion
        </button>
        <Link to="/signup" className="flex items-center">
          <p className="flex justify-center italic text-gray-400 underline text-base mt-6">
            You don't have an account ? Register here !
          </p>
        </Link>
      </form>
      <div>{errorMessage}</div>
    </div>
  );
}

export default Connexion;
