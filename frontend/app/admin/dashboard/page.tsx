import React from 'react'
import AdminHeader from '../../components/adminHeader'
import { ChartAreaInteractive } from '@/app/components/chart'

const dashboard = () => {
  return (
    <div className='w-full h-full'>
        <AdminHeader />

        {/* <div className="xl:mx-50 xl:my-15">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-[#0000FE] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white ">

              <h1 className='font-bold text-4xl' >100</h1>

              <p>Total Tickets</p>
            </div>

            <div className="bg-[#FBD40D] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white">

              <h1 className='font-bold text-4xl' >100</h1>

              <p>Total Tickets</p>
            </div>

            <div className="bg-[#2EA10D] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white">

              <h1 className='font-bold text-4xl' >100</h1>

              <p>Total Tickets</p>
            </div>

            <div className="bg-[#FB0103] rounded-xl shadow-md p-6 text-center font-semibold hover:shadow-lg transition text-white">

              <h1 className='font-bold text-4xl' >100</h1>

              <p>Total Tickets</p>
            </div>


          </div>



        </div>

        <div className='xl:mx-50 xl:my-15'> 
         <ChartAreaInteractive />
        </div> */}

    </div>
  )
}

export default dashboard
