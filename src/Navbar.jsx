
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo"> Zoë Denahy </div>
        <ul>
          <li><Link className="tab" to="/paintings">Paintings</Link></li>
          <li><Link className="tab" to="/about">About</Link></li>
          <li><Link className="tab" to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;