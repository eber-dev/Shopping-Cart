import style from './Cart.module.css';
import { useOutletContext } from 'react-router-dom';
import mobile from '../assets/mobile.svg';
import laptopMac from '../assets/laptop_mac.svg';
import laptopWindows from '../assets/laptop_windows.svg';
import keyboard from '../assets/keyboard.svg';
import mouse from '../assets/mouse.svg';
import headphones from '../assets/headphones.svg';
import desktopWindows from '../assets/desktop_windows_.svg';
import storage from '../assets/storage.svg';
import router from '../assets/router.svg';

function Cart() {
    const { carrito, setCarrito, productos, setProductos } = useOutletContext();

    const eliminado = (borrar) => {
        setCarrito((previo) => previo.filter((u) => u.id != borrar.id));

        const nuevaLista = productos.map((p) => {
            if (p.id === borrar.id) {
                return {
                    ...p,
                    stock: p.stock + borrar.cantidad,
                };
            }

            return p;
        });

        setProductos(nuevaLista);
    };

    const asignarIcono = (categoria) => {
        switch (categoria) {
            case 'Celulares':
                return mobile;

            case 'LaptopsMac':
                return laptopMac;

            case 'LaptopsWindows':
                return laptopWindows;

            case 'Teclados':
                return keyboard;

            case 'Mouse':
                return mouse;

            case 'Audifonos':
                return headphones;

            case 'Monitores':
                return desktopWindows;

            case 'SSD':
                return storage;

            case 'Routers':
                return router;

            default:
                return mobile;
        }
    };

    return (
        <div className={style.caja}>
            {carrito.map((carrito) => (
                <div className={style.elemento}>
                    <img
                        src={asignarIcono(carrito.categoria)}
                        alt={carrito.nombre}
                    />

                    <div className={style.informacion}>
                        <h2>{carrito.nombre}</h2>
                        <h3>{carrito.marca}</h3>

                        <p>
                            <strong>Categoría:</strong> {carrito.categoria}
                        </p>
                        <p>
                            <strong>Precio:</strong> {carrito.precio}
                        </p>
                        <p>
                            <strong>Cantidad: </strong> {carrito.cantidad}
                        </p>
                        <p>
                            <strong>Descuento:</strong> {carrito.descuento}%
                        </p>
                    </div>
                    <button onClick={() => eliminado(carrito)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
