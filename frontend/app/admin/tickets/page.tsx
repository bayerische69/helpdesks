import AdminHeader from '@/app/components/adminHeader'
import React from 'react'
import { columns, Payment } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function tickets() {
  const data = await getData()

  
  return (
    <div>
      <AdminHeader/>

      <div className="container mx-auto mt-10">
        <DataTable columns={columns} data={data} />
      </div>

    </div>
  )
}

