import React from "react";
import "./layout.css";

const Album = () => {
  return (
    <div className="cssAlbum">
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btnCss">External CSS Album link</button>
      </a>
    </div>
  );
};

export default Album;
