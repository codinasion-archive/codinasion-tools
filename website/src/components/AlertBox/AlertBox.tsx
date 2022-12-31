import React from "react";
import { MdClose } from "react-icons/md";

interface alertType {
  title: string;
  message: string;
}
interface alertProp {
  alertData: alertType;
  close: (e: alertProp|null) => void;
}

function AlertBox({ close, alertData }: alertProp) {
  return (
    <div className="fixed top-0 w-full h-screen z-30 bg-black/50 backdrop-blur-lg flex justify-center items-center">
      <div className="border min-w-300px p-5 max-w-[500px] grid text-center dark:text-white bg-very-light-blue dark:bg-very-dark-blue items-center relative rounded-xl">
        <div className="mt-5 space-y-3">
          <h2 className="text-2xl font-bold !text-capitalize">
            {alertData.title}
          </h2>
          <hr />
          <p>{alertData.message}</p>
        </div>
        <button
          className="absolute right-0 top-0 p-3 text-2xl hover:scale-110"
          onClick={() => close(null)}
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
}

export default AlertBox;
