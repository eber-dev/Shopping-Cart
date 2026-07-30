import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={style.navegacion}>
            <NavLink className={style.opcion} to="/">
                Home
            </NavLink>
            <NavLink className={style.opcion} to="/shop">
                Shop
            </NavLink>
            <NavLink className={style.opcion} to="/cart">
                Cart
            </NavLink>
        </nav>
    );
}

export default Navbar;
