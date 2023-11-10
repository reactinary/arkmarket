
// ℹ️ Fake example to illustrate the usage of the sitemap generator


export default async function sitemap() {
  return [
    {
      url: "https://www.arkmarket/explore/items/everai-heroes",
      lastModified: new Date()
    }
  ]
}


// 👇 Output on: http://localhost:3000/sitemap.xml  👇

// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://www.arkmarket/explore/items/everai-heroes</loc>
//     <lastmod>2023-11-10T02:17:00.358Z</lastmod>
//   </url>
// </urlset>
