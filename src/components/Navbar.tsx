import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./Navbar.css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("");
  }

  return (
    <nav id="navbar">
      <h1>
        <Link to="/">
          <BiCameraMovie />Moviestv
        </Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque um filme" 
        onChange={(e) => setSearch(e.target.value)}/>
        

        <button type="submit">
          {" "}
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};
 export default NavBar;