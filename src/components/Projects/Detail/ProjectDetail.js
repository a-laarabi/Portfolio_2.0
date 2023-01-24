import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillBackward, AiOutlineCode, AiOutlineEye } from 'react-icons/ai';
import projectsObj from '../../../assets/projectsObj';
import './projectdetail.css';

function ProjectDetail() {
  const { title } = useParams();
  const project = projectsObj.find((project) => project.title === title);

  return (
    <div className="project_detail">
      <div className="detailHeader" style={{ background: `url("${project.backImg}") no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Link className="goBack" to="/"><AiFillBackward /></Link>
        <h1>{project.title}</h1>
      </div>
      {/* <img src={project.img} alt={project.title} /> */}
      {/* <h1>{project.title}</h1> */}
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img className="phoneImg" src={project.PhoneImg} alt={project.title} />
          </Col>
          <Col xs={12} md={6}>
            <div className="info">
              <ul key={project.id}>
                <li>
                  {project.projectDetailSecond}
                </li>
                <li>
                  BUILD DATE:
                  {' '}
                  {project.projectDate}
                </li>
                <li className="builtWith">
                  BUILT WITH
                  {' '}
                  {
                  project.languages.map((language) => (<span key={language}>{language}</span>))
                  }
                </li>
                <li>
                  DESCRIPTION:
                  {' '}
                  {project.description}
                </li>
              </ul>
            </div>
            <Row>
              <Col>
                <a className="btn" href={project.deployLink} target="_blank" rel="noreferrer">
                  See Live
                  {'  '}
                  <AiOutlineEye />
                </a>
              </Col>
              <Col>
                <a className="btn" href={project.githubLink} target="_blank" rel="noreferrer">
                  See Source
                  {'  '}
                  <AiOutlineCode />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <img src={project.tabImg} alt={project.title} />
      </Container>
    </div>

  );
}

export default ProjectDetail;
