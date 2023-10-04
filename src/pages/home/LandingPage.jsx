import React, { useState } from "react";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import BookSlider2 from "../../components/book-slider/BookSlider2";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import { books } from "../../data/books";
import Header from "../../components/header/Header";
import Sidebar from "./SideBar"; // Adjust the import path

const LandingPage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <Header />
      <div className="container">
        {isSidebarVisible && <Sidebar />} {/* Conditionally render the sidebar */}
        <section>
          <Slider />
          <Services />
          <HeadingTitle title="Most gifted" />
          <BookSlider2 data={books} />
          <HeadingTitle title="Best Seller" />
          <BookSlider2 data={books} />
          <HeadingTitle title="Most wished for" />
          <BookSlider2 data={books} />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
