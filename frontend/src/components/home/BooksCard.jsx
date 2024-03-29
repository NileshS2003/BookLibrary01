import SingleBookCard from "./SingleBookCard";


function BooksCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <SingleBookCard key={book.id} book={book}/>
      ))}
    </div>
  );
}

export default BooksCard;
