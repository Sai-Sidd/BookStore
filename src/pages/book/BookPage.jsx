import { useParams } from "react-router-dom";
import "./book.css";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import {useState,useContext} from "react";
import BookStoreContext from "../../context/bookStorContext";
import Header from "../../components/header/Header";

const BookPage = () => {
  const { addToCart } = useContext(BookStoreContext);

  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const book = books.find((b) => b.id === +id);

  return (
    <>
    <Header/>
      <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
            <button onClick={() => addToCart(book,qty)} className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
      Atomic Habits is a transformative self-help book written by James Clear. 
      It explores the power of small habits and their impact on personal growth and success. 
      James Clear says in this book that making small, incremental changes in our daily routines 
      can lead to significant long-term transformations.
      </p>

      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength}pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookPage;
