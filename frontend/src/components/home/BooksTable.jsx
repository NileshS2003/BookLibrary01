import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {  MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const BooksTable = ({books}) => {
  return (
    <table className="w-full border-separate border-spacing-2 rounded-md">
          {/* {console.log(books)} */}
          <thead>
            <tr>
              <th className="rounded-md border border-slate-600">No</th>
              <th className="rounded-md border border-slate-600">Title</th>
              <th className="rounded-md max-md:hidden border border-slate-600">
                Author
              </th>
              <th className="rounded-md max-md:hidden border border-slate-600">
                Publish Year
              </th>
              <th className="border border-slate-600">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
                <tr key={book.id} className="h-8 text-center">
                  <td className="border rounded-md border-slate-600">
                    {index+1}
                  </td>
                  <td className="border rounded-md border-slate-600">
                    {book.title}
                  </td>
                  <td className="border rounded-md border-slate-600 max-md:hidden">
                    {book.author}
                  </td>
                  <td className="border rounded-md border-slate-600 max-md:hidden">
                    {book.publishYear}
                  </td>
                  <td className="border rounded-md border-slate-600 ">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book.id}`}>
                        <BsInfoCircle className="text-2xl text-green-400" />
                      </Link>
                      <Link to={`/books/editbook/${book.id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-400" />
                      </Link>
                      <Link to={`/books/deletebook/${book.id}`}>
                        <MdOutlineDelete className="text-2xl text-red-400" />
                      </Link>
                    </div>
                  </td>
                </tr>
            ))}
           
          </tbody>
        </table>
  )
}

export default BooksTable
