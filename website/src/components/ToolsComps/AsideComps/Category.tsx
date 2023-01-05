import React from "react";
import Box from "../../Box";

interface keywordsProp {
  title: string;
  keywords: string[];
  setCategory: (e: string) => void;
  category: string | null;
}
[];

function Category({ keywords, title, category, setCategory }: keywordsProp) {
  return (
    <Box>
      <h2 className="text-xl font-medium  py-3">{title}</h2>
      <hr />
      <div className="flex flex-wrap gap-2 mt-5 max-h-[500px] overflow-auto">
        {keywords.map((item: any) => (
          <div key={Math.random() * 50 + "cat"}>
            <button
              className="hover:opacity-75 p-[2px] px-3 rounded-full bg-very-light-blue dark:!text-very-dark-blue"
              style={{
                background: category == item.title ? "gold" : "#DADEEA",
              }}
              onClick={() => {
                setCategory(item.title);
                localStorage.category = item.title;
              }}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default Category;
