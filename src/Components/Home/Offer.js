import React from 'react';

const Offer = () => {
    return (
        <div>
           <div class="mt-10">
            <p class="font-semibold text-white text-center text-2xl">Guarantee Success</p>
                <h5 class="mb-2 text-5xl font-bold tracking-tight text-white text-center">What We Offer</h5>
                <p class="font-semibold text-white text-center text-md">We offers students the best of education and entertainment opportunities available in the area.<br></br> We are glad to take care of every student and university entrant.</p>
                <div className="mt-2">
                <div className=' mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5 mt-14'>
                <div class="card w-80 bg-blue-950 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://thumbs.dreamstime.com/b/online-learning-e-learning-online-education-distance-learning-education-online-course-student-studying-computer-illustration-83348348.jpg" alt="Shoes" class="rounded-xl w-28 h-28" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title text-2xl font-bold">Online Education</h2>
                        <p> provides online education services with all learning materials and lectures available to you.</p>

                    </div>
                </div>
                <div class="card w-80 bg-blue-950 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://media.sciencephoto.com/f0/19/84/18/f0198418-800px-wm.jpg" alt="Shoes" class="rounded-xl w-28 h-28" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white text-2xl font-bold">Programs & Courses</h2>
                        <p className='text-white'>We offer a wide range of courses and programs that encompass lots of knowledge spheres.</p>

                    </div>
                </div>
                <div class="card w-80 bg-blue-950 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://cdn4.vectorstock.com/i/1000x1000/82/98/concept-of-online-education-vector-7398298.jpg" alt="Shoes" class="rounded-xl w-28 h-28" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title text-2xl font-bold">Campus Events</h2>
                        <p>Our campus is the hub to a talented and diverse student community that turns opportunities into success.</p>

                    </div>
                </div>
            </div>
                </div>
            </div> 
        </div>
    );
};

export default Offer;