import React, { useState } from "react";
import upload from "../assets/upload.png";

function MyProfile() {
  /*   const [defaultImage, setDefaultImage] = useState(profilepic);
   */ const [uploadedImage, setUploadedImage] = useState(null);
  const [image, setImage] = useState(null);
  /*   const [fileName, setFileName] = useState("");
   */
  const handleImageChange = (event) => {
    setUploadedImage(event.target.files[0]);
    setImage(
      event.target.files[0]
    ); /*  setDefaultImage(event.target.files[0]); */
    /*     setFileName(event.target.files[0].name);
     */
  };

  const [input1, setInput1] = useState("Firstname");
  const [input2, setInput2] = useState("Lastname");
  const [input3, setInput3] = useState("Phone");
  const [input4, setInput4] = useState("License");
  const [input5, setInput5] = useState("Email");
  const [input6, setInput6] = useState("Password");

  const [inputcontent, setInputcontent] = useState("");

  const handleInput1 = (event) => {
    if (event.key === "Enter") {
      setInput1(inputcontent);
    }
  };
  const handleInput2 = (event) => {
    if (event.key === "Enter") {
      setInput2(inputcontent);
    }
  };
  const handleInput3 = (event) => {
    if (event.key === "Enter") {
      setInput3(inputcontent);
    }
  };
  const handleInput4 = (event) => {
    if (event.key === "Enter") {
      setInput4(inputcontent);
    }
  };
  const handleInput5 = (event) => {
    if (event.key === "Enter") {
      setInput5(inputcontent);
    }
  };
  const handleInput6 = (event) => {
    if (event.key === "Enter") {
      setInput6(inputcontent);
    }
  };

  return (
    <div className="my-6">
      <div className="mt-4 flex justify-center flex-col z-1">
        <h1 className="flex w-full justify-center items-center text-bold text-xl text-black my-8 h-10 md:text-2xl text-center md:h-14 md:text-center ">
          Modify your informations
        </h1>
        <div className="flex justify-center">
          {!uploadedImage && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8HE9nJ03LBSlHivqF46xHQ640tNgo-9nnFrUMANrL3tf4lOHdDeNzjLZurWNUf3oIt8&usqp=CAU"
              alt=""
              className="object-fit w-36  h-36 border rounded-full"
            />
          )}
          {uploadedImage && (
            <div className="">
              <img
                src={URL.createObjectURL(image)}
                className="object-fit border w-36  rounded-full"
                alt="Uploaded"
              />
            </div>
          )}
          <div className="mt-32">
            <label htmlFor="image-upload" className=" ">
              <img
                src={upload}
                alt="Upload Icon"
                className="absolute w-7 h-7 cursor-pointer"
              />
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
      </div>
      <form>
        <ul className="flex-col mt-12">
          <li className=" mx-10 md:mx-48 mb-4 md:mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {inputcontent === 0 ? "Firstname" : input1}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="Firstname"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput1}
              />
            </div>
          </li>
          <li className=" mx-10 md:mx-48 mb-4 md:mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center">
              {inputcontent === 0 ? "Lastname" : input2}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="Lastname"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput2}
              />
            </div>
          </li>
          <li className=" mx-10 md:mx-48 mb-4 md:mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl p-2 bg-white  rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center ">
              {inputcontent === 0 ? "Téléphone" : input3}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="06-62-02-02-02"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput3}
              />
            </div>
          </li>
          <li className=" mx-10 md:mx-48 mb-4 md:mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl p-2 bg-white  rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center ">
              {inputcontent === 0 ? "License" : input4}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="F4FR00000000000000000"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput4}
              />
            </div>
          </li>
          <li className=" mx-10 md:mx-48 mb-4 md:mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center ">
              {inputcontent === 0 ? "Email" : input5}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="example@mail.com"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput5}
              />
            </div>
          </li>
          <li className=" mx-10 md:mx-48 mb-4 md:mb-10 my-3 md:m-6 border shadow-xl rounded-lg text-center">
            {" "}
            <label className="text-xl p-2 bg-white rounded-tl-lg rounded-tr-lg h-10 flex justify-start items-center ">
              {inputcontent === 0 ? "Password" : input6}
            </label>{" "}
            <div className="w-full flex justify-end items-center relative">
              <input
                placeholder="Enter a new password"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
                onChange={(event) => setInputcontent(event.target.value)}
                onKeyDown={handleInput6}
              />
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default MyProfile;
