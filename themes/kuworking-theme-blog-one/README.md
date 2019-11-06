# KUWORKING THEME BLOG ONE

### Gatsby Themes by kuworking.com

Based on `gatsby-theme-kuworking-blog` -> `gatsby-theme-kuworking-core`

[Demo](kuworking-theme-blog-one)

More themes on [themes.kuworking.com](https://themes.kuworking.com)

## Characteristics

- MDX
- Theme-UI with 4 color modes
- Typography
- @Emotion
- Google Tag Manager
- RSS Feed
- SiteMap
- Robots.txt
- Offline
- Cookie Consent
- Disqus
- Mail Chimp

## Usage

- `gatsby new blog-one https://github.com/kuworking/kuworking-theme-blog-one`
- `cd ew blog-one`
- `gatsby develop`

And explore your site at `http://localhost:8000`

## Folders

├─ content
|  └── core
|  |   └── none.jpg // fallback image
|  └── icons
|  |   └── **favicon.png** // favicon
|  └── pages
|  |   └── 404.js // not necessary to modify
|  |   └── **me.js** // **edit with your text**
|  └── posts
|  |   └── images // post images, must have the same filename as the partner post (minus the date part)
|  |       └── **my-first-post.jpg** // image example, partner of 2019.10.05.my-first-post.mdx
|  |       └── ...
|  |   └── **2019.10.05.my-first-post.mdx** // post example, the first "date" part is necessary but only serves sorting purposes in the file explorer, nothing else
|  |   └── ...
|  └── wallpapers // of no use in this theme
|
├─ src
|  └── gatsby-theme-kuworking-blog // folder, not necessary to modify
|  |
|  └── utils
|      └── **app.js** // **edit** this file to configure basic data of your site
|      └── **config.js** // **edit** this file to define all text of your site plus other configuration data
|      └── **sitemap.js** // define here the routes you do not want to track with your _sitemap_
|      └── **tagmanager.js** // define here your tagmanager tracking code
|
|─ gatsby-config.js // not necessary to modify
|─ MIT LICENSE // not necessary to modify
|─ netlify.toml // of use if you will deploy to Netlify
|─ **package.json** // **edit** to change the name of your package, description, repository and if it is public or private
|─ **README.md** // **edit** this file to change the information
|─ yarn.lock // not necessary to modify


