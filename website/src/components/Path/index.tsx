import Link from "next/link";
import React from "react";

interface pathProp {
  path: string;
  cssStyle?: string;
}

function index({ path, cssStyle }: pathProp) {
  let path_arr: string[] = path.split("/");
  const filtered_path: string[] = path_arr.filter((item) => {
    return item !== "" && item;
  });

  // return a path of given string
  function path_finder(arr: string[], pth: string) {
    let url: string = "";
    for (let i: number = 0; i < arr.indexOf(pth) + 1; i++) {
      url = url + "/" + arr[i];
    }
    return url;
  }

  return (
    <>
      <Link href={`/`} key={Math.random() * 50} className={cssStyle}>
        {"home"}
      </Link>
      {filtered_path.map((item) => (
        <Link
          href={`${path_finder(filtered_path, item)}`}
          key={Math.random() * 50}
          className={cssStyle}
        >
          /{item}
        </Link>
      ))}
    </>
  );
}

export default index;
