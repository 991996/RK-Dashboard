import React from "react";

export default function MyTag({ text, color = "bg-green-500" }) {
  return (
    <div className={`${color} rounded-sm w-fit`}>
      <p className="text-white text-sm tracking-wide font-semibold px-4 py-1">
        {text}
      </p>
    </div>
  );
}
