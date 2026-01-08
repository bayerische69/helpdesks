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
import { DateTimePicker } from "./components/DateTimePicker";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false)

  return (
    <div className="max-width ">
      <Header />


      <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full mb-5">

        {/* COLUMN 1 */}
        <div
          className="md:col-span-2 bg-no-repeat bg-cover bg-center
                    px-6 py-10 md:px-20 lg:px-60"
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
          <div className="welcome text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Image src={logo} alt="CGSO LOGO" />

              <h1 className="text-xl md:text-2xl font-bold">
                Welcome to City General Service Office
                <span className="block">Internal Help Desk</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl mt-6 md:pl-20">
              How can I help you?
            </p>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div
          className="relative bg-no-repeat bg-cover bg-center min-h-[250px]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(206, 127, 0, 0.4),
                rgba(206, 127, 0, 0.4)
              ),
              url(${coverimage2.src})
            `,
          }}
        >
          <div className="absolute bottom-0 w-full p-4 md:p-6">
            <p className="text-sm text-right mb-2 font-medium">
              Track Ticket Status
            </p>

            <Input
              type="text"
              placeholder="Enter your Ticket Number"
              className="bg-white border-[#CE7F00] rounded-2xl h-10"
            />
          </div>
        </div>
      </div>

      <div className="mx-5 md:mx-20">
        <div className="flex justify-between items-center mb-5 ">
          <h1 className="text-2xl font-bold">History</h1>

          <Button className="bg-[#E3B32A] hover:bg-[#d4a51f] text-black w-50 h-10 font-bold cursor-pointer " onClick={() => setOpen(true)}>
            <TicketPlus />
            Submit a Ticket</Button>
        </div>
        <div className=" h-full rounded-md">
          <Table >
            <TableHeader className="bg-[#E3B32A]">
              <TableRow  >
                <TableHead className="font-bold">Ticket No.</TableHead>
                <TableHead className="font-bold">Full Name</TableHead>
                <TableHead className="font-bold">Division</TableHead>
                <TableHead className="font-bold">Category</TableHead>
                <TableHead className="font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-b border-b-[#E3B32A]">
              <TableRow >
                <TableCell className="font-medium">e3123123</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>PSD</TableCell>
                <TableCell >Software</TableCell>
                <TableCell >Ongoing</TableCell>

              </TableRow>
            </TableBody>                
          </Table>
        </div>
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


          <div className="grid w-full gap-3 mb-3">
            <Label htmlFor="message">Description</Label>
            <Textarea placeholder="Enter details here" id="message" />
          </div>


          <div className="flex justify-end">
            <Button variant="outline" className="bg-[#BF092F] text-white " onClick={(e) => {
              e.preventDefault()
              console.log("cancel")
            }}>Cancel</Button>            
            <Button variant="outline" className="bg-[#4988C4] text-white " onClick={(e) => {
              e.preventDefault()
              console.log("submitted")
            }}>Submit</Button>
          </div>

        </form>
      </Modal>
    </div>
  );
}
