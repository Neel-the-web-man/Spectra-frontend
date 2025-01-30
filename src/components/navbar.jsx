import "./Navbar.css"
import { Link } from "react-router"
const Navbar = () => {
  return (
    <navbar className="nav-cont">
      <div className='nav-logo'><a href="/">Spectra Movies</a></div>
      <div className="nav-links">
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Team'>Team</Link></li>
        <li><Link to='https://github.com/Neel-the-web-man/Spectra-backend'>Repo Link</Link></li>
      </div>
    </navbar>
  )
}

export default Navbar
