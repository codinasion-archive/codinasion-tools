import React from "react";
import Box from "../../Box";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

interface setAlertStateType {
  title: string;
  message: string;
  status: boolean
}
interface InstallPkgProp {
  alertData: setAlertStateType;
  setAlertState: (e: setAlertStateType) => void;
}
function InstallPkg({ setAlertState, alertData }: InstallPkgProp) {
  return (
    <Box>
      <h2 className="text-xl font-medium py-3">Open tools</h2>
      <hr />
      <p className="mt-5">
        Open tools is a npm/pip pkg. Open tools provide a hundreds of basic and
        advanced tools.
      </p>
      <Link
        href={
          "https://github.com/codinasion/open-tools/archive/refs/heads/master.zip"
        }
        target="_blank"
        download
        className="bg-very-dark-blue dark:bg-white dark:text-very-dark-blue dark:hover:bg-very-dark-blue hover:text-very-dark-blue hover:bg-white border-2 dark:hover:text-white flex items-center justify-center gap-2 text-white p-2 mt-3 text-center text-xl rounded-xl"
        onClick={(e) => {
          e.preventDefault;
          setAlertState({
            title: alertData.title,
            message: alertData.message,
            status: alertData.status
          });
        }}
      >
        <MdDownload />
        Download Repo
      </Link>
    </Box>
  );
}

export default InstallPkg;
