import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/jack_logo.png";
const Navbar = () => {
  return (
    <nav>
      {/* <img src={logo} alt="Signiture Logo" />{" "} */}
      <h1 className="nav-heading">LitLounge</h1>
      {/**doesnt need to be signature logo or could put sig in footer */}
      <SearchBar />
    </nav>
  );
};

export default Navbar;
