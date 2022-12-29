import core from "@actions/core";

import convertDocs from "./convertDocs.js";

// main action function
(async () => {
  try {
    console.log("Starting action...");

    // get action data
    const OWNER = await core.getInput("OWNER");
    const REPO = await core.getInput("REPO");
    const TOKEN = await core.getInput("TOKEN");

    const BACKEND_URL = await core.getInput("BACKEND_URL");
    const BACKEND_ACCESS_TOKEN = await core.getInput("BACKEND_ACCESS_TOKEN");

    const CONVERT_DATA = await core.getInput("CONVERT_DATA");

    if (CONVERT_DATA === "true") {
      await convertDocs(OWNER, REPO, TOKEN, BACKEND_URL, BACKEND_ACCESS_TOKEN);
    }

    // end of main function
  } catch (e) {
    core.setFailed(`Action failed with "${e.message}"`);
  }
})();
