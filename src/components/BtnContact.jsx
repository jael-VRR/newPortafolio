import React from "react";
import { Button } from "react-bootstrap";
import "../styles/btn.css";

function BtnContact() {
  return (
    <div className="btn">
      <Button>
        <a
          
          href="https://drive.google.com/file/d/11azypBy1lPKw4ZzdWhGc793nOVDDImy2/view?usp=sharing"
          download="cv-jael-rr"
        >
          Let's talk!
        </a>
      </Button>
    </div>
  );
}

export default BtnContact;
