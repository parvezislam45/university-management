import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Home/Loading";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [signInWithGoogle,gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);


  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }
  navigate("/dashboard")


  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };
  return (
    <div>
      <div class="bg-blue-950 w-full min-h-screen flex items-center justify-center">
        <div class="w-full py-8">
          <div class="bg-gray-900 w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
            <h2 class="text-center text-2xl font-bold tracking-wide text-white">
              Sign Up
            </h2>
            <p class="text-center text-sm text-white mt-2">
              Already have an account?{" "}
              <Link className="text-sky-400 underline" to="/login">Log In</Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} class="my-8 text-sm">
              <div class="flex flex-col my-4">
                <label for="name" class="text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div class="flex flex-col my-4">
                <label for="email" class="text-white">
                  Email Address
                </label>
                <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                  type="email"
                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your email"
                />
                 <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              

              <div class="flex flex-col my-4">
                <label for="password" class="text-white">
                  Password
                </label>
                <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                
                  type="text"
                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your Password"
                />
              </div>
              <div class="flex flex-col my-4">
                <label for="password" class="text-white">
                  Re type-Password
                </label>
                <input
                {...register("rePassword", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                })}
                  type="text"
                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Re-Type your Password"
                />
              </div>

              <div class="flex items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  class="mr-2 focus:ring-0 rounded"
                />
                <label for="remember_me" class="text-white">
                  I accept the{" "}
                  <a
                    href="/"
                    class="text-white hover:text-blue-700 hover:underline"
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="/"
                    class="text-white hover:text-blue-700 hover:underline"
                  >
                    privacy policy
                  </a>
                </label>
              </div>
              {signInError}
              <div class="my-4 flex items-center justify-end space-x-4 mt-10">
              <input
                className="btn btn-outline btn-secondary px-7 py-3 w-32"
                type="submit"
                value="Sign Up"
              />
              </div>
            </form>

            <div class="flex items-center justify-between">
              <div class="w-full h-[1px] bg-gray-300"></div>
              <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div class="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div class="text-center mt-10">
              <button onClick={() => signInWithGoogle()}
                type="button"
                class="text-white text-center bg-yellow-900 hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  class="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
