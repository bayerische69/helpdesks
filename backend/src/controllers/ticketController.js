import Ticket from '../models/ticketSchema.js';
import transporter from '../config/nodemailer.js';
import User from '../models/userSchema.js';
import Admin from '../models/adminSchema.js';

export async function getAllTickets(req, res) {
    try {
        const tickets = await Ticket.find().sort({ createdAt: -1 }); // newest first

        res.status(200).json(tickets);

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}

export async function getTicketsByID(req, res) {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate("userID", "fullName") 

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket Not Found",
      })
    }

    res.status(200).json(ticket)

  } catch (error) {
    console.error("Error tickets by id", error.message)
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    })
  }
}



export async function createTicket(req, res) {
    const { userID, email, priorityStatus, division, category, scheduleDateTime, description } = req.body

    if (!userID || !email || !division || !category || !scheduleDateTime || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const scheduledDate = new Date(scheduleDateTime);
    const now = new Date();

    // 🔴 Invalid date check
    if (isNaN(scheduledDate.getTime())) {
        return res.status(400).json({ message: "Invalid schedule date format" });
    }

    // 🔴 Past date check
    if (scheduledDate <= now) {
        return res.status(400).json({
            message: "Schedule date and time must be in the future"
        });
    }


    try {

        const newTicket = new Ticket({
            userID,
            email,
            priorityStatus,
            division,
            category,
            scheduleDateTime,
            description
        })

        await newTicket.save();

        res.status(201).json({
            message: "Ticket Created Successfully",
            data: newTicket
        });

        // Send email notification to user
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Ticket Created Successfully',
            text: `Your ticket with ID ${newTicket._id} has been created successfully. We will get back to you shortly.`
        }

        // Send email notification to admin
        const mailOptions2 = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Ticket Created',
            text: `A new ticket with ID ${newTicket._id} has been created by user with email ${email}. Please check the admin panel for more details.`
        }

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptions2);

    } catch (error) {
        console.error("Error creating ticket: ", error);
    }
}


export async function updateTicketStatus(req, res) {
    const { ticketStatus } = req.body;

    try {

        const updateTicket = await Ticket.findByIdAndUpdate(
            req.params.id,
            { ticketStatus },
            { new: true }
        );

        if (!updateTicket) {
            return res.status(404).json({ message: "Ticket Not Found" });
        }

        res.status(200).json({
            message: "Ticket Status Updated Successfully",
            data: updateTicket
        })

    } catch (error) {
        console.error("Error updating ticket status: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

