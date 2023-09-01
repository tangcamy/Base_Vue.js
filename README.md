# vue-project

This template should help get you started developing with Vue 3 in Vite.

# HackMD

- [Vue.js Lesson - AUO](https://hackmd.io/6TNeUgW6TgqnzWWUjJtkFQ?both)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### CSS 框架 - tailwind

- 參考網址：https://tailwindcss.com/docs/guides/vite
  (參考網址需要的流程＆設定檔調整)
- 檔案：src/main.js/

```sh
import './assets/main.css'
```

- 檔案：src/assets/main.css

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```
