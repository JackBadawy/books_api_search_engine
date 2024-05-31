import "../../nav.scss";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/jack_logo.png";
const Navbar = () => {
  return (
    <nav className="nav__bar">
      <div className="nav__bar__container">
        <h1 className="nav-heading">LitLounge</h1>

        <SearchBar />
      </div>
      <img src={logo} alt="Signiture Logo" height={"54px"} />
    </nav>
  );
};

export default Navbar;
