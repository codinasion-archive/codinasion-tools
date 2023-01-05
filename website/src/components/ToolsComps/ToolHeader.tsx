import React from "react";
import { headerProp } from "src/Objs&Interfaces/Interface";

function ToolHeader({ title, subTitle }: headerProp) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <hr />
      <p>{subTitle}</p>
    </div>
  );
}

export default ToolHeader;
