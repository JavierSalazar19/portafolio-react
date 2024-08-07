import React from "react";
import Card from "react-bootstrap/Card"; // Tarjeta
import miImagen from "../../Assets/Familia.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ margin: '0 auto', alignItems:'center' }}>
      <Card.Body>
        <Row>
          <Col md={6}>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Mayor parte de ella vive en CD Obregon; son muy pocos en EEUU y San Ignacio Río Muerto. 
                <br></br>
                <br></br>
                Toda mi vida de estudios he estado viviendo aquí en mi hogar donde principalmente vienen todos a pasar sus vacaciones, ya que mis dos abuelos tanto paternos como maternos viven aquí.   
                <br></br>
                <br />
                Me gusta mucho pasar tiempo de calidad con ellos, reír juntos y divertirnos❤️.
                <br />
              </p>
            </blockquote>
          </Col>
          <Col md={6}>
            <img
              src={miImagen}
              alt="San Ignacio"
              className="about-img"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
