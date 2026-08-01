import style from './Shop.module.css';
import { useState } from 'react';
import mobile from '../assets/mobile.svg';
import laptopMac from '../assets/laptop_mac.svg';
import laptopWindows from '../assets/laptop_windows.svg';
import keyboard from '../assets/keyboard.svg';
import mouse from '../assets/mouse.svg';
import headphones from '../assets/headphones.svg';
import desktopWindows from '../assets/desktop_windows_.svg';
import storage from '../assets/storage.svg';
import router from '../assets/router.svg';

function Shop({ onCartaClick }) {
    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: 'iPhone 16 Pro',
            categoria: 'Celulares',
            marca: 'Apple',
            precio: 1299,
            stock: 15,
            imagen: 'smartphone',
            disponible: true,
            descuento: 10,
            rating: 4.9,
        },
        {
            id: 2,
            nombre: 'Galaxy S25 Ultra',
            categoria: 'Celulares',
            marca: 'Samsung',
            precio: 1399,
            stock: 20,
            imagen: 'smartphone',
            disponible: true,
            descuento: 5,
            rating: 4.8,
        },
        {
            id: 3,
            nombre: 'MacBook Air M4',
            categoria: 'LaptopsMac',
            marca: 'Apple',
            precio: 1599,
            stock: 12,
            imagen: 'laptop_mac',
            disponible: true,
            descuento: 8,
            rating: 4.9,
        },
        {
            id: 4,
            nombre: 'Dell XPS 15',
            categoria: 'LaptopsWindows',
            marca: 'Dell',
            precio: 1899,
            stock: 8,
            imagen: 'laptop_windows',
            disponible: true,
            descuento: 12,
            rating: 4.8,
        },
        {
            id: 5,
            nombre: 'Logitech G Pro X',
            categoria: 'Teclados',
            marca: 'Logitech',
            precio: 139,
            stock: 25,
            imagen: 'keyboard',
            disponible: true,
            descuento: 20,
            rating: 4.9,
        },
        {
            id: 6,
            nombre: 'Logitech G502 Hero',
            categoria: 'Mouse',
            marca: 'Logitech',
            precio: 69,
            stock: 50,
            imagen: 'mouse',
            disponible: true,
            descuento: 10,
            rating: 4.9,
        },
        {
            id: 7,
            nombre: 'HyperX Cloud III',
            categoria: 'Audifonos',
            marca: 'HyperX',
            precio: 129,
            stock: 18,
            imagen: 'headphones',
            disponible: true,
            descuento: 10,
            rating: 4.8,
        },
        {
            id: 8,
            nombre: 'Monitor LG UltraGear 27',
            categoria: 'Monitores',
            marca: 'LG',
            precio: 349,
            stock: 16,
            imagen: 'desktop_windows',
            disponible: true,
            descuento: 18,
            rating: 4.8,
        },
        {
            id: 9,
            nombre: 'Kingston NV3',
            categoria: 'SSD',
            marca: 'Kingston',
            precio: 99,
            stock: 60,
            imagen: 'storage',
            disponible: true,
            descuento: 25,
            rating: 4.7,
        },
        {
            id: 10,
            nombre: 'TP-Link Archer AX55',
            categoria: 'Routers',
            marca: 'TP-Link',
            precio: 129,
            stock: 24,
            imagen: 'router',
            disponible: true,
            descuento: 12,
            rating: 4.6,
        },
    ]);

    const seleccionado = (producto) => {
        onCartaClick(producto.id);

        const nuevaLista = productos.map((p) => {
            if (p.id === producto.id) {
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
