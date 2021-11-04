import { FaSearch } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='/'>FootballStats</a>
      </h1>
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
