
import Image from "next/image";
import { Header } from "./components/Header";
import coverimage from './images/coverImage.png'
import coverimage2 from './images/coverimage2.png'
import logo from './images/Logo.png'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { TicketPlus  } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
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

          <Button className="bg-[#E3B32A] hover:bg-[#d4a51f] text-black w-50 h-10 font-bold cursor-pointer ">
            <TicketPlus />
            Submit a Ticket</Button>
        </div>

          <div className="w-full">
            <Table>
              <TableCaption>A list of your submitted tickets.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

      </div>
    </div>
  );
}
