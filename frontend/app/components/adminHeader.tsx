"use client"

import React, { useState } from 'react'
import logo from "../images/Logo.png"
import Image from 'next/image'
import { Bell, Settings, LayoutDashboard, Ticket, Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

const AdminHeader = () => {

  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={16} />,
      color: "bg-[#135898]"
    },
    {
      name: "Manage Ticket",
      path: "/admin/tickets",
      icon: <Ticket size={16} />,
      color: "bg-[#1E9B3B]"
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={16} />,
      color: "bg-gray-600"
    }
  ]

  return (
    <div className="w-full bg-[#FBD311]">
      <div className="flex justify-between items-center h-12 lg:mx-20 px-4">

        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image src={logo} alt="Logo" width={35} />
          <h1 className="text-[#135898] font-bold text-xs sm:text-sm">
            CITY GENERAL SERVICES OFFICE - INTERNAL HELPDESK
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">

          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`
                flex items-center gap-1 text-white px-3 py-1 rounded-md text-sm
                ${item.color}
                ${pathname === item.path ? "ring-2 ring-amber-700" : ""}
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}

          {/* Notification */}
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/admin/notifications")}
          >
            <Bell className="text-red-600" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FBD311] px-4 pb-3 space-y-2">

          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                router.push(item.path)
                setIsOpen(false)
              }}
              className={`
                w-full flex items-center gap-2 text-white px-3 py-2 rounded-md text-sm
                ${item.color}
                ${pathname === item.path ? "ring-2 ring-white" : ""}
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}

          {/* Mobile Notification */}
          <button
            onClick={() => {
              router.push("/admin/notifications")
              setIsOpen(false)
            }}
            className="w-full flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-md text-sm"
          >
            <Bell size={16} />
            Notifications (3)
          </button>

        </div>
      )}
    </div>
  )
}

export default AdminHeader
