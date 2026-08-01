import style from './Shop.module.css';
import mobile from '../assets/mobile.svg';
import laptopMac from '../assets/laptop_mac.svg';
import laptopWindows from '../assets/laptop_windows.svg';
import keyboard from '../assets/keyboard.svg';
import mouse from '../assets/mouse.svg';
import headphones from '../assets/headphones.svg';
import desktopWindows from '../assets/desktop_windows_.svg';
import storage from '../assets/storage.svg';
import router from '../assets/router.svg';
import { useOutletContext } from 'react-router-dom';

function Shop() {
    const { productos, setProductos, carrito, setCarrito } = useOutletContext();

    const seleccionado = (producto) => {
        const nuevaLista = productos.map((p) => {
            if (p.id === producto.id) {
                if (producto.stock <= 0) {
                    return p;
                }

                const existe = carrito.find((p) => p.id == producto.id);

                if (!existe) {
                    setCarrito((anterior) => [
                        ...anterior,
                        { ...producto, cantidad: 1 },
                    ]);
                } else {
                    const añadir = carrito.map((m) => {
                        if (m.id === producto.id) {
                            return {
                                ...m,
                                cantidad: m.cantidad + 1,
                            };
                        } else {
                            return {
                                ...m,
                            };
                        }
                    });
                    setCarrito(añadir);
                }

                return {
                    ...p,
                    stock: p.stock - 1,
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
            {productos.map((producto) => (
                <div key={producto.id} className={style.carta}>
                    <img
                        src={asignarIcono(producto.categoria)}
                        alt={producto.nombre}
                    />

                    <div className={style.informacion}>
                        <h2>{producto.nombre}</h2>
                        <h3>{producto.marca}</h3>

                        <p>
                            <strong>Categoría:</strong> {producto.categoria}
                        </p>
                        <p>
                            <strong>Precio:</strong> ${producto.precio}
                        </p>
                        <p>
                            <strong>Descuento:</strong> {producto.descuento}%
                        </p>
                        <p>
                            <strong>Stock:</strong> {producto.stock}
                        </p>
                        <p>
                            <strong>Disponibilidad:</strong>{' '}
                            {producto.disponible ? 'En stock' : 'Agotado'}
                        </p>
                        <p>
                            <strong>Calificación:</strong> ⭐ {producto.rating}
                        </p>
                    </div>

                    <button onClick={() => seleccionado(producto)}>
                        Añadir
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Shop;
