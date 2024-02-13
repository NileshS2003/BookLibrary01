import React, { useEffect, useState } from "react";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCard, setshowCard] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="justify-between items-center flex">
        <h1 className="my-4 text-3xl">Books List</h1>
        <Link to="/books/addbook">
          <MdOutlineAddBox className="text-4xl text-sky-800"></MdOutlineAddBox>
        </Link>
      </div>
      <button
        className="px-4 py-1 my-3 items-center bg-green-300 rounded-md"
        onClick={() => setshowCard(!showCard)}
      >
        {showCard ? `Show Table Form` : `Show Card Form`}
      </button>
      {loading === true ? (
        <Spinner />
      ) : showCard ? (
        <BooksCard books={books}></BooksCard>
      ) : (
        <BooksTable books={books}></BooksTable>
      )}
    </div>
  );
};

export default Home;
