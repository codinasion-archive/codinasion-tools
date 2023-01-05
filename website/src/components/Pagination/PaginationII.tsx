import React, { useEffect, useState } from "react";

interface paginationIIProp {
  toolsPage: number;
  toolsApi: number;
  setToolsPage: (e: number) => void;
}

function PaginationII({ toolsPage, setToolsPage, toolsApi }: paginationIIProp) {
  const [pagesArr, setPagesArr] = useState<number[]>([]);
  useEffect(() => {
    let pg = [];
    for (let i = 1; i < Math.round(toolsApi / 10) + 1; i++) pg.push(i);
    setPagesArr(pg);
  }, [toolsApi]);

  return (
    <div className="mx-auto w-fit flex gap-2 dark:text-white">
      <button
        onClick={() => {
          toolsPage > 1 && setToolsPage(toolsPage - 1);
          localStorage.setItem("page", (toolsPage - 1).toString());
        }}
        disabled={toolsPage <= 1 ? true : false}
        className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10 disabled:opacity-50"
      >
        Prev
      </button>
      <div className="flex gap-2">
        {pagesArr.map((item) => (
          <button
            className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10 disabled:opacity-50"
            key={Math.random() * 50 + "pageArr"}
            onClick={() => {
              setToolsPage(item);
              localStorage.setItem("page", item.toString());
            }}
            style={{
              boxShadow:
                toolsPage === item ? "0px 2px 3px gray" : "0px 0px 0px gray",
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10 disabled:opacity-50"
        onClick={() => {
          toolsPage < Math.round(toolsApi / 10) && setToolsPage(toolsPage + 1);
          localStorage.setItem("page", (toolsPage + 1).toString());
        }}
        disabled={toolsPage >= Math.round(toolsApi / 10) ? true : false}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationII;
