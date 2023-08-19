//import Handlebars from 'handlebars/runtime';
//import link from './partials/link/link.hbs';

//Handlebars.registerPartial('link', link);
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    root!.innerHTML = `
        <main>
            <nav>
                <a href="pages/auth/auth.html" class="link">Авторизация</a>
                <a href="pages/registration/registration.html" class="link">Регистрация</a>
                <a href="pages/chat/chat.html" class="link">Список чатов</a>
                <a href="pages/settings/settings.html" class="link">Настройки</a>
                <a href="pages/errorPages/error404.html" class="link">Ошибка404</a>
                <a href="pages/errorPages/error500.html" class="link">Ошибка500</a>
            </nav>
        </main>
    `
})