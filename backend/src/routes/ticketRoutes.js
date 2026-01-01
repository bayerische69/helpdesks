import express from 'express';
import { createTicket, getAllTickets, updateTicketStatus } from '../controllers/ticketController.js';

const router = express.Router();

router.get('/', getAllTickets);
router.post('/', createTicket);
router.put('/:id', updateTicketStatus);

export default router;

