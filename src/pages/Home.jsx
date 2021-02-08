import React from "react";
import { Container } from "react-bootstrap";
import "../styles/home.css";
import cover1 from "../images/hero-pattern-bg.png";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import SelectionTools from "../components/SectionTools.jsx";

function Home() {
  return (
    <Container className="app">
      <div className="capa1">
        <img  className="cover" src={cover1} alt="cover1" />
      </div>
      <header>
        <Navbar />
        <Main />
      </header>
      <section>
        <SelectionTools />
      </section>
      <div>
        <SelectionTools />
      </div>
      <div>
        <SelectionTools />
      </div>
      <div>
        <SelectionTools />
      </div>
      <div>
        <SelectionTools />
      </div>
      <div>
        <SelectionTools />
      </div>
    </Container>
  );
}

export default Home;
