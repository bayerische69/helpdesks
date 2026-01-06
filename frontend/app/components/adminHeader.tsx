import React from 'react'
import logo from "../images/Logo.png"
import Image from 'next/image'
import { Bell, Settings, LayoutDashboard, Ticket } from "lucide-react"

const adminHeader = () => {
  return (
    <div className="w-full h-12 bg-[#FBD311] ">
        <div className="flex items-center justify-between h-full mx-50">
            <div className="flex items-center gap-2">
                <Image src={logo} alt="Logo" width={35} />
                <h1 className="text-[#135898] font-bold">
                    CITY GENERAL SERVICES OFFICE - INTERNAL HELPDESK
                </h1>
            </div>

<div className="flex items-center gap-3">
      
      <button className="flex items-center gap-1 bg-[#135898] text-white px-3 py-1 rounded-md text-sm cursor-pointer">
        <LayoutDashboard size={16} />
        Dashboard
      </button>

      <button className="flex items-center gap-1 bg-[#1E9B3B] text-white px-3 py-1 rounded-md text-sm cursor-pointer">
        <Ticket size={16} />
        Manage Ticket
      </button>

      <button className="flex items-center gap-1 bg-gray-600 text-white px-3 py-1 rounded-md text-sm cursor-pointer">
        <Settings size={16} />
        Settings
      </button>

      {/* Notification */}
      <div className="relative">
        <Bell className="text-red-600 cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          3
        </span>
      </div>

    </div>
        </div>
    </div>
  )
}

export default adminHeader
