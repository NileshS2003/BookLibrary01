import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-opacity-60 bg-black top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="top-6 right-6 absolute text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="absolute top-1 left-2 bg-red-500 rounded-lg px-4 py-1">
          {book.publishYear}
        </h2>
        <h4 className="my-7 text-gray-400">{book.id}</h4>
        <div className="flex justify-start gap-x-2 items-center">
          <PiBookOpenTextLight className="text-red-300 text-xl"></PiBookOpenTextLight>
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start gap-x-2 items-center">
          <BiUserCircle className="text-red-300 text-xl"></BiUserCircle>
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you wanna know</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat laudantium obcaecati aperiam optio rerum voluptate error provident eveniet, commodi molestiae officiis qui fuga necessitatibus nisi quis magnam ex, repellendus magni pariatur veritatis est impedit.</p>
      </div>
    </div>
  );
}

export default BookModal;
