import { Link } from 'react-router-dom';
 

function Nav() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Nav;