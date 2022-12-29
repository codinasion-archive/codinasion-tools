import fetch from "node-fetch";

import fs from "fs";

import dateFns from "date-fns";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import sleep from "./sleep.js";

export default async function convertDocs(
  OWNER,
  REPO,
  TOKEN,
  BACKEND_URL,
  BACKEND_ACCESS_TOKEN
) {
  const docsDir = "docs-data";
  await fs.promises.mkdir(docsDir, { recursive: true });

  const pathsData = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/master?recursive=1`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.tree)
    .catch((error) => {
      console.log(error);
    });

  for (const filePath of pathsData) {
    if (
      filePath.path.startsWith("docs/") &&
      filePath.path.endsWith("README.md") &&
      filePath.path !== "docs/README.md" &&
      !filePath.path.endsWith(".png") &&
      !filePath.path.endsWith(".jpg") &&
      !filePath.path.endsWith(".jpeg") &&
      !filePath.path.endsWith(".gif") &&
      !filePath.path.endsWith(".svg")
    ) {
      await console.log(filePath.path);
      let path = filePath.path.replace("docs/", "");
      let jsonFileName = path.split("/")[0];

      let readmeText = await fetch(
        `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/${filePath.path}`,

        {
          method: "GET",
          headers: {
            Authorization: `token ${TOKEN}`,
          },
        }
      )
        .then((res) => res.text())
        .catch((error) => console.log(error));

      let matterResult = matter(readmeText);
      let processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      let contentHtml = processedContent.toString();

      const packages = [];
      for (let item of matterResult.data.package) {
        packages.push({
          title: item,
        });
      }

      const categories = [];
      for (let item of matterResult.data.category) {
        categories.push({
          title: item,
        });
      }

      // last updated (later)
      let last_updated = dateFns.format(new Date(), "yyyy-MM-dd");
      // contributors (later)
      let contributors = [
        {
          username: "johndoe",
        },
      ];

      let data = {
        package: packages,
        title: matterResult.data.title ? matterResult.data.title : jsonFileName,
        description: matterResult.data.description
          ? matterResult.data.description
          : "",
        slug: matterResult.data.slug ? matterResult.data.slug : jsonFileName,
        function: matterResult.data.function ? matterResult.data.function : "",
        category: categories,
        contentHtml,
        markdown: matterResult.content,
        contributors: contributors,
        last_updated: last_updated,
      };

      await fs.promises.writeFile(
        `${docsDir}/${jsonFileName}.json`,
        JSON.stringify(data, null, 2)
      );

      await console.log(`Created ${jsonFileName}.json`);

      await console.log("Sending tool data to backend...");
      await fetch(`${BACKEND_URL}/tools-data/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${BACKEND_ACCESS_TOKEN}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));

      // sleep for 5 seconds to avoid github api rate limit
      await sleep(5000);
    }
  }
}
