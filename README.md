# Lit Component

Mini project for learning how to create Web Component using Lit

### index.ts

```ts
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    version = '1.0.0';

    render() {
        return html`
            <p><strong>Lit Component</strong> v ${this.version}</p>
        `;
    }
}
```

### package.json

```json
{
  "name": "lit-component",
  "description": "Starting template for develop Lit Component",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "author": "Mr.Manit Treeprapankit",
  "license": "MIT",
  "dependencies": {
    "lit": "^3.2.1"
  },
  "devDependencies": {
    "typescript": "~5.6.2",
    "vite": "^5.4.10"
  }
}
```

### vite.config.js

```js
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
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```
