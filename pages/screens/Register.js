import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import React from 'react';

function Register() {
  return (
    <>
      <Header />
      <div className="flex text-orange-500 justify-center font-bold font-mono text-2xl mt-10">
        <p className="border border-orange-500 px-4 py-1 bg-orange-500/30 rounded-sm">
          Welcome
        </p>
      </div>
      <div className="grid text-orange-500 items-center justify-center ">
        <div className="grid grid-cols-1 w-64 rounded-lg space-y-2 mt-16 mb-32 p-6 border  text-medium text-sm border-slate-300 shadow-md shadow-orange-500 bg-gray-900/70">
          <div>
            <p className="text-white flex items-center justify-center font-bold">
              Register
            </p>
          </div>
          <label>Full Name</label>
          <input
            type="text"
            className=" rounded-sm bg-yellow-100 pl-4"
            placeholder="Enter Your Full Name"
          ></input>
          <label>Username</label>
          <input
            type="text"
            className=" rounded-sm bg-yellow-100 pl-4"
            placeholder="Set Username [A-z 0-9 @]"
          ></input>
          <label>Password</label>
          <input
            type="password"
            className=" rounded-sm bg-yellow-100 pl-4"
            placeholder="Set Password [min 8 digits]"
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            className=" rounded-sm bg-yellow-100 pl-4"
            placeholder="Confirm Password "
          ></input>
          <div className="grid grid-cols-1 gap-2">
            <label>Gender</label>
            <div className="flex gap-4 border px-2">
              <input
                type="radio"
                id="ismale"
                name="gender"
                value="Male"
              ></input>
              <label for="male">Male</label>
              <input
                type="radio"
                id="isfemale"
                name="gender"
                value="Female"
              ></input>
              <label for="female">Female</label>
            </div>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" id="user-agree" />
            <label for="agree">I Agree to Terms</label>
          </div>
          <button
            type="submit"
            className="text-green-500 border border-green-500 px-2 rounded-md hover:bg-green-500 hover:text-white"
          >
            Register
          </button>

          <div className="pt-16">
            <Link
              href="../screens/Welcome"
              className="text-red-500 border border-red-500 px-2 rounded-md hover:bg-red-500 hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
