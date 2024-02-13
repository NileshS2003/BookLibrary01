const express = require("express");
const {
  addBook,
  deleteBookById,
  getBookById,
  getBooks,
  updateBook,
} = require("../controller/book");

const router = express.Router();

router
  .get("/", getBooks)
  .get("/:id", getBookById)
  .post("/", addBook)
  .patch("/:id", updateBook)
  .delete("/:id", deleteBookById);

module.exports = router;