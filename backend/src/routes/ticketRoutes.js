import express from 'express';
import { countTickets, createTicket, getAllTickets, getTicketsByID, updateTicketStatus, getTicketsByDateAndDivision, getTicketSchedules } from '../controllers/ticketController.js';

const router = express.Router();

router.get('/', getAllTickets);
router.get('/getTicketSchedules', getTicketSchedules);
router.post('/', createTicket);
router.get('/count/status', countTickets);
router.get('/chart/status', getTicketsByDateAndDivision);
router.get('/:id', getTicketsByID);
router.put('/:id', updateTicketStatus);

export default router;

