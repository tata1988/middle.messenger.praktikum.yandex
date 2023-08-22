import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
    root: resolve(__dirname, 'src'),

    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                auth: resolve(__dirname, 'src/pages/auth/auth.html'),
                registration: resolve(__dirname, 'src/pages/registration/registration.html'),
                chat: resolve(__dirname, 'src/pages/chat/chat.html'),
                settings: resolve(__dirname, 'src/pages/settings/settings.html'),
                error404: resolve(__dirname, 'src/pages/errorPages/error404.html'),
                error500: resolve(__dirname, 'src/pages/errorPages/error500.html'),                     
            }
        },
    },                                                                                                                                                                                                          

    plugins: [handlebars()],
});
