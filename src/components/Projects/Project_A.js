/* eslint-disable */
import { Card, Col, Row } from 'react-bootstrap';
import { AiFillGithub } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";

function Project(props) {
  return (
      <Card className="text-white">
        <Card.Img src={props.img} alt={props.title} />
        
        <Card.ImgOverlay>
          {/* <div className="bg-dark"></div> */}
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Text>{props.projectDetailSecond}</Card.Text>
          <Row>
            <Col xs={6} md={3}>
              <a className="btn viewGit" href={props.githubLink}>
                See Source
                {'  '}
                <AiFillGithub />
              </a>
            </Col>
            <Col xs={6} md={3}>
              <a className="btn deploy" href={props.deployLink}>
                See Live
                {'  '}
                <GrDeploy />
              </a>
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
  );
}

export default Project;