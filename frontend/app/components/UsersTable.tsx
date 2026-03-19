'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Modal from './Modal'
import axios from '../config/axios'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from '@/components/ui/input'


const ITEMS_PER_PAGE = 10

interface User {
  fullName: string
}

const UsersTable = () => {
  const [open, setOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [openEdit, setOpenEdit] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fullName, setFullName] = useState('')
  

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users')
      console.log('Fetched users:', response.data)
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  },[])  

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE

  const paginatedUsers = users.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users', { fullName })
      
      setFullName('')
      setOpen(false)
      await fetchUsers() 
    } catch (e) {
      console.error('Error adding user:', e)
    }
  
  }

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
            <TableHead className="w-12.5">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-12.5">Action</TableHead>
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
                    // onClick={() => console.log("Edit user:", user.fullName)}
                    onClick={() => {
                      setSelectedUser(user._id) // ✅ store clicked user
                      setOpenEdit(true)
                    }}
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

                  
        <form onSubmit={handleSubmit} className="w-full">

            <div className="flex flex-col mb-3">
              <label className="text-sm font-medium mb-2">Full Name
              </label>
              <Input type="text" placeholder="Enter Full Name" onChange={(e) => setFullName(e.target.value)} />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
              <Button
                variant="outline"
                className="bg-[#BF092F] text-white w-full sm:w-auto cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                }}
              >
                Cancel
              </Button>

              <Button
                variant="outline"
                className="bg-[#4988C4] text-white w-full sm:w-auto cursor-pointer"
              >
                Submit
              </Button>
            </div>
        </form>


        </Modal>

        <Modal
          isOpen={openEdit}
          onClose={() => setOpenEdit(false)}
          title='Edit User'
        >
          
        </Modal>
              

    </div>
  )
}

export default UsersTable
