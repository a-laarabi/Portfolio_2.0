/* eslint-disable */
import { AiFillHtml5 } from 'react-icons/ai';
import { DiReact, DiRuby } from 'react-icons/di';
import { SiJavascript, SiRubyonrails, SiPostgresql, SiVisualstudiocode } from 'react-icons/si';
import { FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { BsBootstrapFill, BsGithub } from 'react-icons/bs';
import { IoLogoNodejs } from 'react-icons/io';
import { Row, Col, Tab, Nav } from "react-bootstrap";
import './skills.css'

const Skills = () => {
  return(
    <section className="skills_section">
      <div className="skills_banner">
        <h2>Skills</h2>
        <p className="skillsP">Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux</p>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Front-End</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Back-End</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tools</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content id="slideInUp">
            <Tab.Pane eventKey="first">
              <Row>
                <Col>
                  <DiReact />
                  <p>React</p>
                </Col>
                <Col>
                  <SiJavascript />
                  <p>JavaScript</p>
                </Col>
                <Col>
                  <AiFillHtml5 />
                  <p>Html</p>
                </Col>
                <Col>
                  <FaCss3Alt />
                  <p>Css</p>
                </Col>
                <Col>
                  <BsBootstrapFill />
                  <p>Bootstrap</p>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <Row>
                <Col className='text-center'>
                  <DiRuby />
                  <p>Ruby</p>
                </Col>
                <Col>
                  <SiRubyonrails />
                  <p>Ruby on Rails</p>
                </Col>
                <Col>
                  <IoLogoNodejs />
                  <p>Node.js</p>
                </Col>
                <Col>
                  <SiPostgresql />
                  <p>PostgreSQL</p>
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              <Row>
                <Col>
                  <FaGitAlt />
                  <p>Git</p>
                </Col>
                <Col>
                  <BsGithub />
                  <p>GitHub</p>
                </Col>
                <Col>
                  <SiVisualstudiocode />
                  <p>Visual Studio Code</p>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  )
}

export default Skills;