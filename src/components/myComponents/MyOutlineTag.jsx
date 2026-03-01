import React from "react";

export default function MyOutlineTag({ text, color = "green" }) {
  return (
    <div
      className="border rounded-sm w-fit"
      style={{ border: `1px solid ${color}` }}
    >
      <p
        className="text-sm tracking-wide font-semibold px-4 py-1 capitalize"
        style={{ color: color }}
      >
        {text}
      </p>
    </div>
  );
}
