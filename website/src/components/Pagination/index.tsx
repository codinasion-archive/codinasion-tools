import { useRouter } from "next/router";
import React, { useRef, useMemo } from "react";

function Pagination() {
  const router = useRouter();
  const pageRef = useRef<number>(1);
  const lastPage: number = 8;
  if (Number(router.query.page) <= lastPage && Number(router.query.page) >= 1) {
    pageRef.current = Number(router.query.page);
  }

  let pagesNo: number[] =
    pageRef.current < lastPage - 2
      ? [pageRef.current, pageRef.current + 1, pageRef.current + 2]
      : [lastPage - 2, lastPage - 1, lastPage];
  const pageMemo = useMemo(
    () =>
      pagesNo.map((item) => (
        <button
          key={Math.random() * 5000}
          onClick={() => {
            pageRef.current =
              pageRef.current > 1 || pageRef.current < lastPage
                ? item
                : pageRef.current;
            router.push(`/tools?page=${pageRef.current}`);
          }}
          style={{
            boxShadow:
              item === pageRef.current
                ? "0px 2px 3px gray"
                : "0px 0px 0px gray",
          }}
          className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10 disabled:opacity-50"
        >
          {item}
        </button>
      )),
    [pageRef]
  );
  return (
    <div className="flex items-center justify-center gap-2 dark:text-white">
      <button
        onClick={() => {
          pageRef.current =
            pageRef.current > 1 ? pageRef.current - 1 : pageRef.current;
          router.push(`/tools?page=${pageRef.current}`);
        }}
        disabled={pageRef.current <= 1 ? true : false}
        className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10 disabled:opacity-50"
      >
        Prev
      </button>
      {pageRef.current > 1 && (
        <span className="p-2 px-4 rounded-lg text-very-dark-blue dark:text-white">
          ...
        </span>
      )}
      <>{pageMemo}</>
      {pageRef.current < lastPage && (
        <span className="p-2 px-4 rounded-lg text-very-dark-blue dark:text-white">
          ...
        </span>
      )}
      <button
        onClick={() => {
          pageRef.current =
            pageRef.current < lastPage ? pageRef.current + 1 : pageRef.current;
          router.push(`/tools?page=${pageRef.current}`);
        }}
        disabled={pageRef.current >= lastPage ? true : false}
        className="p-2 px-4 border rounded-lg hover:opacity-70 bg-very-light-blue dark:bg-dark-blue dark:border-dark-blue/10 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
