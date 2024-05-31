import * as styles from "../../styles.scss";
import { Link, useNavigate } from "react-router-dom";
import missingThumbnail from "../../img/missingThumbnail.png";

const BookCard = (props) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCardClick = () => {
    navigate(`/book-details`, {
      state: {
        title: props.title,
        author: props.author,
        description: props.description,
        image: props.image,
        publishedDate: formatDate(props.publishedDate),
      },
    });
  };

  const imageSource = props.image || missingThumbnail;

  const shortDescription =
    typeof props.description === "string" && props.description.trim() !== ""
      ? props.description.substring(0, 100)
      : "No description available";

  return (
    <div className="search__book-card" onClick={handleCardClick}>
      <img src={imageSource} alt={props.title} />
      <div className="book-info-container">
        <h4>{props.title}</h4>
        <p>Author: {props.author}</p>
        <p>Description: {shortDescription}...</p>
      </div>
    </div>
  );
};

export default BookCard;
