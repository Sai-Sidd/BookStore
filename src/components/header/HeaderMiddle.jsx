import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import BookStoreContext from "../../context/bookStorContext";
import { books } from "../../data/books";
import './headermiddle.css'; // Import your CSS file for styling

const HeaderMiddle = () => {
  const { cartInfoLength } = useContext(BookStoreContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState({
    price: '',
    format: '',
    language: '',
    publicationDate: ''
  });

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterCriteriaChange = (criteriaName, value) => {
    setFilterCriteria({
      ...filterCriteria,
      [criteriaName]: value
    });
  };

  const filterBooks = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    const filteredBooks = books.filter(book => {
      const title = book.title ? book.title.toLowerCase() : '';
      const author = book.author ? book.author.toLowerCase() : '';
      const genre = book.genre ? book.genre.toLowerCase() : '';
      const keywords = book.keywords ? book.keywords.toLowerCase() : '';
      const language = book.language ? book.language.toLowerCase() : '';

      return (
        title.includes(lowercasedSearchTerm) ||
        author.includes(lowercasedSearchTerm) ||
        genre.includes(lowercasedSearchTerm) ||
        keywords.includes(lowercasedSearchTerm) ||
        language.includes(lowercasedSearchTerm)
      );
    });

    return filteredBooks;
  };

  const filteredBooks = filterBooks();

  return (
    <div className="header-middle"> 
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search by title, author, genre, language, or keywords..."
          onChange={handleSearchInputChange}
          value={searchTerm}
        />
        <i className="bi bi-search"></i>
      </div>

      {searchTerm && (
        <div className="filtered-books-grid">
          {filteredBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img
                src={`${process.env.PUBLIC_URL}/books/${book.image}`}
                alt={book.title}
                className="book-card-image"
              />
              <div className="book-card-content">
                <h3 className="book-card-title">{book.title}</h3>
                <p className="book-card-author">Author: {book.author}</p>
                <p className="book-card-language">Language: {book.language}</p>
                {/* Add more book details here */}
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default HeaderMiddle;
