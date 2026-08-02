import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import icono from '../assets/icono1.png';

function Navbar() {
    return (
        <nav className={style.navegacion}>
            <div className={style.logo}>
                <img src={icono} alt="logo principal" />
            </div>

            <div className={style.opciones}>
                <NavLink className={style.opcion} to="/">
                    Home
                </NavLink>
                <NavLink className={style.opcion} to="/shop">
                    Shop
                </NavLink>
                <NavLink className={style.opcion} to="/cart">
                    Cart
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
