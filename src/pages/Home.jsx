import style from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={style.caja}>
            <div>
                <h1 className={style.titulo}>
                    Todo lo que necesitas en tecnología
                </h1>
                <p className={style.parrafo}>
                    Conoce nuestra colección de dispositivos tecnológicos y
                    encuentra el equipo ideal para ti.
                </p>
                <Link to="/shop">
                    <button className={style.catalogo}>Ver Productos</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
