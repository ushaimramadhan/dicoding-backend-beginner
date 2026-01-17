import express from 'express';
import {
  createBook,
  getBooks,
  getBookById,
  editBookById,
  deleteBookById,
} from './handler.js';

const router = express.Router();
router.post('/books', createBook);
router.get('/books', getBooks);
router.get('/books/:bookId', getBookById);
router.put('/books/:bookId', editBookById);
router.delete('/books/:bookId', deleteBookById);

export default router;
