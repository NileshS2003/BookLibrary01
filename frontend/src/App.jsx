import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import AddBook from "./pages/AddBook";
const router = createBrowserRouter([
  {
    path: "/books/addbook",
    element: <AddBook></AddBook>
  },
  {
    path: "/books/details/:id",
    element: <BookDetails></BookDetails>
  },
  {
    path: "/books/editbook/:id",
    element: <EditBook></EditBook>
  },
  {
    path: "/books/deletebook/:id",
    element: <DeleteBook></DeleteBook>
  },
  {
    path: "/",
    element: <Home></Home>
  },
])
function App() {
  return (
    <div> 
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
