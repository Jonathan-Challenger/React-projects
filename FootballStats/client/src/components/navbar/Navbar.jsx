import { FaSearch, FaBars } from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLinks, setLinks] = useState(false);
  const [isSearch, setSearch] = useState(false);

  return (
    <nav className='navbar bg-primary'>
      <Link to='/' id='logo'>
        <div className='logo-cont'>PL Stats</div>
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
            <Link to='/teams'>Teams</Link>
          </li>
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
