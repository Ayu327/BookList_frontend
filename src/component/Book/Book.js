import React, { useContext } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

// create a context object
const BookContext = React.createContext();

const Book = (props) => {
  const history = useNavigate();
  const { _id, title, author, name, genre, image } = props.book;

  // use the context object to access the deleteHandler function
  const { deleteHandler } = useContext(BookContext);

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h1>{title}</h1>
      <article>{author}</article>
      <h3>{genre}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={() => deleteHandler(_id)} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

const BookList = ({ books }) => {
  const deleteHandler = async (id) => {
    await axios.delete(`books/${id}`).then((res) => res.data);
    // reload the page after deleting the book
    window.location.reload();
  };

  return (
    <BookContext.Provider value={{ deleteHandler }}>
      <div>
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </BookContext.Provider>
  );
};

export default BookList;
