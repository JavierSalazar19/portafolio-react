import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            𝘜𝘯 𝘱𝘰𝘤𝘰 𝘴𝘰𝘣𝘳𝘦 𝘮𝘪
            </h1>
            <p className="home-about-body">
               Soy una persona de grandes aspiraciones de 21 años de edad.
              <br />
              <br />Tengo algunos hobbies como: 
              
                  Jugar fútbol, ir al GYM, y aprender sobre tecnología.
              
              <br />
              <br />
              Me interesa mucho aprender sobre tecnología y conocer gente nueva que pueda aportarme algo positivo.
              También me gusta relacionarme con el emprendimiento.
              <br />
              <br />
             
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ʀᴇᴅᴇꜱ ꜱᴏᴄɪᴀʟᴇꜱ</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JavierSalazar19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/javiersalazar1909/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
