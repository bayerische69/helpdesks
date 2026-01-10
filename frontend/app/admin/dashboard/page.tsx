import React from 'react'
import AdminHeader from '../../components/adminHeader'
import { ChartAreaInteractive } from '@/app/components/chart'
import { Button } from '@/components/ui/button'
import { File } from 'lucide-react'

const dashboard = () => {
  return (
    <div className='w-full h-full'>
        <AdminHeader />

        <div className="md:mx-25 md:my-10 m-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            
            <div className="bg-[#0000FE] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white ">

              <h1 className='font-bold text-4xl' >100</h1>

              <p>Total Tickets</p>
            </div>
            <div className="bg-gray-600 rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white">

              <h1 className='font-bold text-4xl' >30</h1>

              <p>Closed - Referred to CMISID</p>
            </div>

            <div className="bg-[#FB0103] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white">

              <h1 className='font-bold text-4xl' >10</h1>

              <p>Pending Tickets</p>
            </div>
            

            <div className="bg-[#ddbd1bde] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white">

              <h1 className='font-bold text-4xl' >1</h1>

              <p>In Progress Tickets</p>
            </div>

            <div className="bg-[#2EA10D] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white">

              <h1 className='font-bold text-4xl' >54</h1>

              <p>Closed - Resolved</p>
            </div>




          </div>
        </div>

        <div className="md:mx-25 mb-3 text-right">
          <Button className='border bg-amber-100 cursor-pointer'>
            <File />
            Download Reports
          </Button>
        </div>

        <div className='md:mx-25 md:my-10 m-5'> 
         <ChartAreaInteractive />
        </div>

    </div>
  )
}

export default dashboard
