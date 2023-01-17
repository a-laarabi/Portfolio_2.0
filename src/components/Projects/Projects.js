import { Container } from 'react-bootstrap';
import projectsObj from '../../assets/projectsObj';
import Project from './Project_B';
import './project.css';

function Projects() {
  return (
    <section className="projects_section" id="project">
      <Container>
        <div className="projects">
          {
            projectsObj.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.img}
                description={project.description}
                projectDetailSecond={project.projectDetailSecond}
                githubLink={project.githubLink}
                deployLink={project.deployLink}
              />
            ))
          }
        </div>
      </Container>
    </section>
  );
}

export default Projects;
