import React from "react";
import VisitedButton from "../components/VisitedButton";
import SecurityCharter from "../components/SecurityCharter";

function OurServices() {
  return (
    <div>
      <div className="">
        <h1 className="text-center mt-6 md:mt-18 text-4xl md:text-6xl z-0 mb-2">
          OUR AGENCIES
        </h1>
        <div className="border-l-red-200 font-semibold ">
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            <div className="w-80 border border-black rounded-lg shadow-md border-b-2 m-2">
              <div className="border-b-2">
                <h2 className="text-center text-3xl">PARIS</h2>
              </div>
              <h4 className="pt-2 pl-2 bold text-xl text-center mt-3">
                Our agency of Paris welcomes you !
              </h4>
              <p className="pt-2 pl-2 text-sm my-3">
                {" "}
                This agency is the most important agency of our company. We
                propose a lot of cars and a perfect service for our customers.
                If you use our services, you will be well received and you will
                have good prices. Maybe you will be received by Ryan and if he
                is in a good mood, you will pass a very good moment !{" "}
              </p>
              <div className="flex justify-center">
                <VisitedButton />
              </div>
            </div>{" "}
            <div className="w-80 border border-black rounded-lg shadow-md m-2">
              <div className="border-b-2">
                <h2 className="text-center text-3xl">LILLE</h2>
              </div>
              <h4 className="pt-2 pl-2 bold text-xl text-center mt-3">
                Our agency of Lille welcomes you !
              </h4>
              <p className="pt-2 pl-2 text-sm my-3">
                {" "}
                This agency is a very good agency of our company. We propose a
                lot of cars and a perfect service for our customers. If you use
                our services, you will be well received and you will have good
                prices. Maybe you will be received by Javier and if he is in a
                good mood, you will pass a very good moment !{" "}
              </p>
              <div className="flex justify-center">
                <VisitedButton />
              </div>
            </div>{" "}
            <div className="w-80 border border-black rounded-lg shadow-md m-2">
              <div className="border-b-2">
                <h2 className="text-center text-3xl">LYON</h2>
              </div>
              <h4 className="pt-2 pl-2 bold text-xl text-center mt-3">
                Our agency of Lyon welcomes you !
              </h4>
              <p className="pt-2 pl-2 text-sm my-3">
                {" "}
                This agency is a very good agency of our company. We propose a
                lot of cars and a perfect service for our customers. If you use
                our services, you will be well received and you will have good
                prices. Maybe you will be received by Doroteya and if he is in a
                good mood, you will pass a very good moment !{" "}
              </p>
              <div className="flex justify-center">
                <VisitedButton />
              </div>
            </div>
            <div className="w-80 border border-black rounded-lg shadow-md m-2">
              <div className="border-b-2">
                <h2 className="text-center text-3xl">BORDEAUX</h2>
              </div>
              <h4 className="pt-2 pl-2 bold text-xl text-center mt-3">
                Our agency of Bordeaux welcomes you !
              </h4>
              <p className="pt-2 pl-2 text-sm my-3">
                {" "}
                This agency is a very good agency of our company. We propose a
                lot of cars and a perfect service for our customers. If you use
                our services, you will be well received and you will have good
                prices. Maybe you will be received by Matthieu and if he is in a
                good mood, you will pass a very good moment !{" "}
              </p>
              <div className="flex justify-center">
                <VisitedButton />
              </div>
            </div>
            <div className="w-80 border border-black rounded-lg shadow-md m-2">
              <div className="border-b-2">
                <h2 className="text-center text-3xl">MONACO</h2>
              </div>
              <h4 className="pt-2 pl-2 bold text-xl text-center mt-3">
                Our agency of Monaco welcomes you !
              </h4>
              <p className="pt-2 pl-2 text-sm my-3">
                {" "}
                This agency is a very good agency of our company. We propose a
                lot of cars and a perfect service for our customers. If you use
                our services, you will be well received and you will have good
                prices. Maybe you will be received by Chloé and if he is in a
                good mood, you will pass a very good moment !{" "}
              </p>
              <div className="flex justify-center">
                <VisitedButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-8 md:mt-16 text-4xl md:text-6xl z-0 mb-2">
        SECURITY CHARTER
      </h1>
      <SecurityCharter />
    </div>
  );
}

export default OurServices;
