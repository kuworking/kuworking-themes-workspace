# KUWORKING THEME BLOG THREE

### Gatsby Themes by kuworking.com

Based on `gatsby-theme-kuworking-blog` -> `gatsby-theme-kuworking-core`

[Demo](https://kuworking-theme-blog-three.netlify.com/)

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

- `gatsby new blog-three https://github.com/kuworking/kuworking-theme-blog-three`
- `cd ew blog-three`
- `gatsby develop`

And explore your site at `http://localhost:8000`

## Posts and Post images

- Posts are stored in `./content/posts` and have the structure `2019.10.05.my-first-post.mdx`
- The first _date_ part is necessary and is useful to sort files by date in the file explorer

- Post images are stored in `./content/posts/images` and have the structure `my-first-post.jpg`, this is, the same name than the post except the _date_ part


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
