import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar">
    <ul className="list-container">
      <li className="wave-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-img"
        />
        <p className="links">Wave</p>
      </li>
      <div className="hyper-links-container">
        <Link to="/" className="hyper-links">
          Home
        </Link>
        <Link to="/about" className="hyper-links">
          About
        </Link>
        <Link to="/contact" className="hyper-links">
          Contact
        </Link>
      </div>
    </ul>
  </nav>
)

export default Header
