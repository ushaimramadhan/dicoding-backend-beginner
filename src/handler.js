import { nanoid } from "nanoid";
import books from "./books.js";

export const createBook = (req, res) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;
  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updateAt = insertedAt;
  const newNote = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updateAt,
  };
  books.push(newNote);
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    return res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: { bookId: id },
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  return res.status(400).json({
    status: "fail",
    message: "Gagal menambahkan buku. Mohon isi nama buku",
  });
};

export const getBooks = (req, res) => {
  const responseBooks = books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  if (books === null) {
    return res.status(200).json({
      status: "success",
      data: { books },
    });
  }
  return res.status(200).json({
    status: "success",
    data: { responseBooks },
  });
};