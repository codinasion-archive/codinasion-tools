import React from "react";

function Loading() {
  return (
    <div className="w-full p-10 pt-16 md:pt-52 flex items-center justify-center gap-4">
      <span className="w-5 aspect-square bg-very-dark-blue border-t-transparent  rounded-full animate-ping"></span>
      <span className="w-5 aspect-square bg-very-dark-blue border-t-transparent  rounded-full animate-ping"></span>
      <span className="w-5 aspect-square bg-very-dark-blue border-t-transparent  rounded-full animate-ping"></span>
    </div>
  );
}

export default Loading;
