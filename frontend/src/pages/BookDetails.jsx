import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

const BookDetails = () => {
  const [book,setBook]=useState({})
  const [loading,setLoading]=useState(false)
  const {id} =useParams();

  useEffect(()=>{
    setLoading(true);
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  },[])
  return (
    <div className='my-4 mx-8'>
      <BackButton/>
      <h1 className='my-3 text-3xl text-red-400'>Show Book</h1>
      {
        loading?
        <Spinner/>:
        (
          <div className="flex flex-col border-2 border-sky-200 rounded-xl w-fit p-4 ">
            <div className="my-4">
              <span className='mr-4 text-xl text-gray-500'>Id</span>
              <span>{book.id}</span>
            </div>
            <div className="my-4">
              <span className='mr-4 text-xl text-gray-500'>Book Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className='mr-4 text-xl text-gray-500'>Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className='mr-4 text-xl text-gray-500'>Published Year</span>
              <span>{book.publishYear}</span> 
            </div>
            <div className="my-4">
              <span className='mr-4 text-xl text-gray-500'>Last Update</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default BookDetails
