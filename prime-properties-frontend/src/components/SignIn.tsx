import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface LoginFormInputs {
  email: string;
  password: string;
}

interface LoginProps {
  onLogin: () => void;
}

// Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = ({ onLogin }: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    onLogin();
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="bg-slate-200 px-10 py-10 rounded-3xl border-2 border-gray-200">
        <h1 className="text-5xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Wellcome back!
          </p>
          <div className="mt-8">
            <div>
              <label className=" text-lg font-medium" htmlFor="email">
                Username
              </label>
              <input
                {...register('email')}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className=" text-lg font-medium" htmlFor="password">
                Password
              </label>
              <input
                {...register('password')}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your password"
                type="password"
                id="password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label
                  className="ml-2 font-medium text-base"
                  htmlFor="remember"
                >
                  Remember me
                </label>
              </div>
              <button className="font-medium text-base text-violet-400">
                Forgot password
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              >
                Sign in
              </button>
              <button className="flex py-2 rounded-xl border-2 border-gray-300 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all">
                <img className="w-8 h-8" src={`./src/assets/googleicon.png`} />
                Sign in with Google
              </button>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <p className="font-medium text-base text-slate-900">
                Don't have an account ?
              </p>
              <button className="text-violet-700 text-base font-medium ml-2">
                <a className=" text-violet-400" href="./signup">
                  Sign up
                </a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
