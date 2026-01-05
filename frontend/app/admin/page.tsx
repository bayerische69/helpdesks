import React from 'react'
import logo from '../images/Logo.png'
import Image from "next/image";

const admin = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#E3B32A]">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          
          <div className="mb-6 text-center">
            <Image src={logo} alt="CGSO LOGO" width={90} className="mx-auto" />
            <h1 className="mt-4 font-semibold text-lg">
              CITY GENERAL SERVICES OFFICE
              <span className="block text-sm font-normal">
                INTERNAL HELPDESK
              </span>
            </h1>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default admin
