'use client'
import Image from "next/image";
import { Header } from "./components/Header";
import coverimage from './images/coverImage.png'
import coverimage2 from './images/coverimage2.png'
import logo from './images/Logo.png'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { Pencil, TicketPlus, Trash2  } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react";
import Modal from "./components/Modal";
import { Select } from "@radix-ui/react-select";
import { DateTimePicker } from "./components/DateTimePicker";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-width ">
      <Header />

      <div className="mb-10 h-64 w-full" >
        <div className="grid grid-cols-3 h-full w-full gap-0">

          {/* column 1 */}
          <div
            className="col-span-2 h-full bg-no-repeat bg-cover bg-center px-60 py-5"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(206, 127, 0, 0.4),
                  rgba(206, 127, 0, 0.4)
                ),
                url(${coverimage.src})
              `,
            }}
          >
            <div className="welcome">
              <div className="flex items-center gap-2">
                <Image 
                  src={logo}
                  alt="CGSO LOGO"
                />

                <h1 className="text-2xl font-bold">Welcome to City General Service Office <span className="block">Internal Help Desk</span></h1>  

              </div>

              <p className="text-xl ps-22 pt-10">How can I help you?</p>

            </div>


          </div>

            {/* column 2 */}
          <div className="h-full bg-no-repeat bg-cover bg-center relative"
            style={{
            backgroundImage: `
              linear-gradient(
                rgba(206, 127, 0, 0.4),
                rgba(206, 127, 0, 0.4)
              ),
              url(${coverimage2.src})
            `
            }}          
          >
            <div className="absolute bottom-0 w-full ">
              <div className="m-5 ms-10">
              <p className="text-sm text-right mb-1 font-medium">Track Ticket Status</p>

              <Input type="text" placeholder="Enter your Ticket Number" className="bg-white border-[#CE7F00] rounded-2xl h-10 " />
              </div>

            </div>

          </div>
        </div>
      </div>
            
      <div className="mx-20">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">History</h1>

          <Button className="bg-[#E3B32A] hover:bg-[#d4a51f] text-black w-50 h-10 font-bold cursor-pointer " onClick={() => setOpen(true)}>
            <TicketPlus />
            Submit a Ticket</Button>
        </div>

        <div className="w-full h-full">
          <Table>
            {/* <TableCaption>A list of your submitted tickets.</TableCaption> */}
            <TableHeader className="bg-[#E3B32A] font-bold mb-2">
              <TableRow >
                <TableHead >Ticket No.</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Division</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-b border-b-[#E3B32A]">
              <TableRow >
                <TableCell className="font-medium">e3123123</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>PSD</TableCell>
                <TableCell >Software</TableCell>
                <TableCell >Ongoing</TableCell>
                <TableCell className="flex justify-end items-center gap-5">
                  <Pencil color="#E3B32A" /> <span><Trash2 color="red" /></span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>


        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Submit A Ticket"
        >
          <form>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {/* Select for users */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">User</label>
                <select
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a user
                  </option>
                  <option value="1">John Doe</option>
                  <option value="2">Jane Smith</option>
                  <option value="3">Alex Johnson</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="Enter your Email" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Priority Status</label>
                <select
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a Priority Status
                  </option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>              
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Category</label>
                <select
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Software">Software</option>
                  <option value="Hardware">Hardware</option>

                </select>              
              </div>              
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Division</label>
                <select
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a Division
                  </option>
                  <option value="PSD">PSD</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="SUPPLY">SUPPLY</option>
                  <option value="RECORDS">RECORDS</option>
                  <option value="RECORDS">ARCHIVES</option>
                </select>              
              </div>

              {/* datetime picker */}
              <DateTimePicker />

            </div>


            <div className="grid w-full gap-3">
              <Label htmlFor="message">Description</Label>
              <Textarea placeholder="Enter details here" id="message" />
            </div>


          </form>
        </Modal>

      </div>
    </div>
  );
}
