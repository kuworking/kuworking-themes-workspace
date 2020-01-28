# Gatsby Theme ONE — by kuworking

This is the starter of Gatsby theme kuworking ONE, which itself uses the theme kuworking [CORE](https://github.com/kuworking/gatsby-theme-kuworking-core)

[Theme ONE](https://www.kuworking.com/themes/one)
[More themes by kuworking](https://www.kuworking.com/themes)

## Characteristics

- Posts based on MDX
- Uses theme-UI
- Posts with tags and pagination (if desired)
- List of configured perks
-- Google Tag Manager
-- RSS feed
-- Sitemap
-- Progressive Web Application
-- Robots.txt
-- Manifest
-- SEO
-- Cookie consent
-- Providers for google maps, instagram, pinterest, youtube, highlight.js, codepen
-- Components for lazy loading of images (including different versions for desktop and mobile) 
-- Disqus
-- MailChimp

## Relevant Dependencies

@emotion
@mdx-js
gatsby-image
gatsby-plugin-feed
gatsby-plugin-google-tagmanager
gatsby-plugin-manifest
gatsby-plugin-mdx
gatsby-plugin-offline
gatsby-plugin-robots-txt
gatsby-plugin-sharp
gatsby-plugin-sitemap
react-cookie-consent
react-helmet
react-share
theme-ui

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

## Folders

Files that you may want to modify

```
.
├─ content
|  └── core
|  |   └── none.jpg // fallback image
|  └── icons
|  |   └── favicon.png // favicon
|  └── pages
|  |   └── 404.js // not found page
|  |   └── me.js // bio page
|  └── posts
|  |   └── ...
|  |   └── images // post images
|  |       └── ...
|
├─ src
|  └── utils
|      └── app.js // edit this file to configure basic data of your site
|      └── config.js // edit this file to define all text of your site plus other configuration data
|      └── sitemap.js // define here the routes you do not want to track with your _sitemap_
|      └── tagmanager.js // define here your tagmanager tracking code
|
|─ MIT LICENSE // the license of this theme
|─ netlify.toml // of use if you will deploy to Netlify
|─ package.json // edit this file to change the name of your package, description, repository and if it is public or private
|─ README.md // this file you are reading now
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kuworking/kuworking-theme-one)
