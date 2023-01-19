/* eslint-disable */
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload, AiOutlineMedium } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { TbBrandGithub } from 'react-icons/tb';

import myPic from '../../assets/img/summaryProfile.png';
import resume from '../../assets/Resume.pdf';
import './summary.css';

function Summary() {
  return (
    <section className="summary" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="def">
            <h1>Hi! I&apos;m Anasse a Web Developer</h1>
            <p>I&apos;m an ex Marketer who fell in love with web development</p>

            <Row className="socialMedia">
              <a className="col-2 col-md-1 media" href="https://github.com/a-laarabi"><TbBrandGithub /></a>
              <a className="col-2 col-md-1 media" href="https://www.linkedin.com/in/a-laarabi/"><GrLinkedinOption /></a>
              <a className="col-2 col-md-1 media" href="https://medium.com/@a.laarabi"><AiOutlineMedium /></a>
              <a className="col-2 col-md-1 media" href="https://angel.co/u/a-laarabi"><FaAngellist /></a>
            </Row>

            <Row className="align-items-center headerContact">
              <Col xs={12} md={6}>
                <a className="btn line-btn-dark btn-icon btn-radius" href={resume} download>
                  <AiOutlineDownload />
                  {' '}
                  Resume
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a className="btn line-btn-dark btn-icon btn-radius" href="#contact">
                  Let&apos;s connect
                  {' '}
                  <BsArrowRightCircle />
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="intro">
            <div className="profile">
              <img className="myPic" src={myPic} alt="profile" />
              <div className="hWorld">
                <p>
                  HELLO
                  <br />
                  WORLD!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Summary;
