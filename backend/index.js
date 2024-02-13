const express = require("express");
const mongoose = require("mongoose");
const bookRouter=require('./routes/books.js')
const cors=require('cors')

const server = express();
server.use(express.json()); //to parse req.body
server.use(cors({
  origin:'http://localhost:5173',
  allowedHeaders:['Content-Type'], 
  methods:['GET','PATCH','DELETE','PUT','POST']
}))
// server.use(cors())
server.use('/books',bookRouter)
main().catch((err) => console.log(err));

server.get("/", (req, res) => {
  console.log("cors enabled")
  res.json({ msg: "xyz" });
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/books");
  console.log("database connected");
  server.listen(8080, () => {
    console.log("server started");
  });
}
