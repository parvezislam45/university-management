import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [users,setUsers]=useState({});
    const navigate = useNavigate()
    useEffect(()=>{
    const url = `https://universitymangement.onrender.com/student/${id}`
    fetch(url)
    .then(res =>res.json())
    .then(data => setUsers(data))
    },[])

    const updateUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const country = event.target.country.value;
    const course = event.target.course.value;
    const user = {name,course,country};
    const url = `https://universitymangement.onrender.com/student/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result,'success');
        navigate('/dashboard')
        alert("Student Updated successfully", result);
        event.target.reset();
      });
    }
    return (
        <div>
            
<div class="w-80 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ArKQ5AIUqacA-5ofQ5nfPevwR0RtI7PBtg&usqp=CAU" alt="Bonnie"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{users.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{users.country}</span>
        <h5 class="mt-5 text-xl text-center font-medium text-gray-900 dark:text-white">{users.course}</h5>
    </div>
</div>
            <div class="p-10 choose rounded-xl w-96 mx-auto">
            <form onSubmit={updateUser}>
          <div class="mb-6">
            <input
            name='name'
              type="text"
              class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-6">
            <input
            name='country'
              type="text"
              class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Your Country"
            />
          </div>
          <div class="">
            <select
            name='course'
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
              value="Update Info"
            />

          </div>
        </form>
            </div>
            
        </div>
    );
};

export default Update;