# BLOCK LANDING ONE

![npm](https://img.shields.io/npm/v/@kuworking/block-landing-one?style=flat-square)

React component coded in ES6

## 🚀 Installation

```bash
yarn add @kuworking/block-landing-one
```

## 🔥 How to Use

```jsx
import React from 'react'
import { Structure } from '@kuworking/block-landing-one'

// folder locates the images
const MyComponent = () => (
  <>
    <Structure folder="/" />
  </>
)
```

See the needed images in the codesandbox, find the links at [kuworking](http://localhost:8000/react-blocks)

See the json structure also in the codesandbox, it is an array of objects like this

```json
{
  "name": "element",
  "categories": "category_1",
  "link": "https://www.kuworking.com",
  "image": "/01.jpg"
}
```

## 🖖 Integration in Gatsby

Since the package does not start with `gatsby-theme`, it is not included by default in the transpilation

Then, you need to do it with the plugin `gatsby-plugin-compile-es6-packages` and include it in `gatsby-config.js`

```json
{
  "resolve": `gatsby-plugin-compile-es6-packages`,
  "options": {
    "modules": ["@kuworking/block-landing-one"]
  }
}
```
