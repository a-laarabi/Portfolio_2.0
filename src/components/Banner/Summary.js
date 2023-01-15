import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import myPic from '../../assets/img/summaryProfile.png';
import resume from '../../assets/Resume.pdf';
import './summary.css';

function Summary() {
  return (
    <div className="summary">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="def">
            <h1>Hi! I&apos;m Anasse a Web Developer</h1>
            <span>I&apos;m an ex Marketer who fell in love with web development</span>
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
    </div>
  );
}

export default Summary;
