import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"

export const revalidate = false
export const dynamic = "force-static"

export function GET() {
  const allPosts = getAllDocs()

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog | ${SITE_INFO.name}</title>
      <link>${SITE_INFO.url}</link>
      <description>${SITE_INFO.description}</description>
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}
