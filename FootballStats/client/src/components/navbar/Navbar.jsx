import { FaSearch, FaBars } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLinks, setLinks] = useState(false);
  const [isSearch, setSearch] = useState(false);

  return (
    <nav className='navbar bg-dark'>
      <Link to='/' id='logo'>
        <div className='logo-cont'>
          <BiFootball id='football' />
          PLStats
        </div>
      </Link>
      <div className='icon-cont'>
        <FaSearch
          className='icons'
          onClick={() => {
            setSearch(!isSearch);
            setLinks(false);
          }}
        />
        <FaBars
          className='icons'
          onClick={() => {
            setLinks(!isLinks);
            setSearch(false);
          }}
        />
      </div>
      <div className={`links-cont ${isLinks ? "active" : ""}`}>
        <ul>
          <li>
            <Link to='/standings'>Standings</Link>
          </li>
          <li>
            <Link to='/top-scorers'>Top Scorers</Link>
          </li>
        </ul>
      </div>
      <div className={`search-cont ${isSearch ? "active" : ""}`}>
        <input type='text' placeholder='Search PLStats' />
        <FaSearch id='search-icon' />
      </div>
    </nav>
  );
};

export default Navbar;
