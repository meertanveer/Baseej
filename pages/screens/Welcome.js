import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import React from 'react';

function Welcome() {
  return (
    <>
      <Header />
      <div className="grid text-orange-500 items-center justify-center ">
        <div className="flex justify-center font-bold font-mono text-2xl mt-10">
          <p className="border border-orange-500 px-4 py-1 bg-orange-500/30 rounded-sm">
            Welcome
          </p>
        </div>
        <div className="grid grid-cols-1 w-64 rounded-lg space-y-2 mt-16 mb-32 p-6 border  text-medium text-sm border-slate-300 shadow-md shadow-orange-500 bg-gray-900/70">
          <div>
            <p className="text-white flex items-center justify-center font-bold">
              Login
            </p>
          </div>
          <label>Username</label>
          <input
            className=" rounded-sm bg-yellow-100 pl-4"
            placeholder="Username"
          ></input>
          <label>Password</label>
          <input
            className=" rounded-sm bg-yellow-100 pl-4"
            placeholder="Password "
          ></input>

          <button
            type="submit"
            className="text-green-500 border border-green-500 px-2 rounded-md hover:bg-green-500 hover:text-white"
          >
            Login
          </button>
          <div className="pt-16">
            <Link
              href="../screens/Register"
              className="text-red-500 border border-red-500 px-2 rounded-md hover:bg-red-500 hover:text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
