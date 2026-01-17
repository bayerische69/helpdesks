"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"

const SecuritySettings = () => {
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>

      <form>
        {/* Current Password */}
        <div className="flex flex-col mb-3 relative w-[520px]">
          <label className="text-sm font-medium mb-2">
            Current Password
          </label>

          <Input
            type={showCurrent ? "text" : "password"}
            placeholder="Enter Current Password"
            className="pr-10"
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            {showCurrent ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        {/* New Password */}
        <div className="flex flex-col mb-3 relative w-[520px]">
          <label className="text-sm font-medium mb-2">
            New Password
          </label>

          <Input
            type={showNew ? "text" : "password"}
            placeholder="Enter New Password"
            className="pr-10"
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            {showNew ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-3 relative w-[520px]">
          <label className="text-sm font-medium mb-2">
            Confirm Password
          </label>

          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm New Password"
            className="pr-10"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            {showConfirm ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

                  {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-end gap-2 w-[520px]">
            <Button
              variant="outline"
              className="bg-[#BF092F] text-white w-full sm:w-auto cursor-pointer"
              onClick={(e) => {
                e.preventDefault()

              }}
            >
              Cancel
            </Button>

            <Button
              variant="outline"
              className="bg-[#4988C4] text-white w-full sm:w-auto cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                alert("Submitted Successfully")

              }}
            >
              Submit
            </Button>
          </div>
      </form>
    </div>
  )
}

export default SecuritySettings
