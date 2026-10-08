export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Zombie Arena Wiki",
  shortName: "Zombie Arena",
  logoText: "ZA",
  tagline: "Codes, Weapons & Guides",
  description: "Zombie Arena Wiki provides complete guides, weapon information, gameplay tips, codes, updates, and strategies to help players survive zombie battles.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zombie-arena.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zombie-arena.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/87272926249681/Zombie-Arena",
  heroVideoId: "lNW7pyyLpZs", // ROBLOX SURVIVE ZOMBIE ARENA.. gameplay
  social: {
    youtube: "https://www.youtube.com/watch?v=lNW7pyyLpZs",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
