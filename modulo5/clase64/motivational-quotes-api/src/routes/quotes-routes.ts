import { Router } from "express";

import {
    getAllQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
} from '../controllers/quotes-controllers';

import { validateQuote } from '../middlewares/validate-middleware';

const router: Router = Router();

router.get('/', getAllQuotes);
router.get('/:id', getQuoteById);
router.post('/', validateQuote, createQuote);
router.patch('/:id', validateQuote, updateQuote);
router.delete('/:id', deleteQuote);

export default router;