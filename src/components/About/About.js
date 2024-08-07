// About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import FirestoreData from "./FirestoreData"; // Importar el nuevo componente
import YouTubeSearch from "./YouTubeSearch"; // Importa el componente YouTubeSearch

function About() {
 // Lista de IDs de video que deseas mostrar
 const videoIds = ['DWRj2BB8YHs', 'xGI3ky4kLwE', 'rCF04QhiQ48','mFZf4KcsV7I','fPyAklAUknM','i7JCQ5Ejt5o','bvs-W9fUMjA','DG1ulm4Ozt8','ehIm7sCUAVg','eojVCfXMMH4'];

  return (
    <Container fluid className="about-section">
     
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Mi familia
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        {/* Aquí se pone el componente para obtener datos de Firestore */}
        <FirestoreData />

         {/* Aquí se pone el componente para obtener datos de YouTube */}
         <YouTubeSearch videoIds={videoIds} />
      </Container>
    </Container>
  );
}

export default About;

