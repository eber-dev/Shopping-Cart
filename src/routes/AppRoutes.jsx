import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
        ],
    },
]);

export default router;
