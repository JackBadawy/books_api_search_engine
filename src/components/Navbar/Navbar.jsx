import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/jack_logo.png";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-search-bar-container">
        <h1 className="nav-heading">LitLounge</h1>
        {/**doesnt need to be signature logo or could put sig in footer */}
        <SearchBar />
      </div>
      <img src={logo} alt="Signiture Logo" height={"54px"} />
    </nav>
  );
};

export default Navbar;
