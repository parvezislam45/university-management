import React from "react";
import { useForm } from "react-hook-form";
import useStudent from "../Hook/useStudent";
import Details from "./Details";

const Dashboard = () => {
  const [students, setStudents] = useStudent();
  const { register, handleSubmit } = useForm();
  // ------------------- Add Student ------------------
  const onSubmit = (data, event) => {
    event.preventDefault();
    const url = `https://universitymangement.onrender.com/student`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Student added successfully", result);
        const newStudent = result;
        setStudents([...students, newStudent]);
        event.target.reset();
        window.location.reload();
      });
  };

  // -------------------- Update --------------------------------


  // -------------------------- Delate --------------------

  const handleDelate = (id) => {
    const proceed = window.confirm("Are You Sure Delate This ???");
    if (proceed) {
      const url = `https://universitymangement.onrender.com/student/${id}`;
     

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = students.filter((student) => student._id !== id);
          setStudents(remaining);
        });
    }
  };
  return (
    <div>
      <div class="p-10 choose rounded-xl w-96 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-6">
            <input
              {...register("name", {})}
              type="text"
              class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-6">
            <input
              {...register("country", {})}
              type="text"
              class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Your Country"
            />
          </div>
          <div class="">
            <select
              {...register("course", {})}
              id="countries"
              class=" w-full px-3 py-3 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option selected>Select Your Course</option>
              <option>Master's of Science Engineering</option>
              <option>Master's of Business Administration</option>
              <option>Bachelor of Science & Engineering</option>
              <option>MSc in Advanced Computer Science</option>
              <option>Bachelor of Business Administration</option>
              <option>Bachelor of Art's & Science of Law</option>
            </select>
          </div>
          <div className="items-start">
            <input
              class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2 text-center inline-flex items-center mt-8"
              type="submit"
              value="Add Student"
            />
            {/* <button
              type="button"
              class="text-white bg-red-500 hover:bg-blue-800 rounded-xl text-md font-bold px-5 py-2 text-center inline-flex items-center mt-8"
            >
              Enroll Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-arrow-right-circle-fill w-4 h-4 ml-3 -mr-3"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  fill="white"
                ></path>{" "}
              </svg>
            </button> */}
          </div>
        </form>
      </div>

      {/* ------------------------------ Table ----------------------------- */}
      <div className="overflow-x-auto w-full px-28">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Subject</th>
              <th>Actions</th>
           
            </tr>
          </thead>
          <tbody>
            {
            students.map(student =><Details
            key={student._id}
            student = {student}
            handleDelate={()=>handleDelate(student._id)} 
            ></Details>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
