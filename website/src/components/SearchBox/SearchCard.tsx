import Link from "next/link";
import React from "react";

interface searchCardProp {
  title: string;
  description: string;
  tags: string[];
  url: string;
  views: number;
  status: (e: boolean) => void;
}
[];
function SearchCard({
  title,
  views,
  description,
  tags,
  url,
  status,
}: searchCardProp) {
  return (
    <Link
      href={url}
      className="w-full border-black/10 border-b p-3 text-black dark:text-white block hover:opacity-70"
      onClick={(e) => {
        status(false);
      }}
    >
      <h2 className="text-xl">{title}</h2>
      <div className="opacity-50">
        <p>{description}</p>
        <span>Views: {views}</span>
        <div className="mt-2 flex gap-2 flex-wrap">
          {tags.map((item: any) => (
            <span
              key={Math.random() * 50 + "searchItem"}
              className="px-2 rounded-md bg-white dark:text-black"
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default SearchCard;
