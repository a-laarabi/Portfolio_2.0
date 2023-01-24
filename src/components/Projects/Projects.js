/* eslint-disable */

import { Row, Container } from 'react-bootstrap';
import projectsObj from '../../assets/projectsObj';
import Project from './Project_B';
import './project.css';

function Projects() {
  return (
    <section className="projects_section" id="project">
      <Container>
        <div className="projects">
          {/* <Row>
            <Col>
              {
            projectsObj.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.homeImg}
                description={project.description}
                projectDetailSecond={project.projectDetailSecond}
                githubLink={project.githubLink}
                deployLink={project.deployLink}
              />
            ))
          }
            </Col>
          </Row> */}
          <Row>
          {
            projectsObj.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.homeImg}
                description={project.description}
                projectDetailSecond={project.projectDetailSecond}
                githubLink={project.githubLink}
                deployLink={project.deployLink}
              />
            ))
          }
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
