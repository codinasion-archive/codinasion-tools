import Link from "next/link";
import React from "react";

function LiveEditor() {
  return (
    <div>
      <h3 className="text-xl font-medium  py-2">Try now</h3>
      <p className="opacity-90">Live editor</p>
      <div className="live editor goes here w-full mt-3 rounded-xl flex justify-center items-center">
        <iframe
          src="https://codesandbox.io/embed/convert-binary-to-decimal-by-open-tools-hl9hx1?file=/index.js?codemirror=1&highlights=5,12,13,14&fontsize=12&forcerefresh=1&view=split&autoresize&hidenavigation=1&hidedevtools=0"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          className="w-full rounded-xl h-[500px] border-2 shadow-2xl dark:shadow-dark-blue dark:border-dark-blue"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          title="Live editor by codesandbox"
        >
          <Link href={'https://codesandbox.io/'} target="_blank">codesandbox</Link>
        </iframe>
      </div>
    </div>
  );
}

export default LiveEditor;
