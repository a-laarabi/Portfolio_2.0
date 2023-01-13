import { Container, Row } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './about.css';

const About = () => (
  <Container className="about_me">
    <Row className="about_meBody">
      <h2>About me</h2>
      <p>
        <FaQuoteLeft className="quote" />
        {' '}
        I am Anasse Laarabi a full-stack web developer with a passion for building intuitive and visually stunning applications. I have a strong foundation in front-end and back-end technologies and enjoy collaborating with cross-functional teams to bring projects from concept to deployment.
        Experience includes coding, troubleshooting, and testing for my own personal projects while at Microverse. Whether I&apos;m working on a small website or a large web-based application, I am always striving to create the best possible user experience.
        {' '}
        <FaQuoteRight className="quote" />
      </p>
    </Row>
  </Container>
);

export default About;
