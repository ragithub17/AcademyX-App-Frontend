import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span className="bg-gradient-to-b from-[#657375] via-[#00d9ff] to-[#f1f4f6] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
