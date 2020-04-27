import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';

// Routes
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'contact'
}

// Router
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
};

export default router;