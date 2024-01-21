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
        <div className="details-return-container">
          <h1 className="details-heading">LitLounge</h1>
          <Link
            to="/search"
            className="details-return-btn"
            id="details-return-btn"
          >
            Return to Search Page
          </Link>
        </div>
        <img src={logo} alt="" height={"54px"} />
      </span>
      <div className="details-container">
        <img src={image} alt={title} className="details-thumbnail" />
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
