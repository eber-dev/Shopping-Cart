import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/cart"></NavLink>
        </nav>
    );
}

export default Navbar;
