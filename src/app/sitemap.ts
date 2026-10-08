import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { CONTENT_TYPES } from "@/config/navigation";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zombie-arena.wiki";

  // Static paths that always exist: root, legal pages, and content type listing pages
  const legalPaths = ["/privacy-policy", "/terms-of-service", "/copyright", "/about"];
  const contentTypePaths = CONTENT_TYPES.map((type) => `/${type}`);
  const staticPaths = ["/", ...contentTypePaths, ...legalPaths];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = Array.from(new Set([...staticPaths, ...dynamicPaths]));

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : path === "/guide" ? 0.8 : 0.6,
    })),
  );
}
