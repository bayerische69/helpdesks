'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Modal from './Modal'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Users = [
  { fullName: "John Doe" },
  { fullName: "Jane Smith" },
  { fullName: "Michael Johnson" },
  { fullName: "Emily Davis" },
  { fullName: "Robert Brown" },
  { fullName: "Sarah Wilson" },
  { fullName: "David Martinez" },
  { fullName: "Laura Anderson" },
  { fullName: "James Taylor" },
  { fullName: "Olivia Thomas" }
]

const ITEMS_PER_PAGE = 10

const UsersTable = () => {
  const [open, setOpen] = useState(false)
  
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(Users.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedUsers = Users.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Users</h2>

        <Button variant="outline" className="cursor-pointer bg-green-300" onClick={() => setOpen(true)}>
          <Plus />
          Add Users
        </Button>
      </div>

      <Table>
        <TableCaption>User List.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedUsers.map((user, index) => (
            <TableRow key={startIndex + index}>
              {/* Increment Number */}
              <TableCell className="font-medium">
                {startIndex + index + 1}
              </TableCell>

              {/* User Name */}
              <TableCell>{user.fullName}</TableCell>

              {/* Action */}
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-blue-600 hover:bg-blue-300 cursor-pointer"
                    onClick={() => console.log("Edit user:", user.fullName)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className='text-red-600 hover:bg-red-300 cursor-pointer'
                    onClick={() => console.log("Delete user:", user.fullName)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-end gap-2 mt-4">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Previous
        </Button>

        <span className="flex items-center px-2">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>


        <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title='Add User'>

            Sample


        </Modal>

    </div>
  )
}

export default UsersTable
