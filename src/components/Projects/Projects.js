import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <div className="container">
      <Row className="justify-content-center" style={{ paddingTop: '50px' }}>
        <h1 className="project-heading" style={{ marginTop: '50px' }}>
          Mis Trabajos Recientes
        </h1>
      </Row>
      <Row className="justify-content-center" style={{ paddingBottom: '10px' }}>
        {repos.map(repo => (
          <Col xs={12} sm={6} md={4} lg={3} key={repo.id} className="d-flex justify-content-center">
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '40px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                padding: '20px',
                textAlign: 'center',
                background: '#405641',
                transition: 'transform 0.2s ease-in-out',
                width: '100%',
                maxWidth: '300px',
              }}
              className="project-card"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{repo.name}</h3>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  backgroundColor: '#28a745',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  marginTop: '10px',
                }}
              >
                Ver en GitHub
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
