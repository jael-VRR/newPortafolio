import React from "react";
import {Container} from "react-bootstrap";
import "../styles/home.css";
import cover1 from "../images/hero-pattern-bg.png"
import Navbar from "../components/Navbar";
import Main from "../components/Main";


function Home() {
  return (
    <Container className="app">
      <div className="capa1">
        <img src={cover1} alt="cover1"/>
      </div>
      <Navbar/>
      <Main/>
      <footer></footer>
    </Container>
  );
}

export default Home;
