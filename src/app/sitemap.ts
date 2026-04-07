import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
// import { getAllDocs } from "@/features/doc/data/documents"

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Re-enable blog posts in sitemap once original content is added
  // const posts = getAllDocs().map((post) => ({
  //   url: `${SITE_INFO.url}/blog/${post.slug}`,
  //   lastModified: new Date(post.metadata.updatedAt).toISOString(),
  // }))

  const routes = ["", "/blog"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
