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

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  if (isSuccess) {
    return res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: { bookId: id },
    });
  }
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

export const getBookById = (req, res) => {
  const { bookId } = req.params;
  const book = books.find((n) => n.id === bookId);

  if (book) {
    return res.status(200).json({
      status: "success",
      data: { book },
    });
  }

  return res.status(404).json({
    status: "fail",
    message: "Buku tidak ditemukan",
  });
};

export const editBookById = (req, res) => {
  const { bookId } = req.params;
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

  if (!name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    const updatedAt = new Date().toISOString();
    const finished = pageCount === readPage;

    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt,
    };

    return res.status(200).json({
      status: "success",
      message: "Buku berhasil diperbarui",
    });
  }

  return res.status(404).json({
    status: "fail",
    message: "Gagal memperbarui buku. Id tidak ditemukan",
  });
};

export const deleteBookById = (req, res) => {
  const { bookId } = req.params;
  const book = books.find((n) => n.id === bookId);

  if (book) {
    return res.status(200).json({
      status: "success",
      message: "Buku berhasil dihapus",
    });
  }

  return res.status(404).json({
    status: "fail",
    message: "Buku gagal dihapus. Id tidak ditemukan",
  });
};