import React from "react";
import { Container } from "react-bootstrap";
import "../styles/home.css";
import cover1 from "../images/hero-pattern-bg.png";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import SelectionTools from "../components/SectionTools.jsx";
import Projects from "../components/Projects.jsx";
import Footer from "../components/Footer.jsx";
import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <Container className="app">
      <div className="capa1">
        <img className="cover" src={cover1} alt="cover1" />
      </div>
      <header>
        <Navbar />
        <Main />
      </header>
      <section>
        <AboutMe />
        <SelectionTools />
        <Projects />
      </section>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default Home;
