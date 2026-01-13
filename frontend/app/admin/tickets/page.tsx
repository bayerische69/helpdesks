import AdminHeader from '@/app/components/adminHeader'
import { columns, Tickets } from './columns'
import { DataTable } from './data-table'



async function getData(): Promise<Tickets[]> {
    // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
    
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
        {
      id: "728ed52f",
      userID: "Jayde Mike Engracia",
      email: "jaydemike@gmail.com",
      priorityStatus: "Low",
      division: "PSD",
      category: "Software Issue",
      scheduleDateTime: new Date("2026-09-30T10:00:00"),
      description: "File Server Connection",
      ticketStatus: "Pending"
    },
    
  ]

}


export default async function tickets() {
  const data = await getData()
  
  return (
    <div>
      <AdminHeader/>

      <div className="mx-20 my-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

