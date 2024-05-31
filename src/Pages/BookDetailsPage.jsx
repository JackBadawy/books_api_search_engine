import { useLocation, Link } from "react-router-dom";
import * as styles from "../styles.scss";
import * as details from "../details.scss";
import logo from "../img/jack_logo.png";

const BookDetailsPage = () => {
  const location = useLocation();
  const { title, author, description, image, publishedDate } =
    location.state || {};

  return (
    <div className="display_page_container">
      <span className="details__nav">
        <div className="details__return__container">
          <h1 className="details__heading">LitLounge</h1>
          <Link
            to="/search"
            className="details__return__btn"
            id="details-return-btn"
          >
            Return to Search Page
          </Link>
        </div>
        <img src={logo} alt="" height={"54px"} />
      </span>
      <div className="details__container">
        <img src={image} alt={title} className="details__thumbnail" />
        <div className="details__container__text">
          <h4>Title: {title}</h4>
          <p>Author: {author}</p>
          <p>Published: {publishedDate}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
