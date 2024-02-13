import React, { useState } from "react";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

function SingleBookCard({ book }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 bg-red-500 rounded-lg px-4 py-1">
        {book.publishYear}
      </h2>
      <h4 className="my-4 text-gray-400">{book.id}</h4>
      <div className="flex justify-start gap-x-2 items-center">
        <PiBookOpenTextLight className="text-red-300 text-xl"></PiBookOpenTextLight>
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start gap-x-2 items-center">
        <BiUserCircle className="text-red-300 text-xl"></BiUserCircle>
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <div className="flex justify-start gap-x-2 items-center">
          <BiShow
            className="text-blue-800 text-3xl hover:text-black cursor-pointer"
            onClick={() => setShowModal(true)}
          ></BiShow>
        </div>
        <Link to={`books/details/${book.id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black"></BsInfoCircle>
        </Link>
        <Link to={`books/editbook/${book.id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black"></AiOutlineEdit>
        </Link>
        <Link to={`books/deletebook/${book.id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black"></MdOutlineDelete>
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default SingleBookCard;
