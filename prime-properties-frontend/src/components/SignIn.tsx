import React, { FormEvent, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { loginSuccess } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

interface UserData {
  userName: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<UserData>({
    userName: '',
    password: '',
  });

  const { response, error, loading, fetchData } = useAxios();

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    console.log(formData);
    e.preventDefault();

    const result: any = await fetchData({
      url: '/api/auth/login',
      method: 'POST',
      data: formData,
    });

    if (result) {
      console.log(result);
    }

    // if (result?.isSuccess) {
    //   console.log(result.result.user);
    //   console.log(result.result.token);
    //   // dispatch(loginSuccess(result.data));
    // } else {
    //   console.log(result.error.message);
    // }
  };

  return (
    <div className="flex items-center justify-center fixed inset-0 bg-gray-700 bg-opacity-50 backdrop-blur-sm">
      <div className="bg-slate-200 px-10 py-10 rounded-3xl border-2 shadow-md shadow-red-200">
        <h1 className="text-5xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Wellcome back!
          </p>
          <div className="mt-8">
            <div>
              <label className=" text-lg font-medium" htmlFor="userName">
                Username
              </label>
              <input
                id="userName"
                type="email"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your email ID"
                required
              />
            </div>
            <div>
              <label className=" text-lg font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="mt-6 flex flex-col gap-y-4">
              <button
                disabled={loading}
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              >
                Sign in
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
          {response && <div className="text-green-500">Login successful!</div>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
