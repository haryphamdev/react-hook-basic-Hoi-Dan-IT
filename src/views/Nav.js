import '../views/Nav.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active1" to="/" exact>Home</NavLink>
            <NavLink activeClassName="active1" to="/timer">Timer Apps</NavLink>
            <NavLink activeClassName="active1" to="/todo">Todo Apps</NavLink>
            <NavLink activeClassName="active1" to="/blog">Blog Apps</NavLink>
            <NavLink activeClassName="active1" to="/secret">Secret</NavLink>
        </div>
    );
}

export default Nav;