# BLOCK LANDING TWO

![npm](https://img.shields.io/npm/v/@kuworking/block-landing-two?style=flat-square)

React component coded in ES6

## 🚀 Installation

```bash
yarn add @kuworking/block-landing-two
```

## 🔥 How to Use

```jsx
import React from 'react'
import { Structure } from '@kuworking/block-landing-two'

// folder locates the images
const MyComponent = () => (
  <>
    <Structure folder="/" />
  </>
)
```

See the needed images in the codesandbox, find the links at [kuworking](http://localhost:8000/react-blocks)

## 🖖 Integration in Gatsby

Since the package does not start with `gatsby-theme`, it is not included by default in the transpilation

Then, you need to do it with the plugin `gatsby-plugin-compile-es6-packages` and include it in `gatsby-config.js`

```json
{
  resolve: `gatsby-plugin-compile-es6-packages`,
  options: {
    modules: [
      '@kuworking/block-landing-two',
    ],
  },
},
```
