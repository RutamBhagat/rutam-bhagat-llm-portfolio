import { baseURL } from "@/app/resources";
import { getPosts } from "@/app/utils";
import { routing } from "@/i18n/routing";

export default async function sitemap() {
  const locales = routing.locales;

  let blogs = locales.flatMap((locale) =>
    getPosts(["src", "app", "[locale]", "blog", "posts", locale]).map(
      (post) => ({
        url: `${baseURL}/${locale}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      })
    )
  );

  let genais = locales.flatMap((locale) =>
    getPosts(["src", "app", "[locale]", "genai", "projects", locale]).map(
      (post) => ({
        url: `${baseURL}/${locale}/genai/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      })
    )
  );

  let fullstacks = locales.flatMap((locale) =>
    getPosts(["src", "app", "[locale]", "fullstack", "projects", locale]).map(
      (post) => ({
        url: `${baseURL}/${locale}/fullstack/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      })
    )
  );

  let routes = locales.flatMap((locale) =>
    ["", "/blog", "genais", "/fullstack"].map((route) => ({
      url: `${baseURL}/${locale}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }))
  );

  return [...routes, ...blogs, ...genais, ...fullstacks];
}
