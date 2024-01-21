import React from "react";
import { useLocation, Link } from "react-router-dom";
import * as styles from "../styles.scss";
import logo from "../img/jack_logo.png";

const BookDetailsPage = () => {
  const location = useLocation();
  const { title, author, description, image } = location.state || {};

  console.log(title);
  return (
    <div className="display_page_container">
      <span className="book-details-nav">
        <Link
          to="/search"
          className="details-return-btn"
          id="details-return-btn"
        >
          Return to Search Page
        </Link>
        <h1 className="details-heading">LitLounge</h1>
      </span>
      <div className="details-container">
        <img src={image} alt={title} />
        <div className="details-container-text">
          <h4>Title: {title}</h4>
          <p>Author: {author}</p>
          <p>Description: {description}...</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
