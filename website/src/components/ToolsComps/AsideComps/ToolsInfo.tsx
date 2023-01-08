import Box from "@/components/Box";
import Link from "next/link";
import SimpleDate from "./Date";

interface toolInfoProp {
  used: number;
  date: Date;
  version: string;
  license: string;
  UnpackedSize: string;
  totalFile: number;
  lang: string
}
function ToolInfo({
  used,
  date,
  version,
  license,
  UnpackedSize,
  totalFile,
  lang
}: toolInfoProp) {
  return (
    <Box>
      <h3 className="text-xl font-medium py-3">Repository</h3>
      <hr />
      <Link
        href={`${lang==='python'?'https://github.com/codinasion/codinasion-tools/tree/master/pip':"https://github.com/codinasion/codinasion-tools/tree/master/npm"}`}
        className={"font-light truncate block mt-2 max-w-[300px] "}
      >
        {lang==='python'?'https://github.com/codinasion/codinasion-tools/tree/master/pip':"https://github.com/codinasion/codinasion-tools/tree/master/npm"}
      </Link>
      <div className="space-y-5">
        <div className="mt-5">
          <h3 className="text-xl font-medium tran">Download</h3>
          <p className="border-b-[3px] p-1 py-2 border-very-light-blue relative dark:border-dark-blue after:w-[60%] after:border-[2px] after:border-dark-blue dark:after:border-very-light-blue/70 after:absolute after:left-0 after:-bottom-[3px]">
            {used}
          </p>
        </div>
        <div className="flex justify-between mt-5 gap-2">
          <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
            Version <span>{version}</span>
          </h3>
          <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
            License <span>{license}</span>
          </h3>
        </div>
        <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
          Unpacked Size <span>{UnpackedSize}</span>
        </h3>{" "}
        <h3 className="w-full p-2 flex justify-between items-center px-3 shadow-very-light-blue dark:shadow-dark-blue shadow-md rounded-xl">
          Total File <span>{totalFile}</span>
        </h3>{" "}
        <SimpleDate date={date} />
      </div>
    </Box>
  );
}

export default ToolInfo;
