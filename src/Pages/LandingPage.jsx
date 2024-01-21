import { Navigate } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import * as styles from "../styles.scss";
import logo from "../img/jack_logo.png";

const LandingPage = () => {
  return (
    <>
      <header>
        <img src={logo} alt="" />
      </header>
      <main className="main-landing-page">
        <h1 className="landing-heading">LitLounge</h1>
        <p className="landing-para">
          Welcome to the LitLounge! please search a book to get started
        </p>
        <SearchBar />
      </main>
    </>
  );
};

export default LandingPage;
