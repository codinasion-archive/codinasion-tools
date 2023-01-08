import Link from "next/link";
import React from "react";
import { GoIssueOpened } from "react-icons/go";

function Issue() {
  return (
    <div className="border p-3 rounded-2xl space-y-2 bg-gradient-to-tr from-white via-very-light-blue to-very-light-blue dark:from-very-dark-blue dark:via-dark-blue dark:to-dark-blue">
      <h2 className="pb-1 text-xl font-semibold">Create a new Issue</h2>
      <hr />
      <p>
        {`Please, create an issue if you found something misleading, incorrect information, error in running code or if you have a suggestion for us, create an issue and we'll try to solve that issue as soon as possible.`}
      </p>

      <Link
        href={"https://github.com/codinasion/codinasion-tools/issues/new"}
        className="bg-very-dark-blue text-white text-left w-full rounded-xl p-5 py-2 flex justify-between items-center"
        target={"_blank"}
        aria-label="Create a new Issue"
      >
        Issue
        <GoIssueOpened />
      </Link>
    </div>
  );
}

export default Issue;
