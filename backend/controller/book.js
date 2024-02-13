const {Book}=require("../model/books")

exports.addBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    const doc = await book.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
}
};

exports.getBooks=async (req,res)=>{
  let query = Book.find({});
    try{
        const doc=await query.exec();
        res.status(200).json({
          count:doc.length,
          data:doc
        })
    }
    catch(err){
        res.status(404).json(err);
    }
}

exports.getBookById=async (req,res)=>{
  try {
    const {id}=req.params;
    const book=await Book.findById(id);
    res.json(book).status(201)
  } catch (error) {
    res.json(error).status(405)
  }
}


exports.updateBook=async(req,res)=>{
  try {
    const {id}=req.params;
    const book=await Book.findByIdAndUpdate(id,req.body)
    res.json(book).status(201)
  } catch (error) {
    res.status(404).json(error)
  }
}

exports.deleteBookById=async (req,res)=>{
  try {
    const {id}=req.params;
    await Book.findByIdAndDelete(id)
    res.send({"msg":"deleted successfully"}).status(201)
  } catch (error) {
    res.status(404).json(error)
  }
}