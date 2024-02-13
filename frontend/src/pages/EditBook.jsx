import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack"

const EditBook = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState();
  const { id } = useParams();
  const {enqueueSnackbar}=useSnackbar()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/books/${id}`, data)
      .then((res) => {
        console.log(res);
        enqueueSnackbar('Book Edited Successfully',{variant:'success'})
        navigate("/");
      })
      .catch((err) => {console.log(err)
        enqueueSnackbar('Error',{variant:'error'})
      });
    console.log(data);
    setLoading(false);
  };

  return (
    <div>
      <div className="mx-3 mt-4">
        <BackButton />
        <h1 className="text-3xl my-4 mx-3">Edit Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col border-2 border-slate-800 rounded-xl bg-gray-300 text-white md:w-fit"
          >
            <div className="flex flex-row p-3 my-3">
              <span className="ml-2 mr-4 text-2xl text-black">Title</span>
              <input
                defaultValue={book.title}
                {...register("title")}
                className="bg-slate-200 text-black border-none outline-none rounded-md w-[400px] "
              />
            </div>
            <div className="flex flex-row p-3 my-3">
              <span className="ml-2 mr-4 text-2xl text-black">Author</span>
              <input
                defaultValue={book.author}
                {...register("author")}
                className="bg-slate-200 text-black border-none outline-none rounded-md max-sm:w-fit "
              />
            </div>
            <div className="flex flex-row p-3 my-3">
              <span className="ml-2 mr-4 text-2xl text-black">
                Published Year
              </span>
              <input
                defaultValue={book.publishYear}
                {...register("publishYear")}
                className="bg-slate-200 text-black border-none outline-none rounded-md max-sm:w-[100px]"
              />
            </div>
            <button
              type="submit"
              className="bg-green-300 h-9 w-[100px] mx-auto my-3 rounded-md"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditBook;
