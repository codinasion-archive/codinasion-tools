import { getServerSideSitemapIndex } from "next-sitemap";
import { GetServerSideProps } from "next";
import siteMetaData from "@/data/siteMetaData";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allToolsData = await fetch(`${siteMetaData.backendUrl}/tools-data/`, {
    method: "GET",
  })
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allToolsData.map((tool: any) => {
    sitemapData.push(`${siteMetaData.siteUrl}/tools-data/${tool.slug}`);
  });

  return getServerSideSitemapIndex(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function ToolsSitemap() {}
