import Link from "next/link";
import React from "react";
import Box from "../../Box";

interface keywordsProp {
  title: string;
  keywords: string[];
}
[];

function TopToolsKeywords({keywords, title}:keywordsProp) {
  return (
    <Box>
      <h2 className="text-xl font-medium py-3">{title}</h2>
      <hr />
      <div className="space-y-2 mt-5">
        {keywords.slice(0, 5).map((item: any) => (
          <div key={Math.random() * 50 + "cat"}>
            <Link
              href={`/tools/${item.slug}`}
              className="hover:opacity-75 p-[2px] px-3 rounded-full bg-very-light-blue dark:!text-very-dark-blue block w-full"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default TopToolsKeywords;
