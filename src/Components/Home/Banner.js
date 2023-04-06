import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-3xl font-bold tracking-wide text-center text-gray-800 dark:text-white lg:text-4xl">Find your Dream Subject <br/>& Get Extra Facility</h1>
                <p class="mt-4 text-center text-gray-600 dark:text-gray-300">We Work on All Student Bright Future</p>
                <div class="grid gap-6 mt-8 sm:grid-cols-2">
                    <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">100% Scholarship</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Extra Tuition</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">All Legal Documents</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Transport Facility</span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">Special Lab </span>
                    </div>

                    <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                        <svg class="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>

                        <span class="mx-3">High Security</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://livedemo00.template-help.com/wt_prod-16603/grand/images/home-01-620-350.jpg" alt="glasses"/>
        </div>
    </div>
        </div>
    );
};

export default Banner;