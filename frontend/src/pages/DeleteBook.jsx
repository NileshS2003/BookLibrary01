import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  function handleDelete() {
    return axios
      .delete(`http://localhost:8080/books/${id}`)
      .then((res) => {
        console.log(res);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error", { variant: "error" });
      });
  }
  return (
    <div className="my-4 mx-3">
      <BackButton />
      <h1 className="text-3xl text-black mt-3 mx-4">Delete Book</h1>
      <div className="flex flex-col justify-start w-fit border-2 border-gray-300 mt-9 mx-auto rounded-lg">
        <h3 className="my-3 mx-3 text-2xl w-fit">Sure You want to delete this book?</h3>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white m-4 px-4 py-2  rounded-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
