// About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import FirestoreData from "./FirestoreData"; // Importar el nuevo componente
import YouTubeSearch from "./YouTubeSearch"; // Importa el componente YouTubeSearch

function About() {
 // Lista de IDs de video que deseas mostrar
 const videoIds = ['DWRj2BB8YHs', 'xGI3ky4kLwE', 'rCF04QhiQ48','mFZf4KcsV7I','fPyAklAUknM','i7JCQ5Ejt5o','bvs-W9fUMjA','DG1ulm4Ozt8','ehIm7sCUAVg','eojVCfXMMH4'];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Conoce quién <strong className="purple">SOY</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Conjunto de habilidades <strong className="purple">Profesionales </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que utilizo
        </h1>
        <Toolstack />

        {/* Aquí se pone el componente para obtener datos de Firestore */}
        <FirestoreData />

         {/* Aquí se pone el componente para obtener datos de YouTube */}
         <YouTubeSearch videoIds={videoIds} />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
