import React, { useEffect, useRef } from "react";

function SimpleDate({ date }: any) {
  const dateRef = useRef<any>();
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    const last_updated: Date = new Date(date);
    dateRef.current = last_updated;
  }, [date]);

  return (
    <>
      {dateRef.current !== undefined && (
        <div className="w-full p-2 items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
          <h3 className="text-xl font-medium tran">Last published</h3>
          <p className="p-1 py-2">
            {dateRef.current.getDate()} {months[dateRef.current.getMonth()]}{" "}
            {dateRef.current.getFullYear()}
          </p>
        </div>
      )}
    </>
  );
}

export default SimpleDate;
