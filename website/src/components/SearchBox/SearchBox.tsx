import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchCard from "./SearchCard";
import { TheContext } from "src/Context/Context";
import { categoryFun, categoryFunIII } from "src/CommonFun/cF";

interface searchBoxProp {
  close: (e: boolean) => void;
}
function SearchBox({ close }: searchBoxProp) {
  const searchRef = useRef<string>();
  const context = useContext(TheContext);
  const [filteredData, setFilter] = useState<string[]>([]);
  const [filteredDataByCat, setFilterByCat] = useState<string[]>([]);

  const handleChange = (e: any) => {
    searchRef.current = e.target.value;
    context.toolsData.apiStatus &&
      categoryFun(
        context.toolsData.apiData,
        searchRef.current === undefined ? "" : searchRef.current
      ).then((item: any) => {
        setFilterByCat(item);
      });
    context.toolsData.apiStatus &&
      categoryFunIII(
        context.toolsData.apiData,
        searchRef.current === undefined ? "" : searchRef.current
      ).then((item: any) => {
        setFilter(item);
      });
  };

  return (
    <div
      className="w-full h-screen z-50 p-3 pt-6 fixed top-0 dark:bg-black/50 bg-white/50 backdrop-blur-lg"
      id="searchBoxComp"
    >
      <div className="space-y-3 bg-very-light-blue dark:bg-dark-blue rounded-2xl min-h-[500px] shadow-lg p-2 relative mx-auto max-w-[800px] mt-16 sm:mt-32 ">
        <form
          className="w-full shadow-lg rounded-xl relative overflow-hidden"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="search"
            placeholder="Search Tools..."
            className="w-full col-span-7 p-3 sm:p-4 rounded-xl"
            autoFocus
            value={searchRef.current}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            className="absolute right-0 top-0 h-full px-3 dark:text-white"
            onClick={() => close(false)}
          >
            <span className="p-2 shadow-black/10 rounded-lg shadow-lg bg-very-light-blue dark:bg-very-dark-blue ">
              Close
            </span>
          </button>
        </form>
        <hr className="border-black/20 opacity-50" />
        <div className="space-y-3 text-black dark:text-white max-h-[70vh] overflow-auto">
          <h2 className="pl-2">
            Total match{" "}
            <span>{filteredData.length + filteredDataByCat.length}</span>
          </h2>
          <hr className="border-black/20 dark:border-white/50 opacity-50" />
        </div>
        <div className="  text-white h-[60vh] overflow-auto">
          {filteredData.map((item: any) => (
            <SearchCard
              key={Math.random() * 50 + "filtredData"}
              title={item.title}
              description={item.description}
              tags={[]}
              url={`/tools/${item.slug}`}
              views={item.views}
              status={close}
            />
          ))}
          {filteredData.length > 0 && <hr className="" />}
          {filteredDataByCat.length > 0 && (
            <span className="p-2 py-3 block text-black dark:text-white">
              Based on Category
            </span>
          )}
          {filteredDataByCat.length > 0 && (
            <hr className="border-black dark:border-white" />
          )}
          {filteredDataByCat.map((item: any) => (
            <SearchCard
              key={Math.random() * 50 + "filtredData"}
              title={item.title}
              description={item.description}
              tags={item.category}
              url={`/tools/${item.slug}`}
              views={item.views}
              status={close}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
