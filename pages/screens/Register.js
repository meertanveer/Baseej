import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import React from 'react';

function Register() {
  return (
    <>
      <Header />
      <div className="grid text-orange-500 items-center justify-center">
        <div className="grid grid-cols-1 w-64 rounded-lg space-y-2 mt-16 mb-32 p-6 border  text-medium text-sm border-slate-300 shadow-md shadow-orange-500">
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
