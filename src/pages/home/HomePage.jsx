import React, { useState } from "react";
import { BookSlider } from "../../components/book-slider/BookSlider";
import { books } from "../../data/books";
import "./homepage.css";
import Header from "../../components/header/Header2";
import FAQ from "../../components/faq/Faq";


const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header /> 
      
      <div className="page-container">
        <section className="page-content">
          <BookSlider data={books} />
        </section>
        <FAQ/>
        <footer className="footer">
          {/* Footer content goes here */}
        </footer>
      </div>
    </>
  );
};

export default HomePage;
