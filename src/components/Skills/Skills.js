/* eslint-disable */
import { AiFillHtml5 } from 'react-icons/ai';
import { DiReact, DiRuby } from 'react-icons/di';
import { SiJavascript, SiRubyonrails, SiPostgresql } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import { IoLogoNodejs } from 'react-icons/io';
import { Row, Col, Tab, Nav } from "react-bootstrap";
import './skills.css'

const Skills = () => {
  return(
    <section className="skills_section">
      <div className="skills_banner">
        <h2>Skills</h2>
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
                  <p>React</p>
                </Col>
                <Col>
                  <SiRubyonrails />
                </Col>
                <Col>
                  <IoLogoNodejs />
                </Col>
                <Col>
                  <SiPostgresql />
                </Col>
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              <Row>
                <Col>
                  <DiRuby />
                </Col>
                <Col>
                  <SiRubyonrails />
                </Col>
                <Col>
                  <IoLogoNodejs />
                </Col>
                <Col>
                  <SiPostgresql />
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