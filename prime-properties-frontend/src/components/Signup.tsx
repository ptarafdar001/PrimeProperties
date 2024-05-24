import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  password: string;
  role: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<UserData>({
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    password: '',
    role: '',
  });

  const { response, error, loading, fetchData } = useAxios();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formData);
    e.preventDefault();
    await fetchData({
      url: '/api/auth/register',
      method: 'POST',
      data: formData,
    });
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className=" bg-slate-200 px-10 py-10 rounded-3xl border-2 border-gray-200">
        <p className="text-3xl font-semibold">Sign up</p>

        <form onSubmit={handleSubmit}>
          <div className=" mt-6">
            <div>
              <label className=" text-lg font-medium">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your first name"
                required
              />
            </div>

            <div>
              <label className=" text-lg font-medium">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your last name"
                required
              />
            </div>

            <div>
              <label className=" text-lg font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your email ID"
                required
              />
            </div>

            <div>
              <label className=" text-lg font-medium">Contact number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className=" w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent "
                placeholder="Enter your contact number"
                required
              />
            </div>

            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label className="text-lg font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                required
              >
                <option value="" disabled>
                  Select a role
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="mt-6 flex flex-col gap-y-4">
              <button
                type="submit"
                disabled={loading}
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
          {response && (
            <div className="text-green-500">Registration successful!</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
