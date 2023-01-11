/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://tools.codinasion.org",
  generateRobotsTxt: true,
  exclude: ["/tools/**", "/tools-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${
        process.env.SITE_URL || "https://tools.codinasion.org"
      }/tools-sitemap.xml`,
    ],
  },
};

module.exports = config;
