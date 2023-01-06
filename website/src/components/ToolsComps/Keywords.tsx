import Box from "../Box";
import Link from "next/link";
import React from "react";

interface keywordsProp {
  keywords: string[];
}

function Keywords({ keywords }: keywordsProp) {
  return (
    <Box>
      <h2 className="text-xl font-medium  py-3">Keywords</h2>
      <hr />
      <div className="flex flex-wrap gap-2 mt-5">
        {keywords.map((item: any) => (
          <div key={Math.random() * 50 + "cat"}>
            <span
              className="hover:opacity-75 p-[2px] px-3 rounded-full bg-very-light-blue dark:!text-very-dark-blue"
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default Keywords;
