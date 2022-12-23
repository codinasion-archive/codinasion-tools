import fetch from "node-fetch";

import fs from "fs";

import dateFns from "date-fns";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import sleep from "./sleep.js";

export default async function convertDocs(OWNER, REPO, TOKEN) {
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

      // latest update (later)
      // contributors (later)

      let data = {
        package: matterResult.data.package ? matterResult.data.package : [],
        title: matterResult.data.title ? matterResult.data.title : jsonFileName,
        description: matterResult.data.description
          ? matterResult.data.description
          : "",
        slug: matterResult.data.slug ? matterResult.data.slug : jsonFileName,
        function: matterResult.data.function ? matterResult.data.function : "",
        category: matterResult.data.category ? matterResult.data.category : [],
        contentHtml,
        markdown: matterResult.content,
        contributors: [],
        latestUpdate: "",
      };

      await fs.promises.writeFile(
        `${docsDir}/${jsonFileName}.json`,
        JSON.stringify(data, null, 2)
      );

      await console.log(`Created ${jsonFileName}.json`);

      // sleep for 5 seconds to avoid github api rate limit
      await sleep(5000);
    }
  }
}
