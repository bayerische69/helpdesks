'use client'

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { ArrowUpDown, Clipboard } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Modal from '../../components/Modal'
import { useState } from "react"

export type Tickets = {
    _id: string,
    userID: string,
    email: string,
    priorityStatus: "Low" | "Medium" | "High" | "Urgent",
    division: "PSD" | "ADMIN" | "SUPPLY" | "RECORDS" | "ARCHIVES"
    category: "Software Issue" | "Hardware Issue",
    scheduleDateTime: Date,
    description: string,
    ticketStatus: "Pending" | "In Progress" | "Closed - Referred to CMISID" | "Closed - Resolved",
}


export const columns: ColumnDef<Tickets>[] = [
    {
        accessorKey: "_id",
        header: "ID",
    },
    {
        accessorKey: "userID.fullName",
        header: "Full Name"
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc" )}
                >
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />        
                </Button>
            )
        }
    },
    {
        accessorKey: "priorityStatus",
        header: "Priority Status"
    },
    {
        accessorKey: "division",
        header: "Division"
    },
    {
        accessorKey: "category",
        header: "Category"
    },
    {
    accessorKey: "scheduleDateTime",
    header: "Schedule Date & Time",
    cell: ({ row }) => {
        const value = row.getValue("scheduleDateTime") as string | Date

        if (!value) return "-"

        const date = new Date(value)

        return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
        }).format(date)
    },
    },
    {
        accessorKey: "description",
        header: "Description"
    },
    {
        accessorKey: "ticketStatus",
        header: "Status"
    },
    {
        id: "actions",
        cell: ({row}) => {
            const ticket = row.original
            const [isOpen, setIsOpen] = useState(false)
            const [isDeleteOpen, setIsDeleteOpen] = useState(false)

            return (
                <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild >
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white" >
                        <DropdownMenuItem className="cursor-pointer text-yellow-700 hover:bg-amber-300" onClick={() => setIsOpen(true)}>
                        <Pencil /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-700 hover:bg-red-300" onClick={() => setIsDeleteOpen(true)}>
                        <Trash2 /> Delete
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem className="cursor-pointer text-blue-700 hover:bg-blue-300" onClick={() => {
                            navigator.clipboard.writeText(ticket._id)
                            alert("Ticket ID copied to clipboard")
                        }}>
                        <Clipboard /> Copy ticket ID
                        </DropdownMenuItem> */}
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Edit Ticket">
                    <div>
                        
                    </div>
                </Modal>
                <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete Ticket">
                    <div>
                        <p>Are you sure you want to delete this ticket?</p>
                        <Button variant="destructive" onClick={() => {
                            // Delete ticket logic here
                            setIsDeleteOpen(false)
                        }}>Delete</Button>
                    </div>
                </Modal>
                </div>

            )
        }
    },


]

// for compliance again aaina