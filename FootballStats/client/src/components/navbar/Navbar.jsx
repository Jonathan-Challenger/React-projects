import { FaSearch, FaBars } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isLinks, setLinks] = useState(false);
  const [isSearch, setSearch] = useState(false);

  return (
    <nav className='navbar bg-dark'>
      <a href='/' id='logo'>
        <div className='logo-cont'>
          <BiFootball id='football' />
          PLStats
        </div>
      </a>
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
            <a href='/'>Standings</a>
          </li>
          <li>
            <a href='/'>Top Scorers</a>
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
