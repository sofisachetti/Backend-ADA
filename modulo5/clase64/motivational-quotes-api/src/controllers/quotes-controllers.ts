import { Request, Response } from "express";
import { QuoteModel } from '../models/quotes-models';

export const getAllQuotes = (req: Request, res: Response): void => {
    const quotes = QuoteModel.getAllQuotes()
    res.json(quotes)
}

export const getQuoteById = (req: Request, res: Response): void => {
    const {id} = req.params
    const quote = QuoteModel.getQuoteById(id);
    if (!quote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.json(quote)
}

export const createQuote = (req: Request, res: Response): void => {
    const newQuote = QuoteModel.addQuote(req.body);
    res.status(201).json(newQuote);
}

export const updateQuote = (req: Request, res: Response): void => {
    const {id} = req.params
    const updateQuote = QuoteModel.updateQuote(id, req.body)
    if (!updateQuote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.json(updateQuote)
}

export const deleteQuote = (req: Request, res: Response): void => {
    const {id} = req.params
    const isDeleted = QuoteModel.deleteQuote(id)
    if (!deleteQuote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.status(204).send()
}