import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLinks, setLinks] = useState(false);

  return (
    <nav className='navbar'>
      <Link to='/' id='logo'>
        <div className='logo-cont'>PL Stats</div>
      </Link>
      <div className='icon-cont'>
        <FaBars
          className='icons'
          style={{ color: "#e52d8a" }}
          onClick={() => {
            setLinks(!isLinks);
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
    </nav>
  );
};

export default Navbar;
