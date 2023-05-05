import React from "react";
import { PlantsData } from "../data/PlantsData";
import water from "../assets/images/drop.svg";
import light from "../assets/images/sun.svg";

const Card = () => {
  return (
    <>
      <div className="bg-green-50 bg-opacity-60 shadow-2xl flex md:flex-row flex-col items-center justify-center md:items-start md:px-4 md:py-2 p-0.5 flex-wrap gap-5 rounded-lg">
        {PlantsData.map((data, id) => {
          return (
            <div
              key={id}
              className="border border-green-400 shadow-xl rounded-lg md:w-80 w-full bg-white"
            >
              <p className="text-3xl text-bold text-center py-4 font-caveat">
                {data.name}
              </p>
              <img src={data.image} alt="" className="w-full" />
              <div className="flex justify-center mt-4">
                <div className="flex items-center px-4">
                  <img src={water} alt="" className="w-6" /> -{" "}
                  <img src={data.water} alt="" className="w-6" />{" "}
                </div>
                <div className="flex items-center px-4">
                  <img src={light} alt="" className="w-6" /> -{" "}
                  <img src={data.light} alt="" className="w-6" />
                </div>
              </div>
              <p className="indent-4 text-justify px-4 mt-4 text-sm md:text-base">
                {data.description}
              </p>
              <div
                className={` text-center py-1 border-2 rounded-lg  m-0.5 mt-4  ${
                  data.category === "Flor"
                    ? "border-rose-600 bg-rose-100"
                    : data.category === "Decorativa"
                    ? "border-fuchsia-600 bg-fuchsia-100"
                    : data.category === "Culinaria"
                    ? "border-lime-600 bg-lime-100"
                    : "border-orange-600 bg-orange-100"
                }`}
              >
                {data.category}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
