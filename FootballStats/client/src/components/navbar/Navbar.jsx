import { FaSearch } from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <a href='/' id='logo'>
        <div className='logo-cont'>
          <BiFootball id='football' />
          PLStats
        </div>
      </a>
      <ul>
        <li>
          <a href='/'>Standings</a>
        </li>
        <li>
          <a href='/'>Top Scorers</a>
        </li>
      </ul>
      <div id='search-cont'>
        <input type='text' placeholder='Search teams or players' />
        <FaSearch id='search-icon' />
      </div>
    </nav>
  );
};

export default Navbar;
