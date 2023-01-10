import React from "react";
import ReactMarkdown from "react-markdown";
import Clipboards from "../Clipboards/Clipboards";

interface ToolDocsProp {
  markdown: string;
  lang: string;
}
function ToolDocs({ markdown, lang }: ToolDocsProp) {
  return (
    <>
      <div className="p-3 rounded-xl mt-5 shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
        <h2 className="text-2xl font-medium py-3">Code</h2>
        <hr />
        <div className="relative">
          <Clipboards
            clipText={markdown}
            cssStyle={"p-2 absolute top-0 right-0 rounded-full z-10"}
          />
          <pre className="mt-5 overflow-auto py-2">
            <code className="tracking-wider">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </code>
          </pre>
        </div>
      </div>
      {lang !== "shell" && (
        <div className="py-5">
          <h2 className="text-2xl font-medium py-3">Installation</h2>
          <hr />
          <div className="mt-3">
            <div className="p-3 mt-5 rounded-xl shadow-xl dark:shadow-dark-blue bg-white dark:bg-black relative">
              <Clipboards
                clipText={
                  lang === "python"
                    ? "pip install codinasion-tools"
                    : "npm install codinasion-tools"
                }
                cssStyle={"p-2 absolute top-2 right-2 rounded-full"}
              />
              <code className="tracking-wider">
                {lang == "python"
                  ? "pip install codinasion-tools"
                  : "npm install codinasion-tools"}
              </code>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ToolDocs;
