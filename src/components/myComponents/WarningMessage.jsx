import React, { useState } from "react";
import MyTooltip from "./MyTooltip";

function WarningMessage({ className, children = null }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div
      className={`${className} bg-primary-red/30 rounded-lg text-sm py-2 px-4
        cursor-pointer ${readMore ? "" : " truncate"}`}
      onClick={() => setReadMore((prev) => !prev)}
    >
      <MyTooltip text="Read more">{children}</MyTooltip>
    </div>
  );
}

export default WarningMessage;
