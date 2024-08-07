import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", margin: "20px" }}>
      <Card.Body style={{ padding: "20px" }}>
        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "1rem", marginBottom: "20px" }}>
          {props.description}
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ display: "flex", alignItems: "center" }}>
            <BsGithub style={{ marginRight: "5px" }} /> 
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

