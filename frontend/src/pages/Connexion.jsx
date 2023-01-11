import React, { useState } from "react";
import cadenas from "../assets/AuthentificationPage/cadenas.png";
import mail from "../assets/AuthentificationPage/email.png";

function Connexion() {
  /* set email and password */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /* submit mail and password, post to back and get the result
  if ok -> navigate to dashboard
  */

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center justify-center  "
      >
        <h1 className=" items-center content-center justify-center text-3xl mb-16 md:mb-24 mt-44">
          CONNECTEZ-VOUS
        </h1>

        <div className=" flex md:w-3/5 justify-center ">
          <label htmlFor="email" name="email">
            <img src={mail} alt="arobase" className="w-14 h-14 mr-2" />
          </label>
          <input
            type="email"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            placeholder="Entrez votre addresse email"
            required
            value={email}
            onChange={handleChangeEmail}
            id="email"
            name="email"
            className="bg-gray-200 text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <p className="italic text-gray-400 underline mb-4 ml-28 md:ml-80 text-xs md:text-sm md:mb-16">
          Adresse e-mail oubliée ?
        </p>

        <div className="flex  justify-center md:w-3/5">
          <label htmlFor="password" name="password">
            <img src={cadenas} alt="locker" className="w-14 h-14 ml-1" />{" "}
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={handleChangePassword}
            id="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            className="bg-gray-200  text-gray-600 py-2 px-4 border rounded-2xl md:w-3/5 h-10 w-56 md:h-14"
          />
        </div>
        <p className="italic text-gray-400 underline mb-4 ml-28 md:ml-80 text-xs md:text-sm md:mb-16">
          Mot de passe oublié ?
        </p>
        <button
          type="submit"
          className="bg-[#15133C] mt-10 md:mt-2 text-white m-3 py-1 px-4 rounded-lg shadow-lg h-10 w-32 md:h-14 md:w-44 md:text-lg hover:shadow hover:bg-[#FFFFFF] hover:text-[#15133C] hover:border hover:border-[#15133C]"
        >
          Connexion
        </button>
      </form>
    </div>
  );
}

export default Connexion;
