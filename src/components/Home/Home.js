import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type"; // Tipo

// Importa la imagen desde la carpeta Assets
import yoImagen from "../../Assets/Yo.jpg"; // Asegúrate de que la ruta es correcta

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              𝙎𝙤𝙮 𝙅𝙖𝙫𝙞𝙚𝙧 𝘼𝙡𝙤𝙣𝙨𝙤 𝙮 𝙚𝙨𝙩𝙖 𝙚𝙨 𝙢𝙞 𝙥á𝙜𝙞𝙣𝙖 𝙬𝙚𝙗.{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  {/* Aquí podrías añadir un ícono o una imagen en el futuro */}
                </span>
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={yoImagen} // Usa la imagen importada
              alt="Descripción de la imagen" // Agrega una descripción para accesibilidad
              style={{
                width: "100%", // Ajusta el tamaño de la imagen
                height: "auto", // Mantiene la proporción original
                border: "5px solid #000000", // Borde sólido de 5 píxeles de grosor y color azul
                borderRadius: "15px", // Bordes redondeados con un radio de 15 píxeles
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Sombra con 4 píxeles de desplazamiento vertical y 8 píxeles de difuminado
                transition: "all 0.3s ease" // Transición suave para cambios de estilo
              }}
            />
          </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
