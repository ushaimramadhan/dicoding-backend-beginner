import express from "express";
import { createBook } from "./handler.js";

const router = express.Router();
router.post("/books", createBook);

export default router;
