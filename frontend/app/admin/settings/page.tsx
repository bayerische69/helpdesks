import React from 'react'
import AdminHeader from '@/app/components/adminHeader'
import { Button } from '@/components/ui/button'

const settings = () => {
  return (
    <div className='w-full'>
        <AdminHeader />

        <div className="m-10">
          <div className="flex gap-3">
            <Button variant="outline" className='bg-green-500 cursor-pointer' >Users</Button>
            <Button variant="outline" className='' >Security</Button>
          </div>




        </div>
    </div>
  )
}

export default settings
