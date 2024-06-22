import React from "react";
import Card from "react-bootstrap/Card"; // Tarjeta
import { ImPointRight } from "react-icons/im"; // Icono de punto

function AboutCard() {
  return (
    <Card className="quote-card-view"> {/* Vista de tarjeta de cita */}
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Javier Salazar </span> 
            de <span className="purple"> San Ignacio Río Muerto.</span> 
            <br />
            Actualmente soy estudiante en la Universidad Tecnológica del Sur de Sonora. 
            <br />
          </p>
         

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
