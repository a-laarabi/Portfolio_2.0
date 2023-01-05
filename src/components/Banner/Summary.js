import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import myPic from '../../assets/img/summaryProfile.png';
import resume from '../../assets/Resume.pdf';
import './summary.css';

function Summary() {
  return (
    <div className="summary">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h1>Hi! I&apos;m Anasse a Web Developer</h1>
            <span>I&apos;m an ex Marketer who fell in love with web development</span>
            <a className="btn line-btn-dark btn-icon btn-radius" href={resume} download>
              <AiOutlineDownload />
              {' '}
              Download My Resume
            </a>
          </Col>
          <Col xs={12} md={6}>
            <div className="profile">
              <img className="myPic" src={myPic} alt="profile" />
              <div className="hWorld">
                <p>
                  Hello
                  <br />
                  world!
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
