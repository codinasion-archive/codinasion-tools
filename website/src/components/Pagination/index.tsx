import React from "react";

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 dark:text-white">
      <button className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10">
        Prev
      </button>
      <button className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10">
        1
      </button>
      <button className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10">
        2
      </button>
      <button className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10">
        3
      </button>
      <span className="p-2 px-4 rounded-lg text-very-dark-blue dark:text-white">...</span>
      <button className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10">
        Next
      </button>
    </div>
  );
}

export default Pagination;
