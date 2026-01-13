import AdminHeader from '@/app/components/adminHeader'
import { columns, Tickets } from './columns'
import { DataTable } from './data-table'



async function getData(): Promise<Tickets[]> {
    // Fetch data from your API here.
  return [
  {
    id: "tkt-001",
    userID: "Jayde Mike Engracia",
    email: "jaydemike@gmail.com",
    priorityStatus: "Low",
    division: "PSD",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-09-30T10:00:00"),
    description: "File server connection issue",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-002",
    userID: "Maria Santos",
    email: "maria.santos@gmail.com",
    priorityStatus: "High",
    division: "ADMIN",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-01T09:30:00"),
    description: "Desktop not powering on",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-003",
    userID: "John Ramirez",
    email: "john.ramirez@gmail.com",
    priorityStatus: "Medium",
    division: "SUPPLY",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-02T14:00:00"),
    description: "Inventory system login error",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-004",
    userID: "Angela Cruz",
    email: "angela.cruz@gmail.com",
    priorityStatus: "Urgent",
    division: "RECORDS",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-03T11:15:00"),
    description: "Scanner not detected",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-005",
    userID: "Michael Tan",
    email: "michael.tan@gmail.com",
    priorityStatus: "High",
    division: "ARCHIVES",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-04T08:45:00"),
    description: "Document management system outage",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-006",
    userID: "Sofia Lim",
    email: "sofia.lim@gmail.com",
    priorityStatus: "Low",
    division: "PSD",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-05T13:30:00"),
    description: "Mouse and keyboard not responding",
    ticketStatus: "Closed - Resolved"
  },
  {
    id: "tkt-007",
    userID: "Daniel Reyes",
    email: "daniel.reyes@gmail.com",
    priorityStatus: "Medium",
    division: "ADMIN",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-06T15:00:00"),
    description: "Email configuration problem",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-008",
    userID: "Patricia Gomez",
    email: "patricia.gomez@gmail.com",
    priorityStatus: "Urgent",
    division: "SUPPLY",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-07T10:30:00"),
    description: "Warehouse printer jam",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-009",
    userID: "Kevin Bautista",
    email: "kevin.bautista@gmail.com",
    priorityStatus: "High",
    division: "RECORDS",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-08T16:20:00"),
    description: "Records system running slow",
    ticketStatus: "Closed - Referred to CMISID"
  },
  {
    id: "tkt-010",
    userID: "Nicole Fernandez",
    email: "nicole.fernandez@gmail.com",
    priorityStatus: "Low",
    division: "ARCHIVES",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-09T09:00:00"),
    description: "External drive not recognized",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-011",
    userID: "Aaron Dela Cruz",
    email: "aaron.dc@gmail.com",
    priorityStatus: "Medium",
    division: "PSD",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-10T10:00:00"),
    description: "Application crashing on startup",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-012",
    userID: "Bianca Lopez",
    email: "bianca.lopez@gmail.com",
    priorityStatus: "Low",
    division: "ADMIN",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-10T14:30:00"),
    description: "Monitor flickering intermittently",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-013",
    userID: "Carlo Mendoza",
    email: "carlo.mendoza@gmail.com",
    priorityStatus: "High",
    division: "SUPPLY",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-11T09:15:00"),
    description: "Supply tracking system not loading",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-014",
    userID: "Diana Flores",
    email: "diana.flores@gmail.com",
    priorityStatus: "Urgent",
    division: "RECORDS",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-11T11:45:00"),
    description: "Records scanner completely unresponsive",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-015",
    userID: "Ethan Navarro",
    email: "ethan.navarro@gmail.com",
    priorityStatus: "Medium",
    division: "ARCHIVES",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-12T08:30:00"),
    description: "Archive search results inaccurate",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-016",
    userID: "Faith Villanueva",
    email: "faith.v@gmail.com",
    priorityStatus: "Low",
    division: "PSD",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-12T13:00:00"),
    description: "USB ports not detecting devices",
    ticketStatus: "Closed - Resolved"
  },
  {
    id: "tkt-017",
    userID: "Gabriel Ortega",
    email: "gabriel.ortega@gmail.com",
    priorityStatus: "High",
    division: "ADMIN",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-13T10:20:00"),
    description: "Admin dashboard access denied",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-018",
    userID: "Hannah Lee",
    email: "hannah.lee@gmail.com",
    priorityStatus: "Medium",
    division: "SUPPLY",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-13T15:40:00"),
    description: "Label printer printing blank pages",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-019",
    userID: "Ivan Morales",
    email: "ivan.morales@gmail.com",
    priorityStatus: "Urgent",
    division: "RECORDS",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-14T09:00:00"),
    description: "Records database not syncing",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-020",
    userID: "Jasmine Co",
    email: "jasmine.co@gmail.com",
    priorityStatus: "Low",
    division: "ARCHIVES",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-14T16:10:00"),
    description: "External hard drive overheating",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-021",
    userID: "Kyle Ramos",
    email: "kyle.ramos@gmail.com",
    priorityStatus: "Medium",
    division: "PSD",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-15T11:00:00"),
    description: "Version control merge conflicts",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-022",
    userID: "Lara Bautista",
    email: "lara.bautista@gmail.com",
    priorityStatus: "High",
    division: "ADMIN",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-15T14:45:00"),
    description: "Server rack power fluctuation",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-023",
    userID: "Mark Villamor",
    email: "mark.villamor@gmail.com",
    priorityStatus: "Low",
    division: "SUPPLY",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-16T09:30:00"),
    description: "Report export formatting issue",
    ticketStatus: "Closed - Resolved"
  },
  {
    id: "tkt-024",
    userID: "Nina Perez",
    email: "nina.perez@gmail.com",
    priorityStatus: "Urgent",
    division: "RECORDS",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-16T13:15:00"),
    description: "Main records workstation not booting",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-025",
    userID: "Oscar Lim",
    email: "oscar.lim@gmail.com",
    priorityStatus: "Medium",
    division: "ARCHIVES",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-17T10:50:00"),
    description: "Metadata tags missing on files",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-026",
    userID: "Paula Reyes",
    email: "paula.reyes@gmail.com",
    priorityStatus: "Low",
    division: "PSD",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-17T15:30:00"),
    description: "Laptop fan making noise",
    ticketStatus: "Closed - Resolved"
  },
  {
    id: "tkt-027",
    userID: "Quentin Yu",
    email: "quentin.yu@gmail.com",
    priorityStatus: "High",
    division: "ADMIN",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-18T09:10:00"),
    description: "User role permissions incorrect",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-028",
    userID: "Rhea Santiago",
    email: "rhea.santiago@gmail.com",
    priorityStatus: "Medium",
    division: "SUPPLY",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-18T14:00:00"),
    description: "RFID scanner losing connection",
    ticketStatus: "Pending"
  },
  {
    id: "tkt-029",
    userID: "Samuel Ong",
    email: "samuel.ong@gmail.com",
    priorityStatus: "Urgent",
    division: "RECORDS",
    category: "Software Issue",
    scheduleDateTime: new Date("2026-10-19T08:40:00"),
    description: "Critical records data mismatch",
    ticketStatus: "In Progress"
  },
  {
    id: "tkt-030",
    userID: "Trisha Velasco",
    email: "trisha.velasco@gmail.com",
    priorityStatus: "Low",
    division: "ARCHIVES",
    category: "Hardware Issue",
    scheduleDateTime: new Date("2026-10-19T16:00:00"),
    description: "Archive workstation mouse lag",
    ticketStatus: "Pending"
  }
    
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

