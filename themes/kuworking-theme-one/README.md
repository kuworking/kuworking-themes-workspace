# Gatsby THEME ONE — by kuworking

This is the starter of Gatsby kuworking THEME ONE, which itself uses the kuworking [THEME CORE](https://github.com/kuworking/gatsby-theme-kuworking-core)

You can find the demo of the theme [here](https://www.kuworking.com/themes/one) and other themes by kuworking [here](https://www.kuworking.com/themes)

## Characteristics

- Posts based on MDX
- Uses theme-UI
- Posts with tags and pagination (if desired)
- Google Tag Manager
- RSS feed
- Sitemap
- Progressive Web Application
- Robots.txt
- Manifest
- SEO
- Cookie consent
- Providers for google maps, instagram, pinterest, youtube, highlight.js, codepen
- Components for lazy loading of images (including different versions for desktop and mobile) 
- Disqus
- MailChimp

## Relevant Dependencies

- @emotion
- @mdx-js
- gatsby-image
- gatsby-plugin-feed
- gatsby-plugin-google-tagmanager
- gatsby-plugin-manifest
- gatsby-plugin-mdx
- gatsby-plugin-offline
- gatsby-plugin-robots-txt
- gatsby-plugin-sharp
- gatsby-plugin-sitemap
- react-cookie-consent
- react-helmet
- react-share
- theme-ui

## Usage

- `gatsby new one https://github.com/kuworking/kuworking-theme-one`
- `cd new one`
- `gatsby develop`

And explore your site at `http://localhost:8000`

## Posts and Post images

- Posts are stored in `./content/posts` and have the structure `2019.10.05.my-first-post.mdx`
- The first _date_ part is necessary and is useful to sort files by date in the file explorer
- The post image is stored in `./content/posts/images` and has the structure of `my-first-post.jpg`, this is, the same name than the post except the _date_ part

## How to add a post?

The easiest way is to modify or copy-paste the post example and follow its structure

The structure is like this

```js
---
date: 2019-10-05
title: 'My first #post#! 1'
tags: gatsby, kuworking, themes
snippet: 'This is my first post, where the snippet aims to appear in Google'
abstract: 'This is my #first# post, and this is an abstract '
---

import { Link } from 'gatsby'

# My first post
```

The first part between `---` is known as the frontmatter and is written in YAML, there you specify the date, title, tags, snippet and abstract

- The date marked there is the one that is translated into the post, this date should match the one in the filename for consistency, but it is not necessary, the date in the filename is only useful for sorting purposes in the explorer
- In relation to the tags, Gatsby will create a page for each tag present in these post frontmatters (containing the posts that have these tags)
- The snippet refers to the description that will appear in RSS feeds, schema and meta tag
- The abstract is the description of the post that may appear in the grid of the website

## Folders

Files that you may want to modify

```
.
├─ content
|  └── core // empty folder
|  └── icons
|  |   └── favicon.png // favicon
|  └── pages
|  |   └── 404.js // not found page
|  |   └── me.js // bio page
|  └── posts
|  |   └── 2019.10.05.my-first-post.mdx
|  |   └── 2019.10.06.my-second-post.mdx
|  |   └── ...
|  |   └── images
|  |       └── my-first-post.jpg
|  |       └── my-first-post---400px.jpg
|  |       └── my-second-post.jpg
|  |       └── my-second-post---400px.jpg
|  |       └── ...
|
├─ src
|  └── utils
|      └── config.js // edit this file to define all text of your site and data for disqus, mailchimp and SEO
|      └── info.js // define the data for the website, the tagmanager code, the urls you don't want that appear in the sitemap,  and the number of posts to initiate pagination
|
|─ MIT LICENSE // the license of this theme
|─ package.json // edit this file to change the name of your package, description, repository and if it is public or private
|─ README.md // this file you are reading now
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kuworking/kuworking-theme-one)
