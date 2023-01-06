import React from "react";
import ReactMarkdown from "react-markdown";

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
        <div className="mt-5  overflow-auto">
          <code className="tracking-wider">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </code>
        </div>
      </div>
      <div className="py-5">
        <h2 className="text-2xl font-medium py-3">Installation</h2>
        <hr />
        <div className="mt-3">
          <div className="p-3 mt-5 rounded-xl shadow-xl dark:shadow-dark-blue bg-white dark:bg-black">
            <code className="tracking-wider">
              {lang == "python" ? "pip install opentoolshub" : "npm install open-tools"}
            </code>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolDocs;
