if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,n,t)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QGYEMMNCrI5LTHhY_sTJc/_buildManifest.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/QGYEMMNCrI5LTHhY_sTJc/_ssgManifest.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/378-d6fe69afeaeae0820515.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/482-3bea6d7d03822fdc7ddb.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/65-83ea4b453dc444f083bc.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/675-23653c1b51e0ee9e96e3.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/75fc9c18-5c1929f66343f0a636cd.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/788-df4ef6e69993ae1b776b.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/805-936702fdf79c43fc9b2b.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/911-83398998ed9ed0225e54.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/main-22b8da49a1a363fbd457.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/404-dbb10b5e831708f3bc5e.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/_app-15c2288ae15dbe2f73dd.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/basket-71e094c4e75232f474c4.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/index-fb9e8232c3c1106f6b81.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/login-d30cf6ff9c65ccc1a1b9.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/orders-14038cd57637cae635d8.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/ourstore-31f8a11f4d67d2156567.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-8d24c1564536a7ef42c8.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/register-20c2fae383c968872a5b.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/shop-b902a7f62e0b6664500f.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/shop/%5Bslug%5D-71e1ed679449037e7de3.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/success-1329c2c1eb414aab3358.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/pages/wishlist-4ee5494c1043b5317457.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/chunks/webpack-9fc9ab40a062a7008df3.js",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/css/0685f33293880c23b773.css",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/_next/static/css/4931c0d81ba46d2ff0c9.css",revision:"QGYEMMNCrI5LTHhY_sTJc"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-192x192.png",revision:"36ccef346fae5b35101c22c91f455e53"},{url:"/icon-256x256.png",revision:"97453c4cca84f86d5900a5d79bb1d0ce"},{url:"/icon-384x384.png",revision:"86d00831fddac60e15c60256fa772f48"},{url:"/icon-512x512.png",revision:"6a73b9db3d4e056844144c1e96bf80b1"},{url:"/manifest.json",revision:"10704f4ece9c9fcdb8f1a16b7a33b96b"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));