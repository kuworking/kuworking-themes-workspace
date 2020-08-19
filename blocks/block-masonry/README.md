# BLOCK MASONRY

![npm](https://img.shields.io/npm/v/@kuworking/block-masonry?style=flat-square)

React component coded in ES6

## 🚀 Installation

```bash
yarn add @kuworking/block-masonry
```

## 🔥 How to Use

```jsx
import React from 'react'
import { Structure } from '@kuworking/block-masonry
import items from './masonry-items.json'

// folder locates the images
const MyComponent = () => (
  <>
    <Structure folder="/blocks/masonry" items={items} />
  </>
)
```

See the needed images in the codesandbox, find the links at [kuworking](https://www.kuworking.com/react-blocks)

## 🖖 Integration in Gatsby

Since the package does not start with `gatsby-theme`, it is not included by default in the transpilation

Then, you need to do it with the plugin `gatsby-plugin-compile-es6-packages` and include it in `gatsby-config.js`

```json
{
  resolve: `gatsby-plugin-compile-es6-packages`,
  options: {
    modules: [
      '@kuworking/block-masonry',
    ],
  },
},
```

## 🖖 Integration in React

Take a look at the [codesandbox](https://www.kuworking.com/react-blocks), I've used this `package.json` and this `babel configuration`

```json
{
  "dependencies": {
    "react": "16.12.0",
    "react-dom": "16.12.0",
    "react-scripts": "3.0.1"
  },
  "devDependencies": {
    "@babel/cli": "7.10.5",
    "@babel/plugin-transform-modules-commonjs": "7.10.4",
    "@babel/preset-react": "7.10.4",
    "babel-core": "6.26.3"
  }
}
```

```json
{
  "presets": ["@babel/preset-react"],
  "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
```
