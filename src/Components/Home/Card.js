import React from "react";
import { Link } from "react-router-dom";

const Card = ({course}) => {
const {img,name,price} = course
  return (
    <div>
    
        <div>
          <div class="card flex flex-col justify-center p-10 bg-gray-900 rounded-lg shadow-2xl">
            <div class="prod-img">
              <img
                src={img}
                class="w-60 h-60 object-cover object-center mx-auto"
                alt="courses"
              />
            </div>
            <div class="prod-title">
              <p class="text-xl uppercase text-white text-center mt-5 font-bold">
                {name}
              </p>
            </div>
            <div class="prod-info grid gap-10 mt-10">
              <div class="flex flex-col md:flex-row justify-between items-center text-white">
                <p class="font-bold text-xl">$ {price}</p>
                <Link to ='/login'><button class="px-6 bg-amber-700 py-2 text-md font-bold transition ease-in duration-200 rounded-full hover:bg-blue-950 hover:text-white border-2 border-gray-900 focus:outline-none">
                  Register Now
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Card;
