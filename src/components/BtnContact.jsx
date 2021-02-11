import React from "react";
import "../styles/btn.css";

function BtnContact() {
  return (
    <div className="btn">
      <button className="button-main">
        <a
          href="https://drive.google.com/file/d/11azypBy1lPKw4ZzdWhGc793nOVDDImy2/view?usp=sharing"
          download="cv-jael-rr"
        >
          Download cv!
        </a>
      </button>
    </div>
  );
}

export default BtnContact;
