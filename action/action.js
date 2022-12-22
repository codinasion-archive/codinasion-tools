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

    const CONVERT_DATA = await core.getInput("CONVERT_DATA");

    if (CONVERT_DATA === "true") {
      await convertDocs(OWNER, REPO, TOKEN);
    }

    // end of main function
  } catch (e) {
    core.setFailed(`Action failed with "${e.message}"`);
  }
})();
