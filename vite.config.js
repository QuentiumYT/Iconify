import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

/** @type {import('vite').UserConfig} */
export default {
    appType: 'custom',
    publicDir: false,
    mode: process.env.NODE_ENV,
    base: './',
    build: {
        minify: true ? process.env.NODE_ENV === 'production' : false,
        outDir: 'build/iconify',
        rollupOptions: {
            input: {
                'main': 'extension/scripts/main.js',
                'assets': 'extension/scripts/assets.js',
            },
            output: {
                entryFileNames: 'assets/[name].js',
            },
            plugins: [
                viteStaticCopy({
                    targets: [
                        {
                            src: './extension/manifest.json',
                            dest: '',
                        },
                        {
                            src: './extension/icons/*',
                            dest: 'icons/',
                        },
                        {
                            src: 'node_modules/jquery/dist/jquery.min.js',
                            dest: 'assets/',
                        },
                        {
                            src: 'node_modules/node-snackbar/dist/snackbar.min.js',
                            dest: 'assets/',
                        }
                    ]
                })
            ],
        },
    },
};
