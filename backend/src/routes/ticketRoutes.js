import express from 'express';
import { countTickets, createTicket, getAllTickets, getTicketsByID, updateTicketStatus, getTicketsByDateAndDivision } from '../controllers/ticketController.js';

const router = express.Router();

router.get('/', getAllTickets);
router.get('/:id', getTicketsByID);
router.post('/', createTicket);
router.put('/:id', updateTicketStatus);
router.get('/count/status', countTickets);
router.get('/chart/status', getTicketsByDateAndDivision);

export default router;

