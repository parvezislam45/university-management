import React from "react";

const Stack = () => {
  return (
    <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 bg-blue-950">
      <div className="card w-full bg-blue-950 text-neutral-content">
        <div className="card-body items-center mt-10 text-center">
          <h2 className="card-title font-bold text-center text-4xl">8000 +</h2>
          <p className="text-2xl text-center font-bold">Student</p>
        </div>
      </div>
      <div className="card w-full bg-blue-950 text-neutral-content">
        <div className="card-body items-center mt-10 text-center">
          <h2 className="card-title font-bold text-center text-4xl">8 +</h2>
          <p className="text-2xl text-center font-bold">Faculty</p>
        </div>
      </div>
      <div className="card w-full bg-blue-950 text-neutral-content">
        <div className="card-body items-center mt-10 text-center">
          <h2 className="card-title font-bold text-center text-4xl">19 +</h2>
          <p className="text-2xl text-center font-bold">Courses</p>
        </div>
      </div>
      <div className="card w-full bg-blue-950 text-neutral-content">
        <div className="card-body items-center mt-10 text-center">
          <h2 className="card-title font-bold text-center text-4xl">30 +</h2>
          <p className="text-2xl text-center font-bold">Teacher</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
