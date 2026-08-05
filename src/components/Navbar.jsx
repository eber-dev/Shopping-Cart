import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import icono from '../assets/icono1.png';

function Navbar() {
    return (
        <nav className={style.navegacion}>
            <div className={style.logo}>
                <img src={icono} alt="logo principal" />
                <p>Tech Store</p>
            </div>

            <div className={style.opciones}>
                <NavLink
                    className={({ isActive }) =>
                        `${style.opcion} ${isActive ? style.activo : ''}`
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${style.opcion} ${isActive ? style.activo : ''}`
                    }
                    to="/shop"
                >
                    Shop
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${style.opcion} ${isActive ? style.activo : ''}`
                    }
                    to="/cart"
                >
                    Cart
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
