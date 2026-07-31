import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';

function Layout() {
    return (
        <div className={style.principal}>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;
