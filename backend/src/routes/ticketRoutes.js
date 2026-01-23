import express from 'express';
import { createTicket, getAllTickets, getTicketsByID, updateTicketStatus } from '../controllers/ticketController.js';

const router = express.Router();

router.get('/', getAllTickets);
router.get('/:id', getTicketsByID);
router.post('/', createTicket);
router.put('/:id', updateTicketStatus);


export default router;

