const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookScehma = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, requires: true },
  },
  {
    timestamps: true,
  }
);

const virtual=BookScehma.virtual('id');
virtual.get(()=>{
    return this._id;
})
BookScehma.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){delete ret._id}
})

// exports.Book=mongoose.model('Book',BookScehma)
exports.Book = mongoose.model("Book", BookScehma);
