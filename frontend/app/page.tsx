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
          <form action="">

            <div className="grid grid-cols-2 gap-2">

            <div className="form-control mb-2">
              <label htmlFor="" >Full Name</label>
              <Input type="text" placeholder="Full Name" />
            </div>
            
            <div className="form-control mb-2">
              <label htmlFor="">Email</label>
              <Input type="text" placeholder="Full Name" />
            </div>
            </div>



          </form>
        </Modal>

      </div>
    </div>
  );
}
