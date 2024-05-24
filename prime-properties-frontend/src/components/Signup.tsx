import React from 'react';
import Link from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; // Validation schema

interface SignupFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  password: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  contactNumber: yup
    .string()
    .min(10, 'Mobile number must be 10 degit')
    .max(10, 'Mobile number must be 10 degit')
    .required('Mobile is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignupFormInputs) => {
    console.log(data);

    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className=" bg-slate-200 px-10 py-10 rounded-3xl border-2 border-gray-200">
        <p className="text-3xl font-semibold">Sign up</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-6">
            <div>
              <label className=" text-lg font-medium">First name</label>
              <input
                {...register('firstName')}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className=" text-lg font-medium">Last name</label>
              <input
                {...register('lastName')}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label className=" text-lg font-medium">Email</label>
              <input
                {...register('email')}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className=" text-lg font-medium">Contact number</label>
              <input
                {...register('contactNumber')}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your contact number"
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className=" text-lg font-medium">Password</label>
              <input
                {...register('password')}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Set your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              >
                Sign up
              </button>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <p className="font-medium text-base text-slate-900">
                Already have an account ?
              </p>
              <button className="text-violet-700 text-base font-medium ml-2">
                <a className=" text-violet-400" href="./login">
                  Sign in
                </a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
