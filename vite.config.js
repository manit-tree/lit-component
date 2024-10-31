import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
    ],
    build: {
        outDir: './dist',
        minify: 'esbuild',
        sourcemap: false,
        emptyOutDir: true,   
        lib: {
            entry: './src/index.ts',
            name:'___',
            formats: ['es','iife'],
            fileName: (format) => `[name].[format].js`
        },
        esbuild: {
            minify: true
        }
    }
})