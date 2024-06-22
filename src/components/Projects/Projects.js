import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCards from './ProjectCards';  // Ajusta la ruta según tu estructura

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = 'JavierSalazar19';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching the repos:', error);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div>
       <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
       <h1 className="project-heading" style={{ marginTop: "50px" }}>
          Mis <strong className="purple">Trabajos</strong> Recientes
        </h1>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {repos.map(repo => (
          <Col md={4} className="project-card" key={repo.id}>
            <ProjectCards
             
              title={repo.name}
            
              ghLink={repo.html_url}
            />
           
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
